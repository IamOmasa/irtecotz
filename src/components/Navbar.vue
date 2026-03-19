<template>
  <nav class="navbar navbar-expand-lg navbar-irteco">
    <div class="container">
      <router-link class="nb-wrap" to="/">
        <!-- <div class="nb-box">IR</div> -->
        <span class="nb-text">IRTECO</span>
      </router-link>

      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#mainNav"
        aria-controls="mainNav" aria-expanded="false">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">About</a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/about">About Us</router-link></li>
              <li><router-link class="dropdown-item" to="/team">Team</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">Our Services</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/projects">Our Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/blog">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">
              <i class="bi bi-envelope me-1"></i>Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-irteco {
  background: var(--blue-darkest);
  padding: .9rem 0;
  position: sticky; top: 0; z-index: 1030;
  box-shadow: 0 2px 14px rgba(13,43,78,.45);
}
.nb-wrap {
  display: flex; align-items: center; gap: .65rem; text-decoration: none;
}
.nb-box {
  width: 38px; height: 38px; background: var(--blue-mid);
  border-radius: 8px; display: flex; align-items: center;
  justify-content: center; font-family: 'Playfair Display', serif;
  font-weight: 700; color: #fff; font-size: 1rem;
}
.nb-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem; font-weight: 700; color: var(--blue-accent);
}
.navbar-irteco .nav-link {
  color: rgba(255,255,255,.82) !important;
  font-weight: 500; font-size: .95rem;
  padding: .45rem .9rem !important;
  border-radius: 6px; transition: all .2s;
}
.navbar-irteco .nav-link:hover,
.navbar-irteco .nav-link.router-link-active {
  color: var(--blue-accent) !important;
  background: rgba(126,200,227,.08);
}
.navbar-irteco .dropdown-menu {
  background: var(--blue-darkest);
  border: 1px solid rgba(126,200,227,.18);
  border-radius: 10px;
}
.navbar-irteco .dropdown-item {
  color: rgba(255,255,255,.78); font-size: .9rem; padding: .55rem 1.2rem;
}
.navbar-irteco .dropdown-item:hover {
  background: var(--blue-dark); color: #fff;
}
.navbar-toggler { border-color: rgba(126,200,227,.4); }
.navbar-toggler-icon { filter: invert(1); }
</style>