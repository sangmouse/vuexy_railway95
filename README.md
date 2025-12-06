- Project quản lý user có kết hợp frontend (reactjs) và backend (java)

  - công nghệ sử dụng : reactjs, html, css, javascript, json server, java, react router
  - các chức năng bao gồm:
    1. đăng nhập : username, password
    2. đăng ký
    3. đăng xuất
    4. 1 user gồm những thuộc tính sau:
       - id : UUID
       - username : string
       - avatar : file
       - department : dropdown list [ CMC, FPT Software, VTI Group, Framgia ]
       - city : dropdown list [ Ha Noi, HCM, Da Nang, Ha Nam, Hai Duong ]
    5. hiển thị danh sách user : username, department, city, avatar
    6. tạo mới người dùng : username, avatar, department, city
    7. xóa người dùng khỏi danh sách
    8. cập nhật thông tin của người dùng
    9. phân quyền
    10. Phân trang cho danh sách

- account:

  - username : admin
  - password : admin

- logic:

1. login

- nhập username và password vào form signin, click submit, trường hợp không nhập đủ username và password thì hiện message bên trên form là
  "All fields are required!" - màu đỏ
- nếu nhập đủ thông tin, click submit => check nếu username và password trùng với account bên trên thì :
  - lưu account vào local storage : { username : admin, password: admin }
  - hiện message : Signin successfully! - màu xanh
  - chuyển hướng về trang home
  ***
  - authentication:
    - check nếu trong local storage có data account => vẫn cho phép truy cập home page
    - nếu ko có account trong local storage => điều hướng về sign-in page

2. sign out

- click sign out => xóa user trong local storage
- redirect về trang /sign-in
- check nếu sửa url về / => đẩy về /sign-in

3.

- npm install
- npm start

4. users

- mock api : https://www.npmjs.com/package/json-server
- npm i json-server
- npm i concurrently
- http://localhost:8080/users

* hiển thị danh sách users:
  - gọi api để hiển thị danh sách user và hiển thị các thông tin tương ứng
    trong bảng
    - method : GET /users

- view thông tin chi tiết của từng user khi click vào icon view detail

* method api : GET /users/:id

- trong page detail : gọi api để get thông tin user tương ứng
  .

* xóa user : click button để xóa user

- DELETE /users/:id
