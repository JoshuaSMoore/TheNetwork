<template>
  <div class="col-md-4 mb-5">
    <div class="card p-3 shadow" style="width: 24rem; height: 30rem">
      <p class="card-text">
        {{ post.body }}
      </p>
      <div class="card-body text-center" style="">
        <img :src="post.imgUrl" class="userImg img-fluid" alt="...">
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
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.user-image{
  max-height: 3rem;
}
.userImg{
  max-height: 20rem;
}
</style>
