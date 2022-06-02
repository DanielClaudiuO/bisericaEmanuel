<template>
  <main>
    <section class="d-flex align-items-center justify-content-center hero">
      <div class="container position-relative text-align-center hero-container">
        <h2>Bine ati venit la</h2>
        <h1 class="responsive-test">
          Biserica Crestina Baptista Emanuel <br />
          Satu Mare
        </h1>
        <a href="ceCredem.html" class="btn-get-started">Aflati mai multe</a>
      </div>
    </section>
  </main>
</template>
<script></script>

<style lang="scss">
.hero {
  width: 100%;
  height: 90vh;
  background: url(@/assets/welcome.jpg) top center;
  background-size: cover;
  position: relative;
}
.hero:before {
  content: "";
  background: rgba(45, 53, 69, 0.7);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.hero .container {
  text-align: center;
  padding-top: 3rem;
}
.hero h1 {
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3rem;
  color: #fff;
}
.hero h2 {
  color: #eee;
  margin: 0.938rem 0 0 0;
  font-size: 1.4rem;
}
.hero .btn-get-started {
  display: inline-block;
  padding: 1rem 1rem;
  border-radius: 4rem;
  transition: 0.5s;
  margin-top: 1rem;
  border: 0.2rem solid #ffc107;
  color: #fff;
}
.hero .btn-get-started:hover {
  background: #ffc107;
}
</style>
