import fs from 'fs';

let data=fs.readFileSync('./first_table.json','utf-8');

data=JSON.parse(data);
data.forEach(element=>{
    for(let [k,v] of Object.entries(element))
        console.log(k,v);
})

console.log(data[0]);

