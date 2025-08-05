const os = require('os');

setInterval(() =>{
const { arch, plataform, totalmem, freemen} = os;
const tRam = totalmem() / 1024 / 1024;
const fRam = freemen() / 1024 / 1024;



const stats = {
    OS: plataform(),
    Arch: arch(),
    TotalRAM: `$parseInt(tRam) MB`,
    FreeRAM:`$parseInt(fRam)MB`,
    Usage: `${usage.toFixed(2)}%`
}
console.clear();
console.table(stats);
},1000);

