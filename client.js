const { createClient } = require('redis');

const client = createClient({
    password: '29IS5TCw1pOEo250iS4wctecqcY32EzW',
    socket: {
        host: 'redis-11808.c10.us-east-1-2.ec2.cloud.redislabs.com',
        port: 11808
    }
}).connect();

module.exports = client;