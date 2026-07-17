import { loadCommunityConfig } from './config.mjs';
const config=loadCommunityConfig(process.argv[2]);
console.log(JSON.stringify({valid:true,id:config.profile.id,status:config.profile.status,units:config.structure.expected_unit_count,warning:config.profile.warning_en},null,2));
