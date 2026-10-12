/* ═══════════════════════════════════════════════════════════════════
   APEX · CONFIG  —  ĐÂY LÀ FILE DUY NHẤT BẠN CẦN SỬA ĐỂ ĐỔI NỘI DUNG
   ───────────────────────────────────────────────────────────────────
   • Đổi TÊN / CHỨC DANH / EMAIL ........ mục  profile  và  links
   • Gắn ẢNH ĐẠI DIỆN ................... bỏ ảnh vào  assets/img/  rồi sửa  profile.avatar
   • Thêm DỰ ÁN ......................... copy 1 khối trong  projects  rồi sửa
   • Thêm KỸ NĂNG ....................... thêm 1 dòng trong  skills
   • Thêm TRANG MỚI ..................... xem  HUONG-DAN.md  (mục "Thêm trang mới")
   Quy tắc: chữ nằm trong dấu "…", mỗi mục cách nhau bằng dấu phẩy.
   Nếu để trống "" thì mục đó tự ẩn đi.
   ⚠ Toàn bộ nội dung dưới đây là NỘI DUNG MẪU — hãy thay bằng thông tin thật
     và chỉ ghi những gì bạn thật sự có (kỹ năng, kinh nghiệm, chứng chỉ).
   ═══════════════════════════════════════════════════════════════════ */
