<template>
  <div class="col-md-4 mb-5 pt-4">
    <div class="card border-warning mb-3; bg-primary" style="width: 24rem; height: 27rem">
      <div class="on-hover position-absolute" style="right: 1rem; top: 1rem" v-if="account.id == post.creatorId">
        <button class="btn btn-primary" type="button" @click="deletePost()">
          Delete
        </button>
      </div>
      <div class="on-hover position-absolute" style="left: 1rem; top: 1rem">
        <button>
          <i class="mdi mdi-thumb-up text-primary" @click.prevent="likePost()">{{ post.likeIds.length }}</i>
        </button>
      </div>
      <div class="card-body text-center" style="">
        <img :src="post.imgUrl" class="postImg img-fluid" alt="...">
      </div>
      <div class="div">
        <p class="card-text text-center style=" style="height: 3rem; overflow-y: scroll;">
          {{ post.body }}
        </p>
        <div class="text-center">
          <router-link :to="{name: 'Profile', params: {id: post.creatorId}}" class="btn btn">
            <img class="user-image" :src="post.creator.picture" />
            {{ post.creator.name }}
          </router-link>
          <small class="text-muted">Added: {{ new Date(post.createdAt).toDateString() }}</small>
        </div>
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
          const yes = await Pop.confirm('Are you sure?')
          if (!yes) { return }
          await postsService.deletePost(props.post.id)
          Pop.toast('Gone Forever', 'success')
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
  max-height: 4rem;
}
.postImg{
  max-height: 14rem;
}
</style>
