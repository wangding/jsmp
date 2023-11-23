#!/usr/bin/env node

const lisi = {name: 'lisi', age: 20};

iterable(lisi);
const qs = [...lisi].map(([k,v])=>`${k}=${v}`)
                    .join('&');
console.log(qs);   // name=lisi&age=20
/* ------------------------------------------------*/
function iterable(obj) {
  if(obj[Symbol.iterator]) return;
  obj[Symbol.iterator] = function* () {
    for(let k of Object.keys(obj)) yield [k, obj[k]];
  };
  return obj;
}
