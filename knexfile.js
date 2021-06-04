const path = require('path');

const config = require('./src/Config/config');

module.exports = {
    client: config.client,
    connection: config.connection,
    migrations: {
        directory: path.resolve(__dirname, 'src','database', 'migrations')
    },
    useNullAsDefault: true,
};