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
  <div>
    <button :disabled="currentPage === 1" @click="getNewPost()" class="btn btn-secondary elevation-5">
      Newer
    </button>
    <button @click="getOlderPost()" class="btn btn-secondary elevation-5">
      Older
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
      currentPage: computed(() => AppState.currentPage),
      async findPosts() {
        try {
          await postsService.findPostsByQuery(query.value)
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      },
      postsData: computed(() => AppState.postsData),
      async getOlderPost() {
        try {
          await postsService.getOlderPost()
        } catch (error) {
          Pop.toast('error', error)
        }
      },
      async getNewPost() {
        try {
          await postsService.getNewPost()
        } catch (error) {
          Pop.toast('error', error)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
