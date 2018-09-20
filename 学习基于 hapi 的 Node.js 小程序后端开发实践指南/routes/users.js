const JWT = require('jsonwebtoken')
const GROUP_NAME = 'users'

module.exports = [{
  method: 'POST',
  path: `/${GROUP_NAME}/createJWT`,
  handler: async(request, reply) => {
    const generateJWT = (jwtInfo) => {
      const payload = {
        userId: jwtInfo.userId,
        exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60
      };
      console.log(process.env.JWT_SECRET)
      return JWT.sign(payload, process.env.JWT_SECRET)
    };
    reply(generateJWT({
      userId: 1
    }))
  },
  config: {
    tags: ['api', GROUP_NAME],
    description: '用于测试的用户JWT签发',
    auth: false
  }
}]