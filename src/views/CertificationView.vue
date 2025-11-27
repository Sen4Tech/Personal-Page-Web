<template>
  <div class="relative z-20 max-w-6xl mx-auto px-3 md:px-6 py-6 md:py-10">
    <div class="flex flex-col-reverse md:flex-row gap-8 md:gap-10">

      <!-- LEFT: LIST CERTIFICATION -->
      <main class="w-full md:w-2/3">
        <div class="space-y-4 md:space-y-5 fade-zoom-up">
          <article
            v-for="certificate in filteredCertificates"
            :key="certificate.id"
            @click="openModal(certificate)"
            class="group cursor-pointer"
          >
            <div
              class="relative flex w-full items-center gap-4 md:gap-6
                     bg-[#111216] rounded-2xl text-left text-white
                     p-4 md:p-5 border border-[#0ef]/40
                     hover:border-[#0ef] hover:bg-[#171821]
                     hover:shadow-[0_0_28px_rgba(14,255,255,0.25)]
                     transition-all duration-300"
            >
              <!-- Badge -->
              <div
                class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0
                       rounded-xl overflow-hidden bg-[#050509]
                       border border-[#0ef]/40 flex items-center justify-center"
              >
                <img
                  :src="certificate.badgeImage"
                  :alt="certificate.name"
                  class="w-full h-full object-contain"
                />
              </div>

              <!-- Content -->
              <div class="flex-1">
                <div class="flex flex-wrap items-center gap-2 mb-1">
                  <h2 class="text-sm md:text-base font-semibold text-[#0ef]">
                    {{ certificate.name }}
                  </h2>
                  <span
                    class="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full
                           bg-[#0ef]/10 text-[#0ef] border border-[#0ef]/40"
                  >
                    {{ certificate.category }}
                  </span>
                </div>

                <p class="text-[11px] text-slate-400 mb-1">
                  {{ certificate.issuer }} · {{ certificate.issueDate }}
                </p>

                <p class="text-xs md:text-sm text-slate-200 paraf">
                  {{ certificate.description }}
                </p>

                <div class="mt-3 flex items-center justify-between">
                  <button
                    class="flex items-center gap-1 text-[11px] md:text-xs text-slate-400 group-hover:text-[#0ef]"
                  >
                    <span>View details</span>
                    <span class="group-hover:translate-x-0.5 transition-transform">↗</span>
                  </button>

                  <a
                    v-if="certificate.credentialUrl"
                    :href="certificate.credentialUrl"
                    target="_blank"
                    @click.stop
                    class="text-[11px] md:text-xs text-[#0ef] hover:underline"
                  >
                    View Credential
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      <!-- RIGHT: SIDEBAR -->
      <aside class="w-full md:w-1/3 h-fit md:sticky md:top-24">
        <div
          class="bg-[#111216] border border-[#0ef]/40 rounded-2xl
                 px-5 py-6 md:px-6 md:py-7
                 shadow-[0_0_30px_rgba(14,255,255,0.18)]"
        >
          <p class="text-xs uppercase tracking-[0.3em] text-[#0ef]/80 mb-2">
            Certificates
          </p>
          <h1 class="text-[1.4rem] md:text-2xl font-semibold text-white leading-snug mb-2">
            My Certifications
          </h1>
          <p class="text-sm text-slate-300 mb-5">
            A collection of
            <span class="text-[#0ef] font-medium">cloud</span>,
            <span class="text-[#0ef] font-medium">web development</span>, and
            <span class="text-[#0ef] font-medium">UI/UX</span> achievements that show
            my continuous learning journey.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-3 mb-6">
            <div class="bg-[#18181b] border border-white/5 rounded-xl px-3 py-3">
              <p class="text-[11px] uppercase tracking-wide text-slate-400 mb-1">
                Total
              </p>
              <p class="text-lg font-semibold text-white">
                {{ certificates.length }}
                <span class="text-xs text-slate-400 font-normal">Certs</span>
              </p>
            </div>
            <div class="bg-[#18181b] border border-white/5 rounded-xl px-3 py-3">
              <p class="text-[11px] uppercase tracking-wide text-slate-400 mb-1">
                Showing
              </p>
              <p class="text-lg font-semibold text-[#0ef]">
                {{ filteredCertificates.length }}
                <span class="text-xs text-slate-400 font-normal">Filtered</span>
              </p>
            </div>
          </div>

          <!-- Filter Categories -->
          <div>
            <div class="text-white text-sm md:text-base font-semibold mb-2">
              Categories
            </div>
            <div class="flex flex-wrap gap-2 relative z-50">
              <span
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :class="[
                  'px-3 py-1.5 rounded-full text-xs md:text-sm cursor-pointer border transition-all duration-200',
                  selectedCategory === category
                    ? 'bg-[#0ef] text-black border-[#0ef]'
                    : 'bg-[#18181b] text-[#0ef] border-[#0ef]/60 hover:bg-[#0ef] hover:text-black'
                ]"
              >
                {{ category }}
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <!-- MODAL -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4"
    >
      <div
        class="bg-[#050509] border border-[#0ef]/80 rounded-2xl
               w-full mx-4 max-w-3xl max-h-[90vh] overflow-y-auto
               p-5 md:p-6 shadow-[0_0_40px_rgba(14,255,255,0.35)]"
      >
        <div class="flex flex-col md:flex-row gap-5">
          <!-- Badge besar -->
          <div class="w-full md:w-1/3 flex justify-center md:justify-start">
            <div
              class="w-32 h-32 md:w-40 md:h-40 rounded-2xl border border-[#0ef]/50
                     bg-[#050509] flex items-center justify-center"
            >
              <img
                :src="selectedCertificate.badgeImage"
                :alt="selectedCertificate.name"
                class="w-full h-full object-contain"
              />
            </div>
          </div>

          <!-- Detail -->
          <div class="w-full md:w-2/3">
            <h2 class="text-lg md:text-2xl font-bold text-[#0ef] mb-2">
              {{ selectedCertificate.name }}
            </h2>
            <p class="text-slate-300 text-xs md:text-sm mb-1">
              {{ selectedCertificate.issuer }} · {{ selectedCertificate.issueDate }}
            </p>
            <p class="text-sm md:text-base text-slate-100 text-justify mb-4">
              {{ selectedCertificate.description }}
            </p>

            <div class="flex flex-col sm:flex-row justify-between items-center gap-3 mt-2">
              <a
                v-if="selectedCertificate.credentialUrl"
                :href="selectedCertificate.credentialUrl"
                target="_blank"
                class="text-[#0ef] hover:underline text-sm md:text-base"
              >
                View Credential
              </a>
              <button
                @click="closeModal"
                class="text-[#0ef] px-4 py-2 rounded-lg hover:bg-[#0ef]/20
                       text-sm md:text-base border border-[#0ef]/70 ml-auto"
              >
                Close
              </button>
            </div>
          </div>
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
    transform: translateY(8px) scale(0.97);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.fade-zoom-up {
  animation: fadeZoomUp 0.6s ease-out;
}
</style>
