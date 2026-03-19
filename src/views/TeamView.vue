<template>
  <div>
    <Hero title="Our Team" />
    <section class="team-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="sl">The People Behind IRTECO</span>
          <h2 class="st mt-1">Meet Our Expert Team</h2>
          <div class="dbar mx-auto"></div>
          <p class="lead-p mx-auto">Highly motivated team working together to create sustainable communities.</p>
        </div>
        <div class="row g-4 justify-content-center">
          <div class="col-lg-3 col-md-4 col-sm-6" v-for="m in team" :key="m.name">
            <TeamCard :member="m" />
          </div>
        </div>
      </div>
    </section>
    <section class="join-section">
      <div class="container text-center">
        <h3 class="st mb-2">Want to Join Our Team?</h3>
        <p class="lead-p mx-auto mb-4">We are always looking for passionate specialists and field experts.</p>
        <router-link to="/contact" class="btn-b">
          <i class="bi bi-send-fill me-2"></i>Get In Touch
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import TeamCard from '@/components/TeamCard.vue'

const team = [
  { name: 'Mwadhini Myanza',       role: 'Director',           img: './team/Mwadhini-Myanza-IRTECO.jpg', bio: "Leads IRTECO's strategic direction and organizational development." },
  { name: 'Omary Ally',            role: 'Technical Director', img: './team/omary.jpg', bio: 'Oversees technical programs and field operations across Tanzania.' },
  // { name: 'Agriculture Specialist',role: 'Field Expert',       img: './team/agriculture-specialist.jpg', bio: 'Supports smallholder farmers with crop production and water management.' },
  { name: 'Field Coordinator',     role: 'Operations',         img: './team/field-coordinator.jpg', bio: 'Coordinates farmer training programs and community outreach.' },
]
</script>

<style scoped>
.team-section { background: var(--blue-pale); padding: 5rem 0; }
.join-section { background: #fff; padding: 3.5rem 0; }
.sl     { color: var(--blue-mid); font-size: .78rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; }
.st     { font-size: clamp(1.8rem,3vw,2.6rem); font-weight: 700; color: var(--blue-darkest); }
.dbar   { width: 56px; height: 4px; background: linear-gradient(90deg,var(--blue-mid),var(--blue-accent)); border-radius: 4px; margin: .9rem 0 1.4rem; }
.lead-p { max-width: 560px; font-size: .97rem; line-height: 1.78; color: var(--text-muted); }
.btn-b  { background: var(--blue-mid); color: #fff; border: none; border-radius: 50px; padding: .65rem 1.8rem; font-weight: 600; text-decoration: none; display: inline-block; transition: all .22s; }
.btn-b:hover { background: var(--blue-dark); color: #fff; transform: translateY(-2px); }
</style>