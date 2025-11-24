<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: 'HTML',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
          status: 'Advanced'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://i.gzn.jp/img/2024/11/18/css-new-logo/10.png',
          status: 'Advanced'
        },
        {
          id: 3,
          name: 'Java',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png',
          status: 'Advanced'
        },
        {
          id: 4,
          name: 'SQL',
          imageUrl: 'https://clipart-library.com/2023/RcdgAAE9i.png',
          status: 'Advanced'
        },
        {
          id: 5,
          name: 'Bootstrap',
          imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
          status: 'Advanced'
        },
        {
          id: 6,
          name: 'Tailwind',
          imageUrl: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png',
          status: 'Advanced'
        },
        {
          id: 7,
          name: 'Javascript',
          imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_original_logo_icon_146455.png',
          status: 'Intermediate'
        },
        {
          id: 8,
          name: 'ABL (4GL)',
          imageUrl: 'https://chriscamicas.gallerycdn.vsassets.io/extensions/chriscamicas/openedge-abl/1.3.0/1708103923701/Microsoft.VisualStudio.Services.Icons.Default',
          status: 'Intermediate'
        },
        {
          id: 9,
          name: 'ReactJS',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          status: 'Intermediate'
        },
        {
          id: 10,
          name: 'React Native',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          status: 'Intermediate'
        },
        {
          id: 11,
          name: 'TypeScript',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png',
          status: 'Beginner'
        },
        {
          id: 12,
          name: 'C#',
          imageUrl: 'https://exceptionnotfound.net/content/images/2020/09/C_Sharp_logo.svg',
          status: 'Intermediate'
        },
        {
          id: 13,
          name: '.NET Core',
          imageUrl: 'https://cdn.pellerex.com/public/ecosystem/web/content/api-set-up/asp-net-core-web-api-setup.png',
          status: 'Intermediate'
        },
        {
          id: 14,
          name: 'VueJS',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-1024.png',
          status: 'Intermediate'
        },
        {
          id: 15,
          name: 'Python',
          imageUrl: 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-1024.png',
          status: 'Beginner'
        },
        {
          id: 16,
          name: 'NodeJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png',
          status: 'Beginner'
        },
      ],
      tools: [
        {
          id: 1,
          name: 'VS Code',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
          status: 'Code Editor'
        },
        {
          id: 2,
          name: 'Figma',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
          status: 'UI/UX Design'
        },
        {
          id: 3,
          name: 'PostgreSQL',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png',
          status: 'Database'
        },
        {
          id: 4,
          name: 'Dev Studio',
          imageUrl: 'https://chriscamicas.gallerycdn.vsassets.io/extensions/chriscamicas/openedge-abl/1.3.0/1708103923701/Microsoft.VisualStudio.Services.Icons.Default',
          status: 'ABL IDE'
        },
        {
          id: 5,
          name: 'Eclipse',
          imageUrl: 'https://www.nesabamedia.com/wp-content/uploads/2019/09/Eclipse-Logo-1.png',
          status: 'Java IDE'
        },
        {
          id: 6,
          name: 'Visual Paradigm',
          imageUrl: 'https://img.icons8.com/clouds/140/visual-paradigm.png',
          status: 'System Analyst'
        },
        {
          id: 7,
          name: 'AWS Services',
          imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.zwxmNiuwakQ0v53Zqah1HAHaHa&pid=Api&P=0&h=180',
          status: 'Cloud Computing'
        },
        {
          id: 8,
          name: 'SQL Server',
          imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.zexw0o_09gUZKcBCnkPd1QAAAA&pid=Api&P=0&h=180',
          status: 'Database'
        },
        {
          id: 9,
          name: 'Canva',
          imageUrl: 'https://freelogopng.com/images/all_img/1656733637logo-canva-png.png',
          status: 'Desain'
        },
        {
          id: 10,
          name: 'Vercel',
          imageUrl: 'https://flow-public.nimbuspop.com/flow-apps/vercel.png',
          status: 'Deployment'
        },
        {
          id: 11,
          name: 'Visual Studio',
          imageUrl: 'https://i.pinimg.com/originals/fb/9d/99/fb9d99a93b1439bec2ec256b2b4b6533.png',
          status: '.NET Development'
        },
        {
          id: 12,
          name: 'JupyterLab',
          imageUrl: 'https://cdn-ak.f.st-hatena.com/images/fotolife/i/inabower/20180609/20180609185305.png',
          status: 'Jupyter Notebook'
        },
        {
          id: 13,
          name: 'XAMPP',
          imageUrl: 'https://4.bp.blogspot.com/-YcxyjKjV94U/Vs1ejZFHRmI/AAAAAAAAA08/k72Ngc87yOA/s1600/xampp-logo%2B%25281%2529.jpg',
          status: 'DB Management'
        },
        {
          id: 14,
          name: 'GitHub',
          imageUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
          status: 'Git Hosting'
        },
        {
          id: 15,
          name: 'Git',
          imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
          status: 'Version Control'
        },
        {
          id: 16,
          name: 'NPM',
          imageUrl: 'https://logospng.org/download/npm/npm-2048.png',
          status: 'Package Manager'
        },
        
      ],
      soft: [
        {
          id: 1,
          name: 'Time Management',
          imageUrl: 'https://static.vecteezy.com/system/resources/previews/013/468/392/original/clock-time-line-icon-png.png',
        },
        {
          id: 2,
          name: 'Communication',
          imageUrl: 'https://cdn1.iconfinder.com/data/icons/online-education-malibu-vol-1/128/2-way-communication-1024.png',
        },
        {
          id: 3,
          name: 'Team Work',
          imageUrl: 'http://clipart-library.com/images_k/teamwork-transparent-background/teamwork-transparent-background-12.png',
        },
        {
          id: 4,
          name: 'Public Speaking',
          imageUrl: 'https://cdn3.iconfinder.com/data/icons/human-resources-1-5/136/78-1024.png',
        },
        {
          id: 5,
          name: 'Critical Thinking',
          imageUrl: 'https://www.freepnglogos.com/uploads/thinking-png/thinking-home-page-deeper-learning-31.png',
        },
        {
          id: 6,
          name: 'Problem Solving',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/6487/6487594.png',
        },
        {
          id: 7,
          name: 'Leadership',
          imageUrl: 'https://cdn1.iconfinder.com/data/icons/human-resource-8/64/leadership-skills-leader-team-1024.png',
        },
        {
          id: 8,
          name: 'Adaptive',
          imageUrl: 'https://i.pinimg.com/originals/d7/1b/70/d71b703a681d8674bec810570ab1809a.png',
        },
        {
          id: 9,
          name: 'Creative',
          imageUrl: 'https://png.pngtree.com/png-clipart/20240708/original/pngtree-flat-design-of-soft-skills-concept-png-image_15516351.png',
        },
      ]
    };
  }

  
}

  
</script>
<template>
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#0ef] rounded-3xl text-amber-50 mx-3 mb-5">
    <article data-page="about">

      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          About Me &nbsp;
          <div class="h-[1px] w-32 bg-[#0ef] md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row-reverse md:gap-8 md:justify-left md:items-center">
         <div class="md:w-9/12">
          <p class="mb-3 md:mb-7 fadein-left fadeins-1">
            &nbsp; &nbsp; &nbsp; Hello, my name is Oktavianus!👋 
          </p>
          <p class="mb-3 md:mb-7 fadein-left fadeins-1">
            &nbsp; &nbsp; &nbsp; I am 20 years old and a 5th semester student studying at Bina Nusantara University majoring in Information Systems. Technology is my passion, with my main focus as a System Analyst and Front End Developer.
          </p>
          <p class="mb-3 fadein-left fadeins-2">
            &nbsp; &nbsp; &nbsp; I have strong expertise in System Analysis and front-end development, while my ability in Cloud Computing has reached an intermediate level. I have the passion to continue learning and developing technological skills, and creating innovative solutions through my information technology expertise. My academic journey at Binus University is not just about getting a degree, but about preparing myself to become a competent and creative technology professional in the future.
          </p>
        </div>

        <div class="flex justify-center z-50">
          <img class="w-64 h-64 rounded-full mb-3 object-cover fadein-up border-2 border-[#0ef] Foto"
            src="img/ME.jpeg" alt="Foto">
        </div>
      </section>

    </article>
  </div>

  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          <div class="h-[1px] w-10 bg-[#0ef] md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
            <li class="mr-2 z-[100]">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-[#0ef]"
                :class="{ 'text-[#0ef] bg-[#0ef] bg-opacity-10': activeTab === 1 }" @click="activeTab = 1">Tech Stack</button>
            </li>
            <li class="mr-2 z-[100]">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-[#0ef]"
                :class="{ 'text-[#0ef] bg-[#0ef] bg-opacity-10': activeTab === 2 }" @click="activeTab = 2">Tools</button>
            </li>
            <li class="mr-2 z-[100]">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-[#0ef]"
                :class="{ 'text-[#0ef] bg-[#0ef] bg-opacity-10': activeTab === 3 }" @click="activeTab = 3">Soft Skills</button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-[#0ef] px-2 py-2 hover:bg-[#0ef] hover:bg-opacity-10 md:gap-3 lg:px-3 bg-[#1e1e1f]">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]"
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-[#0ef] transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tools" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-[#0ef] px-2 py-2 hover:bg-[#0ef] hover:bg-opacity-10 md:gap-3 lg:px-3 bg-[#1e1e1f]">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-[#0ef] transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 3">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in soft" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-[#0ef] px-2 py-2 hover:bg-[#0ef] hover:bg-opacity-10 md:gap-3 lg:px-3 bg-[#1e1e1f]">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="techSoft font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}

.item-tech {
  position: relative;
  z-index: 10;
}
</style>
