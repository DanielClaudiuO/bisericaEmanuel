<template lang="">
  <div>
    <section>
      <div class="container">
        <div class="section-title">
          <h2>Slujiri</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
      </div>
    </section>
    <section class="p-5">
      <div class="container">
        <div class="row text-center g-4">
          <div class="col-md" v-for="(card, index) in cards" :key="index">
            <SlujiriCard :title="card.title" :content="card.content" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SlujiriCard from "../components/SlujiriCard.vue";
export default {
  components: { SlujiriCard },
  data() {
    return {
      cards: [
        {
          title: "Odoreu",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?",
        },
        {
          title: "Satu Mare",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?",
        },
        {
          title: "Raza Soarelui",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?",
        },
        {
          title: "Awana",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?",
        },
      ],
    };
  },
};
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
