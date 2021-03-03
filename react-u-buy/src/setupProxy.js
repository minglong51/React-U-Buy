console.error('proxy file');
const { createProxyMiddleware } = require('http-proxy-middleware');

// throw new Error("SZE SZE")

module.exports = function(app) {
    app.use(
        "/tag_types",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );
   app.use(
       "/products",
       createProxyMiddleware({
           target: "http://optubuy.us-east-2.elasticbeanstalk.com",
           changeOrigin: true,
           logLevel: "debug",
       })
   );
    app.use(
        "/users",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );
    app.use(
        "/user",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );
    app.use(
        "/favorites",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );

}
