<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Header -->
    <header class="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 py-3">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <UIcon name="i-heroicons-cube-transparent" class="text-indigo-600 w-8 h-8" />
          <h1 class="text-xl font-semibold text-gray-800">3D Construction Viewer</h1>
        </div>
      </div>
    </header>

    <!-- Главный контент -->
    <main class="relative h-[calc(100vh-4rem)] flex">
      <!-- Левая панель -->
      <div class="w-1/3 p-8 bg-white/80 backdrop-blur-sm">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">3D Визуализация проектов</h2>
        <div class="space-y-6 text-gray-600">
          <p class="text-lg">
            Мы специализируемся на создании высококачественных 3D визуализаций для строительных и архитектурных проектов.
          </p>
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-800">Наши преимущества:</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>Точное соответствие техническим требованиям</li>
              <li>Фотореалистичное качество визуализации</li>
              <li>Оптимизация для BIM процессов</li>
              <li>Быстрые сроки выполнения</li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-800">Процесс работы:</h3>
            <ul class="list-decimal list-inside space-y-2">
              <li>Анализ технической документации</li>
              <li>Создание базовой 3D модели</li>
              <li>Детализация и текстурирование</li>
              <li>Финальная визуализация</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Правая панель -->
      <div class="w-2/3 p-8 relative">
        <!-- 3D визуализация с рамкой -->
        <div class="h-full rounded-xl border-2 border-indigo-200 overflow-hidden shadow-lg relative">
          <div id="renderer" class="absolute inset-0 bg-white/50"></div>
        </div>

        <!-- Инф. о  загрузки -->
        <UOverlay v-if="loading" class="bg-white/90 backdrop-blur-sm">
          <div class="flex flex-col items-center gap-4">
            <USpinner size="xl" color="indigo" />
            <p class="text-gray-800 text-lg font-medium">Loading Your 3D Model...</p>
          </div>
        </UOverlay>

        <!-- Ошибка при загрузки -->
        <UNotification
          v-if="error"
          color="red"
          :title="error"
          icon="i-heroicons-exclamation-triangle"
          position="top-right"
          timeout="5000"
        >
          <template #actions>
            <UButton
              color="white"
              variant="solid"
              label="Try Again"
              @click="initViewer"
            />
          </template>
        </UNotification>
      </div>
    </main>
  </div>
</template>

<script setup>
import { 
  Viewer, 
  DefaultViewerParams,
  SpeckleLoader,
  UrlHelper,
  CameraController,
  SelectionExtension
} from '@speckle/viewer'

const loading = ref(true)
const error = ref(null)
let viewer = null

const MODEL_URL = 'https://app.speckle.systems/projects/7591c56179/models/32213f5381'

const initViewer = async () => {
  const container = document.getElementById('renderer')
  if (!container) return

  try {
    loading.value = true
    error.value = null

    const params = {
      ...DefaultViewerParams,
      showStats: false,
      verbose: false,
      background: [0.98, 0.98, 1, 1]
    }

    viewer = new Viewer(container, params)
    await viewer.init()

    viewer.createExtension(CameraController)
    viewer.createExtension(SelectionExtension)

    const urls = await UrlHelper.getResourceUrls(MODEL_URL)
    for (const url of urls) {
      const loader = new SpeckleLoader(viewer.getWorldTree(), url, '')
      await viewer.loadObject(loader, true)
    }

    viewer.zoomExtents()
    loading.value = false
  } catch (e) {
    console.error('Viewer initialization error:', e)
    error.value = e.message || 'Failed to initialize viewer'
    loading.value = false
  }
}

onMounted(() => {
  initViewer()
  window.addEventListener('resize', () => {
    if (viewer) {
      viewer.resize()
      viewer.zoomExtents()
    }
  })
})

onUnmounted(() => {
  if (viewer) {
    viewer.dispose()
  }
  window.removeEventListener('resize', () => {
    if (viewer) viewer.resize()
  })
})
</script>

<style>
html, body, #__nuxt {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#renderer {
  width: 100% !important;
  height: 100% !important;
}

canvas {
  width: 100% !important;
  height: 100% !important;
}
</style> 