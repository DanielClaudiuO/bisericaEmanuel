<template lang="">
  <div>
    <div class="card bg-secondary text-light">
      <div class="card-body text-center">
        <div class="h1 mb-3">
          <i class="bi bi-laptop"></i>
        </div>
        <h3 class="card-title mb-3">{{ etapa }}</h3>
        <p class="card-text">
          {{ descriere }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["etapa", "descriere"],
};
</script>
<style lang=""></style>
