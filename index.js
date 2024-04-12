const express = require("express"); //import ing the express library
const app = express(); //tạo 1 đối tượng cho express, đối tượng này chứa tất các tính năng và phương thức cần thiết để xây dựng web
const port = 3000; // Run web ở cổng nào

// Định nghĩa 1 route
/**
 * Khi có yêu cầu GET tới "/trang-chu", hàm callback được truyền vào sẽ được gọi. Trong trường hợp này,
 * hàm callback nhận vào hai tham số: req (yêu cầu) và res (phản hồi). Hàm callback này trả về chuỗi "Hello World!"
 * thông qua phương thức res.send()
 */
app.get("/tin-tuc", (req, res) => {
  let a = 1;
  let b = 2;

  let c = a + b;

  return res.send("Hello World!");
});

/**
 * Khi máy chủ được bắt đầu, hàm callback được truyền vào app.listen() sẽ được gọi. Trong trường hợp này,
 * nó chỉ đơn giản là in ra một thông báo lên console để cho biết máy chủ đã được khởi động và đang lắng nghe trên cổng nào.
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
