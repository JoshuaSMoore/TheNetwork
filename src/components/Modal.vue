<template>
  <div id="post-form"
       class="modal fade"
       role="dialog"
       tabindex="-1"
       aria-labelledby="post-form"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content mod-new text-center text-info">
        <div class="modal-header">
          <h5 class="title modal-title">New Blog Post</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.mod-new{
  background-color: rgba(232, 243, 77, 0.705);
}
.title{
  color: rgb(131, 131, 131);
  text-align: center;
}
</style>
