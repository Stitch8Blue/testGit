const Koa = require('koa')
const Router = require('koa-router') // เอา koa-router เข้ามา
const App = new Koa() // สร้าง class จาก Koa
const router = new Router()
const bodyParser = require('koa-bodyparser')
const user = require('./app/api/senduser')

// App.use(async ctx => {
//   ctx.body = 'Hello World! Arthima.'
// })

App.use(async function(ctx){
  ctx.body = 'Hello World! Arthima.222'
})

 App.use(bodyParser())

router.use('/user',user.routes())

// router.post('/senduser',async function(context){
//   let date = new Date()
//   let data = context.request.body
//   let age = date.getFullYear() - (data.year - 543)
//   let name = data.name
//   if(age > 20){
//       context.body = name+' คนแก่'
//   }
//   else{
//       context.body = name+' คนหนุ่มสาว'
//   }
//   //context.body = data
// })

// router.get('/:name/:age',async function(context) {
//   // console.log(context.params.name+' '+context.params.age)
//   // context.body = context.params.name+' '+context.params.age
//
//   let data = {
//     name: context.params.name,
//     age: context.params.age
//   }
//   //context.body = data
//
// }) // localhost/[ชื่อไฟล์ใด ๆ] จะเก็บไว้ในตัวแปร name หรือ /test ไปสร้าง URL ไปอีกทาง

App.use(router.routes()) // อะไรก็ที่เข้าเขียนใน router จะมาเก็บในนี้
App.use(router.allowedMethods()) // อนุญาติ methods ทุกตัวของ router ทำงาน

App.listen(3001)
