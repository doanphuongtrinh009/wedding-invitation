
# So sánh: Google Form vs Custom Web App (Trang tạo đơn)

Bạn đang cân nhắc việc thay thế Google Form bằng một trang web để khách tự nhập thông tin và xuất ra file JSON. Dưới đây là phân tích chi tiết:

## 1. Google Form (Hiện tại)
**Quy trình:** Khách điền Form -> Data vào Sheet -> Bạn copy data -> Paste vào `config.json` -> Sửa lỗi format -> Done.

| Tiêu chí | Đánh giá | Chi tiết |
| :--- | :--- | :--- |
| **Tốc độ triển khai** | ⭐⭐⭐⭐⭐ | Đã có sẵn, không tốn công code. |
| **Trải nghiệm khách** | ⭐⭐⭐ | Quen thuộc nhưng giao diện cơ bản, không mang dấu ấn thương hiệu riêng. |
| **Xử lý dữ liệu** | ⭐⭐ | **Thủ công nhiều**. Bạn phải copy từng dòng từ Sheet sang JSON, dễ sai sót (quên dấu phẩy, sai ngoặc). |
| **Tính năng** | ⭐⭐⭐ | Validate cơ bản. Không thể preview thiệp ngay lập tức. |
| **Chi phí** | Miễn phí | Dùng Google Drive/Sheet. |

## 2. Custom Web App (Trang `/create` trên website)
**Quy trình:** Khách (hoặc bạn) điền form trên web -> Web tự sinh code JSON -> Copy & Paste (hoặc tự động lưu).

| Tiêu chí | Đánh giá | Chi tiết |
| :--- | :--- | :--- |
| **Tốc độ triển khai** | ⭐⭐⭐ | Cần code thêm trang form, validate dữ liệu (khoảng 2-4 giờ dev). |
| **Trải nghiệm khách** | ⭐⭐⭐⭐⭐ | **Chuyên nghiệp**. Giao diện đẹp, đúng theme đám cưới. Có thể cho khách xem **Live Preview** (điền tên xong thấy tên hiện lên thiệp luôn). |
| **Xử lý dữ liệu** | ⭐⭐⭐⭐⭐ | **Tự động hóa 100%**. Web sẽ xuất ra đoạn JSON chuẩn chỉnh (`config.json`), bạn chỉ cần copy-paste hoặc bấm nút "Download". Không bao giờ sai cú pháp. |
| **Tính năng** | ⭐⭐⭐⭐⭐ | Có thể validate ngày tháng logic (VD: ngày cưới phải sau ngày hiện tại), check kỹ số tài khoản, v.v. |
| **Chi phí** | Thấp | Tận dụng host hiện tại (Vercel), không tốn thêm chi phí. |

## 💡 Ý kiến & Giải pháp đề xuất

**"Ý tưởng làm web app TỐT HƠN Google Form rất nhiều"** về mặt vận hành lâu dài và độ chuyên nghiệp. Đặc biệt là nó giúp bạn cắt giảm bước "Sửa config.json thủ công" - bước dễ sai nhất.

### Về vấn đề hình ảnh (Upload sau)
Bạn hoàn toàn có thể tách quy trình:
1.  **Bước 1 (Web App)**: Khách điền thông tin text (Tên, Ngày, Lời chúc, Bank...). Web xuất ra file `config.json` (phần ảnh để trống hoặc link placeholder).
2.  **Bước 2 (Zalo/Drive)**: Khách gửi ảnh riêng. Bạn upload và điền link ảnh vào sau.
    *   *Lý do:* Việc code chức năng upload ảnh và lưu trữ (hosting) phức tạp hơn nhiều so với xử lý text. Để ảnh xử lý thủ công là lựa chọn khôn ngoan ở giai đoạn đầu.

### Đề xuất triển khai (MVP)
Chúng ta sẽ dựng một trang `/tool/generator` ngay trong dự án Next.js này:
1.  Giao diện Form nhập liệu chia theo các nhóm (Cô dâu/Chú rể, Sự kiện, Bank).
2.  Bên cạnh (hoặc bên dưới) là khung **"Kết quả JSON"**.
3.  Nhập đến đâu, JSON cập nhật đến đó.
4.  Nút **"Sao chép Config"** hoặc **"Tải file config.json"**.

**Bạn có muốn mình triển khai trang này luôn không?**
