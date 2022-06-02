<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import "bootstrap";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <NavBar />

  <RouterView />

  <FooterComponent />
</template>

<style>
@import "bootstrap";
</style>
