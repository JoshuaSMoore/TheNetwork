<template>
  <form @submit.prevent="createPost()">
    <div class="form-group">
      <label for="title">Description</label>
      <input type="text"
             class="form-control bg-light"
             name="title"
             placeholder="Description"
             v-model="editable.body"
             required
      >
    </div>
    <div class="form-group">
      <label for="title">Img Url</label>
      <input type="text"
             class="form-control bg-light"
             name="imgUrl"
             placeholder="Img Url"
             v-model="editable.imgUrl"
             required
      >
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-success mt-2">
        Create Blog
      </button>
    </div>
  </form>
</template>
<script>
import { Modal } from 'bootstrap'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const editable = ref({ photos: [] })
    return {
      editable,
      async createPost() {
        try {
          await postsService.createPost(editable.value)
          editable.value = { photos: [] }
          Pop.toast('You made it')
          const modal = Modal.getInstance(document.getElementById('post-form'))
          modal.hide()
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
