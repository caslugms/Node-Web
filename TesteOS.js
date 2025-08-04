import os from 'os';

export function obterInfoSistema() {
    return{
    sistema: os.type(),
    plataforma: os.platform(),
    arquitetura: os.arch(),
    homeDir: os.homedir(),
    tempoAtivo: (os.uptime()/3600).toFixed(2) + " horas",
    CPU: os.cpus().length,
    TotalMemoria: os.totalmem(),
    Usuario: os.userInfo().username
    }
};

const fs = require('fs');

fs.appendFile('log.txt', (err) => {
    if(err) throw err;
    console.log(obterInfoSistema());
});