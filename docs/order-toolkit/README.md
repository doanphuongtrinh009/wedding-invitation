# 🎊 Wedding Invitation - Order Toolkit

Bộ công cụ xử lý đơn hàng thiệp cưới online trong 30 phút.

## 📁 Cấu Trúc

```
order-toolkit/
├── GOOGLE_FORM_TEMPLATE.md    # Hướng dẫn tạo Google Form
├── config-template.json       # Template config.json để copy
├── MESSAGE_TEMPLATES.md       # Mẫu tin nhắn gửi khách
├── ORDER_CHECKLIST.md         # Checklist xử lý đơn 30 phút
├── README.md                  # File này
└── scripts/
    ├── generate-config.js     # Script sinh config từ data
    └── generate-qr.sh         # Script tạo QR code
```

## 🚀 Quick Start

### 1. Tạo Google Form
- Theo hướng dẫn trong `GOOGLE_FORM_TEMPLATE.md`

### 2. Xử Lý Đơn Hàng
- Mở `ORDER_CHECKLIST.md` và làm theo từng bước

### 3. Tạo QR Code
```bash
./scripts/generate-qr.sh https://tencuoi.vercel.app qr-thiep.png
```

### 4. Gửi Khách
- Copy template từ `MESSAGE_TEMPLATES.md`

## ⏱️ Thời Gian Xử Lý

| Phase | Thời gian | Công việc |
|-------|-----------|-----------|
| 1 | 0-5 phút | Kiểm tra form |
| 2 | 5-10 phút | Upload ảnh |
| 3 | 10-20 phút | Cập nhật config |
| 4 | 20-25 phút | Deploy |
| 5 | 25-30 phút | Gửi link + QR |

## 📞 Quy Trình Order Hoàn Chỉnh

```
Khách chọn mẫu → Điền form → Thanh toán
       ↓
Bạn xử lý (30 phút) → Gửi link preview
       ↓
Khách confirm → Deploy chính thức → Gửi link + QR
```

---
Made with 💕 for Wedding Invitation Service
