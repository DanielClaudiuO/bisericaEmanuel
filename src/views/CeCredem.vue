<template lang="">
  <div>
    <div class="section-title">
      <h2>Ce Credem</h2>
    </div>
    <section class="p-5">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md">
            <img src="../assets/galery/galery3.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-md">
            <h2>Learn The Fundamentals</h2>
            <p class="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              animi quasi illum iste! Fugiat repellendus at dignissimos numquam
              enim doloribus quidem dolore recusandae laborum voluptatum, labore
              a, quo ex aut.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- <script src="./build/js/main-min.js"></script> -->
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.section-title,
.section-title-contact {
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 1rem;
}
.section-title h2,
.section-title-contact h2 {
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  position: relative;
}
.section-title h2:after,
.section-title-contact h2:after {
  content: "";
  position: absolute;
  display: block;
  width: 3rem;
  height: 0.18rem;
  background: #ffc107;
  bottom: 0;
  left: calc(50% - 1.56rem);
}
.section-title p,
.section-title-contact p {
  margin-bottom: 1;
  font-size: 1rem;
}
.section-title-contact li {
  font-weight: bold;
  border-bottom-style: solid;
  border-bottom-color: #ffc107;
}
</style>
