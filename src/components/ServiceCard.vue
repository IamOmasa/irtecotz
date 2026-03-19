<template>
  <div class="service-card h-100">
    <img :src="service.img" :alt="service.title" />
    <div class="scb">
      <span class="stag"><i :class="service.icon + ' me-1'"></i>Service</span>
      <h5 class="mb-2">{{ service.title }}</h5>
      <p>{{ service.desc }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ service: Object })
</script>

<style scoped>
.service-card { background: var(--off-white); border-radius: 16px; overflow: hidden; border: 1px solid var(--border-blue); transition: box-shadow .25s, transform .25s; }
.service-card:hover { box-shadow: 0 16px 48px rgba(13,43,78,.12); transform: translateY(-6px); }
.service-card img { width: 100%; height: 200px; object-fit: cover; }
.scb { padding: 1.4rem; }
.stag { display: inline-block; background: rgba(30,108,181,.1); color: var(--blue-mid); font-size: .73rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; padding: .26rem .75rem; border-radius: 50px; margin-bottom: .75rem; }
p { font-size: .9rem; line-height: 1.73; color: var(--text-muted); margin: 0; }
</style>