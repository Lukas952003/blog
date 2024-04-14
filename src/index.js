const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes"); //  chia sẽ mã nguồn từ file index.js trong routes

// Câu hình hình SCSS
app.use(express.static(path.join(__dirname, "public")));

//apply middleware
app.use(
  express.urlencoded({
    extended: true,
  })
); //Với dạng form
app.use(express.json()); // với dạng JS lên

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Trang HOME, Search, contact => lưu những cái file không năm trong 1 tài nguyên cụ thể ==> Đưa thành 1 file

//Khởi tạo Routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
