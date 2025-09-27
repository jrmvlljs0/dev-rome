// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
import Login from "./pages/login.vue"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', 'nuxt-auth-sanctum'],
  css: ['~/assets/css/main.css'],
  sanctum: {
  baseUrl:'http://localhost:8025',
    endpoints:{
      login:'/api/login',
      logout:"/api/logout"
    },
    redirect:{
      onLogin:'/',
      onLogout:'/login'
  }
 },
 runtimeConfig:{
  public:{
    baseUrl:'http://localhost:8025',
  }  
 },
vite: {
    plugins: [tailwindcss()],
  },


})