<template>
  <div class="Background">
    <header>
      <Navbar />
    </header>
    <main class="main-back">
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
  </div>
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
.main-back{
  // background: rgba(34, 192, 195, 0);
// background: linear-gradient(0deg, rgba(34,193,195,0.896796218487395) 0%, rgba(97,45,253,0.5662640056022409) 92%);;
overflow-x: hidden
}
.Background{
  background: linear-gradient(0deg, rgba(34,193,195,0.896796218487395) 0%, rgba(152, 121, 246, 0.566) 92%);;
}
</style>
