const app = require("express").Router();
const { addProduct, updateProduct, deleteProduct, getAllProducts, getProductById, topRatedProducts, storeTopRatedProducts, 
    storeProducts, productsByStoreAndCategory, productSearch } = require("../controller/products.controller");

const validator = require('../../../validation/common.validation');

const { addProductValidation, updateProductValidation } = require("../validation/products.validation");
const isAuthorized = require("../../../config/isAuthorized");
const { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCT, GET_PRODUCT_BY_ID, TOP_RATED_PRODUCTS, STORE_TOP_RATED_PRODUCTS,
    PRODUCT_BY_STORE_AND_CATEGORY, STORE_PRODUCTS, PRODUCT_SEARCH} = require("../../../endPoints/endPoints");

app.post("/addProduct", [isAuthorized(ADD_PRODUCT),validator(addProductValidation)], addProduct);
app.put("/updateProduct/:id", [isAuthorized(UPDATE_PRODUCT), validator(updateProductValidation)], updateProduct);
app.delete("/deleteProduct/:id", [isAuthorized(DELETE_PRODUCT)], deleteProduct);
app.get("/getAllProducts", getAllProducts);
app.get("/getProductById/:id", getProductById);

app.get("/topRatedProducts", topRatedProducts);
app.get("/storeTopRatedProducts/:storeId", storeTopRatedProducts);
app.get("/storeProducts/:storeId", storeProducts);
app.get("/productsByStoreAndCategory/:storeId/:categoryId", productsByStoreAndCategory);
app.get("/productSearch", productSearch);

module.exports = app;
