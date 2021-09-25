<template>
  <div class="container-fluid">
    <div class="profile-header" v-if="profile">
      <div class="row cover-img" :style="{backgroundImage: `url(${profile.coverImg})`}">
      </div>
    </div>
    <div v-else>
      <h4 class="text-light">
        ....Loading
      </h4>
    </div>
    <div class="row" v-if="posts.length > 0">
      <PostCard v-for="p in posts" :key="p.id" :post="p" />
    </div>
    <div v-else>
      <h3>No Post...</h3>
    </div>
    <!-- <div style="justify-content-end">
      <Ad v-for="a in ad" :key="a.id" :ad="a" />
    </div> -->
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService.js'
export default {
  setup() {
    const route = useRoute()
    async function getPosts() {
      try {
        await postsService.getPosts({ creatorId: route.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    }
    watchEffect(async() => {
      if (route.params.id) {
        await profilesService.getProfileById(route.params.id)
        getPosts()
      }
    })
    return {
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style lang="scss" scoped>
.img{
  max-width: 500px;
}
</style>
