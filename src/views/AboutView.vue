<template>
  <div>
    <Hero title="About IRTECO" />

    <section class="about-section">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6">
            <span class="sl">Who We Are</span>
            <h2 class="st mt-1 mb-3">A Trusted Agriculture Organization</h2>
            <div class="dbar"></div>
            <p>We are highly motivated agriculture specialists and farmers working as a team to create a better future for the agriculture sector in Tanzania and Africa at large.</p>
            <p>IRTECO has worked with Government, NGOs and the Private Sector, building a strong team of Tanzanian and international experts. We provide technical and financial advice through the common champion model of production, value addition, marketing and policy linkages.</p>
            <div class="row g-3 mt-2">
              <div class="col-6" v-for="h in highlights" :key="h">
                <div class="d-flex align-items-center gap-2">
                  <div class="chk"><i class="bi bi-check2-circle"></i></div>
                  <span style="font-size:.88rem;font-weight:600">{{ h }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="row g-3">
              <div class="col-12" v-for="c in missionCards" :key="c.title">
                <div class="mc d-flex gap-3 align-items-start">
                  <div class="mc-icon flex-shrink-0"><i :class="c.icon"></i></div>
                  <div>
                    <h6 class="mb-1">{{ c.title }}</h6>
                    <p>{{ c.body }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="team-preview">
      <div class="container">
        <div class="text-center mb-5">
          <span class="sl">The People</span>
          <h2 class="st mt-1">Our Team</h2>
          <div class="dbar mx-auto"></div>
        </div>
        <div class="row g-4 justify-content-center">
          <div class="col-lg-3 col-md-4 col-6" v-for="m in team" :key="m.name">
            <TeamCard :member="m" />
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/team" class="btn-b">View Full Team</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import TeamCard from '@/components/TeamCard.vue'

const highlights = ['Expert Team', 'International Experts', 'NGO & Gov Partners', 'Gender Mainstreaming']

const missionCards = [
  { title: 'Our Mission', icon: 'bi bi-bullseye',       body: 'Contributing to poverty alleviation and food security through sustainable solutions integrating agriculture and marketing principles.' },
  { title: 'Our Vision',  icon: 'bi bi-eye-fill',       body: 'People-centered equitable access, utilization and management of water for food security and representation in international forums.' },
  { title: 'Our Approach',icon: 'bi bi-diagram-3-fill', body: 'Capacity building linking smallholder farmers with medium and large-scale farmers through the PROVAMP concept.' },
]

const team = [
  { name: 'Mwadhini Myanza',       role: 'ExecutiveDirector',           img: 'https://irteco.netlify.app/assets/img/team/9.jpg', bio: "Leads IRTECO's strategic direction." },
  { name: 'Omary Ally',            role: 'Project Manager', img: 'https://irteco.netlify.app/assets/img/team/6.jpg', bio: 'Oversees technical programs across Tanzania.' },
  { name: 'Agriculture Specialist',role: 'Field Expert',       img: 'https://irteco.netlify.app/assets/img/team/5.jpg', bio: 'Supports smallholder farmers.' },
  { name: 'Field Coordinator',     role: 'Operations',         img: 'https://irteco.netlify.app/assets/img/team/8.jpg', bio: 'Coordinates farmer training programs.' },
]
</script>

<style scoped>
.about-section { padding: 5rem 0; background: var(--off-white); }
.team-preview  { padding: 5rem 0; background: var(--blue-pale); }
.sl   { color: var(--blue-mid); font-size: .78rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; }
.st   { font-size: clamp(1.8rem,3vw,2.6rem); font-weight: 700; color: var(--blue-darkest); }
.dbar { width: 56px; height: 4px; background: linear-gradient(90deg,var(--blue-mid),var(--blue-accent)); border-radius: 4px; margin: .9rem 0 1.4rem; }
p     { line-height: 1.85; font-size: .97rem; color: var(--text-muted); }
.chk  { width: 34px; height: 34px; background: rgba(30,108,181,.1); border-radius: 9px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.chk i { color: var(--blue-mid); }
.mc   { background: #fff; border-radius: 16px; padding: 1.6rem; border: 1px solid var(--border-blue); }
.mc-icon { width: 50px; height: 50px; background: linear-gradient(135deg,var(--blue-mid),var(--blue-light)); border-radius: 13px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.3rem; }
.mc h6 { font-weight: 700; }
.mc p  { font-size: .9rem; line-height: 1.75; color: var(--text-muted); margin: 0; }
.btn-b { background: var(--blue-mid); color: #fff; border: none; border-radius: 50px; padding: .65rem 1.8rem; font-weight: 600; text-decoration: none; display: inline-block; transition: all .22s; }
.btn-b:hover { background: var(--blue-dark); color: #fff; transform: translateY(-2px); }
</style>