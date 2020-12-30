function NguoiDungService() {
  this.urlApi = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01";
  this.urlLoginAdmin = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
  this.urlDelete = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=";
  this.token = null;
  this.request = function (method = "GET", url = this.urlApi) {
    return axios({
      method, url,
      headers: { Authorization: "Bearer " + this.token ? JSON.parse(localStorage.getItem("admin")) : this.token }
    })
  }

  this.tokenAdmmin = function () {
    return axios({
      method: "POST",
      url: this.urlLoginAdmin,
      data: { taiKhoan: "letruong", matKhau: "12345" }
    })
  }
  this.timKiemNguoiDung = function (chuoiTimKiem, mangNguoiDung) {
    /**
     * 1. tao mang rong mangTimKiem
     * 2. duyet mangNguoiDung
     * 3. sd hàm indexOf so sánh
     * 4. thêm người dùng tìm thấy vào mảng mangTimKiem
     */
    //Cach 1
    // var mangTimKiem = [];

    // mangNguoiDung.map(function(item) {
    //   if (item.hoTen.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1) {
    //     mangTimKiem.push(item);
    //   }
    // });

    // return mangTimKiem;

    //Cach 2 dung filter
    return mangNguoiDung.filter(function (item) {
      return item.hoTen.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1;
    });
  };
}
