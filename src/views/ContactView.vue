<template>
  <div>
    <Hero title="Contact Us" />
    <section class="contact-section">
      <div class="container">
        <div class="text-center mb-5">
          <span class="sl">Get In Touch</span>
          <h2 class="st mt-1">Contact IRTECO</h2>
          <div class="dbar mx-auto"></div>
        </div>
        <div class="row g-4">
          <!-- Info panel -->
          <div class="col-lg-4">
            <div class="info-panel">
              <h5 class="mb-4">Contact Information</h5>
              <div class="ci" v-for="item in contactItems" :key="item.label">
                <div class="ci-icon"><i :class="item.icon"></i></div>
                <div>
                  <div class="ci-label">{{ item.label }}</div>
                  <div class="ci-value">{{ item.value }}</div>
                </div>
              </div>
              <div class="mt-4 pt-3" style="border-top:1px solid rgba(255,255,255,.12)">
                <p style="font-size:.82rem;color:rgba(255,255,255,.48);margin-bottom:.7rem">Follow Us</p>
                <div class="d-flex gap-2">
                  <a href="#" class="soc"><i class="bi bi-facebook"></i></a>
                  <a href="#" class="soc"><i class="bi bi-twitter-x"></i></a>
                  <a href="#" class="soc"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <!-- Form -->
          <div class="col-lg-8">
            <div class="form-panel">
              <h5 class="mb-4">Send Us a Message</h5>
              <div v-if="sent" class="success-msg">
                <i class="bi bi-check-circle-fill me-2"></i>
                Your message has been sent. Thank you! We'll get back to you soon.
              </div>
              <div v-else class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Your Name</label>
                  <input type="text" class="form-control" v-model="form.name" placeholder="Full Name" />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email Address</label>
                  <input type="email" class="form-control" v-model="form.email" placeholder="yourname@gmail.com" />
                </div>
                <div class="col-12">
                  <label class="form-label">Subject</label>
                  <input type="text" class="form-control" v-model="form.subject" placeholder="How can we help?" />
                </div>
                <div class="col-12">
                  <label class="form-label">Message</label>
                  <textarea class="form-control" rows="5" v-model="form.message" placeholder="Write your message here..."></textarea>
                </div>
                <div class="col-12 mt-1">
                  <button class="btn-submit" @click="submit" :disabled="loading">
                    <span v-if="loading"><i class="bi bi-hourglass-split me-2"></i>Sending...</span>
                    <span v-else><i class="bi bi-send-fill me-2"></i>Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="map-wrap mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.42898370064!2d37.5644!3d-6.8230!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185d952c57cc8b11%3A0x5f32af2f2b0a6e8c!2sMorogoro%2C%20Tanzania!5e0!3m2!1sen!2s!4v1234567890"
            width="100%" height="280" style="border:0;display:block"
            allowfullscreen loading="lazy">
          </iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Hero from '@/components/Hero.vue'

const form    = ref({ name: '', email: '', subject: '', message: '' })
const loading = ref(false)
const sent    = ref(false)

const contactItems = [
  { icon: 'bi bi-geo-alt-fill',   label: 'Location',     value: 'Morogoro, P.O BOX 6603, Tanzania' },
  { icon: 'bi bi-telephone-fill', label: 'Phone',        value: '+255 787 583 242' },
  { icon: 'bi bi-envelope-fill',  label: 'Email',        value: 'irteco@yahoo.com' },
  { icon: 'bi bi-clock-fill',     label: 'Office Hours', value: 'Mon – Fri: 8:00 AM – 5:00 PM' },
]

function submit() {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Please fill in all required fields.')
    return
  }
  loading.value = true
  setTimeout(() => { loading.value = false; sent.value = true }, 1400)
}
</script>

<style scoped>
.contact-section { padding: 5rem 0; }
.sl   { color: var(--blue-mid); font-size: .78rem; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; }
.st   { font-size: clamp(1.8rem,3vw,2.6rem); font-weight: 700; color: var(--blue-darkest); }
.dbar { width: 56px; height: 4px; background: linear-gradient(90deg,var(--blue-mid),var(--blue-accent)); border-radius: 4px; margin: .9rem 0 1.4rem; }
.info-panel { background: linear-gradient(145deg,var(--blue-darkest),var(--blue-dark)); border-radius: 20px; padding: 2.4rem; color: #fff; height: 100%; }
.info-panel h5 { font-size: 1.15rem; }
.ci       { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 1.7rem; }
.ci-icon  { width: 42px; height: 42px; min-width: 42px; background: rgba(126,200,227,.18); border-radius: 11px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: var(--blue-accent); }
.ci-label { font-weight: 600; font-size: .88rem; margin-bottom: .18rem; color: rgba(255,255,255,.88); }
.ci-value { font-size: .86rem; color: rgba(255,255,255,.62); }
.soc { width: 34px; height: 34px; background: rgba(126,200,227,.18); color: var(--blue-accent); border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: background .2s; }
.soc:hover { background: rgba(126,200,227,.32); }
.form-panel { background: #fff; border-radius: 20px; padding: 2.4rem; border: 1px solid var(--border-blue); box-shadow: 0 8px 32px rgba(13,43,78,.07); }
.form-panel h5 { font-size: 1.15rem; color: var(--blue-darkest); }
.form-label { font-weight: 600; font-size: .88rem; }
.form-control { border: 1.5px solid rgba(30,108,181,.2); border-radius: 10px; padding: .75rem 1rem; }
.form-control:focus { border-color: var(--blue-mid); box-shadow: 0 0 0 3px rgba(30,108,181,.1); }
.btn-submit { background: linear-gradient(135deg,var(--blue-mid),var(--blue-light)); color: #fff; border: none; border-radius: 50px; padding: .85rem 2.4rem; font-weight: 600; font-size: 1rem; transition: all .25s; cursor: pointer; }
.btn-submit:hover { background: linear-gradient(135deg,var(--blue-darkest),var(--blue-dark)); transform: translateY(-2px); }
.success-msg { background: rgba(30,108,181,.1); border: 1px solid rgba(30,108,181,.25); color: var(--blue-dark); border-radius: 10px; font-weight: 500; padding: .85rem 1.2rem; }
.map-wrap { border-radius: 16px; overflow: hidden; border: 1px solid var(--border-blue); }
</style>