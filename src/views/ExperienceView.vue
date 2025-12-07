<template>
  <div class="relative z-20 max-w-6xl mx-auto px-3 md:px-6 py-6 md:py-10">
    <div class="flex flex-col md:flex-row gap-8 md:gap-10">

      <!-- SIDEBAR / SUMMARY -->
      <aside class="w-full md:w-1/3 h-fit md:sticky md:top-24">
        <div class="bg-[#1e1e1f] border border-[#0ef]/60 rounded-2xl px-5 py-6 md:px-6 md:py-7 shadow-[0_0_30px_rgba(14,255,255,0.18)]">
          <p class="text-xs uppercase tracking-[0.3em] text-[#0ef]/80 mb-2">
            My Experience
          </p>
          <h1 class="text-[1.6rem] md:text-2xl font-semibold text-white leading-snug mb-2">
            Professional Journey
          </h1>
          <p class="text-sm text-slate-300 mb-5">
            A mix of <span class="text-[#0ef] font-medium">technology</span> and
            <span class="text-[#0ef] font-medium">education</span> experience that shaped how I think,
            build, and collaborate.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-3 mb-6">
            <div class="bg-[#18181b] border border-white/5 rounded-xl px-3 py-3">
              <p class="text-[11px] uppercase tracking-wide text-slate-400 mb-1">
                Total Experience
              </p>
              <p class="text-lg font-semibold text-white">
                {{ experiences.length }}
                <span class="text-xs text-slate-400 font-normal">Experience</span>
              </p>
            </div>
            <div class="bg-[#18181b] border border-white/5 rounded-xl px-3 py-3">
              <p class="text-[11px] uppercase tracking-wide text-slate-400 mb-1">
                Showing
              </p>
              <p class="text-lg font-semibold text-[#0ef]">
                {{ filteredExperiences.length }}
                <span class="text-xs text-slate-400 font-normal">Filtered</span>
              </p>
            </div>
          </div>

          <!-- Filter Industries -->
          <div class="relative z-50">
            <div class="text-white text-sm md:text-base font-semibold mb-2">
              Industries
            </div>

            <div class="flex flex-wrap gap-2 relative z-50">
              <span
                v-for="industry in industries"
                :key="industry"
                @click.stop="selectedIndustry = industry"
                :class="[
                  'relative z-50 px-4 py-1.5 rounded-full text-xs md:text-sm cursor-pointer pointer-events-auto border transition-all duration-200',
                  selectedIndustry === industry
                    ? 'bg-[#0ef] text-black border-[#0ef]'
                    : 'bg-[#18181b] text-[#0ef] border-[#0ef]/60 hover:bg-[#0ef] hover:text-black'
                ]"
              >
                {{ industry }}
              </span>
            </div>
          </div>
        </div>
      </aside>

      <!-- TIMELINE / LIST -->
      <main class="w-full md:w-2/3">
        <div class="fade-zoom-up space-y-5 md:space-y-6">
          <article
            v-for="experience in filteredExperiences"
            :key="experience.id"
            @click="openModal(experience)"
            class="group cursor-pointer"
          >
            <div class="flex gap-4">

              <!-- Timeline bullet -->
              <div class="hidden md:flex flex-col items-center mt-2">
                <div class="w-3 h-3 rounded-full bg-[#0ef] shadow-[0_0_12px_rgba(14,255,255,0.9)] group-hover:scale-110 transition-transform duration-200"></div>
                <div class="w-px flex-1 bg-gradient-to-b from-[#0ef]/60 via-[#0ef]/10 to-transparent"></div>
              </div>

              <!-- Card -->
              <div
                class="flex w-full bg-[#1e1e1f] rounded-2xl text-left text-white p-4 md:py-6 md:px-6
                       border border-[#0ef]/60 relative z-10
                       hover:border-[#0ef] hover:bg-[#18181b]
                       hover:shadow-[0_0_28px_rgba(14,255,255,0.35)]
                       transition-all duration-200"
              >
                <!-- Logo -->
                <div class="w-14 h-14 md:w-16 md:h-16 mr-4 flex-shrink-0">
                  <img
                    :src="experience.companyLogo"
                    class="rounded-xl w-full h-full object-cover"
                    :alt="experience.company"
                  />
                </div>

                <!-- Content -->
                <div class="w-full">
                  <div class="flex flex-wrap items-center gap-2 mb-1">
                    <h2 class="text-sm md:text-base text-[#0ef] font-semibold">
                      {{ experience.title }}
                    </h2>
                    <span
                      v-if="experience.industry"
                      class="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full
                             bg-[#0ef]/10 text-[#0ef] border border-[#0ef]/40"
                    >
                      {{ experience.industry }}
                    </span>
                  </div>

                  <p class="text-xs md:text-sm text-white mb-0.5">
                    {{ experience.company }}
                  </p>
                  <p class="text-[11px] text-slate-400 mb-1">
                    {{ formatMonthYear(experience.startDate) }} -
                    {{ experience.endDate ? formatMonthYear(experience.endDate) : 'Present' }}
                    <span v-if="getDuration(experience)"> · {{ getDuration(experience) }}</span>
                  </p>
                  <p class="text-[11px] text-slate-400 mb-2">
                    {{ experience.location }}
                  </p>

                  <p class="text-xs md:text-sm text-slate-300 paraf mb-2">
                    {{ experience.description || 'Tap to see more details about this experience.' }}
                  </p>

                  <!-- Skills Chips -->
                  <div class="mt-2" v-if="experience.skills && experience.skills.length">
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="skill in experience.skills"
                        :key="skill"
                        class="text-[10px] md:text-xs bg-[#18181b] text-[#0ef] px-2 py-1 rounded-full border border-[#0ef]/60"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>

                  <!-- Hint -->
                  <p class="mt-2 text-[10px] text-slate-500 group-hover:text-slate-300 flex items-center gap-1">
                    <span>Click to see details & photos</span>
                    <span class="inline-block group-hover:translate-x-0.5 transition-transform">↗</span>
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>

    <!-- MODAL -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4"
    >
      <div
        :class="[
          'bg-[#050509] border border-[#0ef]/80 rounded-2xl w-full mx-4 max-h-[90vh] overflow-y-auto p-5 md:p-6 shadow-[0_0_40px_rgba(14,255,255,0.35)]',
          showGallery && hasGallery ? 'max-w-5xl' : 'max-w-2xl'
        ]"
      >
        <div
          class="flex flex-col gap-6"
          :class="{ 'md:flex-row': showGallery && hasGallery }"
        >
          <!-- LEFT: DETAIL + SKILLS + BUTTON -->
          <div :class="showGallery && hasGallery ? 'md:w-2/3' : 'md:w-full'">
            <!-- Header -->
            <div class="flex flex-col items-center mb-4">
              <div class="w-16 h-16 mb-3">
                <img
                  :src="selectedExperience.companyLogo"
                  :alt="selectedExperience.company"
                  class="w-full h-full object-contain rounded-xl bg-[#0ef]/5 p-1"
                />
              </div>
              <div class="text-center">
                <h2 class="text-base md:text-lg font-bold text-[#0ef] mb-1">
                  {{ selectedExperience.title }}
                </h2>
                <p class="text-white text-sm mb-1">
                  {{ selectedExperience.company }}
                </p>
                <p class="text-slate-400 text-xs md:text-sm">
                  {{ formatMonthYear(selectedExperience.startDate) }} -
                  {{ selectedExperience.endDate ? formatMonthYear(selectedExperience.endDate) : 'Present' }}
                  <span v-if="getDuration(selectedExperience)"> · {{ getDuration(selectedExperience) }}</span>
                </p>
                <p class="text-slate-400 text-xs md:text-sm">
                  {{ selectedExperience.location }}
                </p>
              </div>
            </div>

            <!-- Description -->
            <div
              class="text-white text-sm leading-relaxed mb-4 whitespace-pre-line text-justify"
            >
              {{ selectedExperience.description || 'No detailed description yet.' }}
            </div>

            <!-- Skills Section -->
            <div class="mb-4" v-if="selectedExperience.skills && selectedExperience.skills.length">
              <h3 class="text-white font-semibold mb-2 text-base md:text-lg text-center">
                Skills
              </h3>
              <div class="flex flex-wrap justify-center gap-2">
                <span
                  v-for="skill in selectedExperience.skills"
                  :key="skill"
                  class="text-[11px] md:text-xs bg-[#18181b] text-[#0ef] px-2 py-1 rounded-full border border-[#0ef]/60"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex flex-col sm:flex-row justify-center gap-3 mt-4">
              <button
                v-if="hasGallery"
                @click="toggleGallery"
                class="text-xs md:text-sm px-4 py-2 rounded-lg border border-[#0ef] text-[#0ef]
                       hover:bg-[#0ef]/20 transition-colors duration-200"
              >
                {{ showGallery ? 'Hide Internship Photos' : 'View Internship Photos' }}
              </button>

              <button
                @click="closeModal"
                class="text-[#0ef] px-5 py-2 rounded-lg hover:bg-[#0ef]/20 text-sm md:text-base border border-[#0ef]/70"
              >
                Close
              </button>
            </div>
          </div>

          <!-- RIGHT: GALLERY (hanya muncul kalau showGallery = true) -->
          <div
            v-if="showGallery && hasGallery"
            :class="[
              'md:w-1/2 border-t md:border-t-0 md:border-l border-[#0ef]/40 pt-4 md:pt-4 md:pl-6',
              isGalleryHiding ? 'gallery-slide-out' : 'gallery-slide-in'
            ]"
          >
            <h3 class="text-white font-semibold mb-4 text-sm md:text-base text-center md:text-left">
              Internship Photo History
            </h3>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
              <div
                v-for="(photo, idx) in selectedExperience.gallery"
                :key="idx"
                class="relative group w-full aspect-[4/5]"
              >
                <div class="w-full h-full rounded-2xl overflow-hidden border border-[#0ef]/40">
                  <img
                    :src="photo"
                    class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
                    :alt="`Internship photo ${idx + 1}`"
                  />
                </div>

                <div
                  class="absolute inset-0 rounded-2xl bg-black/40 opacity-0 group-hover:opacity-100
                        flex items-center justify-center text-[10px] text-white transition-opacity pointer-cursor"
                >
                  Photo {{ idx + 1 }}
                </div>
              </div>
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
      selectedIndustry: 'All',
      industries: ['All', 'Technology', 'Education'],
      experiences: [
        {
          id: 1,
          title: 'Software Engineer Intern',
          company: 'Sari Tirta Group',
          companyLogo:
            'https://media.licdn.com/dms/image/C560BAQExiLR9waT6eg/company-logo_200_200/0/1672743292777?e=2147483647&v=beta&t=005s9LsZN_HPCwchv3f2TdaMat-wsbiUIh5Q1fKq4oY',
          startDate: 'Feb 2025',
          endDate: '',
          location: 'Central Jakarta',
        description:
          '• Developed the frontend for an internal employee attendance system using Vue.js, improving workflow and usability across subsidiary companies.\n' +
          '• Took ownership of the company’s Procurement System, handling both frontend development and backend maintenance using Progress ABL.\n' +
          '• Resolved long-standing bugs and implemented new features to streamline purchasing, approvals, and document handling.\n' +
          '• Built an HR Attendance Dashboard to automate attendance tracking and support accurate payroll calculations.\n' +
          '• Created APIs to support frontend data requirements and improve system integration.\n' +
          '• Worked with PostgreSQL to manage, structure, and integrate backend data for system-wide functionalities.\n',

          skills: [
            'Progress ABL Edge',
            'VueJS',
            'PostgreSQL',
            'AppSheet',
            'Git',
            'GitHub',
            'Time Management',
            'Problem Solving',
            'Teamwork',
            'Communication',
            'Adaptability'
          ],
          industry: 'Technology',
          gallery: [
            '/img/intern/1.jpeg',
            '/img/intern/2.jpeg',
            '/img/intern/3.jpeg',
            '/img/intern/4.jpeg',
            '/img/intern/5.jpeg',
            '/img/intern/6.jpeg',
            '/img/intern/7.jpeg'
          ]
        },
        {
          id: 2,
          title: 'Member',
          company: 'GDG BINUS Malang',
          companyLogo:
            'https://static.wixstatic.com/media/db7cd5_1d30c59da39b484cbc4694fca8c48353~mv2.webp',
          startDate: 'Sep 2024',
          endDate: 'Feb 2025',
          location: 'West Jakarta',
          description:
            'At GDSC, I learned HTML to create the structure of the web and CSS to organize its appearance. I also learned about responsive design so that the web looks good on various devices.',
          skills: ['HTML', 'CSS', 'JavaScript'],
          industry: 'Technology',
          gallery: []
        },
        {
          id: 3,
          title: 'Education Volunteer',
          company: 'Teach For Indonesia',
          companyLogo:
            'https://pbs.twimg.com/profile_images/3529569748/56f7f361a544f549a5e4b2c034d7c011_400x400.jpeg',
          startDate: 'Nov 2023',
          endDate: 'Dec 2023',
          location:
            'Asrama Yatim & Dhuafa Yauma Kota Bambu Utara, West Jakarta',
          description:
            'Campaign Topic: "Kehidupan Beragama di Era Digital"\n• Providing understanding to boarding school children on how to utilize digital technology to strengthen religious life\n• Teaching digital content filters that are in accordance with religious values\n• Building awareness about the wise and sharia-compliant use of social media\n• Providing practical guidance in carrying out worship in the digital era',
          skills: ['Public Speaking', 'Project Planning', 'Time Management'],
          industry: 'Education',
          gallery: [
            '/img/volunteer/cb3-1.jpg',
            '/img/volunteer/cb3-2.jpg',
            '/img/volunteer/cb3-3.jpg',
          ]
        },
        {
          id: 4,
          title: 'Education Volunteer',
          company: 'Teach For Indonesia',
          companyLogo:
            'https://pbs.twimg.com/profile_images/3529569748/56f7f361a544f549a5e4b2c034d7c011_400x400.jpeg',
          startDate: 'Mar 2023',
          endDate: 'May 2023',
          location:
            'Asrama Yatim & Dhuafa Yauma Kota Bambu Utara, West Jakarta',
          description:
            'Campaign Topic: "Meningkatkan Pengetahuan Mengenai Kebudayaan Betawi Di Era Globalisasi"\n• Reintroducing Betawi culture to the younger generation\n• Increasing appreciation of Betawi cultural values\n• Encouraging the preservation of Betawi culture in the modern era\n• Building pride in local cultural identity',
          skills: ['Public Speaking', 'Project Planning', 'Time Management'],
          industry: 'Education',
          gallery: [
             '/img/volunteer/cb2.jpg',
          ]
        },
        {
          id: 5,
          title: 'Education Volunteer',
          company: 'Teach For Indonesia',
          companyLogo:
            'https://pbs.twimg.com/profile_images/3529569748/56f7f361a544f549a5e4b2c034d7c011_400x400.jpeg',
          startDate: 'Agu 2022',
          endDate: 'Sep 2022',
          duration: '2 months',
          location: 'Central Park Mall, West Jakarta',
          description:
            'Campaign Topic: "Indonesia Sehat Tanpa Korupsi"\n• Providing an understanding of the various forms of corruption and their impact on health services, infrastructure, and the quality of life of the community.\n• Encouraging transparency in the management of public funds, especially in the health sector and infrastructure development\n• Inviting the community to play an active role in monitoring and reporting corrupt practices in their environment',
          skills: ['Public Speaking', 'Project Planning', 'Time Management'],
          industry: 'Education',
          gallery: []
        }
      ],
      showModal: false,
      selectedExperience: null,
      showGallery: false,
      isGalleryHiding: false
    }
  },
  computed: {
    filteredExperiences() {
      if (this.selectedIndustry === 'All') {
        return this.experiences
      }
      return this.experiences.filter(
        (exp) => exp.industry === this.selectedIndustry
      )
    },
    hasGallery() {
      return (
        this.selectedExperience &&
        this.selectedExperience.gallery &&
        this.selectedExperience.gallery.length > 0
      )
    }
  },
  methods: {
    parseMonthYear(label) {
      if (!label) return null

      const parts = label.trim().split(/\s+/)
      if (parts.length < 2) return null

      const [rawMonth, rawYear] = parts

      const key = rawMonth.slice(0, 3).toLowerCase()

      const map = {
        jan: 0,
        feb: 1,
        mar: 2,
        apr: 3,
        may: 4,
        mei: 4,
        jun: 5,
        jul: 6,
        aug: 7,
        agu: 7, 
        sep: 8,
        oct: 9,
        okt: 9, 
        nov: 10,
        dec: 11,
        des: 11 
      }

      const month = map[key]
      const year = parseInt(rawYear, 10)

      if (month === undefined || isNaN(year)) return null

      return new Date(year, month, 1)
    },

    formatMonthYear(label) {
      const date = this.parseMonthYear(label)
      if (!date) return label || ''

      return date.toLocaleString('en-US', {
        month: 'short',
        year: 'numeric'
      })
    },

    getDuration(experience) {
      if (!experience) return ''

      const start = this.parseMonthYear(experience.startDate)
      if (!start) return ''

      const end = experience.endDate
        ? this.parseMonthYear(experience.endDate)
        : new Date()

      if (!end) return ''

      let years = end.getFullYear() - start.getFullYear()
      let months = end.getMonth() - start.getMonth()

      if (months < 0) {
        years -= 1
        months += 12
      }

      // kalau karena data salah sampai end < start
      if (years < 0 || (years === 0 && months < 0)) return ''

      const parts = []
      if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`)
      if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`)

      if (parts.length === 0) parts.push('< 1 month')

      return parts.join(' ')
    },

    openModal(experience) {
      this.selectedExperience = experience
      this.showModal = true
      // reset state gallery setiap buka modal
      this.showGallery = false
      this.isGalleryHiding = false
    },
    closeModal() {
      this.showModal = false
      this.selectedExperience = null
      this.showGallery = false
      this.isGalleryHiding = false
    },
    toggleGallery() {
      if (!this.hasGallery) return

      // kalau lagi kelihatan → mainkan animasi keluar dulu
      if (this.showGallery) {
        this.isGalleryHiding = true

        // setelah animasi selesai (0.35s), baru bener2 di-hide
        setTimeout(() => {
          this.showGallery = false
          this.isGalleryHiding = false
        }, 350) // samakan dengan durasi animasi CSS
      } else {
        // kalau lagi hidden → langsung show dengan animasi masuk
        this.showGallery = true
        this.isGalleryHiding = false
      }
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
    transform: scale(0.95) translateY(8px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.fade-zoom-up {
  animation: fadeZoomUp 0.6s ease-out;
}

/* slide in gallery dari kanan */
@keyframes slideInRight {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.gallery-slide-in {
  animation: slideInRight 0.35s ease-out forwards;
}

@keyframes slideOutRight {
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(20px);
  }
}

.gallery-slide-out {
  animation: slideOutRight 0.35s ease-in forwards;
}

</style>
