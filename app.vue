<template>
  <div>
    <header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav class="container mx-auto flex gap-6 items-center py-4 px-6">
        <NuxtLink to="/" class="text-xl font-bold hover:text-blue-200 transition-colors">Home</NuxtLink>
        <NuxtLink to="/visualization" class="text-xl font-bold hover:text-blue-200 transition-colors">3D Visualization</NuxtLink>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
