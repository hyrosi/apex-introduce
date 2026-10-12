# 📘 HƯỚNG DẪN SỬ DỤNG — Apex Portfolio

Web nhiều trang, chạy **thuần HTML/CSS/JS** (không cần cài gì, không cần build), có sẵn Dark/Light, 5 bảng màu, hiệu ứng 3D, ⌘K tìm nhanh.

## 1. Xem thử trên máy
Mở thư mục bằng **VS Code → Live Server**, hoặc chạy `python -m http.server` rồi vào `http://localhost:8000`.
(Mở trực tiếp bằng cách bấm đúp `index.html` vẫn chạy được, nhưng nên dùng server để giống GitHub Pages.)

## 2. Đổi TÊN, CHỨC DANH, EMAIL, LINK
Mở **`assets/js/config.js`** — đây là file duy nhất cần sửa. Tìm mục:
- `profile.name` → tên của bạn · `profile.roles` → các dòng chữ tự gõ · `profile.tagline` → câu giới thiệu
- `profile.email`, `links.github`, `links.linkedin`… → để `""` nếu không dùng (mục đó tự ẩn)

## 3. Gắn ẢNH ĐẠI DIỆN / ẢNH NỀN
1. Chép ảnh của bạn vào `assets/img/` (vd `toi.jpg`, nên vuông, ≥ 600×600).
2. Trong `config.js` sửa: `avatar: "assets/img/toi.jpg"`.
3. Ảnh nền trang chủ: `heroImage`; ảnh trang Giới thiệu: `aboutImage`. Ảnh bìa dự án: `image` trong từng dự án (để `""` thì tự tạo bìa gradient).

**Cách nhanh không cần sửa code:** mở web, nhấn `Ctrl + Shift + E` (hoặc thêm `?edit=1` sau link) → bảng **Chỉnh nhanh**: đổi tên, link, tải ảnh lên → *Lưu & áp dụng* để xem thử. Muốn giữ vĩnh viễn: bấm **Xuất config.js**, thay file `assets/js/config.js` và đưa ảnh vừa tải về vào `assets/img/`.

## 4. Thêm DỰ ÁN / KỸ NĂNG / BÀI BLOG
Trong `config.js`, copy nguyên 1 khối `{ … }` trong mảng `projects` (hoặc `skills`, `posts`, `timeline`, `reviews`) rồi sửa. Nhớ dấu phẩy giữa các khối. `id` của dự án viết liền, không dấu, không trùng.

## 5. Thêm TRANG MỚI (vd "Chứng chỉ")
1. Copy `page-template.html` → đặt tên `chung-chi.html`.
2. Trong file mới: sửa `data-title="Chứng chỉ"` và `data-page="chung-chi"` ở thẻ `<body>`; sửa nội dung giữa `<main>`.
3. Trong `config.js`, mục `nav` thêm: `{ id: "chung-chi", label: "Chứng chỉ", href: "chung-chi.html" }`
   (thêm `more: true` nếu muốn nằm trong menu "Khám phá"). Menu, footer, ⌘K, dark/light tự có.
Trong trang mới bạn có thể dùng dữ liệu từ config: `<b data-t="profile.name"></b>`.

## 6. Đổi màu, tắt/bật hiệu ứng
`config.js → theme`: `accent` (cyan / violet / emerald / amber / rose), `loader`, `cursor`, `particles`, `scene3d` (true/false). Người xem cũng tự đổi được bằng nút 🎨 và ☀/☾ trên menu.

## 7. Đưa lên GitHub Pages
1. Tạo repo trên GitHub, đưa **toàn bộ nội dung thư mục này** (không phải cả thư mục cha) vào gốc repo.
2. **Settings → Pages → Deploy from a branch → `main` / `(root)` → Save**. Chờ 1–2 phút.
3. Repo tên `TEN.github.io` → web ở `https://TEN.github.io/`; repo tên khác → `https://TEN.github.io/TEN-REPO/`.
4. Nếu dùng dạng `.../TEN-REPO/`: mở `404.html`, đổi `var ROOT = "/"` thành `"/TEN-REPO/"`.

