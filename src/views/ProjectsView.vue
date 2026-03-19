<template>
  <div>
    <Hero title="Our Projects" />

    <section class="projects-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="sl">What We've Done</span>
          <h2 class="st mt-1">Our Projects</h2>
          <div class="dbar mx-auto"></div>
          <p class="lead-p mx-auto">
            IRTECO has successfully implemented irrigation and empowerment
            projects across Tanzania, transforming farming communities.
          </p>
        </div>

        <!-- Loading state -->
        <div v-if="loading" class="loader">
          <div class="spinner"></div>
          <p class="mt-3" style="color:var(--text-muted)">Loading projects...</p>
        </div>

        <!-- Error state -->
        <div v-else-if="error" class="alert-error">
          <i class="bi bi-exclamation-triangle-fill me-2"></i>
          {{ error }}
        </div>

        <!-- Empty state -->
        <div v-else-if="projects.length === 0" class="empty-state">
          <i class="bi bi-folder2-open"></i>
          <h5>No projects found</h5>
          <p>Add and publish project entries in Contentful to see them here.</p>
        </div>

        <!-- Projects grid -->
        <div v-else>
          <!-- Filter tabs -->
          <div class="filter-wrap mb-5">
            <button
              class="filter-btn"
              :class="{ active: activeFilter === 'All' }"
              @click="activeFilter = 'All'">
              All
            </button>
            <button
              v-for="cat in categories"
              :key="cat"
              class="filter-btn"
              :class="{ active: activeFilter === cat }"
              @click="activeFilter = cat">
              {{ cat }}
            </button>
          </div>

          <div class="row g-4">
            <div
              class="col-lg-4 col-md-6"
              v-for="project in filteredProjects"
              :key="project.sys.id">
              <div class="project-card h-100">
                <!-- Cover image -->
                <div class="project-img-wrap">
                  <img
                    v-if="project.fields.coverImage"
                    :src="project.fields.coverImage.fields.file.url + '?w=600&fm=webp'"
                    :alt="project.fields.title"
                  />
                  <div v-else class="project-img-placeholder">
                    <i class="bi bi-image"></i>
                  </div>
                  <!-- Status badge -->
                  <span
                    v-if="project.fields.status"
                    class="status-badge"
                    :class="project.fields.status === 'Completed' ? 'status-done' : 'status-ongoing'">
                    {{ project.fields.status }}
                  </span>
                </div>

                <div class="project-body">
                  <!-- Category + Year -->
                  <div class="d-flex align-items-center gap-2 mb-2">
                    <span class="proj-tag" v-if="project.fields.category">
                      {{ project.fields.category }}
                    </span>
                    <span class="proj-year" v-if="project.fields.year">
                      <i class="bi bi-calendar3 me-1"></i>{{ project.fields.year }}
                    </span>
                  </div>

                  <h5 class="mb-2">{{ project.fields.title }}</h5>

                  <p v-if="project.fields.description" class="proj-desc">
                    {{ project.fields.description }}
                  </p>

                  <!-- Location -->
                  <div v-if="project.fields.location" class="proj-location">
                    <i class="bi bi-geo-alt-fill me-1"></i>
                    {{ project.fields.location }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- No results for filter -->
          <div v-if="filteredProjects.length === 0 && activeFilter !== 'All'" class="empty-state mt-4">
            <i class="bi bi-funnel"></i>
            <h5>No projects in "{{ activeFilter }}"</h5>
            <button class="btn-b mt-2" @click="activeFilter = 'All'">Show All</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-strip">
      <div class="container text-center">
        <h3>Have a Project in Mind?</h3>
        <p>Get in touch with our team to discuss your agriculture and irrigation needs.</p>
        <router-link to="/contact" class="btn-hp">
          <i class="bi bi-envelope-fill me-2"></i>Contact Us
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Hero from '@/components/Hero.vue'
import { client } from '@/services/contentful'

const projects     = ref([])
const loading      = ref(true)
const error        = ref(null)
const activeFilter = ref('All')

// Fetch all projects from Contentful
onMounted(async () => {
  try {
    const response = await client.getEntries({
      content_type: 'project',       // must match your Contentful API ID exactly
      order: '-sys.createdAt',       // newest first
      include: 2,                    // resolve linked assets (images)
    })
    projects.value = response.items
  } catch (err) {
    console.error('Contentful error:', err)
    error.value = 'Failed to load projects. Please check your Contentful credentials in .env'
  } finally {
    loading.value = false
  }
})

// Extract unique categories for filter buttons
const categories = computed(() => {
  const cats = projects.value
    .map(p => p.fields.category)
    .filter(Boolean)
  return [...new Set(cats)]
})

// Filter projects by active category
const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects.value
  return projects.value.filter(p => p.fields.category === activeFilter.value)
})
</script>

