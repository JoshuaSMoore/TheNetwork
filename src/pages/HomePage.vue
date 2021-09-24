<template>
  <div class="home container-fluid">
    <div class="row">
      <PostCard v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
export default {
  setup() {
    onMounted(async() => {
      try {
        await postsService.getPosts()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
