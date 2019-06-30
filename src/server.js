const server = require('./app');
const constants = require('./config/constants');

server.listen(constants.PORT, () => {
    console.log(`Server is starting at port: ${constants.PORT}`);
});
