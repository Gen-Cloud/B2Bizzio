// path: ./src/api/hello/controllers/hello.js

const { createCoreController } = require("@strapi/strapi/lib/factories");
const qs = require('qs');

module.exports = createCoreController('api::product.product', () => ({
    async categoryQty(ctx) {
        const { params } = ctx;
        const { category_name, qty } = params;
        ctx.query = { ...ctx.query, pagination: { pageSize: qty } }
        const { data, meta } = await super.find(ctx);
        return { data, meta };

    },
    async brand(ctx) {
        const { params } = ctx;
        const { brand_slug } = params;
        ctx.query = {
            ...ctx.query, filters: { product_brand: { brand_slug: { $eq: brand_slug } } }
        };
        const { data, meta } = await super.find(ctx)
        return { data, meta };
    },
    async product_image(ctx) {
        const { params } = ctx;
        const { product_code } = params;
        ctx.query = {
            ...ctx.query,
            filters: {
                product_barcode: {  // ТРЯБВА ДА СЕ СМЕНИ PRODUCT_BARCODE С PRODUCT_CODE!!!
                    $eq: product_code
                }
            },
            populate: ['product_image_main'],
        }
        const { data } = await super.find(ctx);
        const { attributes } = data[0]
        const { product_image_main } = attributes;
        const image_url = product_image_main.data.attributes.url
        // console.log(data, attributes)
        return { image_url:("b-2-bizzio-u2exi.ondigitalocean.app"+image_url)}
    }
}));



