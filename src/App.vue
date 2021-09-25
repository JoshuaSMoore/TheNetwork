<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <SideBar class="col-md-2 sidebar" />
      <div class="col-md-10 viewport">
        <router-view />
      </div>
      <div class="add-post">
      </div>
    </div>
  </main>
  <footer>
    <Modal>
      <template #modal-title>
        <h4>Post Form</h4>
      </template>
      <template #modal-body>
        <PostForm />
      </template>
    </Modal>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
// import 'bootswatch/dist/[vapor]/bootstrap.min.css'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

</style>
