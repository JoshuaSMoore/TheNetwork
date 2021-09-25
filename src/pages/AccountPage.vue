<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
    <div>
      <form @submit.prevent="updateAccount()">
        <h3> Change your cover image</h3>
        <input type="text" v-model="account.coverImg"><br />
        <h3> Change profile Pic</h3>
        <input type="text" v-model="account.picture" placholder="Picture"><br />
        <h3> Change your Github</h3>
        <input type="text" v-model="account.github" placeholder="Github"><br />
        <h3> Change your Linkedin</h3>
        <input type="text" v-model="account.linkedin" placeholder="Linkedin"><br />
        <h3> Have you graduated?</h3>
        <input type="checkbox" v-model="account.graduated" placeholder="Graduate"><br />
        <button class="btn btn-success ms-1">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { accountService } from '../services/AccountService'
export default {
  name: 'Account',
  setup() {
    const account = computed(() => AppState.account)
    return {
      account,
      async updateAccount() {
        try {
          await accountService.editAccount(account.value)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
