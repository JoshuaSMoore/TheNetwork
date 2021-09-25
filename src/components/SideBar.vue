<template>
  <div class="sidebar d-md-flex flex-column justify-content-evenly bg-dark">
    <div class="text-white py-2 text-center">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <h3 class="text-center selectable">
          TheNetwork
        </h3>
      </router-link>
    </div>
    <div class="text-center">
      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#post-form">
        Create Post
      </button>
      <div class="myprofile">
        <div class="p-4 text-center">
          <router-link :to="{ name: 'Account'}" class="btn text-success lighten-30 selectable text-uppercase">
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
      pics: computed(() => AppState.pics)
    }
  }
}
</script>

<style>
.sidebar{
  min-height: 100vh;
  max-height: 100vh;
}
</style>
