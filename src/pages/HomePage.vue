<template>
  <div class="container-fluid">
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
import { picsService } from '../services/picsService.js'
export default {
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
      pics: computed(() => AppState.pics)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
