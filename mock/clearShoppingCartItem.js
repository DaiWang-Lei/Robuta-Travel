const productList = [];

module.exports = (req, res) => {
    setTimeout(() => res.json({shoppingCartItems: productList}), 500);
}
