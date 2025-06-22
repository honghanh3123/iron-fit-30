<template>
  <div 
    class="card"
    :class="{ 'today': isToday }"
    :id="`day-${day}`"
    ref="cardRef"
  >
    <h2 class="card-title">
      Ngày {{ day }}
      <span v-if="isToday" class="today-badge">Hôm nay</span>
    </h2>
    <div class="card-content">
      <div 
        v-for="(value, key) in plan" 
        :key="key" 
        class="item"
        :class="{ 'completed': checked[key] }"
      >
        <label class="checkbox-label">
          <input 
            type="checkbox" 
            :checked="checked[key]"
            @change="toggleItem(key)"
            class="checkbox-input"
          />
          <span class="checkbox-custom"></span>
          <div class="item-content">
            <strong class="item-title">{{ key }}:</strong>
            <span class="item-text">{{ value }}</span>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, watch, ref } from 'vue';

const props = defineProps({ 
  day: Number, 
  plan: Object,
  isToday: Boolean
});

const emit = defineEmits(['progress-update']);

const checked = reactive({});
const cardRef = ref(null);

// Load trạng thái từ localStorage khi component mount
onMounted(() => {
  const savedState = localStorage.getItem(`day-${props.day}-checked`);
  if (savedState) {
    const parsedState = JSON.parse(savedState);
    Object.assign(checked, parsedState);
  }
  
  // Scroll đến ngày hiện tại nếu là ngày đầu tiên load
  if (props.isToday) {
    setTimeout(() => {
      cardRef.value?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }, 500);
  }
});

// Lưu trạng thái vào localStorage khi có thay đổi
watch(checked, (newState) => {
  localStorage.setItem(`day-${props.day}-checked`, JSON.stringify(newState));
  
  // Emit progress update
  Object.keys(newState).forEach(key => {
    emit('progress-update', props.day, key, newState[key]);
  });
}, { deep: true });

// Toggle trạng thái của item
const toggleItem = (key) => {
  checked[key] = !checked[key];
};
</script>

<style scoped>
.card {
  background: white;
  border: 2px solid #e1e5e9;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
}

.card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

/* Highlight cho ngày hiện tại */
.card.today {
  border: 3px solid #667eea;
  box-shadow: 0 8px 30px rgba(102, 126, 234, 0.3);
  background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
}

.card.today:hover {
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
  transform: translateY(-3px);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 16px 0;
  text-align: center;
  padding-bottom: 12px;
  border-bottom: 2px solid #f8f9fa;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.today-badge {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  animation: pulse 2s infinite;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.5);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
  }
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.item {
  padding: 12px;
  border-radius: 8px;
  background: #f8f9fa;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.item:hover {
  background: #e9ecef;
}

.item.completed {
  background: #d4edda;
  border-color: #c3e6cb;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  width: 100%;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid #6c757d;
  border-radius: 4px;
  position: relative;
  flex-shrink: 0;
  margin-top: 2px;
  transition: all 0.3s ease;
}

.checkbox-input:checked + .checkbox-custom {
  background: #28a745;
  border-color: #28a745;
}

.checkbox-input:checked + .checkbox-custom::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 12px;
  font-weight: bold;
}

.item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-title {
  color: #495057;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.item-text {
  color: #6c757d;
  font-size: 0.95rem;
  line-height: 1.4;
}

.item.completed .item-title {
  color: #155724;
}

.item.completed .item-text {
  color: #155724;
  text-decoration: line-through;
  opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .card {
    padding: 16px;
    margin-bottom: 16px;
  }
  
  .card-title {
    font-size: 1.3rem;
    margin-bottom: 12px;
    flex-direction: column;
    gap: 8px;
  }
  
  .today-badge {
    font-size: 0.7rem;
    padding: 3px 10px;
  }
  
  .item {
    padding: 10px;
  }
  
  .checkbox-label {
    gap: 10px;
  }
  
  .checkbox-custom {
    width: 18px;
    height: 18px;
  }
  
  .item-title {
    font-size: 0.85rem;
  }
  
  .item-text {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 12px;
    margin-bottom: 12px;
  }
  
  .card-title {
    font-size: 1.2rem;
  }
  
  .today-badge {
    font-size: 0.65rem;
    padding: 2px 8px;
  }
  
  .item {
    padding: 8px;
  }
  
  .checkbox-custom {
    width: 16px;
    height: 16px;
  }
  
  .item-title {
    font-size: 0.8rem;
  }
  
  .item-text {
    font-size: 0.85rem;
  }
}
</style>
