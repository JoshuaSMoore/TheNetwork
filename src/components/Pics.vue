<template>
  <div class="p-2 text-center img-fluid">
    <img :src="pic.square" alt="" class="adpic img-fluidd">
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'

export default {
  props: {
    pic: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      pics: computed(() => AppState.pics)
    }
  }
}
</script>

<style lang="scss" scoped>
.adpic{
  max-height: 15rem;
}

</style>
