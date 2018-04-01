/* eslint-disable */
<template>
  <div id="signin">
    <!-- <app-header /> -->
    <v-container>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card raised>
        <v-card-title class="purple white--text">
          <v-icon>contact_mail</v-icon>
          &nbsp;
          &nbsp;
          <span class="headline">Login</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text class="white blue--text">
          <v-avatar :size=200>
            <img src="../pictures/pap.png" alt="avatar">
          </v-avatar>
           <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                label="E-mail"
                v-model="email"
                :rules="emailRules"
                required
                counter
              ></v-text-field>

              <v-text-field
                label="Password"
                v-model="password"
                required
                :append-icon="e1 ? 'visibility_off' : 'visibility'"
                :append-icon-cb="() => (e1 = !e1)"
                :type="e1 ? 'password' : 'text'"
                counter
              ></v-text-field>

              <v-btn
                @click="onSubmit"
                :disabled="!valid"
              >
                Login
                &nbsp;
                <v-icon>send</v-icon>
              </v-btn>
              <v-btn @click="clear">clear&nbsp;<v-icon>clear</v-icon></v-btn>
            </v-form>
            <br>
            <p>Want to join the Pic-a-Fam? <router-link to="/signup">Sign Up</router-link></p>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
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
      tile: false,
      e1: true,
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'E-mail must be valid'
      ],
      password: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const formData = {
          email: this.email,
          password: this.password
        }
        console.log(formData)
        this.$store.dispatch('login', {
          email: formData.email,
          password: formData.password
        })
      }
      // .success(function () {
      //   console.log('silviaaaa!')
      //   this.$router.push('/dashboard')
      // })
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
#signin {
  min-height: 100vh;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: white;
  background: linear-gradient(45deg, #551053, #1e8196);
  background-size: cover;
  background-repeat: no-repeat;
}
.signin-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}

.avatar {
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, -10%);
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

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: #eee;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
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
