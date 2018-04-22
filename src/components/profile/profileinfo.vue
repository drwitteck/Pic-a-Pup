/* eslint-disable */
<template>
  <div id="profileinfo">
    <h1>Profile Info</h1>
    <p>Edit profile Information below</p>
    <button v-on:click="submitInfo()">Save Info </button>

    <p v-if="name">Your name: {{ name }}</p>
    <input type="text" v-model="name" placeholder="Name">

    <p v-if="email">Your email: {{ email }}</p>
    <input type="text" v-model="email" placeholder="email">

    <p v-if="phoneNumber">Your Phone Number: {{ phoneNumber }}</p>
    <input type="text" v-model="phoneNumber" placeholder="phoneNumber">

    <p v-if="country">Your country: {{ country }}</p>
    <input type="text" v-model="country" placeholder="country">

    <p v-if="state">Your state: {{ state }}</p>
    <input type="text" v-model="state" placeholder="state">

    <p v-if="city">Your City: {{ city }}</p>
    <input type="text" v-model="city" placeholder="city">

    <p v-if="zipcode">Your zipcode: {{ zipcode }}</p>
    <input type="text" v-model="zipcode" placeholder="zipcode">
    <br>
    <input type="checkbox" id="userProvideServices" v-model="userProvideServices">
    <label for="userProvideServices">Do you want to Provide Services: {{ userProvideServices ? 'yes' : 'no' }}</label>

    <br>

    <input type="checkbox" id="userWantServices" v-model="userWantServices">
    <label for="userProvideServices">Do you want to Receive Services: {{ userWantServices ? 'yes' : 'no' }}</label>

    <div id='provideServicesList' v-if="userProvideServices">
      <input type="checkbox" id="pwalker" v-model="provideServices.walker">
      <label for="pwalker">Dog Walker</label>
      <input type="checkbox" id="ptrainer" v-model="provideServices.trainer">
      <label for="ptrainer">Dog Trainer</label>
      <input type="checkbox" id="psitter" v-model="provideServices.sitter">
      <label for="psitter">Dog Sitter</label>
      <br>
    </div>
    <br />
    <br>
    <div id='wantServicesList' v-if="userWantServices">
      <input type="checkbox" id="wwalker" v-model="wantServices.walker">
      <label for="wwalker">Dog Walker</label>
      <input type="checkbox" id="wtrainer" v-model="wantServices.trainer">
      <label for="wtrainer">Dog Trainer</label>
      <input type="checkbox" id="wsitter" v-model="wantServices.sitter">
      <label for="wsitter">Dog Sitter</label>
      <br>
    </div>
    <div id='timePicker' v-if="userProvideServices || userWantServices">
    <myTime-picker day="Monday Start Time " fbPath="Monday/startTime" />
    <myTime-picker day="Monday End Time " fbPath="Monday/endTime" />
    <myTime-picker day="Tuesday Start Time " fbPath="Tuesday/startTime" />
    <myTime-picker day="Tuesday End Time " fbPath="Tuesday/endTime" />
    <myTime-picker day="Wednesday Start Time " fbPath="Wednesday/startTime" />
    <myTime-picker day="Wednesday End Time " fbPath="Wednesday/endTime" />
    <myTime-picker day="Thursday Start Time " fbPath="Thursday/startTime" />
    <myTime-picker day="Thursday End Time " fbPath="Thursday/endTime" />
    <myTime-picker day="Friday Start Time " fbPath="Friday/startTime" />
    <myTime-picker day="Friday End Time " fbPath="Friday/endTime" />
    <myTime-picker day="Saturday Start Time " fbPath="Saturday/startTime" />
    <myTime-picker day="Saturday End Time " fbPath="Saturday/endTime" />
    <myTime-picker day="Sunday Start Time " fbPath="Sunday/startTime" />
    <myTime-picker day="Sunday End Time " fbPath="Sunday/endTime" />
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import timePicker from './src/../timepicker.vue'
import { fbStorage } from '../../main'
// import * as firebase from 'firebase'

// below is an example of how to add fields to firebase database and get info based on an existing logged in user
export default {
  name: 'timepicker',
  components: {
    'myTime-picker': timePicker
  },
  data () {
    return {
      profilepicture: '',
      name: '',
      zipcode: '',
      email: '',
      phoneNumber: '',
      country: '',
      state: '',
      city: '',
      checkedServices: [],
      userProvideServices: '',
      provideServices: {
        walker: false,
        trainer: false,
        sitter: false
      },
      userWantServices: false,
      wantServices: {
        walker: false,
        trainer: false,
        sitter: false
      },
      availableTimes: {
        generalWeek: {
          monday: {
            beginTime: 800,
            endtime: 1700
          },
          tuesday: {
            beginTime: 900,
            endtime: 1700
          },
          wednesday: {
            beginTime: 1000,
            endtime: 1700
          },
          thursday: {
            beginTime: 1100,
            endtime: 1700
          },
          friday: {
            beginTime: 800,
            endtime: 1700
          },
          saturday: {
            beginTime: 800,
            endtime: 1700
          },
          sunday: {
            beginTime: 800,
            endtime: 1700
          }
        }
      },
      recserv: false
    }
  },
  created () {
    /** this function gets the name field after the name was submiited in the function below, if the user doesnt have a name yet
       then the catch error will show up, you always need the axios line below to get the user data**/
    axios.get('/webUsers/' + this.$store.state.userId + '/.json' + '?auth=' + this.$store.state.idToken)
      .then(res => {
        this.name = res.data.name
      })
      .catch(err => {
        this.name = 'Please Enter Your Name'
        console.log(err)
      })
  },
  methods: {
    /** this function puts the property in the users database, always need that axios line to put info in the database
       based on the current user logged in **/
    submitInfo () {
      axios.put('/webUsers/' + this.$store.state.userId + '/info.json' + '?auth=' + this.$store.state.idToken, {
        // image: this.downloadUrl,
        name: this.name,
        zipcode: this.zipcode,
        email: this.email,
        phoneNumber: this.phoneNumber,
        country: this.country,
        state: this.state,
        city: this.city,
      })
      axios.put('/webUsers/' + this.$store.state.userId + '/services/userOptions.json' + '?auth=' + this.$store.state.idToken, {
        // image: this.downloadUrl,
        provideServices: this.userProvideServices,
        wantServices: this.userWantServices
      })
      axios.put('/webUsers/' + this.$store.state.userId + '/services/provideServices.json' + '?auth=' + this.$store.state.idToken, {
        // image: this.downloadUrl,
        walker: this.provideServices.walker,
        sitter: this.provideServices.sitter,
        trainer: this.provideServices.trainer
      })
      axios.put('/webUsers/' + this.$store.state.userId + '/services/wantServices.json' + '?auth=' + this.$store.state.idToken, {
        // image: this.downloadUrl,
        walker: this.wantServices.walker,
        sitter: this.wantServices.sitter,
        trainer: this.wantServices.trainer
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  }
}

</script>

<style>
  myTime-picker{
    position: center;
  }

</style>
