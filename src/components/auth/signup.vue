<template>
  <div id="signup">
    <app-header />
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="name">Name</label>
          <input
            type="name"
            id="name"
            v-model="name">
        </div>
        <div class="input">
          <label for="email">Email</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="input">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  v-model="confirmPassword">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from '../header/header.vue'
export default {
  components: {
    'app-header': Header
  },
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$store.dispatch('signup', formData)
      const nameData = {
        name: this.name
      }
      this.$http
        .post(
          'https://pic-a-pup.firebaseio.com/users/6NSspNCP0ZRzJ0GcD2MDn1x5stg1',
          this.nameData
        )
        .then(
          response => {
            console.log(response)
          },
          error => {
            console.log(error)
          }
        )
    }
  }
}
</script>

<style scoped>
#signup {
  min-height: 100vh;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: white;
  background: linear-gradient(45deg, #551053, #1e8196);
  background-size: cover;
  background-repeat: no-repeat;
}
.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
  color: black;
}

.input label {
  display: block;
  color: white;
  margin-bottom: 6px;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.hobbies button {
  border: 1px solid #521751;
  background: #521751;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}

.hobbies button:hover,
.hobbies button:active {
  background-color: #8d4288;
}

.hobbies input {
  width: 90%;
}

.submit button {
  border: 1px solid white;
  color: White;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;

}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}
</style>
