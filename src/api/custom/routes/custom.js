// path: ./src/api/hello/routes/hello.js

module.exports = {
    routes: [
      {
        method:'GET',
        path: '/product_image/:product_code',
        handler: 'custom.product_image'
      }
    ]
  }
  
   
  
   