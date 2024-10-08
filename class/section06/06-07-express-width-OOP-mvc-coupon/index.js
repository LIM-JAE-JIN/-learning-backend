import express from "express";
import { ProductController } from "./mvc/controllers/product.controller.js"
import { CouponController } from "./mvc/controllers/coupon.controller.js"

const app = express();

// 상품 API
const productController = new ProductController();
app.post('/products/buy', productController.buyProduct); // 상품 구매 API
app.post('/product/refund', productController.refuncProduct); // 상품 환불 API

// 쿠폰(상품권) API
const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon); // 상품권 구매 API

// 게시판 API
// app.get("/boards/...")

app.listen(3000);