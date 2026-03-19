<template>
  <div>
    <!-- HERO -->
    <section class="hero-section">
      <div class="container position-relative" style="z-index:2">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <span class="hero-badge">
              <i class="bi bi-droplet-fill me-1"></i>Agriculture &amp; Empowerment
            </span>
            <h1 class="hero-title mb-3">Welcome to<br><span>IRTECO</span></h1>
            <p class="hero-lead mb-4">
              IRTECO undertakes water resources management and economic empowerment roles,
              providing technical and financial advice to smallholder farmers and communities in Tanzania.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <router-link to="/about" class="btn-hp">Read More</router-link>
              <router-link to="/contact" class="btn-ho">Get In Touch</router-link>
            </div>
            <!-- <div class="h-stats">
              <div><div class="h-num">500+</div><div class="h-lbl">Farmers Reached</div></div>
              <div><div class="h-num">12+</div><div class="h-lbl">Years Active</div></div>
              <div><div class="h-num">6</div><div class="h-lbl">Core Services</div></div>
            </div> -->
          </div>
          <div class="col-lg-6">
            <div class="row g-3">
              <div class="col-12">
                <div class="hcf">
                  <div class="hci"><i class="bi bi-droplet-fill"></i></div>
                  <h5>Integrated Water Resources Management</h5>
                  <p>Technical support and financial guidance for sustainable water use and crop production.</p>
                </div>
              </div>
              <div class="col-6">
                <div class="hcf">
                  <div class="hci"><i class="bi bi-people-fill"></i></div>
                  <h5>Capacity Building</h5>
                  <p>PROVAMP concept linking small, medium and large-scale farmers.</p>
                </div>
              </div>
              <div class="col-6">
                <div class="hcf">
                  <div class="hci"><i class="bi bi-graph-up-arrow"></i></div>
                  <h5>Economic Growth</h5>
                  <p>Marketing, value addition and policy linkages for smallholders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHO WE ARE -->
    <section class="who-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="sec-label">Our Foundation</span>
          <h2 class="sec-title mt-1">Who We Are</h2>
          <div class="dbar mx-auto"></div>
        </div>
        <div class="row g-4">
          <div class="col-md-4" v-for="card in whoCards" :key="card.title">
            <div class="info-card">
              <div class="info-icon"><i :class="card.icon"></i></div>
              <h5 class="mb-2">{{ card.title }}</h5>
              <p>{{ card.body }}</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <router-link to="/about" class="btn-b">Learn More About Us</router-link>
        </div>
      </div>
    </section>

    <!-- SERVICES PREVIEW -->
    <section class="svc-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="sec-label">What We Offer</span>
          <h2 class="sec-title mt-1">Our Services</h2>
          <div class="dbar mx-auto"></div>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="s in services.slice(0,3)" :key="s.title">
            <ServiceCard :service="s" />
          </div>
        </div>
        <div class="text-center mt-5">
          <router-link to="/services" class="btn-b">View All Services</router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container text-center">
        <h2>Contributing to Poverty Alleviation &amp; Food Security</h2>
        <p>IRTECO's mission is disseminating sustainable solutions that integrate communities and environment</p>
        <router-link to="/contact" class="btn-hp">
          <i class="bi bi-envelope-fill me-2"></i>Get In Touch
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import ServiceCard from '@/components/ServiceCard.vue'

const whoCards = [
  { title: 'Who We Are', icon: 'bi bi-building',  body: 'IRTECO provides technical and financial advice to smallholder farmers through the common champion model of production, value addition and policy linkages.' },
  { title: 'Our Mission',icon: 'bi bi-bullseye',  body: 'Leading organization mobilizing capacity building services for women and youths on integrated water resource management and economic empowerment.' },
  { title: 'Our Vision', icon: 'bi bi-eye-fill',  body: 'People-centered equitable access, utilization and management of water for food security and representation in local and international forums.' },
]

const services = [
  { title: 'Agriculture Training',           desc: 'Practical field-oriented training programs covering crop production, financial management and marketing.',        img: 'https://irteco.netlify.app/assets/img/services/12.jpg', icon: 'bi bi-mortarboard-fill' },
  { title: 'Farm Structure Design',          desc: 'Planning and construction: irrigation, dams, wells, greenhouses, fish ponds and storage houses.',               img: 'https://irteco.netlify.app/assets/img/services/13.jpg', icon: 'bi bi-tools' },
  { title: 'Supply Agriculture Inputs',      desc: 'Optimum fertilizers, seeds, herbicides, insecticides, irrigation pipes and greenhouse nets.',                   img: 'https://irteco.netlify.app/assets/img/services/4.jpg',  icon: 'bi bi-box-seam-fill' },
  { title: 'Marketing Agriculture Products', desc: 'Connecting farmers to buyers locally and internationally through our Market Map network.',                      img: 'https://irteco.netlify.app/assets/img/services/1.jpg',  icon: 'bi bi-shop' },
  { title: 'Farm Management & Consultancy',  desc: 'Professional consultancy to help investors manage operations efficiently and maximise yields.',                  img: 'https://irteco.netlify.app/assets/img/services/3.jpg',  icon: 'bi bi-clipboard2-data-fill' },
  { title: 'Digital Farming',                desc: 'Digital platforms and systems that solve farm business challenges and support agritech entrepreneurs.',          img: 'https://irteco.netlify.app/assets/img/services/2.jpg',  icon: 'bi bi-cpu-fill' },
]
</script>

