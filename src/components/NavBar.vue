<template>
    <div>
        <!-- navnar -->
        <nav id="navbar_styling" class="navbar bg-transparent">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                      <router-link to="/home">HOME</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/about">ABOUT</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/resume">RESUME</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/testimonials">TESTIMONIALS</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/projects">PROJECTS</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/contact">CONTACT US</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#logo_styling {
    height: 5rem;
}
</style>