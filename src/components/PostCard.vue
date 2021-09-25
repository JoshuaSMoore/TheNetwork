<template>
  <div class="col-md-4 mb-5">
    <div class="card p-3 shadow" style="width: 24rem; height: 26rem">
      <div class="on-hover position-absolute" style="right: 1rem; top: 1rem" v-if="account.id == post.creatorId">
        <i class="mdi mdi-delete text-danger f-20 selectable" @click="deletePost()"></i>
      </div>
      <div class="on-hover position-absolute" style="left: 1rem; top: 1rem">
        <button>
          <i class="mdi mdi-thumb-up text-primary" @click.prevent="likePost()">{{ post.likeIds.length }}</i>
        </button>
      </div>
      <p class="card-text">
        {{ post.body }}
      </p>
      <div class="card-body text-center" style="">
        <img :src="post.imgUrl" class="postImg img-fluid" alt="...">
      </div>
      <div class="text-center">
        <router-link :to="{name: 'Profile', params: {id: post.creatorId}}" class="btn btn-primary">
          <img class="user-image" :src="post.creator.picture" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'

export default {

  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      posts: computed(() => AppState.post),
      async deletePost() {
        try {
          await postsService.deletePost(props.post.id)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async likePost() {
        try {
          await postsService.likePost(props.post.id)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.user-image{
  max-height: 3rem;
}
.postImg{
  max-height: 15rem;
}
</style>
