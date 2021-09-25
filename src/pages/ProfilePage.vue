<template>
  <div class="container-fluid text-center">
    <div class=" row mb-3 text-light tshadow" :style="backgroundImage">
      <img :src="profile.coverImg" class="cover-img">
    </div>
    <div class="row justify-content-center">
      <div class="card text-dark profile-card mb-3 text-center" style="max-width: 20rem;">
        <h5 class="card-title">
          <img :src="profile.picture" class="img-fluid rounded-start shadow prof-pic" alt="...">
          {{ profile.name }}
        </h5>
        <div class="" v-if="profile.graduated == true">
          <i class="mdi mdi-school f-20 " title="Alumni"></i>
        </div>
        <div class="" v-else>
          <i class="mdi mdi-chair-school f-20 " title="Still Learning"></i>
        </div>
        <p class="card-text">
          {{ profile.bio }}<br />
          Class - {{ profile.class }}
        </p>
        <p class="card-text">
          <a :href="profile.github"><i class="mdi mdi-github f-20 selectable"></i></a>
          <a :href="profile.linkedin"><i class="mdi mdi-linkedin f-20 selectable"></i></a>
        </p>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row p-3s">
      <PostCard v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
  <!-- <div class="col-md-4 col-sm">
    <Ad v-for="a in ad" :key="a.id" :ad="a" />
  </div> -->
  <div v-if="posts.length <= 0">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService.js'
import { adsService } from '../services/AdsService.js'

export default {
  setup() {
    const route = useRoute()
    const profile = computed(() => AppState.profile)
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
        // await adsService.getAds()
      }
    })
    return {
      profile,
      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      user: computed(() => AppState.user)
      // ads: computed(() => AppState.ads)
    }
  }
}
</script>

<style lang="scss" scoped>
.cover-img{
  height: 30vh;
  widows: 100vw;
  background-position: center center;
}
.prof-pic{
  height: 50px;
}
.profile-card{
  background-color: rgba(60, 185, 223, 0.26);
}
</style>
