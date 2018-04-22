/* eslint-disable */
<template>
  <div id="profileinfo">
    <v-subheader style="font-weight:bold;font-size: 2vh">User Info</v-subheader>
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm10
        text-xs-center
        align-center
        justify-center
      >
        <v-list two-line subheader>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field
                label="Name"
                v-model="name"
                counter
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field
                label="E-mail"
                v-model="email"
                counter
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field
                label="Phone Number"
                v-model="phoneNumber"
                counter
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field
                label="Country"
                v-model="country"
                counter
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field
                label="State"
                v-model="state"
                counter
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field
                label="City"
                v-model="city"
                counter
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-text-field
                label="Zip Code"
                v-model="zipcode"
                counter
              ></v-text-field>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile avatar>
            <v-list-tile-content>
              <v-btn
                  style="background: linear-gradient(45deg, #551053, #1e8196);"
                  color="blue"
                  class="white--text"
                  @click="submitInfo()"
                >
                  Save
                  <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-flex>
    </v-layout>

    <v-divider></v-divider>

    <v-list three-line subheader>
      <v-subheader style="font-weight:bold;font-size: 2vh">Pic-a-Pup Services</v-subheader>
      <v-list-tile avatar>
        <v-list-tile-action>
          <v-checkbox v-model="userProvideServices"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <!-- this part doesnt work for the provide, check boxes arent showing up -->
          <v-list-tile-title>Provider</v-list-tile-title>
          <v-list-tile-sub-title>What services can you provide?</v-list-tile-sub-title>
          <div id='provideServicesList' v-if="userProvideServices">
             <v-checkbox v-model="provideServices.walker">Dog Walker</v-checkbox>
            <v-checkbox v-model="provideServices.trainer">Dog Trainer</v-checkbox>
            <v-checkbox v-model="provideServices.sitter">Dog Sitter</v-checkbox>
            <input type="checkbox" id="pwalker" v-model="provideServices.walker">
            <label for="pwalker">Dog Walker</label>
            <input type="checkbox" id="ptrainer" v-model="provideServices.trainer">
            <label for="ptrainer">Dog Trainer</label>
            <input type="checkbox" id="psitter" v-model="provideServices.sitter">
            <label for="psitter">Dog Sitter</label>
          </div>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <!---this part works for the receive --->
     <input type="checkbox" id="userWantServices" v-model="userWantServices">
    <label >Do you want to Receive Services: {{ userWantServices ? 'yes' : 'no' }}</label>
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
      dialog: false,
      sound: true,
      widgets: false,
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
        this.name = ''
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
        city: this.city
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
