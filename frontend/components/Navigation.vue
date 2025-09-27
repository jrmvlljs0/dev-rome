<script setup>
  const { logout } = useSanctumAuth()
  const handleLogout = async () => {
    await logout()
  }
</script>
<template>
  <div class="fixed top-0 left-0 w-full max-md:h-[60px] h-[110px] z-50 max-md:backdrop-blur-xl">
    <!-- Navigation -->
    <nav class="flex items-center left-0 justify-between max-w-[90%] mx-auto h-full">
      <div>
        <a
          href=""
          class="text-2xl font-bold text-white"
        >
          Game <span class="mainText">Over</span>
        </a>
      </div>
      <div
        class="font-md hidden md:flex max-w-xs w-full items-center justify-center gap-[47px] rounded-full h-[60px] outline-[#cc9b6b]/10 hover:outline-1 hover:outline-[#cc9b6b]/50 transition-all duration-300 ease-in-out"
      >
        <a
          class="transition-all text-white hover:mainText"
          href=""
          >Home</a
        >
        <a
          class="transition-all text-white hover:mainText"
          href=""
          >About</a
        >
        <a
          class="transition-all text-white hover:mainText"
          href=""
          >Contact</a
        >
      </div>
      <div>
        <button
          type="submit"
          @click="handleLogout"
          class="mainBg border mainBorder rounded-lg text-21 font-md hover:bg-transparent hover:text-white text-black py-2 px-7 z-50"
        >
          Logout
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden">
        <button
          class="text-white focus:outline-none"
          @click="$emit('toggleMobileMenu')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-0 left-0 w-full h-screen bg-black/80 flex flex-col items-center justify-center gap-6 z-50"
      >
        <a
          class="text-white text-2xl font-semibold hover:text-main transition-all duration-300"
          href=""
          @click="toggleMobileMenu"
          >Home</a
        >
        <a
          class="text-white text-2xl font-semibold hover:text-main transition-all duration-300"
          href=""
          @click="toggleMobileMenu"
          >About</a
        >
        <a
          class="text-white text-2xl font-semibold hover:text-main transition-all duration-300"
          href=""
          @click="toggleMobileMenu"
          >Contact</a
        >
        <button
          type="submit"
          @click="handleLogout"
          class="mainBg border mainBorder rounded-lg text-21 font-md hover:bg-transparent hover:text-white text-black py-2 px-7 z-50"
        >
          Logout
        </button>
      </div>
    </nav>
  </div>
</template>
