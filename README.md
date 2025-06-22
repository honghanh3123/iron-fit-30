# 💪 Kỷ Luật Thép 30 Ngày - Iron Fit 30 Days

> App theo dõi kế hoạch dinh dưỡng và tập luyện 30 ngày với giao diện đẹp và tính năng lưu trữ tiến độ.

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-Enabled-FF6B6B?style=for-the-badge)

## 🎯 Mục tiêu

App giúp người dùng theo dõi và duy trì kế hoạch dinh dưỡng và tập luyện trong 30 ngày với:
- ✅ Thực đơn chi tiết cho 3 bữa/ngày
- ✅ Bài tập cụ thể với thời gian
- ✅ Lưu trữ tiến độ tự động
- ✅ Giao diện responsive, dễ sử dụng
- ✅ Progress tracking real-time

## 🚀 Tính năng chính

### 📋 Kế hoạch 30 ngày
- **Sáng**: Thực đơn bữa sáng giàu protein
- **Trưa**: Bữa trưa cân bằng dinh dưỡng
- **Tối**: Bữa tối nhẹ, ít carb
- **Tập luyện**: Bài tập cụ thể với thời gian
- **Ghi chú**: Lời nhắc và động viên

### 💾 Lưu trữ dữ liệu
- Tự động lưu trạng thái checkbox vào localStorage
- Không mất dữ liệu khi reload trang
- Mỗi ngày có key riêng để quản lý

### 📊 Theo dõi tiến độ
- Progress bar hiển thị % hoàn thành
- Counter: X/150 tasks hoàn thành
- Cập nhật real-time khi tích chọn

### 📱 Responsive Design
- Giao diện tối ưu cho mobile
- Grid layout tự động điều chỉnh
- Font size responsive

## 🛠️ Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 16+ 
- npm hoặc yarn

### Bước 1: Clone repository
```bash
git clone <repository-url>
cd iron-fit-30
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy development server
```bash
npm run dev
```

### Bước 4: Build cho production
```bash
npm run build
```

## 📁 Cấu trúc dự án

```
iron-fit-30/
├── src/
│   ├── App.vue                 # Component chính
│   ├── components/
│   │   └── DayCard.vue         # Component hiển thị từng ngày
│   ├── data/
│   │   └── plan.js             # Dữ liệu kế hoạch 30 ngày
│   ├── assets/
│   │   ├── main.css            # CSS chính
│   │   └── base.css            # CSS cơ bản
│   └── main.js                 # Entry point
├── public/
├── package.json
├── vite.config.js
├── README.md
└── MEMORY_BANK.md
```

## 🎨 Giao diện

### Screenshots
- **Desktop**: Grid layout với nhiều cards
- **Mobile**: Single column layout
- **Progress Bar**: Hiển thị tiến độ hoàn thành
- **Cards**: Hover effects và animations

### Design System
- **Font**: Inter (Google Fonts)
- **Colors**: Blue gradient (#667eea → #764ba2)
- **Spacing**: 8px grid system
- **Shadows**: Subtle elevation effects

## 🔧 Công nghệ sử dụng

### Frontend
- **Vue 3** - Composition API
- **Vite** - Build tool và dev server
- **CSS3** - Flexbox, Grid, Animations
- **LocalStorage** - Data persistence

### Key Features
- **Reactive State Management** - Vue 3 reactivity
- **Component Architecture** - Modular design
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Efficient re-renders

## 📊 Dữ liệu kế hoạch

### Cấu trúc dữ liệu
```javascript
export const plan = {
  1: {
    Sáng: "2 trứng luộc + 1 quả chuối",
    Trưa: "Ức gà áp chảo + rau luộc + 1 chén cơm gạo lứt",
    Tối: "Salad rau củ + 1 quả trứng + 1 lát bơ",
    "Tập luyện": "30' đi bộ nhanh + 3 bài bụng cơ bản",
    "Ghi chú": "Ghi cân nặng, chụp hình."
  }
  // ... 30 ngày
}
```

### Đặc điểm kế hoạch
- **Dinh dưỡng**: Protein cao, ít carb, nhiều rau xanh
- **Tập luyện**: Cardio, HIIT, bài bụng, yoga
- **Tiến độ**: Tăng dần độ khó qua các tuần
- **Ghi chú**: Động viên và nhắc nhở cụ thể

## 🔄 Cách sử dụng

### 1. Xem kế hoạch
- Scroll để xem tất cả 30 ngày
- Mỗi ngày hiển thị 5 mục cần hoàn thành

### 2. Tích chọn hoàn thành
- Click vào checkbox bên cạnh mỗi mục
- Trạng thái được lưu tự động
- Progress bar cập nhật real-time

### 3. Theo dõi tiến độ
- Xem progress bar ở đầu trang
- Counter hiển thị số mục đã hoàn thành
- Tổng cộng 150 mục (30 ngày × 5 mục)

### 4. Lưu trữ dữ liệu
- Dữ liệu tự động lưu vào browser
- Không cần đăng nhập hay tài khoản
- Dữ liệu không bị mất khi reload

## 🚀 Deployment

### Build cho production
```bash
npm run build
```

### Deploy lên Vercel
```bash
npm install -g vercel
vercel
```

### Deploy lên Netlify
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

## 🔮 Tính năng tương lai

### Planned Features
- [ ] Export progress to PDF
- [ ] Share progress on social media
- [ ] Custom meal plans
- [ ] Workout timer
- [ ] Weight tracking
- [ ] Photo before/after
- [ ] Push notifications
- [ ] Dark mode toggle

### Technical Improvements
- [ ] PWA capabilities
- [ ] Offline support
- [ ] Data backup/restore
- [ ] Multi-language support
- [ ] Accessibility improvements

## 🤝 Đóng góp

### Cách đóng góp
1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

### Guidelines
- Sử dụng Vue 3 Composition API
- Tuân thủ coding standards
- Thêm comments cho code phức tạp
- Test trên mobile và desktop

## 📝 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 👨‍💻 Tác giả

**Iron Fit 30 Days Team**

- **Framework**: Vue 3 + Composition API
- **Design**: Mobile-first responsive
- **Data**: LocalStorage persistence
- **Performance**: Optimized for speed

## 🙏 Cảm ơn

- Vue.js team cho framework tuyệt vời
- Vite team cho build tool nhanh
- Google Fonts cho typography đẹp
- Cộng đồng Vue.js Việt Nam

---

**💪 Kiên trì là chìa khóa thành công!**

*Hãy bắt đầu hành trình 30 ngày của bạn ngay hôm nay!*
