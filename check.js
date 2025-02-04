// Kiểm tra khi màn hình được xoay
window.addEventListener("orientationchange", function() {
    if (window.innerHeight < window.innerWidth) {
        // Nếu màn hình ngang, ẩn popup
        document.getElementById("popup-rotate").style.display = "none";
    } else {
        // Nếu màn hình dọc, hiển thị popup yêu cầu xoay
        document.getElementById("popup-rotate").style.display = "flex";
    }
});

// Hàm đóng popup khi người dùng đã xoay màn hình
function closeRotatePopup() {
    document.getElementById("popup-rotate").style.display = "none";
}
