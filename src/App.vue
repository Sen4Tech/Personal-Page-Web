<template>
  <div class="max-w-7xl mx-auto flex flex-col relative">

  <nav
    class="w-full px-5 md:fixed md:inset-x-0 top-0 z-[100] backdrop-blur-md bg-[#1f242d] bg-opacity-80"
  >
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
      <button @click="redirectToHome" class="flex">
        <a href="/">
          <span
            class="self-center text-lg text-[#0ef] font-semibold whitespace-nowrap fadein-bot hover:text-cyan-100 title"
          >
            My Portfolio
          </span>
        </a>
      </button>

    <div class="flex md:order-2 fadein-bot gap-2">
      <!-- LinkedIn -->
      <a
        href="https://www.linkedin.com/in/oktavianuschen"
        target="_blank"
        rel="noreferrer"
        class="w-9 h-9 rounded-full border border-[#0ef]/60
              flex items-center justify-center
              text-[#0ef] hover:bg-[#0ef] hover:text-black
              transition-colors duration-200"
      >
        <i class="fa-brands fa-linkedin-in text-lg"></i>
      </a>

      <!-- GitHub -->
      <a
        href="https://github.com/Sen4Tech"
        target="_blank"
        rel="noreferrer"
        class="w-9 h-9 rounded-full border border-[#0ef]/60
              flex items-center justify-center
              text-[#0ef] hover:bg-[#0ef] hover:text-black
              transition-colors duration-200"
      >
        <i class="fa-brands fa-github text-lg"></i>
      </a>

      <!-- WhatsApp -->
      <a
        href="https://wa.me/+6282276048623"
        target="_blank"
        rel="noreferrer"
        class="w-9 h-9 rounded-full border border-[#0ef]/60
              flex items-center justify-center
              text-[#0ef] hover:bg-[#0ef] hover:text-black
              transition-colors duration-200"
      >
        <i class="fa-brands fa-whatsapp text-lg"></i>
      </a>

      <!-- Email -->
      <a
        href="mailto:oktavianuschn@gmail.com"
        class="w-9 h-9 rounded-full border border-[#0ef]/60
              flex items-center justify-center
              text-[#0ef] hover:bg-[#0ef] hover:text-black
              transition-colors duration-200"
      >
        <i class="fa-solid fa-envelope text-lg"></i>
      </a>
    </div>



      <div
        class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1"
        id="mobile-menu-3"
      >
        <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
          <li>
            <router-link
              to="/"
              class="nav-link fadein-bot text-gray-200 hover:text-[#0ef] md:border-0 block pl-3 pr-4 py-2 md:p-0"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/about"
              class="nav-link fadein-bot fadein-1 text-gray-200 hover:text-[#0ef] md:border-0 block pl-3 pr-4 py-2 md:p-0"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link
              to="/project"
              class="nav-link fadein-bot fadein-2 text-gray-200 hover:text-[#0ef] md:border-0 block pl-3 pr-4 py-2 md:p-0"
            >
              Project
            </router-link>
          </li>
          <li>
            <router-link
              to="/certification"
              class="nav-link fadein-bot fadein-3 text-gray-200 hover:text-[#0ef] md:border-0 block pl-3 pr-4 py-2 md:p-0 blog"
            >
              Certification
            </router-link>
          </li>
          <li>
            <router-link
              to="/experience"
              class="nav-link fadein-bot fadein-3 text-gray-200 hover:text-[#0ef] md:border-0 block pl-3 pr-4 py-2 md:p-0 blog"
            >
              Experience
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>


    <audio
      id="global-audio"
      class="hidden"
      src="/audio/survival.mp3">
    </audio>

  <div class="md:mt-[100px] pb-24 md:pb-0">
    <router-view />
  </div>
  </div>

  <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#1e1e1f] bg-opacity-80 backdrop-blur-md backdrop-opacity-90 z-[100]">
    <nav class="flex justify-around py-4 text-xs">
      <router-link to="/" class="text-gray-300 hover:text-white hover-underline">Home</router-link>
      <router-link to="/about" class="text-gray-300 hover:text-white hover-underline">About</router-link>
      <router-link to="/project" class="text-gray-300 hover:text-white hover-underline">Project</router-link>
      <router-link to="/certification" class="text-gray-300 hover:text-white hover-underline">Certification</router-link>
      <router-link to="/experience" class="text-gray-300 hover:text-white hover-underline">Experience</router-link>
    </nav>
  </footer>
</template>

<script>
export default {
  created() {
    this.$router.afterEach(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto', 
      });
    });
  },
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
  position: relative;
  display: inline-block;
  text-decoration: none;
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

.nav-link {
  position: relative;
  text-decoration: none;
  padding-bottom: 2px;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 4px;
  border-radius: 2px;
  bottom: -5px;
  left: 0;
  background-color: #0ef;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-exact-active::after {
  width: 100%;
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
