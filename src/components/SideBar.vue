<template>
  <div class="sidebar d-md-flex flex-column justify-content-between bg-dark d-none d-md-block">
    <div class="top-part">
      <div class="text-white py-3">
        <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
          <h3 class="text-center selectable">
            TheNetwork
          </h3>
        </router-link>
      </div>
      <div class="add text-center">
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
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  setup() {
    return {
      user: computed(() => AppState.user)
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
