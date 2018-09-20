require('env2')('./.env')
const Hapi = require('hapi')
const config = require('./config')
const routesHelloHapi = require('./routes/hello-hapi')
const orders = require('./routes/orders')
const shops = require('./routes/shop')
const users = require('./routes/users')

const pluginHapiSwagger = require('./plugins/hapi-swagger')

const hapiAuthJWT2 = require('hapi-auth-jwt2')
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2')

const server = new Hapi.Server();

server.connection({
  port: config.port,
  host: config.host
})

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ])

  await server.register([
    hapiAuthJWT2
  ])

  server.route([
    ...routesHelloHapi,
    ...orders,
    ...shops,
    ...users
  ]);

  pluginHapiAuthJWT2(server)
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
}

init()