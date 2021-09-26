<template>
  <div class="container-fluid text-center font-style">
     <div class="profile-header" v-if="profile">
      <div class="row cover-img img-fluid" :style="{backgroundImage: `url(${profile.coverImg})`}">
        <div class="col-3 ">

           <h3 class="text-center font-style">
          {{ profile.name }}
           </h3>
           <br>
           <img class="rounded profile-img img-fluid" :src="profile.img" alt="//placehold.it/300x300" id="profile-img" >
        
        </div>
        <div class="col-6 d-flex justify-content-evenly">
          <div class="shadowed rounded ">
            <div class="card-body">

        <div class="" v-if="profile.graduated == true">
          <i class="mdi mdi-school f-20 " title="Alumni"></i>
        </div>
        <div class="font-style" v-else>
          Graduated:
          <i class="mdi mdi-book-open-variant f-20 " title="Not Yet"></i>
        </div>
        <p class="card-text font-style">
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
      </div>
    </div>
    </div>
  <div class="container-fluid">
     <button :disabled="currentPage === 1" @click="getNewPost()" class="btn btn-secondary elevation-5">
      Newer
    </button>
    <button  @click="getOlderPost()" class="btn btn-secondary elevation-5">
      Older
    </button>
    <div class="row p-3s">
      <PostCard v-for="p in posts" :key="p.id" :post="p" />
      <div v-if="posts.length > 0">
      </div>
      <div class="row" v-else>
        <h2>No Posts 😪.</h2>
      </div>
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

export default {
  setup() {
    const account = computed(() => AppState.account)
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
      account,
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts.filter(p => p.creatorId === route.params.id)),
      postsData: computed(() => AppState.postsData),
      currentPage: computed(() => AppState.currentPage),
       posts: computed(() => AppState.posts),
         async getOlderPost() {
        try {
          await postsService.getOlderPost( { creatorId: route.params.id } )
        } catch (error) {
          Pop.toast('error', error)
        }
      },
      async getNewPost() {
        try {
          await postsService.getNewPost( { creatorId: route.params.id } )
        } catch (error) {
          Pop.toast('error', error)
        }
      }
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
.profile-img{
  height: 100px;
  width: 125px;
}
.font-style{
  color:rgb(255, 255, 255);
  text-emphasis: bold;
}
.info-card{
  background-color: rgba(138, 126, 128, 0);
  
}
</style>
