# 🧠 MEMORY BANK - Kỷ Luật Thép 30 Ngày

## 📋 **TỔNG QUAN DỰ ÁN**

**Tên dự án:** Kỷ Luật Thép 30 Ngày (Iron Fit 30 Days)  
**Framework:** Vue 3 + Composition API  
**Mục đích:** Ứng dụng theo dõi kế hoạch dinh dưỡng và tập luyện 30 ngày  
**Ngày bắt đầu:** 23/06/2025  

---

## 🏗️ **KIẾN TRÚC ỨNG DỤNG**

### **Cấu trúc thư mục:**
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
│   ├── App.vue                  # Component chính
│   └── main.js                  # Entry point
├── SHOPPING_LIST.md             # Danh sách mua sắm chi tiết
├── MEMORY_BANK.md               # Tài liệu này
├── README.md                    # Hướng dẫn sử dụng
└── CHANGELOG.md                 # Lịch sử thay đổi
```

### **Các component chính:**

#### **1. App.vue**
- **Chức năng:** Component chính, quản lý state toàn cục
- **Features:**
  - Hiển thị progress bar tổng thể
  - Tab navigation (Plan ↔ Shopping List)
  - Highlight ngày hiện tại
  - Auto-scroll đến ngày hiện tại
  - Hiển thị thông tin "Hôm nay"
- **State management:**
  - `totalProgress`: Tiến độ tổng thể
  - `currentDay`: Ngày hiện tại trong kế hoạch
  - `activeTab`: Tab đang active

#### **2. DayCard.vue**
- **Chức năng:** Hiển thị thông tin từng ngày
- **Features:**
  - 5 sections: Morning, Noon, Evening, Workout, Notes
  - Checkbox cho từng mục (lưu vào localStorage)
  - Badge "Hôm nay" cho ngày hiện tại
  - Progress tracking cho từng ngày
- **Props:**
  - `day`: Dữ liệu ngày
  - `dayNumber`: Số thứ tự ngày
  - `isToday`: Có phải ngày hôm nay không

#### **3. ShoppingList.vue**
- **Chức năng:** Quản lý danh sách mua sắm
- **Features:**
  - **Thực phẩm đồ khô (mua 1 lần/tháng):**
    - Yến mạch, gạo lứt, hạt chia, hạt mix
  - **Thực phẩm mua theo tuần (4 tuần):**
    - Bánh mì, sữa, thịt, cá, trứng, rau, trái cây, gia vị, đồ hộp
  - Checkbox tracking với localStorage
  - Progress bar cho từng tuần
  - Reset function cho từng tuần
- **Navigation:** Tab chuyển đổi giữa các tuần

---

## 📊 **DỮ LIỆU & STATE MANAGEMENT**

### **1. Plan Data (plan.js)**
```javascript
// Cấu trúc dữ liệu mỗi ngày
{
  morning: { items: [...], completed: false },
  noon: { items: [...], completed: false },      // BỎ BỮA TRƯA THỨ 2-6
  evening: { items: [...], completed: false },
  workout: { items: [...], completed: false },
  notes: { items: [...], completed: false }
}
```

### **2. Shopping List Data**
```javascript
// Thực phẩm đồ khô (mua 1 lần/tháng)
dryFoods: {
  grains: [
    { id: 1, name: 'Yến mạch', quantity: '1kg', completed: false },
    { id: 2, name: 'Gạo lứt', quantity: '1kg (chỉ cuối tuần)', completed: false },
    { id: 3, name: 'Hạt chia', quantity: '200g', completed: false },
    { id: 4, name: 'Hạt mix', quantity: '500g', completed: false }
  ]
}

