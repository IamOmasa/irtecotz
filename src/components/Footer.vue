<template>
  <footer class="site-footer">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4">
          <div class="fb mb-3">IRTECO</div>
          <p>IRTECO undertakes irrigation management and economic empowerment roles,
             providing technical and financial advice to smallholder farmers across Tanzania.</p>
        </div>
        <div class="col-lg-2 col-6">
          <h5>Quick Links</h5>
          <ul class="fl">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/team">Team</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="col-lg-3 col-6">
          <h5>Our Impact</h5>
          <ul class="fl">
            <li><a href="#">Irrigation Management</a></li>
            <li><a href="#">Economic Empowerment</a></li>
            <li><a href="#">Smallholder Farmers</a></li>
            <li><a href="#">Capacity Building</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5>Contact Us</h5>
          <div class="fci"><i class="bi bi-geo-alt-fill"></i> P.O BOX 6603, Morogoro, Tanzania</div>
          <div class="fci"><i class="bi bi-telephone-fill"></i> +255 787 583 242</div>
          <div class="fci"><i class="bi bi-envelope-fill"></i> irteco@yahoo.com</div>
          <div class="d-flex gap-2 mt-3">
            <a href="#" class="soc-btn"><i class="bi bi-facebook"></i></a>
            <a href="#" class="soc-btn"><i class="bi bi-twitter-x"></i></a>
            <a href="#" class="soc-btn"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="fbot">
      <div class="container">
        © Copyright <strong style="color:rgba(255,255,255,.7)">IRTECO</strong>. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { background: var(--blue-darkest); color: rgba(255,255,255,.7); padding: 4rem 0 0; }
.fb  { font-family: 'Playfair Display', serif; font-size: 1.7rem; font-weight: 700; color: var(--blue-accent); }
p    { font-size: .9rem; line-height: 1.8; }
h5   { color: #fff; font-size: .95rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1.1rem; }
.fl  { list-style: none; padding: 0; margin: 0; }
.fl li { margin-bottom: .5rem; }
.fl a, .fl :deep(a) { color: rgba(255,255,255,.6); text-decoration: none; font-size: .9rem; transition: color .2s; }
.fl a:hover, .fl :deep(a):hover { color: var(--blue-accent); }
.fci { display: flex; align-items: center; gap: .65rem; margin-bottom: .65rem; font-size: .9rem; }
.fci i { color: var(--blue-accent); }
.fbot { border-top: 1px solid rgba(255,255,255,.09); padding: 1.1rem 0; margin-top: 3rem; text-align: center; font-size: .83rem; color: rgba(255,255,255,.4); }
.soc-btn { width: 36px; height: 36px; background: rgba(126,200,227,.15); color: var(--blue-accent); border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: background .2s; }
.soc-btn:hover { background: rgba(126,200,227,.3); }
</style>