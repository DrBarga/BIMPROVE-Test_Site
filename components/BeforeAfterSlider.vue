<template>
  <div class="relative w-full h-full group" ref="container">
    <div class="relative w-full h-full overflow-hidden">
      <!-- До -->
      <img :src="beforeImage" :alt="beforeAlt" class="w-full h-full object-cover">
      
      <!-- После -->
      <div class="absolute top-0 left-0 h-full overflow-hidden" :style="{ width: `${sliderPosition}%` }">
        <img :src="afterImage" :alt="afterAlt" class="w-full h-full object-cover">
      </div>

      <!-- Ползунок -->
      <div 
        class="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize group-hover:shadow-lg transition-shadow"
        :style="{ left: `${sliderPosition}%` }"
        @mousedown.prevent="startDragging"
        @touchstart.prevent="startDragging"
      >
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        </div>
      </div>
    </div>

    <div class="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
      До
    </div>
    <div class="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
      После
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  beforeImage: {
    type: String,
    required: true
  },
  afterImage: {
    type: String,
    required: true
  },
  beforeAlt: {
    type: String,
    default: 'До'
  },
  afterAlt: {
    type: String,
    default: 'После'
  }
})

const container = ref(null)
const sliderPosition = ref(50)
const isDragging = ref(false)

const calculatePosition = (e) => {
  if (!container.value) return 50

  const rect = container.value.getBoundingClientRect()
  const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  const position = ((x - rect.left) / rect.width) * 100

  return Math.max(0, Math.min(100, position))
}

const startDragging = (e) => {
  e.preventDefault()
  isDragging.value = true
  handleDrag(e)

  if (e.type === 'mousedown') {
    document.addEventListener('mousemove', handleDrag)
    document.addEventListener('mouseup', stopDragging)
  } else {
    document.addEventListener('touchmove', handleDrag)
    document.addEventListener('touchend', stopDragging)
  }
}

const handleDrag = (e) => {
  if (!isDragging.value) return
  e.preventDefault()
  sliderPosition.value = calculatePosition(e)
}

const stopDragging = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', handleDrag)
  document.removeEventListener('mouseup', stopDragging)
  document.removeEventListener('touchmove', handleDrag)
  document.removeEventListener('touchend', stopDragging)
}

onUnmounted(() => {
  stopDragging()
})
</script>

<style scoped>
.group:hover .group-hover\:shadow-lg {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.group:hover .group-hover\:scale-110 {
  transform: translate(-50%, -50%) scale(1.1);
}
</style> 