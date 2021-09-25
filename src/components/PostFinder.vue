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
  <div class="div">
    <button class="btn bg-dark me-1 selectable text-white" @click="getNewPost(newer)" type="submit">
      Newer Posts {{ newer }}
    </button>
    <button class="btn bg-light me-1 selectable text-white" @click="getOldPost()" type="submit">
      {{ older }}
    </button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const query = ref('')
    return {
      query,
      newer: computed(() => AppState.newer),
      older: computed(() => AppState.older),
      async findPosts() {
        try {
          await postsService.findPostsByQuery(query.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      },
      async getNewPost(newer) {
        try {
          await postsService.findPostsByQuery(query.value, newer)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      },
      async getOldPost() {
        try {
          await postsService.findPostsByQuery(query.value)
          useRoute(query.value)
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
