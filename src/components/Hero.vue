<template>
  <section class="page-hero">
    <div class="container text-center position-relative" style="z-index:2">
      <h1 class="ph-title">{{ title }}</h1>
      <nav aria-label="breadcrumb" class="mt-2">
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="breadcrumb-item active">{{ title }}</li>
        </ol>
      </nav>
    </div>
  </section>
</template>

<script setup>
defineProps({ title: String })
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--blue-darkest), var(--blue-dark));
  padding: 5rem 0 3.5rem; position: relative; overflow: hidden;
}
.page-hero::after {
  content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
  height: 56px; background: var(--off-white);
  clip-path: ellipse(55% 100% at 50% 100%);
}
.ph-title { font-size: clamp(2rem,4vw,3rem); font-weight: 700; color: #fff; }
.breadcrumb-item a { color: var(--blue-accent); text-decoration: none; }
.breadcrumb-item.active { color: rgba(255,255,255,.65); }
.breadcrumb-item + .breadcrumb-item::before { color: rgba(255,255,255,.35); }
</style>