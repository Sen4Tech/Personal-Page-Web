<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="max-w-7xl mx-auto flex flex-col relative">

    <nav class="max-w-7xl px-5 md:fixed top-0 z-[100] w-screen backdrop-blur-md bg-[#1f242d] bg-opacity-80">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <button @click="redirectToHome" class="flex">
          <a href="/"><span class="self-center text-lg text-[#0ef] font-semibold whitespace-nowrap fadein-bot hover:text-cyan-100">My Portfolio</span></a>
        </button>
        <div class="flex md:order-2 fadein-bot gap-2">
          <a href="https://www.linkedin.com/in/oktavianuschen"><img class="w-9 rounded-full" src="https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png" alt="linked"></a>
          <a href="https://wa.me/+6282276048623"><img class="w-9 rounded-full" src="https://logospng.org/download/whatsapp/logo-whatsapp-verde-icone-ios-android-2048.png" alt="Whatsapp"></a>
          <a href="mailto:oktavianuschn@gmail.com"><img class="w-9 rounded-full" src="https://clipartcraft.com/images/email-logo-png-gmail.png" alt="Email"></a>
        </div>
        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
          <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <router-link to="/"
                class="fadein-bot text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0"
                aria-current="page">Home</router-link>
            </li>
            <li>
              <router-link to="/about"
                class="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0 ">About</router-link>
            </li>
            <li>
              <router-link to="/portfolio"
                class="fadein-bot fadein-2 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">Portfolio</router-link>
            </li>
            <li>
              <router-link to="/certification"
                class="fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0 blog">Certification</router-link>
            </li>
            <li>
              <router-link to="/experience"
                class="fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0 blog">Experience</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="md:mt-[100px]">
      <router-view />
    </div>
  </div>
  <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#1e1e1f] bg-opacity-80 backdrop-blur-md backdrop-opacity-90 z-[100]">
  <nav class="flex justify-around py-4 text-xs">
    <router-link to="/" class="text-gray-300 hover:text-white ">Home</router-link>
    <router-link to="/about" class="text-gray-300 hover:text-white">About</router-link>
    <router-link to="/portfolio" class="text-gray-300 hover:text-white">Portfolio</router-link>
    <router-link to="/certification" class="text-gray-300 hover:text-white">Certification</router-link>
    <router-link to="/experience" class="text-gray-300 hover:text-white">Experience</router-link>
  </nav>
</footer>


</template>

<script>
export default {
  methods: {
    redirectToHome() {
      this.$router.push('/')
    }
  },
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #0ef;
  border-radius: 5px;
}

::-webkit-scrollbar-button { width: 20px; }

html {
  background: #1f242d;
}

body {
  font-family: 'Poppins', sans-serif;
  background: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
}

#particles-js {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 5;
}

.count-particles {
  background: #000022;
  position: absolute;
  top: 48px;
  left: 0;
  width: 80px;
  color: #13E8E9;
  font-size: .8em;
  text-align: left;
  text-indent: 4px;
  line-height: 14px;
  padding-bottom: 2px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  z-index: 20;
  pointer-events: none;
}

.js-count-particles {
  font-size: 1.1em;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  color: #0ef;
  transition: color 0.3s;
}

nav a.router-link-exact-active::after {
  display: inline-block;
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #0ef;
}

nav a.router-link-exact-active:hover {
  color: #0ef;
}


@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
