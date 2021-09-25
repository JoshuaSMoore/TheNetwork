<template>
  <div class="container-fluid">
    <div class="row">
      <PostCard v-for="p in posts" :key="p.id" :post="p" />
    </div>
    <div class="col-2 text-end">
      <Ad v-for="a in ad" :key="a.id" :ad="a" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import { adsService } from '../services/AdsService.js'
export default {
  setup() {
    onMounted(async() => {
      try {
        await postsService.getPosts()
        await adsService.getAds()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      ad: computed(() => AppState.ads)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
