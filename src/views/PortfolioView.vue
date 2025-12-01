<script>
export default {
  data() {
    return {
      activeTab: 1,
      selectedCategory: 'All',
      categories: [
        'All',
        'Web & Application Development',
        'System Analyst',
        'UI/UX Designer',
        'Database',
      ],
      items: [
        {
          id: 1,
          name: 'Personal Website',
          imageUrl: 'personal',
          status: 'My personal website, I created this website to showcase my profile, skills and projects. In addition, this website is also a place for me to try new technologies where I use github, git, vue.js, javascript, html and css technologies.',
          tech: 'Vue.js, Tailwind, Github, Git',
          github: 'https://github.com/Sen4Tech/Personal-Page-Web',
          demo: 'https://my-personal-page-web.vercel.app/',
          category: 'Web & Application Development'
        },
        {
          id: 2,
          name: 'Storegg',
          imageUrl: 'store',
          status: 'In the Storegg Application, I use the react-native framework, then TypeScript to consume the API, and use Hooks or retrieve data from the API. In addition, in the Application I create a minigame to get coins which will later be used to buy items.',
          tech: 'React Native, TypeScript, CSS, Github, Git',
          github: 'https://github.com/Sen4Tech/Storegg-App',
          demo: 'null',
          category: 'Web & Application Development'
        },
        {
          id: 3,
          name: 'Advanced Business Application Development',
          imageUrl: 'jawi',
          status: 'In this project, my group and I analyzed a Javanese and Betawi cuisine restaurant through interviews with the owner and staff. After knowing the problems, we implemented technologies such as online payment, QR scan ordering, and AI chatbots to improve customer service and experience.',
          tech: 'Visual Paradigm, Figma',
          github: 'null',
          demo: 'https://drive.google.com/drive/folders/1gf7H6VL6Qd6jRMofNtHTi0usVOtzd1Up?usp=sharing',
          category: 'System Analyst'
        },
        {
          id: 4,
          name: 'XXI MOVIES',
          imageUrl: 'Movies',
          status: 'In this project, I integrated a movie database by consuming its API to fetch movie data. Using ReactJS, I created a container component to display the movies dynamically. The component manages the state and renders the movie details like title, genre, and rating. I also added features like pagination or infinite scrolling for efficient data handling and an improved user experience.',
          tech: 'ReactJS, HTML, CSS, GitHub, Git',
          github: 'https://github.com/Sen4Tech/XXI-MOVIES',
          demo: 'https://xxi-movies.vercel.app/',
          category: 'Web & Application Development'
        },
        {
          id: 5,
          name: 'Advanced Information System Analysis and Design',
          imageUrl: 'Advanced',
          status: 'In the project, my group and I worked on various tasks, starting from making activity diagrams, use case descriptions, system sequence diagrams, then making system architecture designs and continuing with system design in the database, after that continuing with making first-cut design class diagrams, then making first-cut sequence diagrams into three-layer sequence diagrams, and ending with communication diagrams.',
          tech: 'Visual Paradigm, Figma',
          github: 'null',
          demo: 'https://docs.google.com/document/d/1N3_uHHTMOdCCwSxsjSmckIte1EuCT9EgNzMtsMABpZQ/edit?usp=sharing',
          category: 'System Analyst'
        },
        {
          id: 6,
          name: 'Advanced Information System Analysis and Design',
          subtitle: '(Based On Lecturer)',
          imageUrl: 'ISAD',
          status: 'In this project, I collaborated with a team to analyze XYZ company. We created user stories, use cases, domain model class diagrams, and initial table designs, including primary and foreign keys. We also built a relational database and input system. Later, we developed class diagrams, sequence diagrams, multilayer sequence diagrams, communication diagrams, and a package diagram to define the system structure and flow.',
          tech: 'Visual Paradigm, Figma',
          github: 'null',
          demo: 'https://docs.google.com/document/d/13_UeFYGdb7BxMDGQQfcNcF8m6CIB7c55/edit?usp=drive_link&ouid=102557636400634779308&rtpof=true&sd=true',
          category: 'System Analyst'
        },
        {
          id: 7,
          name: 'KopiJanji',
          imageUrl: 'coffee',
          status: 'In my project called KopiJanji, I created a project about a coffee website and also a place reservation to go to the place, where in the process of creating this website I used simple HTML, CSS, and JavaScript languages ​​to create a coffee website.',
          tech: 'HTML, CSS, JavaScript, Github, Git',
          github: 'https://github.com/Sen4Tech/kopi-janji',
          demo: 'https://kopi-janji.vercel.app/',
          category: 'Web & Application Development'
        },
        {
          id: 8,
          name: 'Calculator Web',
          imageUrl: 'calc',
          status: 'In this Calculator Website Project, I use ReactJS as the main framework to build the user interface, which ensures a dynamic and responsive experience for the user. The core calculation logic, including operations such as addition (+), subtraction (-), multiplication (*), and division (:), is implemented using a switch case structure.',
          tech: 'ReactJS, Tailwind, Github, Git',
          github: 'https://github.com/Sen4Tech/CalculatorApp',
          demo: 'https://calculator-app-kappa-ruddy.vercel.app/',
          category: 'Web & Application Development'
        },
        {
          id: 9,
          name: 'Binuskop Website',
          imageUrl: 'binuskop',
          status: 'The Binuskop project is a website development that allows users to buy movie tickets and choose seats. We use ReactJS and Bootstrap for the front-end, and ExpressJS and SequelizeJS for the back-end and for Development and Implementation We use Agile methods to ensure optimal results.',
          tech: 'ReactJS, Bootstrap, SequelizeJS, ExpressJS, Dbeaver',
          github: 'https://github.com/Sen4Tech/SOFTWARE-ENGINEERING_OKTAVIANUS',
          demo: 'null',
          category: 'Web & Application Development'
        },
        {
          id: 10,
          name: 'Villora Application',
          imageUrl: 'villora',
          status: 'Villora is a special application for renting apartments, hotels, houses or selling, this application was created with the aim of making it easier for users to find the property they want without any information limitations, this application was developed using React Native then the database uses Appwrite.',
          tech: 'React Native, TypeScript, Appwrite, Github, Git',
          github: 'https://github.com/Sen4Tech/Villora-App',
          demo: 'null',
          category: 'Web & Application Development'
        },
        {
          id: 11,
          name: 'Hand Gesture Recognition System',
          imageUrl: 'hand',
          status: 'In this project I created a hand gesture recognition, where my goal in creating this mini project is to make it easier for people who have hearing impairments to communicate with us, the project uses the Python language with Indonesian TTS',
          tech: 'Python, OpenCV, MediaPipe, Github, Git',
          github: 'https://github.com/Sen4Tech/hand-gesture-python',
          demo: 'null',
          category: 'Web & Application Development'
        },
        {
          id: 12,
          name: 'Website RentCars',
          imageUrl: 'RENT',
          status: 'In the RentCars Website Project, I use the ASP.NET Framework. In this project, I created a car rental website where users can choose the rental date, rental end date and year of manufacture of the car and then on the front end I call the data in the database using JQuery.',
          tech: 'C#, ASP.NET, SQL Server, HTML, CSS, GIthub, Git',
          github: 'https://github.com/Sen4Tech/RentCars',
          demo: 'null',
          category: 'Web & Application Development'
        },
        {
          id: 13,
          name: 'TokoNesia',
          imageUrl: 'TOKONESIA',
          status: 'E-commerce website development inspired by Tokopedia. This project uses front-end technologies including HTML for structure, CSS for styling, and JavaScript for interactivity. Focus on creating a responsive and functional user interface.',
          tech: 'HTML, CSS, JavaScript, Github, Git',
          github: 'https://github.com/Sen4Tech/TokoNesia',
          demo: 'https://toko-nesia.vercel.app/',
          category: 'Web & Application Development'
        },
        {
          id: 14,
          name: 'Nikmat Nusantara',
          imageUrl: 'NIKMANTARA',
          status: 'UI/UX design project for an Indonesian food delivery app. Involves homepage design, app concept development, and design ideation. Key features include a discount voucher system and multiple payment options. The process continues to the prototyping stage.',
          tech: 'Figma',
          github: 'null',
          demo: 'https://www.figma.com/design/Fzk68TOi2RwuwQKgzyCEcT/NIKMAT-NUSANTARA?node-id=3-382&t=3dLW7dZ55wvxtYSG-1',
          category: 'UI/UX Designer'
        },
        {
          id: 15,
          name: 'Re-design Krealogi',
          imageUrl: 'krea',
          status: 'In this Re-design project, I worked on creating materials for each class, besides that I created several pre-tests for users after completing the materials, and finally I used the discussion forum section in each class that had been attended.',
          tech: 'Figma',
          github: 'null',
          demo: 'https://www.figma.com/design/WdUoociZOQnuzbNS3SrxG0/Hi-fi?node-id=0-1&t=cRHrituypMA27UA2-1',
          category: 'UI/UX Designer'
        },
        {
          id: 16,
          name: 'SQL Server Management',
          imageUrl: 'DB',
          status: 'In this Database Project I created a database named YOcholatos. In this project I created an ERD (Entity Relationship Diagram) and I also learned to create several database tables as well as enter values ​​into the database which will then be used to process data and search for the data needed.',
          tech: 'SQL Server, Visual Paradigm, Github, Git',
          github: 'https://github.com/Sen4Tech/SQL-Server',
          demo: 'null',
          category: 'Database'
        },
        {
          id: 17,
          name: 'Java',
          imageUrl: 'Java',
          status: 'This Java Project utilizes OOP principles, features a GUI built with JavaFX, and includes data validation for reliable inputs. It connects to a database using SQL Server and integrates with PhpMyAdmin via XAMPP for efficient data management.',
          tech: 'Java, JavaFX, SQL Server, Eclipse, XAMPP, Github, Git',
          github: 'https://github.com/Sen4Tech/Java',
          demo: 'null',
          category: 'Web & Application Development'
        },
      ]
    };
  },
  computed: {
    filteredItems() {
      if (!this.selectedCategory || this.selectedCategory === 'All') {
        return this.items;
      }
      return this.items.filter(item => item.category === this.selectedCategory);
    }
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
    redirectToLink(item) {
      const targetLink =
        item.demo !== 'null'
          ? item.demo
          : item.github !== 'null'
          ? item.github
          : null;
      if (targetLink) {
        window.open(targetLink, '_blank');
      } else {
        alert('No link available for this project.');
      }
    }
  }
};
</script>

