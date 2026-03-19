<template>
  <div>
    <Hero title="Blog" />

    <section class="blog-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="sl">Latest Updates</span>
          <h2 class="st mt-1">News &amp; Articles</h2>
          <div class="dbar mx-auto"></div>
          <p class="lead-p mx-auto">
            Insights, field updates and agriculture knowledge from the IRTECO team.
          </p>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="loader">
          <div class="spinner"></div>
          <p class="mt-3" style="color:var(--text-muted)">Loading articles...</p>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="alert-error">
          <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ error }}
        </div>

        <!-- Empty -->
        <div v-else-if="posts.length === 0" class="empty-state">
          <i class="bi bi-newspaper"></i>
          <h5>No articles yet</h5>
          <p>Add and publish blogPost entries in Contentful to see them here.</p>
        </div>

        <!-- Posts grid -->
        <div v-else>
          <!-- Featured post (first one) -->
          <div class="featured-post mb-5" v-if="posts[0]">
            <div class="row g-0 align-items-center">
              <div class="col-lg-6">
                <div class="feat-img-wrap">
                  <img
                    v-if="posts[0].fields.coverImage"
                    :src="posts[0].fields.coverImage.fields.file.url + '?w=800&fm=webp'"
                    :alt="posts[0].fields.title"
                  />
                  <div v-else class="feat-img-placeholder">
                    <i class="bi bi-image"></i>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="feat-body">
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <span class="blog-tag" v-if="posts[0].fields.category">
                      {{ posts[0].fields.category }}
                    </span>
                    <span class="feat-featured-label">Featured</span>
                  </div>
                  <h2 class="feat-title">{{ posts[0].fields.title }}</h2>
                  <p class="feat-excerpt" v-if="posts[0].fields.excerpt">
                    {{ posts[0].fields.excerpt }}
                  </p>
                  <div class="feat-meta">
                    <span v-if="posts[0].fields.author">
                      <i class="bi bi-person-fill me-1"></i>{{ posts[0].fields.author }}
                    </span>
                    <span v-if="posts[0].fields.publishedDate">
                      <i class="bi bi-calendar3 me-1"></i>{{ formatDate(posts[0].fields.publishedDate) }}
                    </span>
                  </div>
                  <router-link
                    :to="'/blog/' + posts[0].fields.slug"
                    class="btn-hp mt-3">
                    Read Article <i class="bi bi-arrow-right ms-1"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Rest of posts -->
          <div class="row g-4" v-if="posts.length > 1">
            <div
              class="col-lg-4 col-md-6"
              v-for="post in posts.slice(1)"
              :key="post.sys.id">
              <div class="blog-card h-100">
                <div class="blog-img-wrap">
                  <img
                    v-if="post.fields.coverImage"
                    :src="post.fields.coverImage.fields.file.url + '?w=500&fm=webp'"
                    :alt="post.fields.title"
                  />
                  <div v-else class="blog-img-placeholder">
                    <i class="bi bi-image"></i>
                  </div>
                </div>
                <div class="blog-body">
                  <div class="d-flex align-items-center gap-2 mb-2">
                    <span class="blog-tag" v-if="post.fields.category">
                      {{ post.fields.category }}
                    </span>
                    <span class="blog-date" v-if="post.fields.publishedDate">
                      {{ formatDate(post.fields.publishedDate) }}
                    </span>
                  </div>
                  <h5 class="blog-title">{{ post.fields.title }}</h5>
                  <p class="blog-excerpt" v-if="post.fields.excerpt">
                    {{ post.fields.excerpt }}
                  </p>
                  <div class="blog-footer">
                    <span class="blog-author" v-if="post.fields.author">
                      <i class="bi bi-person-fill me-1"></i>{{ post.fields.author }}
                    </span>
                    <router-link :to="'/blog/' + post.fields.slug" class="read-more">
                      Read More <i class="bi bi-arrow-right ms-1"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Hero from '@/components/Hero.vue'
import { client } from '@/services/contentful'

const posts   = ref([])
const loading = ref(true)
const error   = ref(null)

onMounted(async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',       // must match your Contentful API ID
      order: '-fields.publishedDate', // newest first
      include: 2,
    })
    posts.value = response.items
  } catch (err) {
    console.error('Contentful error:', err)
    error.value = 'Failed to load blog posts. Check your Contentful credentials in .env'
  } finally {
    loading.value = false
  }
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  })
}
</script>

<style scoped>
.blog-section { padding: 5rem 0; background: var(--off-white); }

/* Featured */
.featured-post { background: #fff; border-radius: 20px; overflow: hidden; border: 1px solid var(--border-blue); box-shadow: 0 8px 32px rgba(13,43,78,.08); }
.feat-img-wrap { height: 360px; overflow: hidden; }
.feat-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
.feat-img-placeholder { width: 100%; height: 360px; background: var(--blue-pale); display: flex; align-items: center; justify-content: center; font-size: 3rem; color: var(--blue-light); }
.feat-body { padding: 2.5rem; }
.feat-featured-label { background: rgba(30,108,181,.12); color: var(--blue-mid); font-size: .72rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: .24rem .7rem; border-radius: 50px; }
.feat-title  { font-size: clamp(1.4rem,2.5vw,2rem); font-weight: 700; color: var(--blue-darkest); line-height: 1.25; margin-bottom: .9rem; }
.feat-excerpt { font-size: .97rem; line-height: 1.78; color: var(--text-muted); margin-bottom: 1rem; }
.feat-meta   { display: flex; gap: 1.2rem; flex-wrap: wrap; font-size: .86rem; color: var(--text-muted); margin-bottom: .5rem; }
.feat-meta i { color: var(--blue-mid); }

/* Blog cards */
.blog-card { background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid var(--border-blue); transition: box-shadow .25s, transform .25s; }
.blog-card:hover { box-shadow: 0 16px 48px rgba(13,43,78,.12); transform: translateY(-6px); }
.blog-img-wrap { height: 200px; overflow: hidden; }
.blog-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }
.blog-card:hover .blog-img-wrap img { transform: scale(1.05); }
.blog-img-placeholder { width: 100%; height: 200px; background: var(--blue-pale); display: flex; align-items: center; justify-content: center; font-size: 2rem; color: var(--blue-light); }
.blog-body   { padding: 1.4rem; display: flex; flex-direction: column; height: calc(100% - 200px); }
.blog-tag    { display: inline-block; background: rgba(30,108,181,.1); color: var(--blue-mid); font-size: .72rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: .24rem .7rem; border-radius: 50px; }
.blog-date   { font-size: .82rem; color: var(--text-muted); }
.blog-title  { font-size: 1.05rem; font-weight: 700; color: var(--blue-darkest); line-height: 1.35; margin-bottom: .6rem; display: -webkit-box; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.blog-excerpt { font-size: .88rem; line-height: 1.72; color: var(--text-muted); flex: 1; display: -webkit-box; line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 1rem; }
.blog-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }
.blog-author { font-size: .83rem; color: var(--text-muted); }
.blog-author i { color: var(--blue-mid); }
.read-more { font-size: .88rem; font-weight: 700; color: var(--blue-mid); text-decoration: none; transition: color .2s; }
.read-more:hover { color: var(--blue-dark); }

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
.btn-hp { background: var(--blue-accent); color: var(--blue-darkest); font-weight: 700; padding: .75rem 1.8rem; border-radius: 50px; text-decoration: none; display: inline-block; transition: all .25s; }
.btn-hp:hover { background: var(--blue-mid); color: #fff; transform: translateY(-2px); }
</style>