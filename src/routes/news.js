// Trong này quản lý những cái router liên quan đến thằng news
const express = require("express");
const router = express.Router();

//Cấu hình news
const newsController = require("../app/controllers/NewsController"); // Đối tượng khởi tạo

router.use("/:slug", newsController.show);
router.use("/", newsController.index);

module.exports = router;