<template>
  <div class="relative z-20 max-w-6xl mx-auto px-3 md:px-6 py-6 md:py-10">
    <article>
      <!-- TITLE -->
      <header class="text-center mb-8 md:mb-10">
        <p class="text-xs uppercase tracking-[0.3em] text-[#0ef]/80 mb-2">
          Projects
        </p>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-1">
          My Project Experience
        </h2>
        <p
          class="text-sm md:text-base text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-cyan-400"
        >
          A collection of products, experiments, and real-world solutions I’ve
          built.
        </p>
      </header>

      <!-- CATEGORY FILTER -->
      <div
        class="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 fade-zoom-in"
      >
        <button
          v-for="category in categories"
          :key="category"
          @click="selectCategory(category)"
          :class="[
            'px-3 py-1.5 rounded-full text-xs md:text-sm border transition-all duration-200 backdrop-blur',
            selectedCategory === category
              ? 'bg-[#0ef] text-black border-[#0ef] shadow-[0_0_16px_rgba(14,255,255,0.4)]'
              : 'bg-[#050816]/80 text-[#0ef] border-[#0ef]/40 hover:bg-[#0ef] hover:text-black'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- GRID PROJECT -->
      <section>
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 fade-zoom-in"
        >
          <div
            v-for="(item, idx) in filteredItems"
            :key="item.id"
            class="group"
          >
            <!-- Single card with border -->
            <div
              class="item-card relative rounded-3xl bg-[#050816]/95 overflow-hidden
                     flex flex-col h-full shadow-[0_0_20px_rgba(15,23,42,0.7)]"
            >
              <!-- Subtle index badge -->
              <div class="absolute top-3 left-3 z-20">
                <div
                  class="px-2 py-0.5 rounded-full bg-black/60 border border-white/10
                         text-[10px] text-slate-300 flex items-center gap-1"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-[#0ef] shadow-[0_0_8px_rgba(14,255,255,0.8)]"
                  ></span>
                  #{{ idx + 1 }}
                </div>
              </div>

              <div class="relative w-full overflow-hidden portfolio-image">
                <img
                  :src="'img/portfolio-' + item.imageUrl + '.png'"
                  :alt="item.name"
                  loading="lazy"
                  decoding="async"
                  class="portfolio-img"
                />


                <!-- Gradient top overlay -->
                <div
                  class="pointer-events-none absolute inset-0 bg-gradient-to-t
                        from-black/35 via-transparent to-black/5"
                ></div>

                <!-- Category pill -->
                <div
                  class="absolute top-3 right-3 px-2.5 py-1 rounded-full
                        bg-black/70 backdrop-blur-sm text-[10px] uppercase
                        tracking-wide text-[#0ef] border border-[#0ef]/60"
                >
                  {{ item.category }}
                </div>

                <!-- Eye overlay -->
                <button
                  type="button"
                  class="eye-overlay"
                  @click.stop="redirectToLink(item)"
                ></button>
              </div>


              <!-- CONTENT -->
              <div
                class="flex flex-col flex-1 px-4 pt-4 pb-4 md:px-5 md:pb-5"
              >
                <!-- Title -->
                <div class="mb-3">
                  <h3
                    class="text-[1rem] md:text-[1.05rem] font-semibold text-white text-left leading-snug"
                  >
                    {{ item.name }}
                    <span
                      v-if="item.subtitle"
                      class="block text-[11px] font-normal text-slate-400 mt-0.5"
                    >
                      {{ item.subtitle }}
                    </span>
                  </h3>
                </div>

                <!-- Status / description -->
                <p
                  class="text-[11px] md:text-xs text-slate-300 text-justify flex-1 paraf"
                >
                  {{ item.status }}
                </p>

                <!-- Tech -->
                <div class="mt-3">
                  <p
                    class="text-[11px] uppercase tracking-wide text-slate-400 mb-1"
                  >
                    Tech Stack
                  </p>
                  <div class="flex flex-wrap gap-1.5">
                    <span
                      v-for="stack in item.tech.split(',')"
                      :key="stack"
                      class="px-2 py-0.5 rounded-full bg-[#0b1120]
                             border border-[#0ef]/40 text-[10px] md:text-[11px]
                             text-[#e0faff]"
                    >
                      {{ stack.trim() }}
                    </span>
                  </div>
                </div>

                <!-- Links -->
                <div class="mt-4 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    class="text-[11px] md:text-xs text-slate-400 flex items-center gap-1.5
                           group-hover:text-[#0ef] transition-colors"
                    @click="redirectToLink(item)"
                  >
                    <span>Open project</span>
                    <span
                      class="group-hover:translate-x-0.5 transition-transform"
                    >
                      ↗
                    </span>
                  </button>

                  <div class="flex items-center gap-3 text-slate-400">
                    <!-- GitHub -->
                    <a
                      v-if="item.github !== 'null'"
                      :href="item.github"
                      target="_blank"
                      rel="noreferrer"
                      title="View GitHub repository"
                      class="hover:text-[#0ef] transition-colors flex items-center gap-1"
                      @click.stop
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="16"
                        width="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        ></path>
                      </svg>
                      <span class="text-[10px] hidden md:inline">Code</span>
                    </a>

                    <!-- Demo -->
                    <a
                      v-if="item.demo !== 'null'"
                      :href="item.demo"
                      target="_blank"
                      rel="noreferrer"
                      title="View live demo"
                      class="hover:text-[#0ef] transition-colors flex items-center gap-1"
                      @click.stop
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        height="18"
                        width="18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                        ></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span class="text-[10px] hidden md:inline">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- /card -->
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style scoped>
.paraf {
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media (min-width: 768px) {
  .paraf {
    display: -webkit-box;
  }
}

/* Animasi masuk grid */
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: translateY(10px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.fade-zoom-in {
  animation: fadeZoomIn 0.6s ease-out;
}

/* Card dengan border selalu aktif */
.item-card {
  border: 1.5px solid rgba(148, 163, 184, 0.35); /* visible even no hover */
  border-radius: 1.5rem;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    border-width 0.25s ease,
    background 0.25s ease;
}

.item-card:hover {
  transform: translateY(-6px);
  border-width: 2px;
  border-color: rgba(14, 255, 255, 0.85);
  box-shadow: 0 0 26px rgba(14, 255, 255, 0.18);
  background: radial-gradient(
    circle at top left,
    rgba(14, 255, 255, 0.06),
    #050816
  );
}

/* Container gambar: fixed aspect ratio, gambar ke-crop habis */
.portfolio-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; /* bisa ganti 4/3 kalau mau lebih tinggi */
  transition: transform 0.3s ease, filter 0.3s ease;
}

.portfolio-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;      /* ini yang bikin crop habis */
  transition: transform 0.3s ease;
  transform-origin: center;
}

.item-card:hover .portfolio-image img {
  transform: scale(1.05);
}

/* Eye overlay – dibuat lebih terang */
.eye-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  inset: 0;
  opacity: 0;
  background: radial-gradient(
    circle at center,
    rgba(15, 23, 42, 0.06),
    rgba(0, 0, 0, 0.25)
  );
  /* opsional: sedikit blur biar lembut */
  backdrop-filter: blur(2px);
  transition: opacity 0.25s ease;
  cursor: pointer;
}

.eye-overlay::before {
  content: '';
  width: 45px;
  height: 45px;
  background-image: url('@/assets/eyes.svg');
  background-size: cover;
  background-repeat: no-repeat;
  filter: drop-shadow(0 0 6px rgba(14, 255, 255, 0.8));
}

.item-card:hover .eye-overlay {
  opacity: 1;
}

</style>
