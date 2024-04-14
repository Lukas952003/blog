class SiteController {
  // function constructor

  // [GET] /   ==> Trang Home
  index(req, res) {
    res.render("home");
  }

  //[GET] /search   ==> Trang Tìm kiếm
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController(); //Khởi tạo 1 đối tượng xuất ra ngoài
