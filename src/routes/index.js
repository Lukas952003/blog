//File này sinh ra để chúng ta chuyển toàn bộ code callback vào đây
const newRouter = require("./news");
const siteRouter = require("./site");

function route(app) {
  app.use("/news", newRouter);

  app.use("/", siteRouter);
}

module.exports = route; // Export ra để thằng khác có thể nhận, sử dụng
