<template>
  <div>
    <Hero title="Our Services" />
    <section class="svc-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="sl">What We Offer</span>
          <h2 class="st mt-1">Comprehensive Agriculture Services</h2>
          <div class="dbar mx-auto"></div>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6" v-for="s in services" :key="s.title">
            <ServiceCard :service="s" />
          </div>
        </div>
      </div>
    </section>
    <section class="cta-strip">
      <div class="container text-center">
        <h3>Need Any of These Services?</h3>
        <p>Contact us today and let our experts help your farming business thrive.</p>
        <router-link to="/contact" class="btn-hp">
          <i class="bi bi-telephone-fill me-2"></i>Contact Us
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero    from '@/components/Hero.vue'
import ServiceCard from '@/components/ServiceCard.vue'

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
.svc-section { background: #fff; padding: 5rem 0; }
.sl   { color: var(--blue-mid); font-size: .78rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; }
.st   { font-size: clamp(1.8rem,3vw,2.6rem); font-weight: 700; color: var(--blue-darkest); }
.dbar { width: 56px; height: 4px; background: linear-gradient(90deg,var(--blue-mid),var(--blue-accent)); border-radius: 4px; margin: .9rem 0 1.4rem; }
.cta-strip { background: linear-gradient(135deg,var(--blue-darkest),var(--blue-dark)); padding: 4rem 0; }
.cta-strip h3 { color: #fff; font-size: 1.9rem; margin-bottom: .8rem; }
.cta-strip p  { color: rgba(255,255,255,.72); max-width: 500px; margin: 0 auto 2rem; line-height: 1.78; }
.btn-hp { background: var(--blue-accent); color: var(--blue-darkest); font-weight: 700; padding: .8rem 2rem; border-radius: 50px; text-decoration: none; display: inline-block; transition: all .25s; }
.btn-hp:hover { background: #fff; color: var(--blue-dark); transform: translateY(-2px); }
</style>