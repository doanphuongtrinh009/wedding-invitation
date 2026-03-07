# Wedding Invitation

Website thiệp cưới cá nhân xây bằng Next.js 16, React 19 và TypeScript.

Route chính là `/`. Repo vẫn giữ thêm hai khu phụ:
- `/demo`: bộ concept giao diện để tham khảo, đã `noindex`
- `/tool/generator`: form nội bộ để gửi cấu hình qua email, đã `noindex`

## Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- Nodemailer

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## File quan trọng

- [app/config/wedding.config.ts](./app/config/wedding.config.ts): toàn bộ nội dung thiệp cưới
- [app/page.tsx](./app/page.tsx): trang thiệp cưới chính
- [app/layout.tsx](./app/layout.tsx): metadata, font, theme tokens
- [app/styles/globals.css](./app/styles/globals.css): giao diện chính
- [public](./public): ảnh, QR, nhạc

## Cách cá nhân hóa nhanh

1. Sửa dữ liệu trong `app/config/wedding.config.ts`
2. Thay asset trong `public/`
3. Nếu dùng domain thật, thêm `meta.siteUrl` trong config
4. Build lại bằng `npm run build`

Các phần nên sửa trong config:
- `meta.title`, `meta.description`, `meta.seoKeywords`
- `meta.siteUrl` khi đã có domain thật
- `meta.musicUrl`, `meta.musicAutoplay`
- `couple`, `events`, `timeline`, `loveStory`, `gallery`
- `dressCode`, `bankInfo`
- `content.heroHeadline`, `content.heroDescription`, `content.faqItems`, `content.footerMessage`

## Asset mặc định

Các file đang được dùng:
- `public/couple-photo.png`
- `public/floral-main.png`
- `public/qr-vcb.jpg`
- `public/qr-mb.jpg`
- `public/music/wedding-song.mp3`

Nếu bạn dùng ảnh từ domain ngoài, nhớ thêm domain đó vào `images.remotePatterns` trong [next.config.ts](./next.config.ts).

## Email cho generator

Generator dùng API route `app/api/send-order/route.ts`.

Tạo file `.env.local` theo mẫu:

```bash
cp .env.example .env.local
```

Biến môi trường cần có:
- `GMAIL_USER`
- `GMAIL_PASS`
- `ORDER_NOTIFICATION_EMAIL`

Lưu ý:
- Chỉ dùng server-side env, không dùng `NEXT_PUBLIC_*` cho secret
- Nên dùng Gmail App Password
- Nếu public generator ra internet, nên bổ sung captcha hoặc một dịch vụ form/email chuyên dụng

## SEO

- `/demo` và `/tool` đã được `noindex`
- `robots.txt` và `sitemap.xml` được sinh từ `app/robots.ts` và `app/sitemap.ts`
- `sitemap.xml` chỉ có dữ liệu khi bạn khai báo `meta.siteUrl`

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Trạng thái hiện tại

- Trang chính đã bỏ `RSVP` và `guestbook` mock để tránh gây hiểu nhầm
- Timeline, FAQ, hero copy và footer message đã được kéo về config
- Bản đồ nhúng lấy từ `venue.mapEmbedUrl`
- Build và lint đang pass
