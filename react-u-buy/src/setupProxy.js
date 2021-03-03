console.error('proxy file');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(

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
        "/user",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );

    app.use(
        "/add_blacklist",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );

    app.use(
        "/remove_blacklist",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );

    app.use(
        "/blacklist",
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

    app.use(
        "/register",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );

    app.use(
        "/login",
        createProxyMiddleware({
            target: "http://optubuy.us-east-2.elasticbeanstalk.com",
            changeOrigin: true,
            logLevel: "debug",
        })
    );

    app.use(
        "/upload_photo",
        createProxyMiddleware({
            target: "http://localhost:9999",
            changeOrigin: true,
            logLevel: "debug",
        })
    );

}
