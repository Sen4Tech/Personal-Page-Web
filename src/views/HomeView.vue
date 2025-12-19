<template>
  <main
    class="relative z-[100] mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row-reverse md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
    
    <div class="space-y-2 text-center md:text-left px-10">
      
      <p class="text-amber-200" style="color: #0ef;">Hello, My Name Is</p>
      <h1 class="text-4xl font-bold md:text-5xl text-white fadein-up">Oktavianus</h1>

      <div class="py-2">
        <h1
          class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-cyan-400 md:text-2xl fadein-up"
          ref="typewriter">
          <span class="wrap">{{ txt }}</span>
        </h1>
      </div>

      <p class="text-white pr-4 fade-in-from-left">
        Welcome to My Portfolio <span class="wave">👋🏼</span>
      </p>

      <br>

      <div class="flex gap-3 justify-center md:justify-start fadein-bot fade-500 relative z-[200]">
        <a 
          href="/resume/Oktavianus-resume.pdf"
          download="Oktavianus-Resume.pdf"
          class="flex items-center py-2 px-4 text-sm font-medium rounded-lg border transition duration-300 text-amber-200 border-[#0ef] bg-[#1e1e1f] hover:bg-[#0ef] hover:bg-opacity-10 bg-transparent focus:outline-none"
          style="color: #0ef; text-decoration: none;"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="mr-2 w-4 h-4">
            <path fill-rule="evenodd"
              d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm5.845 17.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V12a.75.75 0 00-1.5 0v4.19l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
              clip-rule="evenodd"></path>
          </svg>
          Download CV
        </a>

        <!-- SEE CV BUTTON -->
        <button
          @click="showModal = true"
          class="flex items-center py-2 px-4 text-sm font-medium rounded-lg border transition duration-300 text-amber-200 border-[#0ef] bg-[#1e1e1f] hover:bg-[#0ef] hover:bg-opacity-10 focus:outline-none"
          style="color: #0ef;"
        >
          👀 View CV
        </button>
      </div>

    </div>

    <div class="flex justify-center md:justify-start fadein-left z-[10]">
      <img alt="avatar" width="300" height="300"
        class="w-64 h-64 object-cover rounded-full border-2 border-[#0ef] pict" src="img/FOTO2.png">
    </div>
  </main>
  
  <!-- MODAL -->
  <div 
    v-if="showModal"
    class="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center z-[999] animate-fadeIn"
  >
    <div class="bg-[#1f242d] rounded-xl w-[90%] md:w-[70%] h-[85%] border border-[#0ef] shadow-[0_0_20px_#0ef] animate-scaleIn flex flex-col">

      <!-- Header -->
      <div class="flex justify-between items-center p-4 border-b border-[#0ef]">
        <h2 class="text-white text-lg font-semibold">My CV Preview</h2>
        <button @click="showModal = false" class="text-[#0ef] text-xl hover:text-white transition">✕</button>
      </div>

      <!-- PDF Viewer -->
      <iframe 
        src="/resume/Oktavianus-resume.pdf"
        class="w-full h-full rounded-b-xl"
      ></iframe>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      showModal: false,
      toRotate: ["Front End Developer","Back End Developer","Full Stack Developer", "Software Engineer"],
      period: 2000,
      txt: '',
      loopNum: 0,
      isDeleting: false,
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);

      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
  }
}
</script>

<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
}

.typewrite>.wrap {
  border-right: 0.08em solid #fff;
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg)
  }
  10% {
    transform: rotate(14deg)
  }
  20% {
    transform: rotate(-8deg)
  }
  30% {
    transform: rotate(14deg)
  }
  40% {
    transform: rotate(-4deg)
  }
  50% {
    transform: rotate(10deg)
  }
  60% {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(0deg)
  }
}

.pict {
  box-shadow: 0px 0px 73px -9px #0ef;
  -webkit-box-shadow: 0px 0px 73px -9px #0ef;
  -moz-box-shadow: 0px 0px 73px -9px #0ef;
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-from-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-bot {
  opacity: 0;
  animation: fadeInBot 0.5s forwards;
}

@keyframes fadeInBot {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadein-1 {
  animation-delay: 200ms;
}
.fadein-2 {
  animation-delay: 400ms;
}
.fadein-3 {
  animation-delay: 600ms;
}
.fade-500 {
  animation-delay: 500ms;
}

:root {
  --bg: #1f242d;
  --second-bg: #323946;
  --text-color: #fff;
  --main-color:#0ef;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

@keyframes scaleIn {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
.animate-scaleIn {
  animation: scaleIn 0.3s ease-out;
}
</style>
