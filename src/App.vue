<template>
  <div id="app">
    <header class="app-header">
      <h1>💪 Kỷ Luật Thép 30 Ngày</h1>
      <p class="subtitle">Iron Fit 30 Days Challenge</p>
    </header>

    <!-- Navigation Tabs -->
    <nav class="nav-tabs">
      <button 
        @click="activeTab = 'plan'" 
        :class="{ active: activeTab === 'plan' }"
        class="tab-btn"
      >
        📅 Kế Hoạch
      </button>
      <button 
        @click="activeTab = 'shopping'" 
        :class="{ active: activeTab === 'shopping' }"
        class="tab-btn"
      >
        🛒 Danh Sách Mua Sắm
      </button>
    </nav>

    <!-- Plan Tab -->
    <div v-if="activeTab === 'plan'" class="plan-content">
      <!-- Today Info Card -->
      <div v-if="todayInfo" class="today-info">
        <div class="today-header">
          <span class="today-badge">Hôm nay</span>
          <span class="today-date">{{ todayInfo.date }}</span>
        </div>
        <div class="today-progress">
          <span>Tiến độ hôm nay: {{ todayInfo.progress }}%</span>
          <div class="progress-bar">
            <div 
              class="progress-fill" 
              :style="{ width: todayInfo.progress + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Countdown Message -->
      <div v-if="countdownMessage" class="countdown-message">
        <h3>⏰ Đếm ngược đến ngày bắt đầu</h3>
        <p>{{ countdownMessage }}</p>
        <div class="debug-info">
          <small>Debug: Ngày hiện tại: {{ currentDate }}, Ngày bắt đầu: {{ planStartDate }}</small>
        </div>
      </div>

      <!-- Progress Overview -->
      <div class="progress-overview">
        <div class="progress-card">
          <h3>📊 Tổng tiến độ</h3>
          <div class="progress-stats">
            <div class="stat">
              <span class="stat-number">{{ totalProgress }}%</span>
              <span class="stat-label">Hoàn thành</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ completedDays }}</span>
              <span class="stat-label">Ngày hoàn thành</span>
            </div>
            <div class="stat">
              <span class="stat-number">{{ totalDays }}</span>
              <span class="stat-label">Tổng ngày</span>
            </div>
          </div>
          <div class="progress-bar">
            <div 
              class="progress-fill" 
              :style="{ width: totalProgress + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Days Grid -->
      <div class="days-grid">
        <DayCard
          v-for="day in 30"
          :key="day"
          :day="day"
          :plan="plan[day]"
          :is-today="day === currentDay"
          @progress-update="updateProgress"
        />
      </div>
    </div>

    <!-- Shopping List Tab -->
    <div v-if="activeTab === 'shopping'" class="shopping-content">
      <ShoppingList />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import DayCard from './components/DayCard.vue'
import ShoppingList from './components/ShoppingList.vue'
import { plan } from './data/plan.js'
import { getCurrentDay, getPlanStartDate, getCurrentDate } from './utils/dateUtils.js'

