let i = 0;

function timedCount() {
  i++;
  postMessage(i);  // Gửi dữ liệu về trang chính
  setTimeout(timedCount, 500);  // Gọi lại sau 0.5 giây
}

timedCount();