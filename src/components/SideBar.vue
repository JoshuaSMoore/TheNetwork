<template>
  <div class="sidebar d-md-flex flex-column justify-content-between bg-dark d-none d-md-block">
    <div class="top-part">
      <div class="text-white py-3">
        <h3 class="">
          TheNetwork
        </h3>
      </div>
      <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#post-form">
        Create Post
      </button>
    </div>
    <Auth />
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
