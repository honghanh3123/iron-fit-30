# 🏋️‍♂️ Kỷ Luật Thép 30 Ngày

<div align="center">
  <img src="src/assets/logo.svg" alt="Iron Fit 30 Days Logo" width="120" height="120">
  <h1>Iron Fit 30 Days</h1>
  <p><strong>Ứng dụng theo dõi kế hoạch dinh dưỡng và tập luyện 30 ngày</strong></p>
  
  [![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=for-the-badge&logo=vue.js)](https://vuejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
</div>

---

## 🎯 **Tính năng chính**

### ✅ **Kế hoạch 30 ngày**
- 📅 Hiển thị kế hoạch dinh dưỡng và tập luyện chi tiết
- ✅ Checkbox tracking với localStorage
- 🎯 Progress bar tổng thể và theo ngày
- 🌟 Highlight ngày hiện tại với badge "Hôm nay"
- 📱 Responsive design cho mobile

### 🛒 **Danh sách mua sắm thông minh**
- 🥖 **Thực phẩm đồ khô:** Mua 1 lần/tháng (yến mạch, gạo lứt, hạt chia, hạt mix)
- 🥩 **Thực phẩm tươi:** Mua theo tuần (4 tuần)
- ✅ Checkbox tracking cho từng tuần
- 💰 Tiết kiệm ~425,000 VNĐ/tháng
- 📊 Progress tracking cho shopping

### 🏃‍♂️ **Lịch trình đặc biệt**
- **Thứ 2-6:** Bỏ bữa trưa (ăn ở công ty), chỉ bữa sáng và tối
- **Cuối tuần:** Đầy đủ 3 bữa với đa dạng thực phẩm
- 🥗 Tập trung vào protein nạc và rau xanh

---

## 🚀 **Cài đặt và chạy**

```bash
# Clone repository
git clone https://github.com/honghanh3123/iron-fit-30.git
cd iron-fit-30

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build
```

---

## 📱 **Screenshots**

<div align="center">
  <img src="https://via.placeholder.com/300x200/667eea/ffffff?text=Plan+View" alt="Plan View" width="300">
  <img src="https://via.placeholder.com/300x200/764ba2/ffffff?text=Shopping+List" alt="Shopping List" width="300">
</div>

---

## 🛠️ **Công nghệ sử dụng**

- **Frontend:** Vue 3 + Composition API
- **Build Tool:** Vite
- **Styling:** CSS với responsive design
- **Storage:** localStorage
- **Icons:** SVG custom

---

## 📊 **Cấu trúc dự án**

```
iron-fit-30/
├── src/
│   ├── components/
│   │   ├── DayCard.vue          # Card hiển thị từng ngày
│   │   └── ShoppingList.vue     # Danh sách mua sắm
│   ├── data/
│   │   └── plan.js              # Dữ liệu kế hoạch 30 ngày
│   ├── utils/
│   │   └── dateUtils.js         # Tiện ích xử lý ngày tháng
│   ├── assets/
│   │   └── logo.svg             # Logo project
│   ├── App.vue                  # Component chính
│   └── main.js                  # Entry point
├── public/
│   └── favicon.svg              # Favicon
├── SHOPPING_LIST.md             # Danh sách mua sắm chi tiết
├── MEMORY_BANK.md               # Tài liệu kỹ thuật
└── README.md                    # Tài liệu này
```

---

## 🛒 **Danh sách mua sắm**

### **Thực phẩm đồ khô (MUA 1 LẦN/THÁNG)**
- 🥖 **Yến mạch** - 1kg
- 🍚 **Gạo lứt** - 1kg (chỉ cuối tuần)
- 🌱 **Hạt chia** - 200g
- 🥜 **Hạt mix** - 500g

### **Thực phẩm mua theo tuần (4 TUẦN)**
- 🥖 Bánh mì đen
- 🥛 Sữa không đường, sữa hạt, sữa chua
- 🥩 Ức gà, thịt bò, cá (lượng giảm 50%)
- 🥚 Trứng gà, đậu phụ, đậu hũ non
- 🥬 Rau củ đa dạng theo tuần
- 🍎 Trái cây theo mùa
- 🧂 Gia vị và dầu ăn
- 🥫 Đồ hộp và thực phẩm khô

---

## 💡 **Lợi ích**

- ✅ **Tiết kiệm thời gian:** Chỉ mua 4 loại đồ khô 1 lần/tháng
- ✅ **Thực phẩm tươi:** Mua theo tuần giúp tươi ngon hơn
- ✅ **Tiết kiệm chi phí:** Giảm 50% lượng thịt/cá
- ✅ **Quản lý dễ dàng:** Checkbox tracking cho từng tuần
- ✅ **Progress tracking:** Theo dõi tiến độ rõ ràng
- ✅ **Responsive:** Tối ưu cho mobile

---

## 📅 **Lịch trình**

- **Ngày bắt đầu:** 23/06/2025
- **Thời gian:** 30 ngày
- **Tần suất:** 7 ngày/tuần
- **Bữa ăn:** 2-3 bữa/ngày tùy ngày

---

## 🤝 **Đóng góp**

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

---

## 📄 **License**

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

---

## 👨‍💻 **Tác giả**

**Hồng Hạnh** - [GitHub](https://github.com/honghanh3123)

---

<div align="center">
  <p>💪 <strong>Kỷ Luật Thép - Thành Công Bền Vững!</strong> 💪</p>
  <p>Made with ❤️ by Hồng Hạnh</p>
</div>
