<template>
  <div class="q-ma-lg container">
    <q-card class="my-card" v-for="(movie, index) in movies" :key="index">
      <q-img :src="`${imagesPath}/${movie.poster_path}`">
        <q-btn flat class="vote-average">{{
          movie.vote_average.toFixed(1)
        }}</q-btn>
        <div class="absolute-bottom title">
          <span>{{ movie.title }}</span>
        </div>
      </q-img>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { QSpinnerBars, useQuasar } from "quasar";
import { useStore } from "vuex";

export default defineComponent({
  name: "MovieList",

  setup() {
    const $q = useQuasar();
    const store = useStore();
    const imagesPath = "https://image.tmdb.org/t/p/w500";
    const movies = ref([]);

    onMounted(() => {
      getPopularMovies();
    });

    const getPopularMovies = async () => {
      $q.loading.show({
        spinner: QSpinnerBars,
      });
      await store
        .dispatch("movie/getPopularMovies")
        .then((response) => {
          movies.value = [...store.state.movie.popularMovies];
        })
        .catch((error) => {
          const errorResponse = error.response;

          $q.notify({
            type: "negative",
            color: "red",
            position: "top-right",
            actions: [{ icon: "close", color: "white" }],
            message: errorResponse.data.status_message,
          });
        })
        .finally(() => {
          $q.loading.hide();
        });
    };

    return {
      imagesPath,
      movies,
    };
  },
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 25px;
}
.my-card {
  border-radius: 10px;
  transition: all 0.3s;
  cursor: pointer;
}
.my-card:hover {
  transform: scale(1.1);
}

.vote-average {
  background-color: #c6d93a;
  background-image: linear-gradient(
    43deg,
    #c6d93a 0%,
    #c8bc50 30%,
    #d2982e 66%
  );
  color: #fff;
}

.title {
  text-align: center;
}
</style>
