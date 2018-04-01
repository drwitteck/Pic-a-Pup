<template>
  <div id="signup">
    <!-- <app-header />
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
    </div> -->
    <div id=content>
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-form id="signform" v-model="valid" ref="form" lazy-validation>
            <v-stepper class="white blue--text" v-model="e6" vertical>
              <h1>Create Your Account <v-icon large>create</v-icon></h1>
              <v-stepper-step step="1" :complete="e6 > 1">
                Enter your name
              </v-stepper-step>
              <v-stepper-content step="1">
                <v-card class="mb-5" flat>
                  <v-text-field
                    class="grey lighten-4 purple--text"
                    label="Name"
                    v-model="name"
                    counter
                    required
                    autofocus
                  ></v-text-field>
                </v-card>
                <v-btn @click.native="e6 = 2">Continue</v-btn>
                <v-btn @click="clear" flat>Clear</v-btn>
              </v-stepper-content>
              <v-stepper-step step="2" :complete="e6 > 2">
                Enter your email
              </v-stepper-step>
              <v-stepper-content step="2">
                <v-card class="mb-5" flat>
                  <v-text-field
                  class="grey lighten-4 purple--text"
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                    counter
                    autofocus
                  ></v-text-field>
                </v-card>
                <v-btn @click.native="e6 = 3">Continue</v-btn>
                <v-btn @click.native="e6 = 1" flat>Back</v-btn>
                <v-btn @click="clear" flat>Clear</v-btn>
              </v-stepper-content>
              <v-stepper-step step="3" :complete="e6 > 3">
                Enter your password and confirm your password
              </v-stepper-step>
              <v-stepper-content step="3">
                <v-card class="mb-5" flat>
                  <v-text-field
                    class="grey lighten-4 purple--text"
                    label="Password"
                    v-model="password"
                    required
                    :append-icon="e1 ? 'visibility_off' : 'visibility'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    counter
                    autofocus
                  ></v-text-field>
                  <v-text-field
                    class="grey lighten-4 purple--text"
                    label="Confirm Password"
                    v-model="confirmPassword"
                    required
                    :append-icon="e1 ? 'visibility_off' : 'visibility'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    counter
                    autofocus
                  ></v-text-field>
                </v-card>
                <v-btn @click.native="e6 = 4">Continue</v-btn>
                <v-btn @click.native="e6 = 2" flat>Back</v-btn>
                <v-btn @click="clear" flat>Clear</v-btn>
              </v-stepper-content>
              <v-stepper-step step="4">Please Confirm Your Information</v-stepper-step>
              <v-stepper-content step="4">
                <v-card class="mb-5" flat>
                  <v-text-field
                    class="grey lighten-4 purple--text"
                    label="Name"
                    v-model="name"
                    counter
                    required
                    autofocus
                  ></v-text-field>

                  <v-text-field
                  class="grey lighten-4 purple--text"
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    required
                    counter
                    autofocus
                  ></v-text-field>

                  <v-text-field
                    class="grey lighten-4 purple--text"
                    label="Password"
                    v-model="password"
                    required
                    :append-icon="e1 ? 'visibility_off' : 'visibility'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    counter
                    autofocus
                  ></v-text-field>
                  
                  <v-text-field
                    class="grey lighten-4 purple--text"
                    label="Confirm Password"
                    v-model="confirmPassword"
                    required
                    :append-icon="e1 ? 'visibility_off' : 'visibility'"
                    :append-icon-cb="() => (e1 = !e1)"
                    :type="e1 ? 'password' : 'text'"
                    counter
                    autofocus
                  ></v-text-field>
                </v-card>
                <v-btn @click="onSubmit" :disabled="!valid">Finish</v-btn>
                <v-btn @click.native="e6 = 3" flat>Back</v-btn>
              </v-stepper-content>
              <br>
              <p>Already in the Pic-a-Fam? <router-link to="/signin">Sign In</router-link></p>
            </v-stepper>
          </v-form>
        </v-layout>
      </v-container>
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
      e6: 1,
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      tile: false,
      e1: true,
      valid: true,
      emailRules: [
        v => !!v || "E-mail is required",
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ]
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
    },
    clear() {
      this.$refs.form.reset();
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

.stepper {
  border-radius: 10px;
}

h1 {
  text-align: center;
  padding: 3vh;
  background: Purple;
  color: white;
}

p {
  text-align: end;
  padding: 1vh;
  margin: 0 auto;
}
#signform {
  width: 100%;
}

#content {
  font-weight: bold;
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
