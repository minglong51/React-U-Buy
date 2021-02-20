// console.error('proxy file');
const { createProxyMiddleware } = require('http-proxy-middleware');

// throw new Error("SZE SZE")

module.exports = function(app) {

   app.use(
       "/products",
       createProxyMiddleware({
           target: "http://optubuy.us-east-2.elasticbeanstalk.com",
           changeOrigin: true,
           logLevel: "debug",
       })
   );
}
