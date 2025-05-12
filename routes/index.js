// routes/index.js

const express = require('express');
const router = express.Router();

// Controllers
const userSignUpController = require("../controller/user/userSignUp");
const userSignInController = require("../controller/user/userSignIn");
const userDetailsController = require("../controller/user/userDetails");
const userLogout = require("../controller/user/userLogout");
const allUsers = require("../controller/user/allUsers");
const updateUser = require("../controller/user/updateUser");

const UploadProductController = require("../controller/product/uploadProduct");
const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProductOne");
const getCategoryWiseProduct = require("../controller/product/getCategoryWiseProduct");
const getProductDetails = require("../controller/product/getProductDetails");
const searchProduct = require("../controller/product/searchProduct");
const filterProductController = require("../controller/product/filterProduct");

const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProduct = require("../controller/user/countAddToCartProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");

// Middleware
const AuthToken = require("../Middlewere/AuthToken");


// === AUTH ROUTES ===
router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", AuthToken, userDetailsController);
router.get("/userLogout", userLogout);

// === ADMIN ROUTES ===
router.get("/all-user", AuthToken, allUsers);
router.post("/update-user", AuthToken, updateUser);

// === PRODUCT ROUTES ===
router.post("/upload-product", AuthToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", AuthToken, updateProductController);
router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-product", getCategoryWiseProduct); // ✅ This is the one your frontend uses
router.post("/product-details", getProductDetails);
router.get("/search", searchProduct);
router.post("/filter-product", filterProductController);

// === CART ROUTES ===
router.post("/addtocart", AuthToken, addToCartController);
router.get("/countAddToCartProduct", AuthToken, countAddToCartProduct);
router.get("/view-card-product", AuthToken, addToCartViewProduct);
router.post("/update-cart-product", AuthToken, updateAddToCartProduct);
router.post("/delete-cart-product", AuthToken, deleteAddToCartProduct);

module.exports = router;
