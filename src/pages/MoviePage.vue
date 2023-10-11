<template>
  <div>
    <MovieList />
  </div>
</template>

<script>
import MovieList from 'src/components/MovieList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MoviePage',
  components: {
    MovieList
  }
})
</script>
