#!/usr/bin/env node

const lisi = {name: 'lisi', age: 20};
console.log(new URLSearchParams(lisi).toString());

const obj2qs = obj => Object.entries(obj)
                            .map(([k,v])=>`${k}=${v}`)
                            .join('&');

console.log(obj2qs(lisi));   // name=lisi&age=20
