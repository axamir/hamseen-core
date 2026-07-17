import test from 'node:test';import assert from 'node:assert/strict';
import {loadCommunityConfig,mergeConfig,validateConfig} from '../config.mjs';
test('assumed Lavizan defaults are internally consistent',()=>{const c=loadCommunityConfig();assert.equal(c.profile.status,'assumed');assert.equal(c.structure.expected_unit_count,336);assert.deepEqual(validateConfig(c),[])});
test('approved private override can replace defaults without changing the public file',()=>{const base=loadCommunityConfig();const c=mergeConfig(base,{profile:{status:'board-confirmed'},pilot:{initial_households:24}});assert.equal(c.profile.status,'board-confirmed');assert.equal(c.pilot.initial_households,24);assert.equal(base.pilot.initial_households,30)});
test('invalid structural totals are rejected',()=>{const c=mergeConfig(loadCommunityConfig(),{structure:{expected_unit_count:1}});assert.match(validateConfig(c).join(' '),/does not match/) });
