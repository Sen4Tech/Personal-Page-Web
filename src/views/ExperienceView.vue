<template>
    <div class="container mx-auto p-3 md:p-8">
      <div class="flex flex-col-reverse md:flex-row relative">
        <div class="w-full md:w-2/3">
          <div class="flex flex-col gap-4 md:px-20 fade-zoom-up">
            <article v-for="experience in filteredExperiences" :key="experience.id" @click="openModal(experience)">
              <div class="flex w-full bg-[#1e1e1f] rounded-xl text-left text-white p-5 md:py-7 md:px-8 hover:bg-[#282828] items-start cursor-pointer border border-[#0ef] relative z-10">
                <div class="w-16 h-16 md:w-20 md:h-20 mr-4 flex-shrink-0">
                  <img :src="experience.companyLogo" class="rounded-lg w-full h-full object-cover" :alt="experience.company">
                </div>
                <div class="w-full">
                  <h1 class="text-sm md:text-md text-[#0ef] font-bold mb-1">{{ experience.title }}</h1>
                  <p class="text-sm text-white mb-1">{{ experience.company }}</p>
                  <p class="text-xs text-slate-400 mb-2">
                    {{ experience.startDate }} - {{ experience.endDate || 'Present' }} · {{ experience.duration }}
                  </p>
                  <p class="text-xs text-slate-400 mb-2">{{ experience.location }}</p>
                  <div class="text-sm text-slate-300 paraf">
                    {{ experience.description }}
                  </div>
                  <div class="mt-3" v-if="experience.skills && experience.skills.length">
                    <div class="flex flex-wrap gap-2">
                      <span v-for="skill in experience.skills" 
                            :key="skill" 
                            class="text-xs bg-[#282828] text-[#0ef] px-2 py-1 rounded-full border border-[#0ef]">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="w-full md:w-1/3 h-fit p-8 md:sticky md:top-24  relative z-50">
          <div class="flex flex-col text-left">
            <div class="bg-clip-text bg-gradient-to-r from-slate-100 to-cyan-500 text-transparent">
              My Experience
            </div>
            <div class="h-[1px] mt-7 mb-7 w-20 bg-[#0ef] aos-init aos-animate mr-2"></div>
            <div class="md:block">
              <div class="text-white text-lg font-semibold">Industries</div>
              <div class="mt-3 flex flex-wrap gap-1 relative z-50">
                <span v-for="industry in industries" 
                      :key="industry"
                      :class="[
                        'px-4 py-1 rounded-lg transition-all duration-300 z-50 border border-[#0ef] fadein-bot text-sm',
                        selectedIndustry === industry 
                          ? 'bg-[#0ef] text-black' 
                          : 'bg-[#282828] text-[#0ef] hover:bg-[#0ef] hover:text-black'
                      ]"
                      @click="selectedIndustry = industry">
                  {{ industry }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div v-if="showModal" class="fixed inset-0 bg-[#1e1e1f] bg-opacity-50 flex items-center justify-center z-[1000] p-4">
          <div class="bg-[#1e1e1f] p-6 rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto border border-[#0ef]">
            <div class="flex flex-col items-center mb-4">
              <div class="w-16 h-16 mb-3">
                <img :src="selectedExperience.companyLogo" :alt="selectedExperience.company" class="w-full h-full object-contain rounded-lg">
              </div>
              <div class="text-center">
                <h2 class="text-base font-bold text-[#0ef]">{{ selectedExperience.title }}</h2>
                <p class="text-white text-sm">{{ selectedExperience.company }}</p>
                <p class="text-slate-400 text-sm">{{ selectedExperience.startDate }} - {{ selectedExperience.endDate || 'Present' }} · {{ selectedExperience.duration }}</p>
                <p class="text-slate-400 text-sm">{{ selectedExperience.location }}</p>
              </div>
            </div>
            <div class="text-white text-sm leading-relaxed mb-4 whitespace-pre-line text-justify">{{ selectedExperience.description }}</div>
            <div class="mb-4" v-if="selectedExperience.skills && selectedExperience.skills.length">
              <h3 class="text-white font-semibold mb-2 text-lg text-center">Skills</h3>
              <div class="flex flex-wrap justify-center gap-2">
                <span v-for="skill in selectedExperience.skills" 
                      :key="skill" 
                      class="text-xs bg-[#282828] text-[#0ef] px-2 py-1 rounded-full border border-[#0ef]">
                  {{ skill }}
                </span>
              </div>
            </div>
            <div class="flex justify-center">
              <button @click="closeModal" class="text-[#0ef] px-4 py-2 rounded-lg hover:bg-[#0ef]/40 text-base border border-[#52B3D0]">Close</button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndustry: 'All',
      industries: ['All', 'Technology', 'Education'],
      experiences: [
      {
          id: 1,
          title: 'Software Engineer Intern',
          company: 'Sari Tirta Indonesia',
          companyLogo: 'https://media.licdn.com/dms/image/C560BAQExiLR9waT6eg/company-logo_200_200/0/1672743292777?e=2147483647&v=beta&t=005s9LsZN_HPCwchv3f2TdaMat-wsbiUIh5Q1fKq4oY',
          startDate: 'Feb 2025',
          endDate: '',
          duration: '9 months',
          location: 'Central Jakarta',
          description: '',
          skills: ['Progress ABL Edge', 'VueJS', 'PostgreSQL' , 'AppSheet', 'Git' , 'GitHub' , 'Time Management', 'Problem Solving', 'Teamwork' , 'Communication' , 'Adaptability'],
          industry: 'Technology'
        },  
        {
          id: 2,
          title: 'Member',
          company: 'GDG BINUS Malang',
          companyLogo: 'https://static.wixstatic.com/media/db7cd5_1d30c59da39b484cbc4694fca8c48353~mv2.webp',
          startDate: 'Sep 2024',
          endDate: 'Feb 2025',
          duration: '',
          location: 'West Jakarta',
          description: 'At GDSC, I learned HTML to create the structure of the web and CSS to organize its appearance. I also learned about responsive design so that the web looks good on various devices.',
          skills: ['HTML', 'CSS', 'JavaScript'],
          industry: 'Technology'
        },
        {
          id: 3,
          title: 'Education Volunteer',
          company: 'Teach For Indonesia',
          companyLogo: 'https://pbs.twimg.com/profile_images/3529569748/56f7f361a544f549a5e4b2c034d7c011_400x400.jpeg',
          startDate: 'Nov 2023',
          endDate: 'Dec 2023',
          duration: '2 months',
          location: 'Asrama Yatim & Dhuafa Yauma Kota Bambu Utara, West Jakarta',
          description: 'Campaign Topic : "Kehidupan Beragama di Era Digital"\n• Providing understanding to boarding school children on how to utilize digital technology to strengthen religious life\n• Teaching digital content filters that are in accordance with religious values\n• Building awareness about the wise and sharia-compliant use of social media\n• Providing practical guidance in carrying out worship in the digital era',
          skills: ['Public Speaking', 'Project Planning', 'Time Management'],
          industry: 'Education'
        },
        {
          id: 4,
          title: 'Education Volunteer',
          company: 'Teach For Indonesia',
          companyLogo: 'https://pbs.twimg.com/profile_images/3529569748/56f7f361a544f549a5e4b2c034d7c011_400x400.jpeg',
          startDate: 'Mar 2023',
          endDate: 'May 2023',
          duration: '3 months',
          location: 'Asrama Yatim & Dhuafa Yauma Kota Bambu Utara, West Jakarta',
          description: 'Campaign Topic : "Meningkatkan Pengetahuan Mengenai Kebudayaan Betawi Di Era Globalisasi"\n• Reintroducing Betawi culture to the younger generation\n• Increasing appreciation of Betawi cultural values\n• Encouraging the preservation of Betawi culture in the modern era\n• Building pride in local cultural identity',
          skills: ['Public Speaking', 'Project Planning', 'Time Management'],
          industry: 'Education'
        },
        {
          id: 5,
          title: 'Education Volunteer',
          company: 'Teach For Indonesia',
          companyLogo: 'https://pbs.twimg.com/profile_images/3529569748/56f7f361a544f549a5e4b2c034d7c011_400x400.jpeg',
          startDate: 'Agu 2022',
          endDate: 'Sep 2022',
          duration: '2 months',
          location: 'Central Park Mall, West Jakarta',
          description: 'Campaign Topic : "Indonesia Sehat Tanpa Korupsi"\n• Providing an understanding of the various forms of corruption and their impact on health services, infrastructure, and the quality of life of the community.\n• Encouraging transparency in the management of public funds, especially in the health sector and infrastructure development\n• Inviting the community to play an active role in monitoring and reporting corrupt practices in their environment',
          skills: ['Public Speaking', 'Project Planning', 'Time Management'],
          industry: 'Education'
        }
       
      ],
      showModal: false,
      selectedExperience: null
    }
  },
  computed: {
    filteredExperiences() {
      if (this.selectedIndustry === 'All') {
        return this.experiences;
      }
      return this.experiences.filter(exp => exp.industry === this.selectedIndustry);
    }
  },
  methods: {
    openModal(experience) {
      this.selectedExperience = experience;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedExperience = null;
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