
import { createRouter, createWebHistory } from 'vue-router'
import HomeView     from '@/views/HomeView.vue'
import AboutView    from '@/views/AboutView.vue'
import TeamView     from '@/views/TeamView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView  from '@/views/ContactView.vue'
import ProjectsView  from '@/views/ProjectsView.vue'
import BlogView      from '@/views/BlogView.vue'
import BlogPostView  from '@/views/BlogPostView.vue'

const routes = [
  { path: '/',           name: 'home',     component: HomeView },
  { path: '/about',      name: 'about',    component: AboutView },
  { path: '/team',       name: 'team',     component: TeamView },
  { path: '/services',   name: 'services', component: ServicesView },
  { path: '/contact',    name: 'contact',  component: ContactView },
  { path: '/projects',   name: 'projects', component: ProjectsView },
  { path: '/blog',       name: 'blog',     component: BlogView },
  { path: '/blog/:slug', name: 'blogPost', component: BlogPostView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router

