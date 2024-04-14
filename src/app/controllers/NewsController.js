class NewsController {
  // function constructor

  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  //[GET] /news/:slug
  show(req, res) {
    res.send("New Detail");
  }
}

module.exports = new NewsController(); //Khởi tạo 1 đối tượng xuất ra ngoài
