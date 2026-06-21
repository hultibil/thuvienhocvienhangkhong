function dangnhap() {
    let tk = document.getElementById("mssv").value;
    let mk = document.getElementById("matkhau").value;
    if (tk === "admin" && mk === "123") {
        window.location.href = "home.html";
    } else {
        alert("Đăng nhập thất bại");
    }
}