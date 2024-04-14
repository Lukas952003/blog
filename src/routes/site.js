// Trong này quản lý những cái router liên quan đến thằng news
const express = require("express");
const router = express.Router();

//Cấu hình news
const siteController = require("../app/controllers/SiteController"); // Đối tượng khởi tạo

router.use("/search", siteController.search);

router.use("/", siteController.index);

module.exports = router;
