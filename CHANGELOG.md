# 📝 Changelog

Tất cả những thay đổi quan trọng trong dự án sẽ được ghi lại trong file này.

Format dựa trên [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
và dự án tuân thủ [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2024-12-19

### 🎉 Added - Tính năng mới
- **🎯 Highlight ngày hiện tại** - Badge "Hôm nay" với animation pulse
- **📅 Auto-scroll** - Tự động scroll đến ngày hiện tại khi load app
- **📊 Today Progress** - Progress bar riêng cho ngày hiện tại ở header
- **📅 Today Info Card** - Thông tin chi tiết ngày hiện tại với format tiếng Việt
- **🛠️ Date Utilities** - Utility functions để quản lý ngày tháng
- **🎨 Enhanced Visual Design** - Border và shadow đặc biệt cho ngày hiện tại

### 🎨 UI/UX Improvements
- **Today Badge** - Badge "Hôm nay" với gradient và pulse animation
- **Today Card Highlight** - Border xanh đặc biệt và shadow cho ngày hiện tại
- **Today Info Header** - Card thông tin ngày hiện tại với gradient background
- **Smooth Scrolling** - Auto-scroll mượt mà đến ngày hiện tại
- **Responsive Today Features** - Tất cả tính năng today đều responsive

### 🔧 Technical Features
- **dateUtils.js** - Centralized date management utilities
- **getCurrentDay()** - Tính toán chính xác ngày hiện tại trong kế hoạch
- **isToday()** - Kiểm tra ngày hiện tại
- **formatDate()** - Format ngày tháng tiếng Việt
- **getCurrentDayInfo()** - Thông tin chi tiết ngày hiện tại
- **Enhanced Component Communication** - Better parent-child data flow

### 📊 Data Structure
- **Today Progress Tracking** - Theo dõi tiến độ riêng cho ngày hiện tại
- **Localized Date Formatting** - Format ngày tháng theo locale Việt Nam
- **Smart Date Calculations** - Tính toán ngày tháng chính xác

### 📱 Responsive Breakpoints
- **Today Badge Mobile** - Responsive badge size cho mobile
- **Today Info Mobile** - Layout responsive cho today info card
- **Auto-scroll Mobile** - Smooth scrolling hoạt động tốt trên mobile

### 🎯 Core Components
- **App.vue** - Thêm today info card và progress tracking
- **DayCard.vue** - Thêm today detection và auto-scroll
- **dateUtils.js** - Utility functions mới cho date management

### 🔄 Data Flow
1. **Initial Load**: Load plan data → Mount DayCard components → Load localStorage state → **NEW:** Auto-scroll to today
2. **User Interaction**: Click checkbox → Update local state → Save to localStorage → Emit event → Update progress → **NEW:** Update today's progress
3. **State Persistence**: Auto-save on every change, JSON serialization

### 📈 Performance
- **Efficient Date Calculations** - Cached date utilities
- **Optimized Scrolling** - Smooth scroll with timeout
- **Smart Re-renders** - Only update today-related components when needed

### 🛠️ Development Setup
- **Utility Functions** - Modular date management
- **Better Code Organization** - Separated concerns with utils
- **Enhanced Maintainability** - Centralized date logic

### 📋 Features Breakdown
- ✅ Highlight ngày hiện tại với badge và border đặc biệt
- ✅ Auto-scroll đến ngày hiện tại khi load app
- ✅ Progress tracking riêng cho ngày hiện tại
- ✅ Thông tin chi tiết ngày hiện tại ở header
- ✅ Date utilities để quản lý ngày tháng
- ✅ Responsive design cho tất cả tính năng today
- ✅ Smooth animations và transitions

### 🎨 Design System
- **Today Colors**: Blue gradient (#667eea → #764ba2) cho today elements
- **Today Badge**: Pulse animation với scale và shadow
- **Today Card**: Special border và background gradient
- **Today Info**: Gradient card với white text

### 🔮 Future Roadmap
- [ ] Quick actions cho ngày hiện tại
- [ ] Detailed statistics và analytics
- [ ] Export progress to PDF
- [ ] Share on social media
- [ ] Custom meal plans
- [ ] Workout timer
- [ ] Weight tracking
- [ ] Photo before/after
- [ ] Push notifications
- [ ] Dark mode toggle

---

## [1.0.0] - 2024-12-19

### 🎉 Added - Tính năng mới
- **Kế hoạch 30 ngày hoàn chỉnh** với thực đơn dinh dưỡng và bài tập chi tiết
- **LocalStorage integration** - Lưu trữ trạng thái checkbox tự động
- **Progress tracking** - Hiển thị tiến độ hoàn thành real-time
- **Responsive design** - Giao diện tối ưu cho mobile và desktop
- **Custom checkbox design** - Giao diện checkbox đẹp mắt
- **Hover effects và animations** - Trải nghiệm người dùng mượt mà
- **Progress bar** - Hiển thị % hoàn thành với animation
- **Grid layout** - Sắp xếp cards tự động theo kích thước màn hình

### 🎨 UI/UX Improvements
- **Gradient background** - Nền gradient xanh đẹp mắt
- **Card design** - Cards với shadow và border radius
- **Typography** - Sử dụng font Inter từ Google Fonts
- **Color scheme** - Bảng màu nhất quán
- **Spacing system** - Hệ thống khoảng cách 8px grid
- **Mobile-first approach** - Thiết kế ưu tiên mobile

### 🔧 Technical Features
- **Vue 3 Composition API** - Sử dụng modern Vue 3 features
- **Component architecture** - Cấu trúc component modular
- **Reactive state management** - Quản lý state hiệu quả
- **Event handling** - Xử lý events giữa parent-child components
- **Lifecycle hooks** - onMounted, watch, computed
- **Performance optimization** - Tối ưu re-renders

### 📊 Data Structure
- **30-day meal plan** - Thực đơn 3 bữa/ngày chi tiết
- **Workout routines** - Bài tập cụ thể với thời gian
- **Progress notes** - Ghi chú động viên và nhắc nhở
- **LocalStorage keys** - Hệ thống key có cấu trúc

### 📱 Responsive Breakpoints
- **Mobile**: max-width: 480px
- **Tablet**: max-width: 768px  
- **Desktop**: min-width: 769px

### 🎯 Core Components
- **App.vue** - Component chính với progress tracking
- **DayCard.vue** - Component hiển thị từng ngày
- **plan.js** - Dữ liệu kế hoạch 30 ngày
- **main.css** - Global styles và typography

### 🔄 Data Flow
1. **Initial Load**: Load plan data → Mount DayCard components → Load localStorage state
2. **User Interaction**: Click checkbox → Update local state → Save to localStorage → Emit event → Update progress
3. **State Persistence**: Auto-save on every change, JSON serialization

### 📈 Performance
- **Efficient re-renders** - Vue 3 reactivity system
- **Minimal DOM updates** - Virtual DOM diffing
- **Optimized CSS** - Scoped styles prevent conflicts
- **Lazy loading** - Components load on demand

### 🛠️ Development Setup
- **Vite** - Fast build tool and dev server
- **Hot reload** - Instant feedback during development
- **ESLint** - Code quality and consistency
- **Modern JavaScript** - ES6+ features

### 📋 Features Breakdown
- ✅ Hiển thị 30 ngày với 5 mục/ngày
- ✅ Checkbox cho từng mục
- ✅ Lưu trạng thái vào localStorage
- ✅ Tự động load lại trạng thái
- ✅ Progress tracking (X/150)
- ✅ Responsive design
- ✅ Beautiful UI/UX
- ✅ Smooth animations
- ✅ Mobile optimized

### 🎨 Design System
- **Colors**: Blue gradient (#667eea → #764ba2)
- **Font**: Inter (Google Fonts)
- **Spacing**: 8px grid system
- **Shadows**: Subtle elevation effects
- **Borders**: Rounded corners (8px, 12px, 16px)

---

## [Unreleased]

### 🚀 Planned Features
- **Quick actions** - Nút hoàn thành tất cả, reset ngày
- **Detailed statistics** - Thống kê chi tiết theo tuần/tháng
- **Export functionality** - Xuất tiến độ ra PDF
- **Social sharing** - Chia sẻ trên mạng xã hội
- **Customization** - Tùy chỉnh kế hoạch
- **Advanced tracking** - Theo dõi cân nặng, hình ảnh
- **Notifications** - Nhắc nhở push notifications

### 🔧 Technical Improvements
- **PWA support** - Progressive Web App features
- **Offline mode** - Hoạt động offline
- **Data backup** - Sao lưu và khôi phục dữ liệu
- **Multi-language** - Hỗ trợ đa ngôn ngữ
- **Accessibility** - Cải thiện accessibility

---

**📅 Release History:**
- **v1.0.0** - Initial release với đầy đủ tính năng cơ bản
- **v1.1.0** - Today highlighting và auto-navigation
- **v1.2.0** - Planned: Quick actions và detailed statistics
- **v2.0.0** - Planned: Major UI/UX overhaul

---

**💡 Notes:**
- Tất cả thay đổi đều được test trên mobile và desktop
- Performance được tối ưu cho tốc độ load nhanh
- Code tuân thủ Vue 3 best practices
- Accessibility được xem xét trong thiết kế
- Date utilities được tối ưu cho accuracy và performance 