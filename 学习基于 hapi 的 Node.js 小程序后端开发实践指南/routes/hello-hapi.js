module.exports = [
  {
    method: 'GET',
    path:'/',
    handler: (request, reply) => {
      reply('hello hapi')
    },
    config: {
      tags: ['api', 'test'],
      description: '测试hello-hapi'
    }
  }
]