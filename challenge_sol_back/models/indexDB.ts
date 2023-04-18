
const {user} = require ('./user');
const {product} = require ('./product');
const {product_favorite} = require ('./product_favorite');
const {product_pending} = require ('./product_pending');
const {purchase} = require ('./purchase');

module.exports={
    user,
    product,
    product_favorite,
    product_pending,
    purchase
}