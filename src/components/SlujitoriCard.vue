<template lang="">
  <div>
    <div class="card bg-dark text-light border-warning border-5">
      <div class="card-body text-center">
        <img :src="imageName" class="rounded-circle mb-3 profile-img" alt="" />
        <h3 class="card-title mb-3">{{ name }}</h3>
        <p class="card-text">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "description", "imageName"],
  data() {
    return {
      link: "../assets/galery/" + this.imageName,
    };
  },
  mounted() {
    console.log();
  },
};
</script>
<style lang=""></style>
