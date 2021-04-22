const next = require('next')
const express = require('express')
// const WooCommerceAPI = require('woocommerce-api');
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

const wooConfig = require('./wooConfig');

const WooCommerce = new WooCommerceRestApi({
    url: wooConfig.url,
    consumerKey: wooConfig.consumerKey,
    consumerSecret: wooConfig.consumerSecret,
    wpAPI: true,
    version: 'wc/v3'
});

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then( () => {
    const server = express()

    server.get('/getProducts', (req,res) => {
        WooCommerce.get("products")
            .then((response) => {
                res.json((response.data))
            })
            .catch((error) => {
                console.log(error);
            });

    })

    server.get('*', (req, res) => {
        return handle(req,res)
    })

    server.listen(port, err => {
        if (err) throw err;

        console.log(`App Ready on port ${port}`);
    })
}).catch( ex => {
    console.err(ex.stack);
    process.exit(1)
})