## 8. Trước khi công khai — CHECKLIST
- [ ] Thay mọi **nội dung mẫu** (tên, giới thiệu, dự án, đánh giá, chứng chỉ) bằng thông tin thật
- [ ] Chỉ ghi kỹ năng/kinh nghiệm/chứng chỉ **bạn thật sự có** (nhà tuyển dụng có thể hỏi lại)
- [ ] `site.sampleNotice: false` (tắt thanh "nội dung mẫu") và cân nhắc `site.studio: false`
- [ ] Đổi `profile.email`; nếu muốn form liên hệ gửi thẳng về email, dán link Formspree vào `contact.formEndpoint`
- [ ] Xoá/thay ảnh `original-*.jpg` nếu không dùng; thay ảnh nền bằng ảnh nét hơn của bạn
- [ ] Mở thử trên điện thoại + thử cả chế độ sáng/tối + bấm hết các link

## 9. CV → PDF
Trang **CV** → chọn kiểu *Hiện đại* hoặc *Cổ điển (ATS)* → **In / Lưu PDF** → chọn “Lưu dưới dạng PDF”. Có thể bật *Sửa trực tiếp* để chỉnh nhanh trước khi in (không lưu lại).
Có file PDF riêng? Chép vào `assets/` và điền `cv.file: "assets/CV.pdf"` để hiện nút tải.

## 10. Phím tắt
`Ctrl/⌘ + K` hoặc `/` — tìm nhanh · `Ctrl + Shift + E` — chỉnh nhanh · `← →` — chuyển dự án/đánh giá · `Esc` — đóng cửa sổ

## Cấu trúc thư mục
```
index.html about.html projects.html skills.html cv.html learning.html blog.html contact.html
404.html            trang lỗi
page-template.html  trang mẫu để nhân bản
assets/js/config.js ← SỬA Ở ĐÂY
assets/js/main.js, pages.js, scene3d.js   (lõi — thường không cần sửa)
assets/css/style.css                       (giao diện)
assets/img/                                (ảnh của bạn)
```

## Lưu ý trung thực
- Khối 3D, cầu kỹ năng, nền hạt… tự viết bằng Canvas/CSS (không dùng thư viện) nên chạy cả khi mất mạng; chỉ **phông chữ** tải từ Google Fonts (không có mạng sẽ dùng phông hệ thống).
- “Trợ lý lập kế hoạch học” là **bộ sinh theo mẫu chạy trên trình duyệt**, không phải AI trực tuyến. Muốn AI thật cần backend/API; **không** đặt khoá API bí mật trong file JS công khai.
- Dữ liệu checklist/Pomodoro/chỉnh nhanh lưu trong `localStorage` của từng trình duyệt, không đồng bộ giữa các máy.

## 6. Hiệu ứng khi cuộn tới (trượt, phóng, lật, mờ)
Thêm class `reveal` vào phần tử để nó hiện dần khi cuộn tới; thêm `data-anim="..."` để đổi kiểu:
`left` (trượt từ trái) · `right` (từ phải) · `zoom` (phóng to dần) · `flip` (lật lên) · `blur` (rõ dần từ mờ). Không ghi `data-anim` = trượt lên mặc định.
Ví dụ: `<div class="card reveal" data-anim="right">…</div>`. Muốn trễ nhịp: `style="--d:.2s"`. Muốn các con của một khối lần lượt hiện: thêm `data-stagger` vào khối cha.

## 7. Tương tác chuột
- **Quả cầu kỹ năng:** kéo để xoay · rê chuột lên thẻ để phóng to · bấm một thẻ để xoay nó ra giữa và hiện mức độ (%).
- **Dải đánh giá:** kéo/vuốt để thẻ chạy theo tay (thả ra có đà) · lăn chuột ngang hoặc giữ Shift + lăn · bấm thẻ bên cạnh/chấm tròn/mũi tên · phím ← →. Thẻ đang chọn nghiêng nhẹ theo con trỏ.
