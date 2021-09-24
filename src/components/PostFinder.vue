<template>
  <form @submit.prevent="findPosts"
        class="bg-white rounded elevation-1"
  >
    <div
      class="form-group d-flex align-items-center"
    >
      <label for="search" class="sr-only"></label>
      <input v-model="query"
             type="text"
             name="search"
             required
             class="form-control bg-white border-0"
             placeholder="search"
      >
      <button class="btn px-2 py-0" type="submit">
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    const query = ref('')
    return {
      query,
      async findPosts() {
        try {
          await postsService.findPostsByQuery(query.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
