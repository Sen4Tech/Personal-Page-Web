<script>
export default {
  data() {
    return {
      activeTab: 1,
      items: [
      {
          id: 1,
          name: 'Personal Website',
          imageUrl: 'personal',
          status: 'My personal website, I created this website to showcase my profile, skills and projects. In addition, this website is also a place for me to try new technologies where I use github, git, vue.js, javascript, html and css technologies.',
          tech: 'Vue.js, JavaScript, HTML, CSS, Github, Git',
          github: 'https://github.com/Sen4Tech/My-Portfolio',
          demo: 'null'
        },
        {
          id: 2,
          name: 'XXI MOVIES',
          imageUrl: 'Movies',
          status: 'In my project, I hit a movie database to consume their API, then I created a container to display all the movies I want through the API, I use ReactJS language as the target API hit.',
          tech: 'ReactJS, HTML, CSS, GitHub, Git',
          github: 'https://github.com/Okta-jpg/XXI-MOVIES',
          demo: 'https://xxi-movies.vercel.app/',
        },
        {
          id: 3,
          name: 'KopiJanji',
          imageUrl: 'coffee',
          status: 'In my project called KopiJanji, I created a project about a coffee website and also a place reservation to go to the place, where in the process of creating this website I used simple HTML, CSS, and JavaScript languages ​​to create a coffee website.',
          tech: 'HTML, CSS, JavaScript, Github, Git',
          github: 'https://github.com/Okta-jpg/kopi-janji',
          demo: 'https://kopi-janji-cozy.vercel.app/'
        },
        {
          id: 4,
          name: 'TokoNesia',
          imageUrl: 'TOKONESIA',
          status: 'E-commerce website development inspired by Tokopedia. This project uses front-end technologies including HTML for structure, CSS for styling, and JavaScript for interactivity. Focus on creating a responsive and functional user interface.',
          tech: 'HTML, CSS, JavaScript, Github, Git',
          github: 'https://github.com/Okta-jpg/TokoNesia',
          demo: 'https://toko-nesia.vercel.app/'
        },
        {
          id: 5,
          name: 'Nikmat Nusantara',
          imageUrl: 'NIKMANTARA',
          status: 'UI/UX design project for an Indonesian food delivery app. Involves homepage design, app concept development, and design ideation. Key features include a discount voucher system and multiple payment options. The process continues to the prototyping stage.',
          tech: 'Figma',
          github: 'null',
          demo: 'https://www.figma.com/design/Fzk68TOi2RwuwQKgzyCEcT/NIKMAT-NUSANTARA?node-id=3-382&t=3dLW7dZ55wvxtYSG-1'
        },
        {
          id: 6,
          name: 'SQL Server Management',
          imageUrl: 'DB',
          status: 'In this Database Project I created a database named YOcholatos. In this project I created an ERD (Entity Relationship Diagram) and I also learned to create several database tables as well as enter values ​​into the database which will then be used to process data and search for the data needed.',
          tech: 'SQL Server, Visual Paradigm, Github, Git',
          github: 'https://github.com/Okta-jpg/SQL-Server',
          demo: 'null'
        },
        {
          id: 7,
          name: 'Advanced Information System Analysis and Design',
          imageUrl: 'Advanced',
          status: 'In the project, my group and I worked on various tasks, starting from making activity diagrams, use case descriptions, system sequence diagrams, then making system architecture designs and continuing with system design in the database, after that continuing with making first-cut design class diagrams, then making first-cut sequence diagrams into three-layer sequence diagrams, and ending with communication diagrams.',
          tech: 'Visual Paradigm, Figma',
          github: 'null',
          demo: 'https://docs.google.com/document/d/1N3_uHHTMOdCCwSxsjSmckIte1EuCT9EgNzMtsMABpZQ/edit?usp=sharing'
        },
        {
          id: 8,
          name: 'Java',
          imageUrl: 'Java',
          status: 'Java project implementing OOP, JavaFX, data validation, GUI, and database connection using SQL Server and PhpMyAdmin via XAMPP.',
          tech: 'Java, JavaFX, SQL Server, Eclipse, XAMPP, Github, Git',
          github: 'https://github.com/Okta-jpg/Java',
          demo: 'null'
        },
       
      ]
    };
  }
}
</script>
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>My Project Experience</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-cyan-400">
            Explore My Project so far</h4>
        </div>
      </header>
      <section>
        <div>
          <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in bg-[#1e1e1f]">
            <div v-for="item in items" :key="item.id">
              <div
                class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#0ef] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5 ">
                <div class="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
                  <img alt="HTML" loading="lazy" decoding="async" data-nimg="1" class="drop-shadow-xl rounded rounded-xl"
                    :src="'img/portfolio-' + item.imageUrl + '.png'">
                </div>
                <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                  <div class="title-text font-medium text-secondary">{{ item.name }}
                  </div>
                  <div class="w-full text-justify text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                  <div class="w-full mt-4 text-normal text-sm text-left text-[#0ef]">
                    {{ item.tech }}
                  </div>
                  <div class="w-full flex justify-end">
                    <div class="flex cursor-pointer items-end gap-2 text-primary">
                      <a v-if="item.github !== 'null'"
                        :href="item.github" target="_blank" rel="noreferrer"
                        title="View github repository" class="transition-all hover:text-accent">
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                          </path>
                        </svg></a>
                        <a v-if="item.demo !== 'null'" :href="item.demo" target="_blank" rel="noreferrer"
                        title="View finished project" class="transition-all hover:text-accent">
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
</div></template>

<style>
.item-card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-8px);
}

.item-card{
  position: relative;
  z-index: 10;
}

svg:hover{
  stroke: #0ef;
}
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Menggunakan animasi pada elemen yang diinginkan */
.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}
</style>