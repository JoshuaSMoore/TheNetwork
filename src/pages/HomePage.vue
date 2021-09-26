<template>
  <div class="container-fluid">
    <div class="row justify-content-evenly">
      <div class="text-center">
        <button :disabled="currentPage === 1" @click="getNewPost()" class="btn btn-secondary elevation-5">
          Newer
        </button>
        <button @click="getOlderPost()" class="btn btn-secondary elevation-5">
          Older
        </button>
      </div>
      <div class="row scrollable-y"></div>
      <PostCard v-for="p in posts" :key="p.id" :post="p" />
    </div>
    <div class="text-center">
      <button :disabled="currentPage === 1" @click="getNewPost()" class="btn btn-secondary elevation-5">
        Newer
      </button>
      <button @click="getOlderPost()" class="btn btn-secondary elevation-5">
        Older
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import { picsService } from '../services/PicsService.js'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getPosts()
      } catch (error) {
        Pop.toast(error, 'error')
      }
      try {
        await picsService.getPics()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      pics: computed(() => AppState.pics),
      updated: computed(() => AppState.updated),
      postsData: computed(() => AppState.postsData),
      url: computed(() => AppState.url),
      like: computed(() => AppState.likes),
      currentPage: computed(() => AppState.currentPage),
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

<style scoped lang="scss">
.scrollable-y {
  max-height: 100vh;
  overflow-y:auto
}
</style>
