<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="row d-flex viewport">
      <div class="col-md-2">
        <SideBar />
      </div>
      <div class="col-md-10">
        <router-view />
      </div>
    </div>
  </main>
  <footer>
  </footer>
  <Modal>
    <template #modal-title>
      <h4>Post Form</h4>
    </template>
    <template #modal-body>
      <PostForm />
    </template>
  </Modal>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState),
      pics: computed(() => AppState.pics)
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

</style>
