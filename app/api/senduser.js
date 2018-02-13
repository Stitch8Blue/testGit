const Router = require('koa-router') // เอา koa-router เข้ามา
const user = new Router()

user.post('/',async function(context){
  let date = new Date()
  let data = context.request.body
  let age = date.getFullYear() - (data.year - 543)
  let name = data.name
  if(age > 20){
      context.body = name+' คนแก่'
  }
  else{
      context.body = name+' คนหนุ่มสาว'
  }
  //context.body = data
})

module.exports = user
