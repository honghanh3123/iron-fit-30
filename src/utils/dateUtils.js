// Utility functions cho quản lý ngày tháng

// Ngày bắt đầu kế hoạch: 23/6/2025
const PLAN_START_DATE = new Date('2025-06-23');
PLAN_START_DATE.setHours(0, 0, 0, 0); // Set về 00:00:00

/**
 * Tính ngày hiện tại trong kế hoạch 30 ngày
 * @returns {number} Ngày hiện tại (1-30) hoặc null nếu ngoài phạm vi
 */
export function getCurrentDay() {
  const today = new Date();
  const dayDiff = Math.floor((today - PLAN_START_DATE) / (1000 * 60 * 60 * 24));
  const currentDay = dayDiff + 1;
  
  // Kiểm tra xem ngày hiện tại có trong kế hoạch không
  if (currentDay < 1 || currentDay > 30) {
    return null;
  }
  
  return currentDay;
}

/**
 * Kiểm tra xem một ngày có phải là ngày hiện tại không
 * @param {number} day - Ngày cần kiểm tra
 * @returns {boolean} True nếu là ngày hiện tại
 */
export function isToday(day) {
  const currentDay = getCurrentDay();
  return currentDay === day;
}

/**
 * Test function để xem ngày nào sẽ được highlight
 * @returns {object} Thông tin debug
 */
export function getDebugInfo() {
  const today = new Date();
  const dayDiff = Math.floor((today - PLAN_START_DATE) / (1000 * 60 * 60 * 24));
  const currentDay = dayDiff + 1;
  
  return {
    today: today.toISOString(),
    startDate: PLAN_START_DATE.toISOString(),
    dayDiff,
    currentDay,
    isInPlan: currentDay >= 1 && currentDay <= 30,
    daysUntilStart: Math.max(0, -dayDiff)
  };
}

/**
 * Format ngày tháng theo tiếng Việt
 * @param {Date} date - Ngày cần format
 * @returns {string} Ngày tháng đã format
 */
export function formatDate(date) {
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('vi-VN', options);
}

/**
 * Lấy thông tin chi tiết về ngày hiện tại
 * @returns {object|null} Thông tin ngày hiện tại hoặc null
 */
export function getCurrentDayInfo() {
  const currentDay = getCurrentDay();
  
  if (!currentDay) {
    return null;
  }
  
  const today = new Date();
  
  return {
    day: currentDay,
    date: today,
    formattedDate: formatDate(today),
    isInPlan: true
  };
}

/**
 * Tính số ngày đã trôi qua kể từ khi bắt đầu kế hoạch
 * @returns {number} Số ngày đã trôi qua
 */
export function getDaysElapsed() {
  const today = new Date();
  const dayDiff = Math.floor((today - PLAN_START_DATE) / (1000 * 60 * 60 * 24));
  return Math.max(0, dayDiff);
}

/**
 * Kiểm tra xem kế hoạch đã kết thúc chưa
 * @returns {boolean} True nếu kế hoạch đã kết thúc
 */
export function isPlanFinished() {
  const currentDay = getCurrentDay();
  return currentDay === null || currentDay > 30;
}

/**
 * Lấy ngày bắt đầu kế hoạch
 * @returns {Date} Ngày bắt đầu
 */
export function getPlanStartDate() {
  return PLAN_START_DATE;
}

/**
 * Tính ngày kết thúc kế hoạch
 * @returns {Date} Ngày kết thúc
 */
export function getPlanEndDate() {
  const endDate = new Date(PLAN_START_DATE);
  endDate.setDate(endDate.getDate() + 29); // 30 ngày - 1
  return endDate;
}

/**
 * Kiểm tra xem một ngày có trong tương lai không
 * @param {number} day - Ngày cần kiểm tra
 * @returns {boolean} True nếu ngày trong tương lai
 */
export function isFutureDay(day) {
  const currentDay = getCurrentDay();
  return currentDay && day > currentDay;
}

/**
 * Kiểm tra xem một ngày có trong quá khứ không
 * @param {number} day - Ngày cần kiểm tra
 * @returns {boolean} True nếu ngày trong quá khứ
 */
export function isPastDay(day) {
  const currentDay = getCurrentDay();
  return currentDay && day < currentDay;
}

/**
 * Lấy ngày hiện tại dưới dạng string
 * @returns {string} Ngày hiện tại theo format YYYY-MM-DD
 */
export function getCurrentDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
} 