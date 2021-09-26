<template>
  <div class="sidebar d-md-flex flex-column justify-content-between">
    <div class="text-white py-2 text-center">
      <div class="searchbar">
        <li>
          <PostFinder />
        </li>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#post-form">
        Create Post
      </button>
      <div>
        <div class="pt-5 text-center">
          <router-link :to="{ name: 'Profile', params: {id: account.id}}" class="btn text-success lighten-30 selectable text-uppercase">
            <img :src="account.picture" width="100" style="image-fluid" />
            <br>
            My Profile
          </router-link>
        </div>
      </div>
      <div>
      </div>
    </div>
    <div class="ads">
      <Pics v-for="pic in pics" :key="pic.id" :pic="pic" />
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      pics: computed(() => AppState.pics),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style>
.sidebar{
  height: 85vh;
  position: fixed;
  background-color: rgba(46, 46, 46, 0.082);
}
</style>
