#!/usr/bin/env node

const obj = {};
obj.name = 'name';
obj.method = () => console.log('method');
Object.defineProperty(obj, 'num', {
  value: 21,
  enumerable: true
});
delete obj.name;
