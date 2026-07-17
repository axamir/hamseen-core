import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const defaultsPath=fileURLToPath(new URL('../../config/lavizan.defaults.json',import.meta.url));
const object=x=>x&&typeof x==='object'&&!Array.isArray(x);
export function mergeConfig(base,override){
 if(!object(override))return structuredClone(base);
 const out=structuredClone(base);
 for(const [key,value] of Object.entries(override))out[key]=object(value)&&object(out[key])?mergeConfig(out[key],value):structuredClone(value);
 return out;
}
export function validateConfig(config){
 const errors=[];
 if(config.schema_version!==1)errors.push('schema_version must be 1');
 if(!config.profile?.id)errors.push('profile.id is required');
 if(!['assumed','board-confirmed'].includes(config.profile?.status))errors.push('profile.status must be assumed or board-confirmed');
 const s=config.structure||{};
 for(const field of ['floors_per_block','units_per_floor','expected_unit_count'])if(!Number.isInteger(s[field])||s[field]<1)errors.push(`structure.${field} must be a positive integer`);
 if(Array.isArray(s.blocks)&&s.expected_unit_count!==s.blocks.length*s.floors_per_block*s.units_per_floor)errors.push('structure.expected_unit_count does not match blocks × floors × units');
 if(!config.community?.timezone)errors.push('community.timezone is required');
 if(!Array.isArray(config.modules)||!config.modules.length)errors.push('modules must be a non-empty array');
 return errors;
}
export function loadCommunityConfig(path=process.env.HAMSEEN_CONFIG_PATH){
 const base=JSON.parse(readFileSync(defaultsPath,'utf8'));
 const config=path?mergeConfig(base,JSON.parse(readFileSync(path,'utf8'))):base;
 const errors=validateConfig(config);if(errors.length)throw new Error(`Invalid community config:\n- ${errors.join('\n- ')}`);
 return config;
}
