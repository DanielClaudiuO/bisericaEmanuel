<template lang="">
  <div>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container">
        <a href="index" class="navbar-brand fs-4"
          >Biserica Crestina Baptista Emanuel</a
        >

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink class="nav-link fs-5" to="/">Acasa</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle fs-5"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Despre Noi
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <RouterLink class="nav-link fs-5" to="/ceCredem"
                    >Ce Credem</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="nav-link fs-5" to="/history"
                    >Istoric</RouterLink
                  >
                </li>
                <li>
                  <RouterLink class="nav-link fs-5" to="/slujitori"
                    >Slujitori</RouterLink
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link fs-5" to="/slujiri"
                >Slujiri</RouterLink
              >
            </li>
            <li class="nav-item">
              <a href="meditatii" class="nav-link fs-5">Meditatii</a>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link fs-5" to="/galery">Galery</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link fs-5" to="/contact"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
