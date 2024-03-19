const { Redis } = require('ioredis');

const client = new Redis("redis://default:29IS5TCw1pOEo250iS4wctecqcY32EzW@redis-11808.c10.us-east-1-2.ec2.cloud.redislabs.com:11808");

module.exports = client;