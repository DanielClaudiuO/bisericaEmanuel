<template lang="">
  <div>
    <section>
      <div class="container">
        <div class="section-title text-light">
          <h2>Slujitori</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div class="row g-4">
          <div
            class="col-md-6 col-lg-3"
            v-for="(person, index) in persons"
            :key="index"
          >
            <SlujitoriCard
              :name="person.name"
              :description="person.description"
              :imageName="person.imageName"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SlujitoriCard from "../components/SlujitoriCard.vue";
import remusImage from "../assets/galery/remus.jpg";
import zoliImage from "../assets/galery/zoli.jpg";
import team1Image from "../assets/galery/team-1.jpg";
import team3Image from "../assets/galery/team-3.jpg";

export default {
  components: { SlujitoriCard },
  data() {
    return {
      persons: [
        {
          name: "Remus Oanta",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.",
          imageName: remusImage,
        },
        {
          name: "Zoli Dohi",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.",
          imageName: zoliImage,
        },
        {
          name: "Marin Cornea",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.",
          imageName: team1Image,
        },
        {
          name: "Emil Horotan",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.",
          imageName: team3Image,
        },
      ],
      // persons: [
      //   {},
      //   { imageName: zoliImage },
      //   { imageName: team1Image },
      //   { imageName: team3Image },
      // ],
    };
  },
};
</script>
<style lang="scss">
.profile-img {
  display: block;
  max-width: 100%;
  max-height: 50%;
}
</style>
