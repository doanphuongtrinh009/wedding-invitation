# ⏱️ CHECKLIST XỬ LÝ 1 ĐƠN HÀNG TRONG 30 PHÚT

> **Mục tiêu:** Từ lúc nhận form đến khi gửi link + QR cho khách

---

## ✅ PHASE 1: Kiểm Tra Đơn Hàng (0-5 phút)

- [ ] Mở Google Form responses
- [ ] Kiểm tra thông tin bắt buộc đã đủ:
  - [ ] Tên cô dâu & chú rể
  - [ ] Ngày giờ cưới
  - [ ] Địa điểm tiệc
  - [ ] Ảnh cưới (tối thiểu 3 ảnh)
  - [ ] Thông tin ngân hàng
- [ ] Download ảnh từ Google Drive
- [ ] Gửi tin nhắn xác nhận đã nhận đơn (Template #1)

---

## ✅ PHASE 2: Chuẩn Bị Ảnh (5-10 phút)

- [ ] Resize ảnh về 800px width (nếu cần)
- [ ] Upload ảnh lên hosting:
  - [ ] Option 1: Upload vào `/public/images/[tên-đơn]/`
  - [ ] Option 2: Upload lên Cloudinary/Imgur
- [ ] Copy URLs ảnh

---

## ✅ PHASE 3: Cập Nhật Config (10-20 phút)

- [ ] Mở `config-template.json`
- [ ] Copy sang `config.json` mới
- [ ] Điền thông tin:

### Meta & Theme
```json
"meta": {
    "title": "Thiệp Cưới | [CHÚ RỂ] & [CÔ DÂU]",
    "theme": "[luxury|pastel|traditional]"
}
```

### Couple
```json
"couple": {
    "groom": { "name": "...", "shortName": "..." },
    "bride": { "name": "...", "shortName": "..." }
}
```

### Events
```json
"events": [
    { "title": "Lễ Nhà Trai", "time": "...", "location": "..." },
    { "title": "Lễ Nhà Gái", "time": "...", "location": "..." },
    { "title": "Tiệc Cưới", "time": "...", "location": "..." }
]
```

### Gallery
```json
"gallery": [
    { "id": 1, "src": "[URL_ẢNH]", "alt": "Ảnh cưới 1" }
]
```

### Bank Info
```json
"bankInfo": [
    { "bankName": "...", "accountNumber": "...", "accountName": "..." }
]
```

- [ ] Xóa các trường không dùng (nếu có)
- [ ] Validate JSON (paste vào jsonlint.com)

---

## ✅ PHASE 4: Deploy (20-25 phút)

### Option A: Vercel (Recommended)

```bash
# 1. Tạo branch mới cho đơn hàng
git checkout -b order/[ten-co-dau-chu-re]

# 2. Commit changes
git add .
git commit -m "Add wedding: [Tên] & [Tên]"

# 3. Push & Deploy
git push origin order/[ten-co-dau-chu-re]

# 4. Vercel tự động deploy preview
# Copy preview URL
```

### Option B: Vercel CLI

```bash
# Deploy trực tiếp
vercel --prod
```

- [ ] Kiểm tra link đã hoạt động
- [ ] Test trên mobile

---

## ✅ PHASE 5: Tạo QR & Gửi Khách (25-30 phút)

- [ ] Tạo QR code:
```bash
./scripts/generate-qr.sh [URL_THIỆP] qr-[ten].png
```

- [ ] Kiểm tra QR hoạt động
- [ ] Gửi tin nhắn cho khách (Template #3):
  - [ ] Link thiệp
  - [ ] File QR code
  - [ ] Hướng dẫn sử dụng

---

## 📋 CHECKLIST NHANH (Copy & Paste)

```
✅ CHECKLIST ĐƠN: [TÊN CÔ DÂU CHÚ RỂ]
━━━━━━━━━━━━━━━━━━━━━━━━━━━
[ ] Kiểm tra form đủ thông tin
[ ] Download & upload ảnh  
[ ] Cập nhật config.json
[ ] Validate JSON
[ ] Deploy Vercel
[ ] Test link + mobile
[ ] Tạo QR code
[ ] Gửi link + QR cho khách
━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ Bắt đầu: ___:___
⏱️ Hoàn thành: ___:___
```

---

## 🛠️ TROUBLESHOOTING

| Vấn đề | Giải pháp |
|--------|-----------|
| Ảnh không hiển thị | Kiểm tra URL, dùng HTTPS |
| JSON lỗi | Paste vào jsonlint.com để debug |
| Deploy fail | Check Vercel logs, thường do lỗi build |
| QR không scan được | Kiểm tra URL đúng format https:// |

---

## 📊 TRACKING ĐƠNN HÀNG

| # | Khách | Theme | Ngày nhận | Deadline | Status | Link |
|---|-------|-------|-----------|----------|--------|------|
| 1 | ... | ... | ... | ... | ⏳/✅ | ... |
