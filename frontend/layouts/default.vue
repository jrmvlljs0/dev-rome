<script setup>
  import Navigation from '~/components/Navigation.vue'
  const handleLogout = () => {
    // Logic for handling logout
  }
</script>
<template>
  <div class="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
    <Navigation />
    <div class="flex justify-center h-screen items-center top-100">
      <slot />
    </div>
  </div>
</template>
