console.error('proxy file');
const { createProxyMiddleware } = require('http-proxy-middleware');

// throw new Error("SZE SZE")

module.exports = function(app) {
    app.use(
<<<<<<< HEAD
        "/register",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );
    app.use(
        `/login`,
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );

    app.use(
        "/genres",
=======
        "/tag_types",
>>>>>>> 6e9fe9712dc3e95ab9cedc13f065bb7d019a67f2
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
        "/user",
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