<style scoped>
.projects-section { padding: 5rem 0; background: var(--off-white); }

/* Filter */
.filter-wrap { display: flex; flex-wrap: wrap; gap: .6rem; justify-content: center; }
.filter-btn  { background: #fff; border: 1.5px solid var(--border-blue); color: var(--text-muted); font-size: .88rem; font-weight: 600; padding: .45rem 1.2rem; border-radius: 50px; cursor: pointer; transition: all .2s; }
.filter-btn:hover, .filter-btn.active { background: var(--blue-mid); border-color: var(--blue-mid); color: #fff; }

/* Card */
.project-card { background: #fff; border-radius: 18px; overflow: hidden; border: 1px solid var(--border-blue); transition: box-shadow .25s, transform .25s; }
.project-card:hover { box-shadow: 0 16px 48px rgba(13,43,78,.12); transform: translateY(-6px); }

/* Image */
.project-img-wrap { position: relative; height: 210px; overflow: hidden; }
.project-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
.project-card:hover .project-img-wrap img { transform: scale(1.05); }
.project-img-placeholder { width: 100%; height: 100%; background: var(--blue-pale); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; color: var(--blue-light); }

/* Status badge */
.status-badge { position: absolute; top: .9rem; right: .9rem; font-size: .72rem; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; padding: .28rem .8rem; border-radius: 50px; }
.status-done    { background: rgba(30,108,181,.15); color: var(--blue-mid); }
.status-ongoing { background: rgba(59,143,212,.15); color: var(--blue-light); }

/* Body */
.project-body { padding: 1.4rem; }
.proj-tag  { display: inline-block; background: rgba(30,108,181,.1); color: var(--blue-mid); font-size: .72rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: .24rem .7rem; border-radius: 50px; }
.proj-year { font-size: .82rem; color: var(--text-muted); }
.proj-desc { font-size: .9rem; line-height: 1.72; color: var(--text-muted); margin-bottom: .8rem; display: -webkit-box; line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.proj-location { font-size: .84rem; color: var(--blue-mid); font-weight: 600; }
.proj-location i { color: var(--blue-mid); }

/* States */
.loader { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 300px; }
.spinner { width: 44px; height: 44px; border: 3px solid var(--blue-pale); border-top-color: var(--blue-mid); border-radius: 50%; animation: spin .8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.alert-error { background: rgba(220,53,69,.08); border: 1px solid rgba(220,53,69,.25); color: #dc3545; border-radius: 12px; padding: 1.2rem 1.5rem; font-weight: 500; }
.empty-state { text-align: center; padding: 4rem 2rem; color: var(--text-muted); }
.empty-state i { font-size: 3rem; color: var(--blue-pale); display: block; margin-bottom: 1rem; }

/* Shared */
.sl   { color: var(--blue-mid); font-size: .78rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; }
.st   { font-size: clamp(1.8rem,3vw,2.6rem); font-weight: 700; color: var(--blue-darkest); }
.dbar { width: 56px; height: 4px; background: linear-gradient(90deg,var(--blue-mid),var(--blue-accent)); border-radius: 4px; margin: .9rem 0 1.4rem; }
.lead-p { max-width: 580px; font-size: .97rem; line-height: 1.78; color: var(--text-muted); }
.btn-b { background: var(--blue-mid); color: #fff; border: none; border-radius: 50px; padding: .65rem 1.8rem; font-weight: 600; text-decoration: none; display: inline-block; transition: all .22s; cursor: pointer; }
.btn-b:hover { background: var(--blue-dark); color: #fff; transform: translateY(-2px); }
.cta-strip { background: linear-gradient(135deg,var(--blue-darkest),var(--blue-dark)); padding: 4rem 0; text-align: center; }
.cta-strip h3 { color: #fff; font-size: 1.9rem; margin-bottom: .8rem; }
.cta-strip p  { color: rgba(255,255,255,.72); max-width: 500px; margin: 0 auto 2rem; line-height: 1.78; }
.btn-hp { background: var(--blue-accent); color: var(--blue-darkest); font-weight: 700; padding: .8rem 2rem; border-radius: 50px; text-decoration: none; display: inline-block; transition: all .25s; }
.btn-hp:hover { background: #fff; color: var(--blue-dark); transform: translateY(-2px); }
</style>