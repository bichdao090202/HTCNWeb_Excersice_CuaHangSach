let book1 = {maSach: 1, ten: "Nữ Pháp Y - Tập 4.",anh : "../img/Sach/SachVanHoc/NuPhapY.jpg", giacu : "120.000₫", giamoi : "114.400₫", giamgia: "giảm 5%"};
let book2 = {maSach: 2, ten: "Bãi săn.",anh : "../img/Sach/SachVanHoc/BaiSan.jpg", giacu : "129.000₫", giamoi : "122.000₫", giamgia: "giảm 5%"};
let book3 = {maSach: 3, ten: "Tiếng Gọi Của Hoang Dã.",anh : "../img/Sach/SachVanHoc/TiengGoiHoangDa.jpg", giacu : "168.000₫", giamoi : "159.000₫", giamgia: "giảm 5%"};
let book4 = {maSach: 4, ten: "Chúc Một Ngày Tốt Lành.",anh : "../img/Sach/SachVanHoc/ChucMotNgayTotLanh.jpg", giacu : "115.000₫", giamoi : "109.000₫", giamgia: "giảm 5%"};

let book5 = {maSach: 5, ten: "Báo Cáo Tài Chính.",anh : "../img/Sach/SachKinhTe/baocao.jpg", giacu : "158.000₫", giamoi : "126.400₫", giamgia: "giảm 20%"};
let book6 = {maSach: 6, ten: "Chiến Tranh Tiền Tệ - Phần 1.",anh : "../img/Sach/SachKinhTe/ChienTranh.jpg", giacu : "165.000₫", giamoi : "102.000₫", giamgia: "giảm 38%"};
let book7 = {maSach: 7, ten: "Nâng Tầm Dịch Vụ.",anh : "../img/Sach/SachKinhTe/NangTam.jpg", giacu : "150.000₫", giamoi : "142.000₫", giamgia: "giảm 5%"};
let book8 = {maSach: 8, ten: "Phân Tích Tài Chính Doanh Nghiệp.",anh : "../img/Sach/SachKinhTe/phantich.jpg", giacu : "159.000₫", giamoi : "151.000₫", giamgia: "giảm 5%"};

let book9 = {maSach: 9, ten: "Ehon - Vera Jewel Đi Học Muộn.",anh : "../img/Sach/SachThieuNhi/Ehon.jpg", giacu : "79.000₫", giamoi : "75.000₫", giamgia: "giảm 5%"};
let book10 = {maSach: 10, ten: "Cô Bé Bán Diêm.",anh : "../img/Sach/SachThieuNhi/cobe.jpg", giacu : "45.000₫", giamoi : "42.000₫", giamgia: "giảm 7%"};
let book11 = {maSach: 11, ten: "Ninja Nhí - Rèn Luyện Tư Duy Tích Cực.",anh : "../img/Sach/SachThieuNhi/ninja.jpg", giacu : "35.000₫", giamoi : "33.000₫", giamgia: "giảm 6%"};
let book12 = {maSach: 12, ten: "Truyện Cổ Tích Thế Giới - Ba Chú Chó Con.",anh : "../img/Sach/SachThieuNhi/bachu.jpg", giacu : "12.000₫", giamoi : "10.000₫", giamgia: "giảm 13%"};

let book13 = {maSach: 13, ten: "Sách Giáo Khoa Bộ Lớp 12.",anh : "../img/Sach/SGK/bosach12.jpg", giacu : "180.000₫", giamoi : "171.000₫", giamgia: "giảm 5%"};
let book14 = {maSach: 14, ten: "Sách Giáo Khoa Bộ Lớp 11.",anh : "../img/Sach/SGK/Sach11.jpg", giacu : "155.000₫", giamoi : "140.000₫", giamgia: "giảm 10%"};
let book15 = {maSach: 15, ten: "Tiếng Anh 7 Think - Student's Book.",anh : "../img/Sach/SGK/7think.jpg", giacu : "92.000₫", giamoi : "87.000₫", giamgia: "giảm 5%"};
let book16 = {maSach: 16, ten: "Bài Tập Ngữ Văn 11/1.",anh : "../img/Sach/SGK/nguvan11.jpg", giacu : "9.800₫", giamoi : "9.000₫", giamgia: "giảm 8%"};

sales = [book5,book6,book12,book14,book16,book11]
banchay = [book6,book4,book3,book15, book7]
sachVanHoc = [book1, book2, book3, book4,book10];
sachKinhTe = [book5, book6, book7,book8, book11];
sachThieuNhi = [book9,book10,book11,book12, book3];
sachGiaoKhoa = [book13,book14,book15,book16, book10];

dsBook = [book1, book2, book3, book4, book5, book6, book7,book8,book9,book10,book11,book12,book13,book14,book15,book16];
localStorage.setItem("dsBook",JSON.stringify(dsBook));