export default {
  name: 'App',
  components: {
    DayCard,
    ShoppingList
  },
  setup() {
    const activeTab = ref('plan')
    const completedTasks = ref({})
    const currentDay = ref(0)
    const planStartDate = ref('')
    const currentDate = ref('')

    // Load completed tasks from localStorage
    const loadCompletedTasks = () => {
      const saved = localStorage.getItem('completedTasks')
      if (saved) {
        completedTasks.value = JSON.parse(saved)
      }
    }

    // Save completed tasks to localStorage
    const saveCompletedTasks = () => {
      localStorage.setItem('completedTasks', JSON.stringify(completedTasks.value))
    }

    // Update progress when a task is completed
    const updateProgress = (day, section, completed) => {
      if (!completedTasks.value[day]) {
        completedTasks.value[day] = {}
      }
      completedTasks.value[day][section] = completed
      saveCompletedTasks()
    }

    // Calculate total progress
    const totalProgress = computed(() => {
      let completed = 0
      let total = 0

      for (let day = 1; day <= 30; day++) {
        const dayTasks = completedTasks.value[day] || {}
        // Xác định các section cần thiết cho từng ngày
        const sections = getSectionsForDay(day)
        
        sections.forEach(section => {
          total++
          if (dayTasks[section]) {
            completed++
          }
        })
      }

      return total > 0 ? Math.round((completed / total) * 100) : 0
    })

    // Calculate completed days
    const completedDays = computed(() => {
      let count = 0
      for (let day = 1; day <= 30; day++) {
        const dayTasks = completedTasks.value[day] || {}
        const sections = getSectionsForDay(day)
        const dayCompleted = sections.every(section => dayTasks[section])
        if (dayCompleted) {
          count++
        }
      }
      return count
    })

    // Function to determine sections for each day
    const getSectionsForDay = (day) => {
      // Thứ 2-6 (ngày 1-5, 8-12, 15-19, 22-26): chỉ có Sáng, Tối, Tập luyện
      // Cuối tuần (ngày 6-7, 13-14, 20-21, 27-30): có đầy đủ Sáng, Trưa, Tối, Tập luyện
      
      const isWeekend = day === 6 || day === 7 || day === 13 || day === 14 || 
                       day === 20 || day === 21 || day === 27 || day === 28 || 
                       day === 29 || day === 30
      
      if (isWeekend) {
        return ['Sáng', 'Trưa', 'Tối', 'Tập luyện']
      } else {
        return ['Sáng', 'Tối', 'Tập luyện']
      }
    }

    const totalDays = 30

    // Today info
    const todayInfo = computed(() => {
      if (currentDay.value === 0) return null
      
      const dayTasks = completedTasks.value[currentDay.value] || {}
      const sections = getSectionsForDay(currentDay.value)
      const completed = sections.filter(section => dayTasks[section]).length
      const progress = Math.round((completed / sections.length) * 100)
      
      return {
        date: `Ngày ${currentDay.value}`,
        progress
      }
    })

    // Countdown message
    const countdownMessage = computed(() => {
      if (currentDay.value > 0) return null
      
      const startDate = new Date(planStartDate.value)
      const today = new Date(currentDate.value)
      const diffTime = startDate - today
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays > 0) {
        return `Còn ${diffDays} ngày nữa sẽ bắt đầu kế hoạch 30 ngày!`
      }
      return null
    })

    onMounted(() => {
      loadCompletedTasks()
      const currentDayResult = getCurrentDay()
      currentDay.value = currentDayResult || 0
      planStartDate.value = getPlanStartDate().toISOString().split('T')[0]
      currentDate.value = getCurrentDate()
    })

    return {
      activeTab,
      plan,
      completedTasks,
      currentDay,
      planStartDate,
      currentDate,
      totalProgress,
      completedDays,
      totalDays,
      todayInfo,
      countdownMessage,
      updateProgress
    }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.app-header {
  text-align: center;
  padding: 40px 20px 20px;
  color: white;
}

.app-header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 10px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
  font-weight: 500;
}

/* Navigation Tabs */
.nav-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
  padding: 0 20px;
}

.tab-btn {
  padding: 12px 24px;
  border: 2px solid #3498db;
  background: white;
  color: #3498db;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.tab-btn:hover {
  background: #3498db;
  color: white;
  transform: translateY(-2px);
}

.tab-btn.active {
  background: #3498db;
  color: white;
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3);
}

/* Content Areas */
.plan-content, .shopping-content {
  padding: 20px;
}

/* Today Info */
.today-info {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.today-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.today-badge {
  background: #e74c3c;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
}

.today-date {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
}

.today-progress {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.today-progress span {
  font-weight: 600;
  color: #34495e;
}

/* Countdown Message */
.countdown-message {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.countdown-message h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.countdown-message p {
  font-size: 1.1rem;
  color: #34495e;
  margin-bottom: 15px;
}

.debug-info {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 6px;
  font-size: 0.8rem;
  color: #6c757d;
}

/* Progress Overview */
.progress-overview {
  margin: 20px auto;
  max-width: 600px;
}

.progress-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.progress-card h3 {
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.progress-stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: #3498db;
}

.stat-label {
  font-size: 0.9rem;
  color: #7f8c8d;
  font-weight: 500;
}

/* Progress Bar */
.progress-bar {
  width: 100%;
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

/* Days Grid */
.days-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .app-header h1 {
    font-size: 2rem;
  }
  
  .nav-tabs {
    flex-direction: column;
    align-items: center;
  }
  
  .tab-btn {
    width: 100%;
    max-width: 200px;
  }
  
  .progress-stats {
    flex-direction: column;
    gap: 15px;
  }
  
  .days-grid {
    grid-template-columns: 1fr;
    padding: 10px;
  }
}
</style>
