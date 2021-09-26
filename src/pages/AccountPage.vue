<template>
  <div class="container-fluid">
    <div class="row justify-content-between">
      <div class="about text-center">
        <h1>Welcome {{ account.name }}</h1>
        <button class="btn btn-primary" type="toggle" @click="showEdit()">
          Edit Profile
        </button>
      </div>
      <div class="col-5 text-start">
        <div class="div edit-profile card border-warning mb-3">
          <div class=" card-body">
            <div class="text-start">
              <h5>
                UserName: {{ account.name }}
              </h5>
            </div>
            <div class="div pt-3">
              <h5>
                Profile Picture:
              </h5>
              <img :src="account.picture" class="img-fluid rounded-start shadow prof-pic" alt="...">
            </div>
            <div class="" v-if="account.graduated == true">
              <br>
              <h5>
                Graduated:
                <i class="mdi mdi-school f-20 " title="Alumni"></i>
              </h5>
            </div>
            <div class="" v-else>
              Graduated:
              <i class="mdi mdi-book-open-variant f-20 " title="Not Yet"></i>
            </div>
            <div>
              <h5>
                Cohort - {{ account.class }}
              </h5>
            </div>
            <div class="">
              <h5 class="card-text">
                GitHub: <a :href="account.github"><i class="mdi mdi-github f-20 selectable"></i></a>
                <br>
                Linkedin: <a :href="account.linkedin"><i class="mdi mdi-linkedin f-20 selectable"></i></a>
              </h5>
              <div class="div">
                <h5>  Bio: </h5>
                <p> {{ account.bio }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2 text-center">
        <img src="https://bestanimations.com/media/dancers/127847890funny-panda-dancing.gif" alt="">
      </div>
      <div class="col-5 d-flex justify-content-end visually-hidden edit-field" id="edit-profile">
        <div>
          <div class="card border-warning mb-3">
            <div class="card-body account-card">
              <fieldset>
                <legend>
                  <form @submit.prevent="updateAccount()">
                    <h6> Change profile Username</h6>
                    <input type="text" v-model="account.name" placeholder="Name"><br />
                    <h6> Change your cover image</h6>
                    <input type="text" v-model="account.coverImg"><br />
                    <h6> Change profile Picture</h6>
                    <input type="text" v-model="account.github" placeholder="Github"><br />
                    <h6> Change your Linkedin</h6>
                    <input type="text" v-model="account.picture" placholder="Picture"><br />
                    <h6> Change your Github</h6>
                    <input type="text" v-model="account.linkedin" placeholder="Linkedin"><br />
                    <h6> Cohort</h6>
                    <input type="text" v-model="account.class" placeholder="Class"><br />
                    <h6> Have you graduated?</h6>
                    <input type="checkbox" class="form-check-input" id="flexCheckDefault" v-model="account.graduated" placeholder="Graduate"><br />
                    <textarea v-model="account.bio"
                              type="text"
                              class="form-control body form-label mt-4"
                              name="body"
                              id="body"
                              rows="4"
                              placeholder="Bio"
                    ></textarea>
                    <button class="btn btn-light ms-1">
                      Submit
                    </button>
                  </form>
                </legend>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
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
      },
      showEdit() {
        document.getElementById('edit-profile').classList.toggle('visually-hidden')
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

.card-body{
  color:rgb(49, 51, 51);
  background-color: #1ba2f69d;
  background-blend-mode: luminosity;
  border-color: rgba(215, 218, 75, 0.89);
  min-width: 20rem;
  min-height: 75vh;
}
.prof-pic{
  min-width: 10rem;
}
.edit-profile{
  max-width: 20rem;
}

</style>