<style scoped>
.hero-section { background: linear-gradient(135deg,var(--blue-darkest) 0%,var(--blue-dark) 55%,var(--blue-mid) 100%); min-height: 88vh; display: flex; align-items: center; position: relative; overflow: hidden; }
.hero-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 65% 65% at 85% 15%,rgba(126,200,227,.14) 0%,transparent 60%); }
.hero-badge { display: inline-block; background: rgba(126,200,227,.15); border: 1px solid rgba(126,200,227,.35); color: var(--blue-accent); font-size: .78rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: .35rem 1rem; border-radius: 50px; margin-bottom: 1.2rem; }
.hero-title { font-size: clamp(2.4rem,5vw,3.8rem); font-weight: 700; color: #fff; line-height: 1.15; }
.hero-title span { color: var(--blue-accent); }
.hero-lead { color: rgba(255,255,255,.76); font-size: 1.05rem; line-height: 1.8; max-width: 580px; }
.h-stats { display: flex; gap: 2.5rem; margin-top: 2.5rem; flex-wrap: wrap; }
.h-num { font-family: 'Playfair Display',serif; font-size: 2rem; font-weight: 700; color: var(--blue-accent); }
.h-lbl { color: rgba(255,255,255,.55); font-size: .8rem; text-transform: uppercase; letter-spacing: 1px; }
.hcf { background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.13); border-radius: 20px; backdrop-filter: blur(14px); padding: 1.8rem 1.5rem; color: #fff; }
.hci { width: 52px; height: 52px; background: rgba(126,200,227,.22); border-radius: 13px; display: flex; align-items: center; justify-content: center; font-size: 1.45rem; color: var(--blue-accent); margin-bottom: .9rem; }
.hcf h5 { font-family: 'DM Sans',sans-serif; font-weight: 700; font-size: .95rem; margin-bottom: .35rem; }
.hcf p  { font-size: .84rem; color: rgba(255,255,255,.6); margin: 0; }
.btn-hp { background: var(--blue-accent); color: var(--blue-darkest); font-weight: 700; padding: .8rem 2rem; border-radius: 50px; border: none; font-size: 1rem; transition: all .25s; text-decoration: none; display: inline-block; }
.btn-hp:hover { background: #fff; color: var(--blue-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.25); }
.btn-ho { background: transparent; color: rgba(255,255,255,.85); border: 1.5px solid rgba(255,255,255,.35); font-weight: 600; padding: .8rem 2rem; border-radius: 50px; font-size: 1rem; transition: all .25s; text-decoration: none; display: inline-block; }
.btn-ho:hover { border-color: var(--blue-accent); color: var(--blue-accent); }
.who-section  { background: var(--blue-pale); padding: 5rem 0; }
.svc-section  { background: #fff; padding: 5rem 0; }
.sec-label { color: var(--blue-mid); font-size: .78rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; }
.sec-title { font-size: clamp(1.8rem,3vw,2.6rem); font-weight: 700; color: var(--blue-darkest); }
.dbar { width: 56px; height: 4px; background: linear-gradient(90deg,var(--blue-mid),var(--blue-accent)); border-radius: 4px; margin: .9rem 0 1.4rem; }
.info-card { background: #fff; border-radius: 16px; padding: 2rem; border: 1px solid var(--border-blue); height: 100%; transition: box-shadow .25s,transform .25s; }
.info-card:hover { box-shadow: 0 12px 40px rgba(13,43,78,.1); transform: translateY(-4px); }
.info-icon { width: 50px; height: 50px; background: linear-gradient(135deg,var(--blue-mid),var(--blue-light)); border-radius: 13px; display: flex; align-items: center; justify-content: center; color: #fff; font-size: 1.3rem; margin-bottom: 1.1rem; }
.info-card p { font-size: .92rem; line-height: 1.78; color: var(--text-muted); margin: 0; }
.btn-b { background: var(--blue-mid); color: #fff; border: none; border-radius: 50px; padding: .65rem 1.8rem; font-weight: 600; transition: all .22s; text-decoration: none; display: inline-block; }
.btn-b:hover { background: var(--blue-dark); color: #fff; transform: translateY(-2px); }
.cta-section { background: linear-gradient(135deg,var(--blue-darkest),var(--blue-dark)); padding: 4.5rem 0; }
.cta-section h2 { color: #fff; font-size: clamp(1.6rem,3vw,2.4rem); margin-bottom: 1rem; }
.cta-section p  { color: rgba(255,255,255,.72); max-width: 560px; margin: 0 auto 2rem; font-size: 1rem; line-height: 1.8; }
@media(max-width:767px) { .hero-section { min-height: auto; padding: 5rem 0 4rem; } .h-stats { gap: 1.4rem; } }
</style>