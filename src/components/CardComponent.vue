<template lang="">
  <div>
    <div class="col-md">
      <div class="card bg-dark text-light">
        <div class="card-body text-center">
          <div class="h1 mb-3">
            <i class="bi bi-laptop"></i>
          </div>
          <h3 class="card-title mb-3">{{ title }}</h3>
          <p class="card-text">
            {{ description }}
          </p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "description"],
};
</script>
<style lang=""></style>
