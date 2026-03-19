<template>
  <div class="team-card">
    <img :src="member.img" :alt="member.name" />
    <div class="tcb">
      <h6>{{ member.name }}</h6>
      <span class="trole">{{ member.role }}</span>
      <p v-if="member.bio">{{ member.bio }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ member: Object })
</script>

<style scoped>
.team-card { background: #fff; border-radius: 20px; overflow: hidden; text-align: center; border: 1px solid var(--border-blue); transition: box-shadow .25s, transform .25s; }
.team-card:hover { box-shadow: 0 16px 48px rgba(13,43,78,.13); transform: translateY(-6px); }
.team-card img { width: 100%; height: 270px; object-fit: cover; object-position: top; }
.tcb { padding: 1.3rem; }
h6 { font-weight: 700; margin-bottom: .4rem; }
.trole { display: inline-block; background: linear-gradient(135deg,var(--blue-mid),var(--blue-light)); color: #fff; font-size: .75rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; padding: .28rem .9rem; border-radius: 50px; }
p { font-size: .84rem; color: var(--text-muted); margin-top: .6rem; margin-bottom: 0; }
</style>