// Thực phẩm mua theo tuần
weeklyFoods: {
  week1: {
    bread: [...], dairy: [...], meat: [...], eggs: [...],
    vegetables: [...], fruits: [...], seasonings: [...], canned: [...]
  },
  // week2, week3, week4 tương tự
}
```

### **3. LocalStorage Keys**
- `dayCard_${dayNumber}`: Trạng thái checkbox của từng ngày
- `shoppingList_dryFoods`: Trạng thái thực phẩm đồ khô
- `shoppingList_weeklyFoods`: Trạng thái thực phẩm theo tuần

---

## 🎯 **TÍNH NĂNG CHÍNH**

### **1. Progress Tracking**
- **Tổng thể:** Tính % hoàn thành toàn bộ kế hoạch
- **Theo ngày:** Tính % hoàn thành từng ngày
- **Shopping List:** Tính % mua sắm theo tuần và đồ khô

### **2. Today Highlighting**
- **Badge "Hôm nay":** Hiển thị trên ngày hiện tại
- **Auto-scroll:** Tự động cuộn đến ngày hiện tại
- **Special styling:** Border và shadow đặc biệt
- **Today info card:** Hiển thị thông tin ngày hiện tại

### **3. Responsive Design**
- **Mobile-first:** Tối ưu cho điện thoại
- **Grid layout:** Responsive grid cho day cards
- **Tab navigation:** Chuyển đổi mượt mà

### **4. Data Persistence**
- **localStorage:** Lưu trạng thái checkbox
- **Auto-save:** Tự động lưu khi có thay đổi
- **Load on startup:** Khôi phục trạng thái khi reload

---

## 🛒 **DANH SÁCH MUA SẮM - CẤU TRÚC MỚI**

### **Thực phẩm đồ khô (MUA 1 LẦN/THÁNG)**
- **Yến mạch** - 1kg
- **Gạo lứt** - 1kg (chỉ cuối tuần)
- **Hạt chia** - 200g
- **Hạt mix** - 500g

### **Thực phẩm mua theo tuần (4 TUẦN)**
Mỗi tuần bao gồm:
- **Bánh mì & Ngũ cốc:** Bánh mì đen
- **Sữa & Đồ uống:** Sữa không đường, sữa hạt, sữa chua
- **Thịt & Cá:** Ức gà, thịt bò, cá (lượng giảm 50% do bỏ bữa trưa)
- **Trứng & Đậu:** Trứng gà, đậu phụ, đậu hũ non
- **Rau củ:** Đa dạng theo tuần
- **Trái cây:** Theo mùa
- **Gia vị & Dầu:** Dầu ô liu, bơ, mật ong, gừng, hành tỏi
- **Đồ hộp & Khô:** Cá ngừ, cá hồi, rong biển, nấm

### **Tiết kiệm chi phí:**
- **Giảm 50% lượng thịt/cá** do bỏ bữa trưa thứ 2-6
- **Tiết kiệm ~425,000 VNĐ/tháng**
- **Tổng chi phí:** ~1,125,000 VNĐ/tháng

---

## 📅 **LỊCH TRÌNH ĐẶC BIỆT**

### **Thứ 2-6 (Ngày 1-5, 8-12, 15-19, 22-26):**
- **Bỏ bữa trưa** (ăn ở công ty)
- **Chỉ bữa sáng và tối**
- **Giảm lượng thịt/cá** 50%
- **Tập trung vào protein nạc**

### **Cuối tuần (Ngày 6-7, 13-14, 20-21, 27-30):**
- **Đầy đủ 3 bữa**
- **Lượng thịt/cá bình thường**
- **Đa dạng thực phẩm hơn**

---

## 🔧 **UTILITIES & HELPERS**

### **dateUtils.js**
```javascript
// Tính ngày hiện tại trong kế hoạch
export function getCurrentDayInPlan() {
  const planStartDate = new Date('2025-06-23')
  const today = new Date()
  const diffTime = today.getTime() - planStartDate.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return Math.max(1, Math.min(30, diffDays + 1))
}

// Kiểm tra có phải ngày hôm nay không
export function isTodayInPlan(dayNumber) {
  return dayNumber === getCurrentDayInPlan()
}
```

---

## 🎨 **UI/UX FEATURES**

### **Design System:**
- **Font:** Google Fonts (Inter)
- **Colors:** Modern color palette
- **Animations:** Smooth transitions
- **Icons:** Emoji-based icons

### **Interactive Elements:**
- **Checkboxes:** Animated với localStorage
- **Progress bars:** Visual feedback
- **Hover effects:** Enhanced UX
- **Responsive tabs:** Mobile-friendly

---

## 🚀 **FUTURE ENHANCEMENTS**

### **Đã hoàn thành:**
✅ Highlight ngày hiện tại  
✅ Shopping list với checkbox  
✅ Responsive design  
✅ Data persistence  
✅ Progress tracking  
✅ Bỏ bữa trưa thứ 2-6  
✅ Cấu trúc mua sắm mới  

### **Có thể thêm:**
🔲 Detailed statistics  
🔲 Reminders & notifications  
🔲 Personal notes per day  
🔲 Quick actions  
🔲 Advanced analytics  
🔲 AI suggestions  
🔲 Smart sync  

---

## 📝 **NOTES & DECISIONS**

### **Quyết định thiết kế:**
1. **Bỏ bữa trưa thứ 2-6:** Phù hợp với lịch làm việc
2. **Cấu trúc mua sắm mới:** Chỉ 4 loại đồ khô, còn lại theo tuần
3. **Progress calculation:** Điều chỉnh theo bữa ăn thực tế
4. **Today highlighting:** UX tốt hơn cho tracking

### **Technical decisions:**
1. **Composition API:** Modern Vue 3 approach
2. **localStorage:** Simple persistence
3. **Responsive grid:** Mobile-first design
4. **Emoji icons:** No external dependencies

---

**📅 Cập nhật lần cuối:** Tháng 12/2024  
**🔄 Version:** 2.0 - Shopping List Restructure 