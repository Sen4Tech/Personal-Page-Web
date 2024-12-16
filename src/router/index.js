import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('../views/PortfolioView.vue'),
    meta: { title: 'Project' }
  },
  {
    path: '/certification',
    name: 'certification',
    component: () => import('../views/CertificationView.vue'),
    meta: { title: 'Certification' }
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('../views/ExperienceView.vue'),
    meta: { title: 'Experience' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' Oktavianus'; 
  next();
});


export default router
