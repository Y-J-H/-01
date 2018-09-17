require('env2')('./.env')
const Hapi = require('hapi')
const config = require('./config')
const routesHelloHapi = require('./routes/hello-hapi')
const orders = require('./routes/orders')
const shop = require('./routes/shop')

const pluginHapiSwagger = require('./plugins/hapi-swagger')

const server = new Hapi.Server();

server.connection({
  port: config.port,
  host: config.host
})

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ])

  server.route([
    ...routesHelloHapi,
    ...orders,
    ...shop
  ]);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init()