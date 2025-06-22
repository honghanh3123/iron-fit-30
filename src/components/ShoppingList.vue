<template>
  <div class="shopping-list">
    <div class="header">
      <h2>🛒 Danh Sách Thực Phẩm</h2>
      <div class="progress-info">
        <span class="progress-text">Đã mua: {{ completedCount }}/{{ totalCount }}</span>
        <div class="progress-bar">
          <div 
            class="progress-fill" 
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <!-- Thực phẩm đồ khô -->
    <div class="section">
      <h3>📅 Thực phẩm đồ khô (Mua 1 lần cho cả tháng)</h3>
      
      <div class="category">
        <h4>🥖 Bánh mì & Ngũ cốc</h4>
        <div class="items">
          <label 
            v-for="item in dryFoods.grains" 
            :key="item.id"
            class="item"
            :class="{ completed: item.completed }"
          >
            <input 
              type="checkbox" 
              :checked="item.completed"
              @change="toggleItem('grains', item.id)"
            >
            <span class="item-text">
              <strong>{{ item.name }}</strong> - {{ item.quantity }}
            </span>
          </label>
        </div>
      </div>
    </div>

    <!-- Thực phẩm tươi theo tuần -->
    <div class="section">
      <h3>📋 Thực phẩm tươi (Mua theo tuần)</h3>
      
      <div class="week-selector">
        <button 
          v-for="week in 4" 
          :key="week"
          @click="currentWeek = week"
          :class="{ active: currentWeek === week }"
          class="week-btn"
        >
          Tuần {{ week }}
        </button>
      </div>

      <div v-if="currentWeek === 1" class="week-content">
        <h4>🥩 TUẦN 1 (Ngày 1-7)</h4>
        
        <div class="category">
          <h5>Bánh mì & Ngũ cốc</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week1.bread" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(1, 'bread', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Sữa & Đồ uống</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week1.dairy" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(1, 'dairy', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Thịt & Cá</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week1.meat" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(1, 'meat', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Trứng & Đậu</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week1.eggs" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(1, 'eggs', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Rau củ</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week1.vegetables" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(1, 'vegetables', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Trái cây</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week1.fruits" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(1, 'fruits', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Gia vị & Dầu</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week1.seasonings" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(1, 'seasonings', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Đồ hộp & Khô</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week1.canned" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(1, 'canned', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>
      </div>

      <div v-if="currentWeek === 2" class="week-content">
        <h4>🥩 TUẦN 2 (Ngày 8-14)</h4>
        
        <div class="category">
          <h5>Bánh mì & Ngũ cốc</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week2.bread" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(2, 'bread', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Sữa & Đồ uống</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week2.dairy" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(2, 'dairy', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Thịt & Cá</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week2.meat" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(2, 'meat', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Trứng & Đậu</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week2.eggs" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(2, 'eggs', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Rau củ</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week2.vegetables" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(2, 'vegetables', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Trái cây</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week2.fruits" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(2, 'fruits', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Gia vị & Dầu</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week2.seasonings" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(2, 'seasonings', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Đồ hộp & Khô</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week2.canned" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(2, 'canned', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>
      </div>

      <div v-if="currentWeek === 3" class="week-content">
        <h4>🥩 TUẦN 3 (Ngày 15-21)</h4>
        
        <div class="category">
          <h5>Bánh mì & Ngũ cốc</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week3.bread" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(3, 'bread', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Sữa & Đồ uống</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week3.dairy" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(3, 'dairy', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Thịt & Cá</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week3.meat" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(3, 'meat', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Trứng & Đậu</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week3.eggs" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(3, 'eggs', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Rau củ</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week3.vegetables" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(3, 'vegetables', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Trái cây</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week3.fruits" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(3, 'fruits', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Gia vị & Dầu</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week3.seasonings" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(3, 'seasonings', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Đồ hộp & Khô</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week3.canned" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(3, 'canned', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>
      </div>

      <div v-if="currentWeek === 4" class="week-content">
        <h4>🥩 TUẦN 4 (Ngày 22-30)</h4>
        
        <div class="category">
          <h5>Bánh mì & Ngũ cốc</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week4.bread" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(4, 'bread', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Sữa & Đồ uống</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week4.dairy" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(4, 'dairy', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Thịt & Cá</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week4.meat" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(4, 'meat', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Trứng & Đậu</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week4.eggs" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(4, 'eggs', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Rau củ</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week4.vegetables" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(4, 'vegetables', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Trái cây</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week4.fruits" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(4, 'fruits', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Gia vị & Dầu</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week4.seasonings" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(4, 'seasonings', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>

        <div class="category">
          <h5>Đồ hộp & Khô</h5>
          <div class="items">
            <label 
              v-for="item in weeklyFoods.week4.canned" 
              :key="item.id"
              class="item"
              :class="{ completed: item.completed }"
            >
              <input 
                type="checkbox" 
                :checked="item.completed"
                @change="toggleWeeklyItem(4, 'canned', item.id)"
              >
              <span class="item-text">
                <strong>{{ item.name }}</strong> - {{ item.quantity }}
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="actions">
      <button @click="resetAll" class="reset-btn">🔄 Reset tất cả</button>
      <button @click="markAllCompleted" class="complete-btn">✅ Đánh dấu tất cả</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue'

export default {
  name: 'ShoppingList',
  setup() {
    const currentWeek = ref(1)
    
    // Thực phẩm đồ khô
    const dryFoods = ref({
      grains: [
        { id: 1, name: 'Yến mạch', quantity: '1kg', completed: false },
        { id: 2, name: 'Gạo lứt', quantity: '1kg (chỉ cuối tuần)', completed: false },
        { id: 3, name: 'Hạt chia', quantity: '200g', completed: false },
        { id: 4, name: 'Hạt mix', quantity: '500g', completed: false }
      ]
    })

    // Thực phẩm tươi theo tuần
    const weeklyFoods = ref({
      week1: {
        bread: [
          { id: 1, name: 'Bánh mì đen', quantity: '1 ổ (tủ đông)', completed: false }
        ],
        dairy: [
          { id: 2, name: 'Sữa không đường', quantity: '500ml', completed: false },
          { id: 3, name: 'Sữa hạt', quantity: '500ml', completed: false },
          { id: 4, name: 'Sữa chua không đường', quantity: '3-4 hũ', completed: false }
        ],
        meat: [
          { id: 5, name: 'Ức gà', quantity: '500g (chỉ bữa tối)', completed: false },
          { id: 6, name: 'Thịt bò', quantity: '250g (chỉ bữa tối)', completed: false },
          { id: 7, name: 'Cá hồi', quantity: '150g (chỉ bữa tối)', completed: false },
          { id: 8, name: 'Cá thu', quantity: '300g (cuối tuần)', completed: false }
        ],
        eggs: [
          { id: 9, name: 'Trứng gà', quantity: '15 quả', completed: false },
          { id: 10, name: 'Đậu phụ', quantity: '4-5 miếng', completed: false },
          { id: 11, name: 'Đậu hũ non', quantity: '1-2 hũ', completed: false }
        ],
        vegetables: [
          { id: 12, name: 'Rau luộc', quantity: '1kg', completed: false },
          { id: 13, name: 'Bí xanh', quantity: '2 quả', completed: false },
          { id: 14, name: 'Khoai lang', quantity: '500g (giảm)', completed: false },
          { id: 15, name: 'Bông cải xanh', quantity: '2 cái', completed: false },
          { id: 16, name: 'Cải thìa', quantity: '1kg', completed: false },
          { id: 17, name: 'Khoai tây', quantity: '500g (cuối tuần)', completed: false },
          { id: 18, name: 'Dưa leo', quantity: '1kg', completed: false },
          { id: 19, name: 'Cà chua', quantity: '500g', completed: false }
        ],
        fruits: [
          { id: 20, name: 'Chuối', quantity: '1 nải', completed: false },
          { id: 21, name: 'Táo', quantity: '1kg', completed: false },
          { id: 22, name: 'Bưởi', quantity: '2 quả', completed: false },
          { id: 23, name: 'Cam', quantity: '1kg', completed: false }
        ],
        seasonings: [
          { id: 24, name: 'Dầu ô liu', quantity: '125ml', completed: false },
          { id: 25, name: 'Bơ', quantity: '1 hộp nhỏ', completed: false },
          { id: 26, name: 'Mật ong', quantity: '1 chai nhỏ', completed: false },
          { id: 27, name: 'Gừng', quantity: '1 củ', completed: false },
          { id: 28, name: 'Hành tỏi', quantity: '250g', completed: false }
        ],
        canned: [
          { id: 29, name: 'Cá ngừ hộp', quantity: '1-2 hộp', completed: false },
          { id: 30, name: 'Cá hồi hộp', quantity: '1 hộp', completed: false },
          { id: 31, name: 'Rong biển khô', quantity: '1 gói', completed: false },
          { id: 32, name: 'Nấm khô', quantity: '1 gói', completed: false }
        ]
      },
      week2: {
        bread: [
          { id: 1, name: 'Bánh mì đen', quantity: '1 ổ (tủ đông)', completed: false }
        ],
        dairy: [
          { id: 2, name: 'Sữa không đường', quantity: '500ml', completed: false },
          { id: 3, name: 'Sữa hạt', quantity: '500ml', completed: false },
          { id: 4, name: 'Sữa chua không đường', quantity: '3-4 hũ', completed: false }
        ],
        meat: [
          { id: 5, name: 'Ức gà', quantity: '750g (chỉ bữa tối)', completed: false },
          { id: 6, name: 'Cá basa', quantity: '500g (cuối tuần)', completed: false },
          { id: 7, name: 'Thịt bò', quantity: '250g (chỉ bữa tối)', completed: false },
          { id: 8, name: 'Cá hấp', quantity: '300g (cuối tuần)', completed: false }
        ],
        eggs: [
          { id: 9, name: 'Trứng gà', quantity: '15 quả', completed: false },
          { id: 10, name: 'Đậu phụ', quantity: '4-5 miếng', completed: false },
          { id: 11, name: 'Đậu hũ non', quantity: '1-2 hũ', completed: false }
        ],
        vegetables: [
          { id: 12, name: 'Rau muống', quantity: '1kg', completed: false },
          { id: 13, name: 'Bắp cải', quantity: '2 cái', completed: false },
          { id: 14, name: 'Bông cải xanh', quantity: '2 cái', completed: false },
          { id: 15, name: 'Khoai lang', quantity: '500g (giảm)', completed: false },
          { id: 16, name: 'Bí đỏ', quantity: '1 quả', completed: false },
          { id: 17, name: 'Cải chíp', quantity: '1kg', completed: false },
          { id: 18, name: 'Dưa leo', quantity: '1kg', completed: false }
        ],
        fruits: [
          { id: 19, name: 'Thanh long', quantity: '2 quả', completed: false },
          { id: 20, name: 'Cam', quantity: '1kg', completed: false },
          { id: 21, name: 'Táo', quantity: '1kg', completed: false }
        ],
        seasonings: [
          { id: 22, name: 'Dầu ô liu', quantity: '125ml', completed: false },
          { id: 23, name: 'Bơ', quantity: '1 hộp nhỏ', completed: false },
          { id: 24, name: 'Mật ong', quantity: '1 chai nhỏ', completed: false },
          { id: 25, name: 'Gừng', quantity: '1 củ', completed: false },
          { id: 26, name: 'Hành tỏi', quantity: '250g', completed: false }
        ],
        canned: [
          { id: 27, name: 'Cá ngừ hộp', quantity: '1-2 hộp', completed: false },
          { id: 28, name: 'Cá hồi hộp', quantity: '1 hộp', completed: false },
          { id: 29, name: 'Rong biển khô', quantity: '1 gói', completed: false },
          { id: 30, name: 'Nấm khô', quantity: '1 gói', completed: false }
        ]
      },
      week3: {
        bread: [
          { id: 1, name: 'Bánh mì đen', quantity: '1 ổ (tủ đông)', completed: false }
        ],
        dairy: [
          { id: 2, name: 'Sữa không đường', quantity: '500ml', completed: false },
          { id: 3, name: 'Sữa hạt', quantity: '500ml', completed: false },
          { id: 4, name: 'Sữa chua không đường', quantity: '3-4 hũ', completed: false }
        ],
        meat: [
          { id: 5, name: 'Ức gà', quantity: '500g (chỉ bữa tối)', completed: false },
          { id: 6, name: 'Cá hồi', quantity: '300g (cuối tuần)', completed: false },
          { id: 7, name: 'Cá rô phi', quantity: '500g (cuối tuần)', completed: false },
          { id: 8, name: 'Cá thu', quantity: '300g (cuối tuần)', completed: false }
        ],
        eggs: [
          { id: 9, name: 'Trứng gà', quantity: '15 quả', completed: false },
          { id: 10, name: 'Đậu phụ', quantity: '4-5 miếng', completed: false },
          { id: 11, name: 'Đậu hũ non', quantity: '1-2 hũ', completed: false }
        ],
        vegetables: [
          { id: 12, name: 'Bông cải xanh', quantity: '2 cái', completed: false },
          { id: 13, name: 'Cải bó xôi', quantity: '1kg', completed: false },
          { id: 14, name: 'Rau mầm', quantity: '500g', completed: false },
          { id: 15, name: 'Bí đỏ', quantity: '1 quả', completed: false },
          { id: 16, name: 'Bắp cải', quantity: '1 cái', completed: false },
          { id: 17, name: 'Cải chíp', quantity: '1kg', completed: false },
          { id: 18, name: 'Nấm tươi', quantity: '500g', completed: false }
        ],
        fruits: [
          { id: 19, name: 'Táo', quantity: '1kg', completed: false },
          { id: 20, name: 'Cam', quantity: '1kg', completed: false }
        ],
        seasonings: [
          { id: 21, name: 'Dầu ô liu', quantity: '125ml', completed: false },
          { id: 22, name: 'Bơ', quantity: '1 hộp nhỏ', completed: false },
          { id: 23, name: 'Mật ong', quantity: '1 chai nhỏ', completed: false },
          { id: 24, name: 'Gừng', quantity: '1 củ', completed: false },
          { id: 25, name: 'Hành tỏi', quantity: '250g', completed: false }
        ],
        canned: [
          { id: 26, name: 'Cá ngừ hộp', quantity: '1-2 hộp', completed: false },
          { id: 27, name: 'Cá hồi hộp', quantity: '1 hộp', completed: false },
          { id: 28, name: 'Rong biển khô', quantity: '1 gói', completed: false },
          { id: 29, name: 'Nấm khô', quantity: '1 gói', completed: false }
        ]
      },
      week4: {
        bread: [
          { id: 1, name: 'Bánh mì đen', quantity: '1 ổ (tủ đông)', completed: false }
        ],
        dairy: [
          { id: 2, name: 'Sữa không đường', quantity: '500ml', completed: false },
          { id: 3, name: 'Sữa hạt', quantity: '500ml', completed: false },
          { id: 4, name: 'Sữa chua không đường', quantity: '3-4 hũ', completed: false }
        ],
        meat: [
          { id: 5, name: 'Ức gà', quantity: '500g (chỉ bữa tối)', completed: false },
          { id: 6, name: 'Thịt bò', quantity: '250g (chỉ bữa tối)', completed: false },
          { id: 7, name: 'Tôm', quantity: '500g (cuối tuần)', completed: false },
          { id: 8, name: 'Cá nướng', quantity: '300g (cuối tuần)', completed: false },
          { id: 9, name: 'Cá hấp', quantity: '300g (cuối tuần)', completed: false }
        ],
        eggs: [
          { id: 10, name: 'Trứng gà', quantity: '15 quả', completed: false },
          { id: 11, name: 'Đậu phụ', quantity: '4-5 miếng', completed: false },
          { id: 12, name: 'Đậu hũ non', quantity: '1-2 hũ', completed: false }
        ],
        vegetables: [
          { id: 13, name: 'Rau củ mix', quantity: '1kg', completed: false },
          { id: 14, name: 'Bông cải xanh', quantity: '2 cái', completed: false },
          { id: 15, name: 'Bí đỏ', quantity: '1 quả', completed: false },
          { id: 16, name: 'Đậu ve', quantity: '500g', completed: false },
          { id: 17, name: 'Cải luộc', quantity: '1kg', completed: false },
          { id: 18, name: 'Xà lách', quantity: '2 cái', completed: false },
          { id: 19, name: 'Nấm tươi', quantity: '500g', completed: false }
        ],
        fruits: [
          { id: 20, name: 'Táo', quantity: '1kg', completed: false },
          { id: 21, name: 'Cam', quantity: '1kg', completed: false },
          { id: 22, name: 'Chuối', quantity: '1 nải', completed: false }
        ],
        seasonings: [
          { id: 23, name: 'Dầu ô liu', quantity: '125ml', completed: false },
          { id: 24, name: 'Bơ', quantity: '1 hộp nhỏ', completed: false },
          { id: 25, name: 'Mật ong', quantity: '1 chai nhỏ', completed: false },
          { id: 26, name: 'Gừng', quantity: '1 củ', completed: false },
          { id: 27, name: 'Hành tỏi', quantity: '250g', completed: false }
        ],
        canned: [
          { id: 28, name: 'Cá ngừ hộp', quantity: '1-2 hộp', completed: false },
          { id: 29, name: 'Cá hồi hộp', quantity: '1 hộp', completed: false },
          { id: 30, name: 'Rong biển khô', quantity: '1 gói', completed: false },
          { id: 31, name: 'Nấm khô', quantity: '1 gói', completed: false }
        ]
      }
    })

    // Tính toán progress
    const completedCount = computed(() => {
      let count = 0
      
      // Đếm đồ khô
      Object.values(dryFoods.value).forEach(category => {
        category.forEach(item => {
          if (item.completed) count++
        })
      })
      
      // Đếm đồ tươi
      Object.values(weeklyFoods.value).forEach(week => {
        Object.values(week).forEach(category => {
          category.forEach(item => {
            if (item.completed) count++
          })
        })
      })
      
      return count
    })

    const totalCount = computed(() => {
      let count = 0
      
      // Đếm đồ khô
      Object.values(dryFoods.value).forEach(category => {
        count += category.length
      })
      
      // Đếm đồ tươi
      Object.values(weeklyFoods.value).forEach(week => {
        Object.values(week).forEach(category => {
          count += category.length
        })
      })
      
      return count
    })

    const progressPercentage = computed(() => {
      return totalCount.value > 0 ? Math.round((completedCount.value / totalCount.value) * 100) : 0
    })

    // Functions
    const toggleItem = (category, id) => {
      const item = dryFoods.value[category].find(item => item.id === id)
      if (item) {
        item.completed = !item.completed
        saveToLocalStorage()
      }
    }

    const toggleWeeklyItem = (week, category, id) => {
      const weekKey = `week${week}`
      const item = weeklyFoods.value[weekKey][category].find(item => item.id === id)
      if (item) {
        item.completed = !item.completed
        saveToLocalStorage()
      }
    }

    const saveToLocalStorage = () => {
      localStorage.setItem('shoppingList_dryFoods', JSON.stringify(dryFoods.value))
      localStorage.setItem('shoppingList_weeklyFoods', JSON.stringify(weeklyFoods.value))
    }

    const loadFromLocalStorage = () => {
      const savedDryFoods = localStorage.getItem('shoppingList_dryFoods')
      const savedWeeklyFoods = localStorage.getItem('shoppingList_weeklyFoods')
      
      if (savedDryFoods) {
        dryFoods.value = JSON.parse(savedDryFoods)
      }
      if (savedWeeklyFoods) {
        weeklyFoods.value = JSON.parse(savedWeeklyFoods)
      }
    }

    const getDryFoodsProgress = () => {
      const totalItems = dryFoods.value.grains.length
      const completedItems = dryFoods.value.grains.filter(item => item.completed).length
      return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0
    }

    const getWeeklyProgress = () => {
      const weekKey = `week${currentWeek.value}`
      const weekData = weeklyFoods.value[weekKey]
      let totalItems = 0
      let completedItems = 0
      
      Object.values(weekData).forEach(category => {
        totalItems += category.length
        completedItems += category.filter(item => item.completed).length
      })
      
      return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0
    }

    const resetWeek = () => {
      const weekKey = `week${currentWeek.value}`
      Object.values(weeklyFoods.value[weekKey]).forEach(category => {
        category.forEach(item => {
          item.completed = false
        })
      })
      saveToLocalStorage()
    }

    const resetAll = () => {
      // Reset dry foods
      dryFoods.value.grains.forEach(item => {
        item.completed = false
      })
      
      // Reset all weeks
      Object.keys(weeklyFoods.value).forEach(weekKey => {
        Object.values(weeklyFoods.value[weekKey]).forEach(category => {
          category.forEach(item => {
            item.completed = false
          })
        })
      })
      
      saveToLocalStorage()
    }

    const markAllCompleted = () => {
      // Mark đồ khô
      Object.values(dryFoods.value).forEach(category => {
        category.forEach(item => {
          item.completed = true
        })
      })
      
      // Mark đồ tươi
      Object.values(weeklyFoods.value).forEach(week => {
        Object.values(week).forEach(category => {
          category.forEach(item => {
            item.completed = true
          })
        })
      })
      
      saveToLocalStorage()
    }

    // Watch changes and save
    watch([dryFoods, weeklyFoods], () => {
      saveToLocalStorage()
    }, { deep: true })

    // Load on mount
    onMounted(() => {
      loadFromLocalStorage()
    })

    return {
      currentWeek,
      dryFoods,
      weeklyFoods,
      completedCount,
      totalCount,
      progressPercentage,
      toggleItem,
      toggleWeeklyItem,
      resetAll,
      markAllCompleted
    }
  }
}
</script>

<style scoped>
.shopping-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #f0f0f0;
}

.header h2 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 2rem;
}

.progress-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.progress-text {
  font-weight: 600;
  color: #34495e;
  font-size: 1.1rem;
}

.progress-bar {
  width: 100%;
  max-width: 300px;
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #27ae60, #2ecc71);
  transition: width 0.3s ease;
}

.section {
  margin-bottom: 40px;
}

.section h3 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #ecf0f1;
}

.category {
  margin-bottom: 25px;
}

.category h4, .category h5 {
  color: #34495e;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.category h5 {
  font-size: 1.1rem;
  color: #7f8c8d;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: #f8f9fa;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.item:hover {
  background: #e9ecef;
  transform: translateY(-1px);
}

.item.completed {
  background: #d4edda;
  border-color: #28a745;
  opacity: 0.8;
}

.item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #28a745;
}

.item-text {
  flex: 1;
  font-size: 1rem;
  color: #495057;
}

.item.completed .item-text {
  text-decoration: line-through;
  color: #6c757d;
}

.week-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.week-btn {
  padding: 10px 20px;
  border: 2px solid #3498db;
  background: white;
  color: #3498db;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.week-btn:hover {
  background: #3498db;
  color: white;
}

.week-btn.active {
  background: #3498db;
  color: white;
}

.week-content h4 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #ecf0f1;
}

.actions {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 2px solid #f0f0f0;
}

.reset-btn, .complete-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
}

.reset-btn {
  background: #e74c3c;
  color: white;
}

.reset-btn:hover {
  background: #c0392b;
  transform: translateY(-2px);
}

.complete-btn {
  background: #27ae60;
  color: white;
}

.complete-btn:hover {
  background: #229954;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .shopping-list {
    padding: 15px;
    margin: 10px;
  }
  
  .header h2 {
    font-size: 1.5rem;
  }
  
  .week-selector {
    justify-content: center;
  }
  
  .week-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
  
  .actions {
    flex-direction: column;
    align-items: center;
  }
  
  .reset-btn, .complete-btn {
    width: 100%;
    max-width: 200px;
  }
}
</style> 