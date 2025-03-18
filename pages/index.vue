<template>
  <div class="min-h-screen w-full">
    <div class="relative w-full h-full overflow-y-auto">
      <!-- Главный баннер -->
      <section class="relative w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 mix-blend-multiply"></div>
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c')] bg-cover bg-center opacity-10"></div>
        </div>
        <div class="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"> 
            Инновационные BIM решения <br>
            <span class="text-blue-200">для вашего бизнеса</span>
          </h1>
          <p class="mt-6 max-w-2xl text-xl text-blue-100">
            Мы предоставляем полный спектр BIM услуг для строительной отрасли. Наша команда профессионалов поможет вам реализовать проекты любой сложности.
          </p>
          <div class="mt-10 flex gap-4">
            <button @click="scrollToContact" class="rounded-full bg-white px-6 py-3 text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
              Связаться с нами
            </button>
            <NuxtLink to="/visualization" class="rounded-full border-2 border-white px-6 py-3 text-white font-semibold hover:bg-white/10 transition-colors">
              Узнать больше
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Новости -->
      <section class="py-20 bg-white">
        <div class="container">
          <h2 class="text-3xl font-bold text-center mb-12">Новости и обновления</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="item in news" :key="item.id" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <img :src="item.picture" :alt="item.title" class="w-full h-48 object-cover">
              <div class="p-6">
                <div class="flex justify-between items-center mb-2">
                  <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">{{ item.category }}</span>
                  <span class="text-gray-500 text-sm">{{ item.publicationDate }}</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ item.title }}</h3>
                <p class="text-gray-600">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Главный контент -->
      <section class="relative w-full bg-gradient-to-br from-gray-50 to-blue-50">
        <!-- Статистика -->
        <div class="py-12">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20 px-4">
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">7+</div>
              <div class="text-gray-600">Лет опыта</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">1100+</div>
              <div class="text-gray-600">Проектов</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">80%</div>
              <div class="text-gray-600">Постоянных клиентов</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div class="text-gray-600">BIM компонентов</div>
            </div>
          </div>

          <!-- Секция услуг -->
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p class="text-gray-600 max-w-2xl mx-auto px-4">
              Предоставляем полный спектр BIM услуг для строительной отрасли, от координации инженерных систем до создания уникальных BIM компонентов
            </p>
          </div>

          <!-- Сетка услуг -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            <!-- MEP BIM Coordination -->
            <div class="relative group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="relative overflow-hidden rounded-t-xl">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=60" 
                     alt="MEP BIM Coordination" 
                     class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                    <h2 class="text-xl font-semibold mb-2">MEP BIM Coordination</h2>
                    <p class="text-sm">Профессиональная координация MEP систем с выявлением и устранением коллизий. Ежедневные отчеты и контроль качества на каждом этапе проекта.</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Координация инженерных систем</h3>
                <p class="text-gray-600 text-sm mb-3">Более 180 успешно выполненных проектов координации MEP систем. Опыт работы с проектами любой сложности в США, Канаде, Великобритании и других странах.</p>
                <div class="flex justify-between items-center text-sm">
                  <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">BIM Services</span>
                  <span class="text-gray-500">18.03.2025</span>
                </div>
              </div>
            </div>

            <!-- Scan to BIM -->
            <div class="relative group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="relative overflow-hidden rounded-t-xl">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60" 
                     alt="Scan to BIM" 
                     class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                    <h2 class="text-xl font-semibold mb-2">Scan to BIM Services</h2>
                    <p class="text-sm">Создание точных BIM моделей на основе облаков точек с высокой детализацией и соответствием требованиям заказчика.</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Лазерное сканирование в BIM</h3>
                <p class="text-gray-600 text-sm mb-3">Преобразование облаков точек в детальные BIM модели с точностью до миллиметра. Создание as-built документации для существующих зданий и сооружений.</p>
                <div class="flex justify-between items-center text-sm">
                  <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Point Cloud</span>
                  <span class="text-gray-500">18.03.2025</span>
                </div>
              </div>
            </div>

            <!-- BIM Content Creation -->
            <div class="relative group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="relative overflow-hidden rounded-t-xl">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=60" 
                     alt="BIM Content Creation" 
                     class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div class="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                    <h2 class="text-xl font-semibold mb-2">Custom BIM Content</h2>
                    <p class="text-sm">Разработка параметрических семейств Revit для всех разделов проектирования с учетом ваших требований.</p>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Создание BIM контента</h3>
                <p class="text-gray-600 text-sm mb-3">Более 500 разработанных семейств Revit для архитектурных, конструктивных и инженерных элементов. Создание уникальных параметрических компонентов.</p>
                <div class="flex justify-between items-center text-sm">
                  <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">Revit Families</span>
                  <span class="text-gray-500">18.03.2025</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Отзывы -->
          <div class="max-w-6xl mx-auto mt-24 px-4">
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Отзывы наших клиентов</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-white p-6 rounded-xl shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span class="text-blue-600 font-semibold">AM</span>
                  </div>
                  <div class="ml-4">
                    <div class="font-semibold text-gray-900">Amanda Milost</div>
                    <div class="text-sm text-gray-500">Digital Reality</div>
                  </div>
                </div>
                <p class="text-gray-600">"Сотрудничество было очень продуктивным. Даже срочные заказы выполнялись надежно, а запросы на изменения всегда реализовывались."</p>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span class="text-blue-600 font-semibold">MF</span>
                  </div>
                  <div class="ml-4">
                    <div class="font-semibold text-gray-900">Marc Flören</div>
                    <div class="text-sm text-gray-500">Digital Reality</div>
                  </div>
                </div>
                <p class="text-gray-600">"Работа была очень приятной. Пунктуальная сдача и отличная коммуникация. Результат всегда соответствовал нашим ожиданиям."</p>
              </div>
              <div class="bg-white p-6 rounded-xl shadow-lg">
                <div class="flex items-center mb-4">
                  <div class="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span class="text-blue-600 font-semibold">DA</span>
                  </div>
                  <div class="ml-4">
                    <div class="font-semibold text-gray-900">Dustin Allen</div>
                    <div class="text-sm text-gray-500">Survey Specialist</div>
                  </div>
                </div>
                <p class="text-gray-600">"Вся команда - одни из самых талантливых и трудолюбивых людей, которых я знаю. У них есть опыт во всех типах виртуальных сред."</p>
              </div>
            </div>
          </div>

          <!-- Секция для связи -->
          <div id="contact-section" class="max-w-6xl mx-auto mt-24 px-4 pb-24">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="p-12 bg-blue-600 text-white">
                  <h2 class="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
                  <p class="text-blue-100 mb-8">Готовы обсудить ваш проект? Наши специалисты ответят на все ваши вопросы.</p>
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      info@bim-prove.com
                    </div>
                    <div class="flex items-center">
                      <svg class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      +447490493720
                    </div>
                  </div>
                </div>
                <div class="relative">
                  <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c')] bg-cover bg-center opacity-10"></div>
                  <div class="relative p-12">
                    <form class="space-y-6">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                          type="text" 
                          placeholder="Ваше имя" 
                          class="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                        >
                        <input 
                          type="email" 
                          placeholder="Email" 
                          class="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                        >
                      </div>
                      <textarea 
                        rows="4" 
                        placeholder="Опишите ваш проект" 
                        class="w-full px-4 py-3 rounded-lg bg-white/90 border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      ></textarea>
                      <button class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                        Отправить сообщение
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Before/After Section -->
      <section class="py-20 bg-white">
        <div class="container">
          <h2 class="text-3xl font-bold text-center mb-12">Примеры наших работ</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!--Первая- Before/After Slider -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="h-[400px]">
                <BeforeAfterSlider
                  before-image="https://bim-prove.com/images/works_images/Steel%20structures%20with%20equipment%20Type%201.webp"
                  after-image="https://bim-prove.com/images/works_images/Steel%20structures%20with%20equipment%20Type%204.webp"
                  before-alt="До 3D визуализации"
                  after-alt="После 3D визуализации"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">Архитектурная визуализация</h3>
                <p class="text-gray-600">Превращаем чертежи в фотореалистичные 3D модели</p>
              </div>
            </div>

            <!-- Вторая- Before/After Slider -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
              <div class="h-[400px]">
                <BeforeAfterSlider
                  before-image="https://images.deal.by/320385034_w640_h640_320385034.jpg"
                  after-image="https://images.deal.by/320385031_w640_h640_320385031.jpg"
                  before-alt="До 3D моделирования"
                  after-alt="После 3D моделирования"
                />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">3D Моделирование</h3>
                <p class="text-gray-600">Создаем детальные 3D модели для ваших проектов</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BeforeAfterSlider from '../components/BeforeAfterSlider.vue'

const { data: projects } = await useFetch('/api/projects')
const { data: news } = await useFetch('/api/news')

const scrollToContact = () => {
  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  scroll-behavior: smooth;
  overflow-y: auto !important;
}

#__nuxt {
  height: 100%;
  overflow-y: auto !important;
}
</style> 