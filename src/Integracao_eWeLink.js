const ewelink = require('ewelink-api');
var {credenciais} = require('./ConfiguracoesAcesso.js');

(async () => {
    const connection = new ewelink(credenciais);

    /* get all devices */
    var devices = await connection.getDevices();
    console.log(devices);

    console.log('----------------------------------');
    console.log('----------------------------------');
    console.log('----------------------------------');
    /* get specific devide info */
    const device = await connection.getDevice('1001184851');
    console.log(device);
})();

exports.alterarStatusLuz = async function(){
    const connection = new ewelink(credenciais);

    return await connection.toggleDevice('1001184851');
}

//https://github.com/skydiver/ewelink-api