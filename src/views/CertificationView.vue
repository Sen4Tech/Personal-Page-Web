<template>
  <div class="container mx-auto p-3 md:p-8">
    <div class="flex flex-col-reverse md:flex-row relative">
      <div class="w-full md:w-2/3">
        <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
          <article 
            v-for="certificate in filteredCertificates" 
            :key="certificate.id" 
            @click="openModal(certificate)"
            class="certificate-item">
            <div class="flex w-full bg-[#1e1e1f] rounded-xl text-left text-white p-5 md:py-7 md:px-8 hover:bg-[#282828] items-center cursor-pointer border border-[#0ef] relative z-10">
              <div class="w-full pr-4">
                <div class="text-xs mb-1 text-slate-400 flex items-center italic">
                  <div class="h-[1px] w-20 bg-[#0ef] md:w-5 aos-init aos-animate mr-2"></div> 
                  {{ certificate.issueDate }}
                </div>
                <h1 class="text-sm md:text-md text-[#0ef] font-bold mb-2 paraf">{{ certificate.name }}</h1>
                <div class="text-sm hidden md:block paraf">
                  <p class="mb-1">Issuer: {{ certificate.issuer }}</p>
                  <p>{{ certificate.description }}</p>
                </div>
                <div class="mt-2">
                  <a 
                    :href="certificate.credentialUrl" 
                    target="_blank" 
                    class="text-xs text-[#0ef] hover:underline credential-link"
                    v-if="certificate.credentialUrl"
                    @click.stop
                  >
                    View Credential
                  </a>
                </div>
              </div>
              <div>
                <div class="w-20 h-20 md:w-28 flex items-center md:h-28">
                  <img :src="certificate.badgeImage" class="rounded-lg md:rounded-xl" :alt="certificate.name">
                </div>
              </div>
            </div>
          </article>
        </div>
  </div>
      <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24 relative z-50">
        <!-- Sidebar -->
        <div class="flex flex-col text-left">
          <div class="bg-clip-text bg-gradient-to-r from-slate-100 to-cyan-500 text-transparent">
            My Certifications & Achievements
          </div>
          <div class="h-[1px] mt-7 mb-7 w-20 bg-[#0ef] aos-init aos-animate mr-2"></div>
          <div class="md:block">
            <div class="text-white text-lg font-semibold">Categories</div>
            <div class="mt-3 flex flex-wrap gap-1 relative z-50 cursor-pointer">
              <span v-for="category in categories" 
                    :key="category"
                    :class="[
                         'px-4 py-1 rounded-lg transition-all duration-300 z-50 border border-[#0ef] fadein-bot text-sm',
                      selectedCategory === category 
                          ? 'bg-[#0ef] text-black' 
                          : 'bg-[#282828] text-[#0ef] hover:bg-[#0ef] hover:text-black'
                    ]"
                    @click="selectedCategory = category">
                {{ category }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
  <div v-if="showModal" class="fixed inset-0 bg-[#1e1e1f] bg-opacity-50 flex items-center justify-center z-50 p-4 z-[1000]">
    <div class="bg-[#1e1e1f] p-6 rounded-xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-[#0ef]">
      <h2 class="text-xl md:text-2xl font-bold text-[#0ef] mb-4">{{ selectedCertificate.name }}</h2>
      <div class="flex flex-col md:flex-row md:space-x-6">
        <div class="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
          <img :src="selectedCertificate.badgeImage" :alt="selectedCertificate.name" class="w-48 h-48 md:w-full md:h-auto object-contain ">
        </div>
        <div class="w-full md:w-2/3 text-center md:text-left md:mt-5">
          <p class="text-white text-lg md:text-xl mb-2"><strong>Issuer:</strong> {{ selectedCertificate.issuer }}</p>
          <p class="text-white text-lg md:text-xl mb-2"><strong>Issue Date:</strong> {{ selectedCertificate.issueDate }}</p>
          <p class="text-white text-ml text-justify ">{{ selectedCertificate.description }}</p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center mt-6">
        <a v-if="selectedCertificate.credentialUrl" 
           :href="selectedCertificate.credentialUrl" 
           target="_blank" 
           class="text-[#0ef] hover:underline text-base mb-4 md:mb-0">
          View Credential
        </a>
        <button @click="closeModal" class="text-[#0ef] px-4 py-2 rounded-lg hover:bg-[#0ef]/40 text-base ml-auto border border-[#52B3D0]">Close</button>
      </div>
    </div>
    </div>
  </div>
</template>
 
    


<script>
export default {
  data() {
    return {
      selectedCategory: 'All',
      categories: ['All', 'Cloud Computing', 'Web Development', 'UI/UX Design'],
      certificates: [
      {
          id: 1,
          name: 'AWS Certified Cloud Practitioner',
          issuer: 'Amazon Web Services',
          issueDate: 'January 2025',
          description: 'In the Process of Getting this Certification, I followed AWS Globally to test my knowledge and understanding in cloud computing.',
          credentialUrl: 'https://www.credly.com/earner/earned/badge/708bb227-e0e1-4de5-bf89-c31367888345',
          badgeImage: 'img/Badge-Global.png',
          category: 'Cloud Computing'
        },
      {
          id: 2,
          name: 'AWS Academy Data Architecting',
          issuer: 'Amazon Web Services',
          issueDate: 'December 2024',
          description: 'In Cloud Architecting, I learned to design and implement scalable, secure, and cost-efficient cloud infrastructure solutions. This includes selecting appropriate cloud services, creating architectural blueprints, and ensuring compliance with industry standards and best practices. My experience involves optimizing performance, enhancing system reliability, and enabling seamless integration for diverse business needs.',
          credentialUrl: 'https://www.credly.com/earner/earned/badge/d0642114-1f2a-4355-a05a-7ed41ef8d3a7',
          badgeImage: 'img/Badge-architecting.png',
          category: 'Cloud Computing'
        },
        {
          id: 3,
          name: 'AWS Academy Data Engineering',
          issuer: 'Amazon Web Services',
          issueDate: 'October 2024',
          description: 'In Cloud Engineering, I learned to build and manage scalable data pipelines in cloud environments, ensuring efficient data processing, storage, and integration for analytics and machine learning tasks.',
          credentialUrl: 'https://www.credly.com/earner/earned/badge/622cc64a-ac8f-418c-98de-0319182281c8',
          badgeImage: 'img/Badge-data-engineering.png',
          category: 'Cloud Computing'
        },
        {
          id: 4,
          name: 'AWS Academy Machine Learning Foundations',
          issuer: 'Amazon Web Services',
          issueDate: 'October 2024',
          description: 'In Cloud Machine Learning, I learned to build and deploy machine learning models on cloud platforms, ensuring optimal scalability, efficiency, and data integration for various analytical and predictive tasks.',
          credentialUrl:'https://www.credly.com/earner/earned/badge/f505b404-7510-4ac6-8c05-efe2b4450e0d',
          badgeImage: 'img/Badge-ML.png',
          category: 'Cloud Computing'
        },
        {
          id: 5,
          name: 'Web Developer Series 6.0 - Frontend',
          issuer: 'Dibimbing.Id',
          issueDate: 'October 2024',
          description: 'As a Web Developer, I learned to build and maintain websites, using technologies such as HTML, CSS, and JavaScript to create responsive and functional interfaces, and ensure optimal performance and user experience.',
          badgeImage: 'img/Sertifikat Dibmbing.png',
          category: 'Web Development'
        },
        {
          id: 6,
          name: 'Full Stack Web Development',
          issuer: 'Rakamin Academy',
          issueDate: 'September 2024',
          description: 'In Full Stack Web Development, I learned to create a simple website using only HTML and CSS.',
          badgeImage: 'img/Fullstack.png',
          category: 'Web Development'
        },
        {
          id: 7,
          name: 'AWS Academy Cloud Foundations',
          issuer: 'Amazon Web Services',
          issueDate: 'June 2024',
          description: 'In Cloud Foundations, I learned the fundamentals of cloud infrastructure, including resource management, security, networking, and storage, to support scalability and efficiency in a cloud environment.',
          credentialUrl:'https://www.credly.com/badges/db938bb8-fc43-41d9-a49f-79db5badedb1/print',
          badgeImage: 'img/Badge-CF.png',
          category: 'Cloud Computing'
        },
        {
          id: 8,
          name: 'Competition FINDIT 2024',
          issuer: 'KMTETI FT UGM',
          issueDate: 'May 2024',
          description: 'In UI/UX Design, I learned to design attractive and intuitive interfaces, and create optimal user experiences with a focus on ease of navigation, responsiveness, and user needs.',
          badgeImage: 'img/FINDIT2024.jpg',
          category: 'UI/UX Design'
        },
      ],
      showModal: false,
      selectedCertificate: null
    }
  },
  computed: {
    filteredCertificates() {
      if (this.selectedCategory === 'All') {
        return this.certificates;
      }
      return this.certificates.filter(cert => cert.category === this.selectedCategory);
    }
  },
  methods: {
    openModal(certificate) {
      this.selectedCertificate = certificate;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedCertificate = null;
    }
  }
}
</script>

<style scoped>
.paraf {
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
@media (min-width: 768px) { 
  .paraf {
    display: -webkit-box;
  }
}
@keyframes fadeZoomUp {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.fade-zoom-up {
  animation: fadeZoomUp 1s ease-in-out;
}


</style>