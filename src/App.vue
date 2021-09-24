<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <SideBar class="col-md-2" />
      <div class="col-md-10 viewport">
        <router-view />
      </div>
      <div class="add-post">
        <Modal>
          <template #modal-title>
            <h4>Post Form</h4>
          </template>
          <template #modal-body>
            <PostForm />
          </template>
        </Modal>
        <ul>Testing from the Side Bar</ul>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
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