window.APEX = {

  /* ───────── 1. THÔNG TIN SITE ───────── */
  site: {
    brand: "THÁI SUDO",                       // chữ cạnh logo trên thanh menu & tiêu đề tab
    description: "Portfolio cá nhân: dự án, kỹ năng, CV và góc học tập.",
    sampleNotice: true,                  // true = hiện thanh nhắc "nội dung mẫu"; sửa xong hãy đổi thành false
    studio: true,                        // true = cho phép bảng chỉnh nhanh (Ctrl+Shift+E hoặc thêm ?edit=1 vào link)
    year: new Date().getFullYear()
  },

  /* ───────── 2. HIỆU ỨNG & GIAO DIỆN ───────── */
  theme: {
    accent: "cyan",                      // màu chủ đạo: cyan | violet | emerald | amber | rose
    loader: true,                        // màn hình tải có khối 3D (chỉ hiện lần đầu mỗi phiên)
    cursor: true,                        // con trỏ phát sáng (chỉ trên máy có chuột)
    particles: true,                     // nền hạt 3D
    scene3d: true                        // khối 3D xoay ở trang chủ
  },

  /* ───────── 3. HỒ SƠ CÁ NHÂN ───────── */
  profile: {
    name: "THÁI SUDO",                 // ← ĐỔI TÊN Ở ĐÂY
    greeting: "Xin chào, tôi là",
    initials: "A",                       // chữ hiện khi chưa có ảnh
    roles: [                             // dòng chữ tự gõ ở trang chủ
      "Lập trình viên Web",
      "Người học công nghệ không ngừng",
      "Thiết kế trải nghiệm 3D & tương tác",
      "Người biến ý tưởng thành sản phẩm"
    ],
    tagline: "Mình xây dựng những trải nghiệm số gọn, nhanh, đẹp và dùng được thật — từ ý tưởng đến khi đưa lên mạng.",
    status: "Đang mở cơ hội hợp tác",
    location: "Việt Nam",
    email: "ban@example.com",            // ← ĐỔI EMAIL
    phone: "",                           // để trống nếu không muốn hiện
    avatar: "assets/img/avatar-me.jpg",     // ← ẢNH ĐẠI DIỆN: thả file vào assets/img/ rồi đổi tên file tại đây (vd "assets/img/toi.jpg")
    // avatarPosition: "50% 30%",          // (tuỳ chọn) tự canh tay vị trí ảnh đại diện; bỏ trống = tự động căn chủ thể vào giữa
    heroImage: "assets/img/hero-cosmos.jpg",   // ảnh nền trang chủ
    aboutImage: "assets/img/workspace.jpg",    // ảnh ở trang Giới thiệu
    floaters: ["HTML · CSS · JS", "3D · Canvas", "Luôn học hỏi"],   // 3 nhãn bay quanh ảnh
    about: [
      "Mình là người yêu công nghệ và thích biến những ý tưởng rời rạc thành sản phẩm chạy được. Mình tin một sản phẩm tốt là sản phẩm dễ dùng, tải nhanh và để lại cảm giác dễ chịu.",
      "Hiện mình tập trung vào phát triển web, giao diện tương tác và các hiệu ứng 3D chạy ngay trên trình duyệt. Ngoài giờ làm, mình viết ghi chú học tập và làm các dự án nhỏ để rèn tay nghề.",
      "Hãy thay đoạn giới thiệu này bằng câu chuyện thật của bạn: bạn là ai, đang làm gì, muốn đi đâu."
    ],
    values: [
      { icon: "⚡", title: "Hiệu năng", text: "Nhẹ, nhanh, mượt trên cả máy yếu." },
      { icon: "🎯", title: "Tập trung người dùng", text: "Thiết kế để người ta dùng được ngay." },
      { icon: "🌱", title: "Học liên tục", text: "Mỗi tuần một điều mới, ghi lại để nhớ." }
    ],
    stats: [                             // con số nổi bật (mẫu — thay bằng số thật)
      { value: 6,  suffix: "",  label: "Dự án mẫu" },
      { value: 3,  suffix: "+", label: "Năm học tập" },
      { value: 20, suffix: "+", label: "Công nghệ đã thử" },
      { value: 100, suffix: "%", label: "Tâm huyết" }
    ],
    now: [                               // mục "Hiện tại mình đang…"
      "Học sâu hơn về JavaScript hiện đại và hiệu năng web",
      "Xây dựng portfolio và ghi lại hành trình học",
      "Tìm cơ hội thực tập / làm việc phù hợp"
    ],
    facts: [
      { k: "Múi giờ", v: "GMT+7" },
      { k: "Ngôn ngữ", v: "Tiếng Việt · English" },
      { k: "Làm việc", v: "Từ xa / Hybrid" },
      { k: "Cà phê", v: "Ít đường" }
    ]
  },

  /* ───────── 4. LIÊN KẾT MẠNG XÃ HỘI (để "" nếu không dùng) ───────── */
  links: {
    github:   "https://github.com/ten-cua-ban",
    linkedin: "https://www.linkedin.com/in/ten-cua-ban",
    facebook: "",
    youtube:  ""
  },

  /* ───────── 5. MENU — thêm trang mới bằng cách thêm 1 dòng ───────── */
  nav: [
    { id: "home",     label: "Trang chủ",  href: "index.html" },
    { id: "about",    label: "Giới thiệu", href: "about.html" },
    { id: "projects", label: "Dự án",      href: "projects.html" },
    { id: "skills",   label: "Kỹ năng",    href: "skills.html" },
    { id: "cv",       label: "CV",         href: "cv.html" },
    { id: "learning", label: "Học tập",    href: "learning.html", more: true },   // more:true = nằm trong menu "Khám phá"
    { id: "blog",     label: "Blog",       href: "blog.html", more: true },
    { id: "contact",  label: "Liên hệ",    href: "contact.html" }
    // { id: "trang-moi", label: "Trang mới", href: "page-template.html", more: true },
  ],

  /* ───────── 6. KỸ NĂNG (level 0–100 là mức TỰ ĐÁNH GIÁ, hãy trung thực) ───────── */
  skills: [
    { group: "Frontend", items: [
      { name: "HTML & CSS",  level: 90 },
      { name: "JavaScript",  level: 82 },
      { name: "React",       level: 70 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Canvas / 3D", level: 68 }
    ]},
    { group: "Backend", items: [
      { name: "Node.js",  level: 65 },
      { name: "Express",  level: 62 },
      { name: "MongoDB",  level: 58 },
      { name: "REST API", level: 70 }
    ]},
    { group: "Ngôn ngữ khác", items: [
      { name: "Python", level: 66 },
      { name: "Java",   level: 55 },
      { name: "C/C++",  level: 52 }
    ]},
    { group: "Công cụ", items: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code",      level: 88 },
      { name: "Docker",       level: 45 },
      { name: "Figma",        level: 60 }
    ]},
    { group: "Kỹ năng mềm", items: [
      { name: "Giao tiếp",     level: 75 },
      { name: "Làm việc nhóm", level: 80 },
      { name: "Tự học",        level: 92 }
    ]}
  ],

  /* ───────── 7. DỰ ÁN ─────────
     id        : viết liền, không dấu (dùng làm đường dẫn  projects.html#id)
     image     : đường dẫn ảnh bìa, vd "assets/img/du-an-1.jpg". Để "" thì tự tạo bìa gradient theo hue
     images    : (tuỳ chọn) thêm nhiều ảnh cho thư viện trong cửa sổ chi tiết
     hue       : số 0–360, màu của bìa tự tạo
     featured  : true = hiện ở trang chủ
     links     : demo (link chạy thử) và code (link GitHub); để "" nếu không có */
  projects: [
    { id: "portfolio-3d", title: "Portfolio 3D tương tác", emoji: "🌌", hue: 195, year: 2026, category: "Web", featured: true,
      role: "Thiết kế & lập trình",
      summary: "Trang cá nhân nhiều trang với khối 3D, chế độ sáng/tối và hiệu ứng cuộn.",
      description: ["Dự án mẫu cho thấy cách kết hợp đồ hoạ 3D thuần Canvas với giao diện hiện đại mà không cần thư viện nặng.", "Thay đoạn này bằng mô tả thật: bài toán, cách bạn giải quyết và kết quả đạt được."],
      features: ["Khối 3D chạy trên Canvas 2D, không phụ thuộc thư viện", "Dark / Light + 5 bảng màu", "Tối ưu cho điện thoại và giảm chuyển động"],
      tags: ["HTML", "CSS", "JavaScript", "Canvas"], image: "", images: [], links: { demo: "", code: "https://github.com/ten-cua-ban" } },

    { id: "study-planner", title: "Trợ lý lập kế hoạch học", emoji: "📚", hue: 262, year: 2026, category: "Học tập", featured: true,
      role: "Lập trình",
      summary: "Tạo lộ trình học theo mục tiêu, thời gian và trình độ, kèm checklist theo dõi.",
      description: ["Công cụ chạy hoàn toàn trên trình duyệt, lưu tiến độ cục bộ và không gửi dữ liệu đi đâu.", "Hãy mô tả rõ vấn đề học tập bạn muốn giải quyết khi thay nội dung này."],
      features: ["Sinh lộ trình theo số ngày", "Checklist lưu localStorage", "Bấm giờ Pomodoro"],
      tags: ["JavaScript", "UX", "localStorage"], image: "", images: [], links: { demo: "learning.html", code: "" } },

    { id: "shop-api", title: "API cửa hàng mini", emoji: "🛒", hue: 28, year: 2025, category: "Backend", featured: true,
      role: "Backend",
      summary: "REST API quản lý sản phẩm, giỏ hàng và đơn hàng với xác thực JWT.",
      description: ["Dự án mẫu về thiết kế API rõ ràng, có phân quyền và kiểm tra dữ liệu đầu vào.", "Thêm sơ đồ CSDL hoặc ảnh chụp Postman vào mục images để nhà tuyển dụng dễ hình dung."],
      features: ["Xác thực JWT", "Phân trang & tìm kiếm", "Tài liệu API"],
      tags: ["Node.js", "Express", "MongoDB"], image: "", images: [], links: { demo: "", code: "" } },

    { id: "dashboard", title: "Dashboard dữ liệu", emoji: "📊", hue: 150, year: 2025, category: "Web",
      role: "Frontend",
      summary: "Bảng điều khiển với biểu đồ, bộ lọc và chế độ sáng/tối.",
      description: ["Trực quan hoá dữ liệu bằng SVG thuần để trang tải nhanh.", "Thay bằng dữ liệu và ảnh chụp thật của dự án."],
      features: ["Biểu đồ SVG tự vẽ", "Bộ lọc theo thời gian", "Responsive"],
      tags: ["JavaScript", "SVG", "UI"], image: "", images: [], links: { demo: "", code: "" } },

    { id: "mobile-notes", title: "Ứng dụng ghi chú", emoji: "📝", hue: 330, year: 2024, category: "Ứng dụng",
      role: "Fullstack",
      summary: "Ứng dụng ghi chú offline-first, cài được như app (PWA).",
      description: ["Ghi chú lưu cục bộ, đồng bộ khi có mạng.", "Mô tả thêm các quyết định kỹ thuật bạn tự hào."],
      features: ["Hoạt động offline", "Tìm kiếm tức thì", "Cài như ứng dụng"],
      tags: ["PWA", "React", "IndexedDB"], image: "", images: [], links: { demo: "", code: "" } },

    { id: "ui-kit", title: "Bộ UI Kit 3D", emoji: "🧊", hue: 215, year: 2024, category: "3D",
      role: "Thiết kế & lập trình",
      summary: "Bộ thành phần giao diện có hiệu ứng nghiêng 3D, kính mờ và ánh sáng theo con trỏ.",
      description: ["Tập hợp các thành phần có thể tái sử dụng cho nhiều dự án.", "Bổ sung liên kết trang demo để người xem thử trực tiếp."],
      features: ["Nghiêng 3D theo con trỏ", "Glassmorphism", "Hỗ trợ bàn phím"],
      tags: ["CSS", "3D", "Design System"], image: "", images: [], links: { demo: "", code: "" } }
  ],

  /* ───────── 8. HÀNH TRÌNH: type = work (làm việc) | edu (học tập) | cert (chứng chỉ) ───────── */
  timeline: [
    { type: "work", title: "Lập trình viên Web (tự do)", org: "Dự án cá nhân & freelance", period: "2024 – nay",
      desc: "Xây dựng website, công cụ nhỏ và portfolio. Thay bằng kinh nghiệm thật của bạn." },
    { type: "edu",  title: "Sinh viên Công nghệ thông tin", org: "Tên trường của bạn", period: "2022 – 2026",
      desc: "Học nền tảng lập trình, cấu trúc dữ liệu, cơ sở dữ liệu và phát triển web." },
    { type: "cert", title: "Tên chứng chỉ của bạn", org: "Đơn vị cấp", period: "2025",
      desc: "Chỉ ghi chứng chỉ bạn thật sự có và có thể xác minh." }
  ],

  /* ───────── 9. ĐÁNH GIÁ / NHẬN XÉT (mẫu — hãy thay bằng nhận xét thật hoặc xoá mục này) ───────── */
  reviews: [
    { name: "Người nhận xét 1", role: "Giảng viên / Mentor", text: "Chủ động, học nhanh và luôn hoàn thành đúng hạn. (Nội dung mẫu — thay bằng nhận xét thật.)" },
    { name: "Người nhận xét 2", role: "Đồng đội dự án", text: "Giao diện làm rất chỉn chu, chú ý chi tiết và sẵn sàng hỗ trợ cả nhóm. (Mẫu)" },
    { name: "Người nhận xét 3", role: "Khách hàng", text: "Trang web tải nhanh, đẹp trên điện thoại và dễ cập nhật nội dung. (Mẫu)" },
    { name: "Người nhận xét 4", role: "Bạn học", text: "Giải thích dễ hiểu, hay chia sẻ tài liệu và cách tự học hiệu quả. (Mẫu)" }
  ],

  /* ───────── 10. CV ───────── */
  cv: {
    title: "Lập trình viên Web",
    file: "",                            // nếu có file CV PDF thật: bỏ vào assets/ rồi ghi "assets/CV.pdf" → hiện nút Tải file
    summary: "Người học công nghệ định hướng phát triển web, yêu thích giao diện tương tác và tối ưu trải nghiệm. Có khả năng tự học tốt, làm việc nhóm và hoàn thiện sản phẩm từ ý tưởng đến triển khai.",
    languages: [ { name: "Tiếng Việt", level: "Bản ngữ" }, { name: "Tiếng Anh", level: "Đọc hiểu tài liệu kỹ thuật" } ],
    interests: ["Lập trình", "Thiết kế", "Đọc sách", "Âm nhạc"],
    certificates: ["Tên chứng chỉ 1 — Đơn vị cấp (năm)", "Tên chứng chỉ 2 — Đơn vị cấp (năm)"]
  },

  /* ───────── 11. BLOG / GHI CHÚ HỌC TẬP ───────── */
  posts: [
    { id: "bat-dau-voi-git", title: "Bắt đầu với Git trong 15 phút", date: "2026-09-12", tag: "Công cụ", read: 4,
      excerpt: "Những lệnh Git cơ bản đủ dùng cho 90% công việc hằng ngày.",
      content: ["Git là hệ thống quản lý phiên bản giúp bạn lưu lại lịch sử thay đổi và làm việc nhóm an toàn.", "Bộ lệnh khởi đầu: git init, git add, git commit, git branch, git merge, git push.", "Hãy viết nội dung bài thật của bạn vào đây, hoặc thêm trường url:\"link-bài-viết\" để dẫn tới bài ở nơi khác."] },
    { id: "css-3d-co-ban", title: "CSS 3D cơ bản: perspective và rotate", date: "2026-08-03", tag: "Frontend", read: 5,
      excerpt: "Tạo khối lập phương xoay chỉ với CSS, không cần thư viện.",
      content: ["Thuộc tính perspective tạo chiều sâu, transform-style: preserve-3d giữ các phần tử con trong không gian 3D.", "Kết hợp rotateX, rotateY và translateZ bạn có thể dựng cả một khối lập phương.", "Thay bằng bài viết thật của bạn."] },
    { id: "hoc-hieu-qua", title: "Phương pháp học hiệu quả cho dân kỹ thuật", date: "2026-06-21", tag: "Học tập", read: 6,
      excerpt: "Pomodoro, lặp lại ngắt quãng và học qua dự án.",
      content: ["Chia nhỏ mục tiêu, học theo phiên tập trung 25 phút và nghỉ 5 phút.", "Ôn lại sau 1, 3, 7 ngày để nhớ lâu hơn.", "Mỗi kiến thức mới hãy áp dụng ngay vào một dự án nhỏ."] },
    { id: "toi-uu-web", title: "5 cách làm web tải nhanh hơn", date: "2026-05-02", tag: "Hiệu năng", read: 5,
      excerpt: "Nén ảnh, lazy-load, giảm JavaScript và dùng cache hợp lý.",
      content: ["Ảnh thường chiếm phần lớn dung lượng: hãy dùng định dạng WebP/AVIF và kích thước phù hợp.", "Chỉ tải JavaScript khi cần và tránh thư viện nặng cho việc nhỏ.", "Đo bằng Lighthouse trước và sau để thấy sự khác biệt."] }
  ],

  /* ───────── 12. GÓC HỌC TẬP ───────── */
  learning: {
    todos: ["Hoàn thành 1 bài học mới", "Ôn lại ghi chú hôm qua", "Làm 1 bài tập thực hành"],
    resources: [
      { title: "MDN Web Docs",     url: "https://developer.mozilla.org/vi/", tag: "Tài liệu", desc: "Tài liệu chuẩn về HTML, CSS, JavaScript." },
      { title: "freeCodeCamp",     url: "https://www.freecodecamp.org/",     tag: "Khoá học", desc: "Học lập trình miễn phí qua dự án." },
      { title: "roadmap.sh",       url: "https://roadmap.sh/",               tag: "Lộ trình", desc: "Lộ trình học cho từng vị trí công nghệ." },
      { title: "CSS-Tricks",       url: "https://css-tricks.com/",           tag: "CSS",      desc: "Mẹo và hướng dẫn CSS chuyên sâu." },
      { title: "JavaScript.info",  url: "https://javascript.info/",          tag: "JavaScript", desc: "Giáo trình JavaScript hiện đại, rất dễ theo dõi." },
      { title: "GitHub Docs",      url: "https://docs.github.com/",          tag: "Công cụ",  desc: "Hướng dẫn Git, GitHub và GitHub Pages." }
    ]
  },

  /* ───────── 13. LIÊN HỆ ───────── */
  contact: {
    formEndpoint: "",                    // tuỳ chọn: dán link Formspree (https://formspree.io/f/xxxx) để form gửi thẳng về email. Để trống = mở ứng dụng email của người gửi
    subjects: ["Hợp tác dự án", "Cơ hội việc làm", "Hỏi về kỹ thuật", "Khác"],
    availability: "Phản hồi trong vòng 24–48 giờ.",
    faq: [
      { q: "Bạn nhận loại dự án nào?", a: "Website, giao diện tương tác, công cụ nhỏ và hiệu ứng 3D trên web. Hãy mô tả ngắn gọn nhu cầu của bạn." },
      { q: "Mất bao lâu để hoàn thành?", a: "Tuỳ độ phức tạp. Một trang giới thiệu thường mất 1–2 tuần, mình sẽ báo thời gian cụ thể sau khi hiểu yêu cầu." },
      { q: "Có làm việc từ xa không?", a: "Có. Mình quen làm việc từ xa và chủ động cập nhật tiến độ thường xuyên." }
    ]
  }
};
