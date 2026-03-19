<template>
  <div>
    <!-- Loading -->
    <div v-if="loading" class="loader-full">
      <div class="spinner"></div>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="container py-5">
      <div class="alert-error">
        <i class="bi bi-exclamation-triangle-fill me-2"></i>{{ error }}
      </div>
      <router-link to="/blog" class="btn-b mt-3">← Back to Blog</router-link>
    </div>

    <!-- Post content -->
    <div v-else-if="post">
      <!-- Hero with cover image -->
      <section class="post-hero" :style="heroBg">
        <div class="post-hero-overlay"></div>
        <div class="container position-relative" style="z-index:2">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <span class="blog-tag mb-3 d-inline-block" v-if="post.fields.category">
                {{ post.fields.category }}
              </span>
              <h1 class="post-title">{{ post.fields.title }}</h1>
              <div class="post-meta mt-3">
                <span v-if="post.fields.author">
                  <i class="bi bi-person-fill me-1"></i>{{ post.fields.author }}
                </span>
                <span v-if="post.fields.publishedDate">
                  <i class="bi bi-calendar3 me-1"></i>{{ formatDate(post.fields.publishedDate) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Article body -->
      <section class="post-body-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">

              <!-- Excerpt -->
              <p class="post-excerpt" v-if="post.fields.excerpt">
                {{ post.fields.excerpt }}
              </p>

              <!-- Rich text body -->
              <div
                v-if="post.fields.body"
                class="post-content"
                v-html="renderedBody">
              </div>

              <!-- No body fallback -->
              <div v-else class="empty-state">
                <i class="bi bi-file-text"></i>
                <p>Full article content not available yet.</p>
              </div>

              <!-- Back button -->
              <div class="mt-5 pt-4 border-top">
                <router-link to="/blog" class="btn-b">
                  <i class="bi bi-arrow-left me-2"></i>Back to Blog
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { client } from '@/services/contentful'

const route   = useRoute()
const post    = ref(null)
const loading = ref(true)
const error   = ref(null)

onMounted(async () => {
  try {
    // Fetch by slug field
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': route.params.slug,
      include: 2,
      limit: 1,
    })

    if (response.items.length === 0) {
      error.value = 'Article not found.'
    } else {
      post.value = response.items[0]
    }
  } catch (err) {
    console.error('Contentful error:', err)
    error.value = 'Failed to load this article. Please try again.'
  } finally {
    loading.value = false
  }
})

// Render Contentful Rich Text → HTML
const renderedBody = computed(() => {
  if (!post.value?.fields?.body) return ''
  return documentToHtmlString(post.value.fields.body)
})

// Hero background from cover image
const heroBg = computed(() => {
  const img = post.value?.fields?.coverImage?.fields?.file?.url
  return img
    ? { backgroundImage: `url(https:${img}?w=1400&fm=webp)` }
    : {}
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}
</script>

<style scoped>
/* Hero */
.post-hero { min-height: 420px; display: flex; align-items: flex-end; padding: 5rem 0 3rem; background: linear-gradient(135deg,var(--blue-darkest),var(--blue-dark)); background-size: cover; background-position: center; position: relative; }
.post-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(13,43,78,.4), rgba(13,43,78,.85)); }
.post-title { font-size: clamp(1.8rem,4vw,3rem); font-weight: 700; color: #fff; line-height: 1.2; }
.post-meta  { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; font-size: .9rem; color: rgba(255,255,255,.72); }
.post-meta i { color: var(--blue-accent); }
.blog-tag { background: rgba(126,200,227,.2); color: var(--blue-accent); font-size: .75rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: .28rem .9rem; border-radius: 50px; }

/* Body */
.post-body-section { padding: 4rem 0 5rem; }
.post-excerpt { font-size: 1.15rem; line-height: 1.8; color: var(--text-muted); font-style: italic; border-left: 3px solid var(--blue-mid); padding-left: 1.2rem; margin-bottom: 2rem; }

/* Rich text styles */
.post-content :deep(h2) { font-size: 1.6rem; font-weight: 700; color: var(--blue-darkest); margin: 2rem 0 .8rem; }
.post-content :deep(h3) { font-size: 1.3rem; font-weight: 700; color: var(--blue-dark); margin: 1.6rem 0 .6rem; }
.post-content :deep(p)  { font-size: 1rem; line-height: 1.85; color: var(--text-dark); margin-bottom: 1.2rem; }
.post-content :deep(ul), .post-content :deep(ol) { padding-left: 1.5rem; margin-bottom: 1.2rem; }
.post-content :deep(li) { font-size: 1rem; line-height: 1.75; color: var(--text-dark); margin-bottom: .4rem; }
.post-content :deep(a)  { color: var(--blue-mid); font-weight: 600; }
.post-content :deep(a:hover) { color: var(--blue-dark); }
.post-content :deep(blockquote) { background: var(--blue-pale); border-left: 4px solid var(--blue-mid); padding: 1.2rem 1.5rem; border-radius: 0 12px 12px 0; margin: 1.5rem 0; font-style: italic; color: var(--text-muted); }
.post-content :deep(img) { max-width: 100%; border-radius: 12px; margin: 1.5rem 0; }
.post-content :deep(hr) { border: none; border-top: 2px solid var(--border-blue); margin: 2rem 0; }

/* States */
.loader-full { display: flex; align-items: center; justify-content: center; min-height: 60vh; }
.spinner { width: 44px; height: 44px; border: 3px solid var(--blue-pale); border-top-color: var(--blue-mid); border-radius: 50%; animation: spin .8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.alert-error { background: rgba(220,53,69,.08); border: 1px solid rgba(220,53,69,.25); color: #dc3545; border-radius: 12px; padding: 1.2rem 1.5rem; font-weight: 500; }
.empty-state { text-align: center; padding: 3rem; color: var(--text-muted); }
.empty-state i { font-size: 2.5rem; color: var(--blue-pale); display: block; margin-bottom: 1rem; }
.btn-b { background: var(--blue-mid); color: #fff; border: none; border-radius: 50px; padding: .65rem 1.8rem; font-weight: 600; text-decoration: none; display: inline-block; transition: all .22s; }
.btn-b:hover { background: var(--blue-dark); color: #fff; transform: translateY(-2px); }
</style>