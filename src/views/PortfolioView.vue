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
        'Software Engineering',
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
          demo: 'https://personal-page-nine.vercel.app/',
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
          category: 'Software Engineering'
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
    const targetLink = item.demo !== 'null' ? item.demo : item.github !== 'null' ? item.github : null;
    if (targetLink) {
      window.open(targetLink, '_blank');
    } else {
      alert('No link available for this project.');
    }
  }
}
}
</script>

<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>My Project Experience</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-cyan-400">
            Explore My Project so far
          </h4>
        </div>
      </header>
      
      <!-- Category Selector -->
    <div class="flex flex-wrap justify-center gap-2 mb-6 hidden sm:flex md:text-sm">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="selectCategory(category)"
        :class="[ 
          'px-4 py-2 rounded-lg transition-all duration-300 z-50 border border-[#0ef] fadein-bot',
          selectedCategory === category 
            ? 'bg-[#0ef] text-black' 
            : 'bg-[#282828] text-[#0ef] hover:bg-[#0ef] hover:text-black'
        ]"
      >
        {{ category }}
      </button>
    </div>



      <section>
        <div>
          <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
            <div 
              v-for="item in filteredItems" 
              :key="item.id" 
              class="portfolio-item-wrapper"
            >
              <div class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#0ef] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5 h-full">
                <div class="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
                  <div class="portfolio-image relative">
                    <img 
                      alt="Project Image" 
                      loading="lazy" 
                      decoding="async" 
                      data-nimg="1" 
                      class="drop-shadow-xl rounded rounded-xl portfolio-image max-h-48 w-full object-cover"
                      :src="'img/portfolio-' + item.imageUrl + '.png'"
                    >
                    <div class="eye-overlay" @click="redirectToLink(item)"></div>
                  </div>
                </div>
                <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg flex-grow">
                  <div class="title-text font-medium text-secondary text-center md:text-base">{{ item.name }}
                    <br>
                    <span class="text-sm font-light">{{ item.subtitle }}</span>
                  </div>
                  <div class="w-full text-justify text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm flex-grow">
                    {{ item.status }}
                  </div>
                  <div class="w-full mt-4 text-normal text-sm text-left text-[#0ef]">
                    {{ item.tech }}
                  </div>
                  <div class="w-full flex justify-end mt-auto">
                    <div class="flex cursor-pointer items-end gap-2 text-primary">
                      <a 
                        v-if="item.github !== 'null'" 
                        :href="item.github" 
                        target="_blank" 
                        rel="noreferrer"
                        title="View github repository" 
                        class="transition-all hover:text-accent"
                      >
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a 
                        v-if="item.demo !== 'null'" 
                        :href="item.demo" 
                        target="_blank" 
                        rel="noreferrer"
                        title="View finished project" 
                        class="transition-all hover:text-accent"
                      >
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
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

.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}

.item-card .portfolio-image {
  position: relative;
  overflow: hidden; 
  transition: transform 0.3s ease;
}

.item-card:hover .portfolio-image {
  filter: blur(2px); 
  transform: none;
  border-radius: 10px;
}

.item-card .portfolio-image img {
  transition: transform 0.3s ease;
  transform-origin: center;
  max-height: 300px;  
}

.item-card:hover .portfolio-image img {
  transform: scale(1); 
}

.item-card:hover .portfolio-image {
  transform: scale(1.05); 
  filter: blur(1px); 
  border-radius: 10px;
}

.item-card .eye-overlay {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45px;
  height: 45px;
  background-image: url('@/assets/eyes.svg');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 20;
}

.item-card:hover .portfolio-image .eye-overlay {
  display: block;
}

</style>