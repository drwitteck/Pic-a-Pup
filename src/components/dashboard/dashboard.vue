<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>

    <div id="feature">
      <router-link to="/breed">Breed</router-link>
    </div>
    <p v-if="name">Your name: {{ name }}</p>
    <input type="text" v-model="name" placeholder="Name">
    <button v-on:click="submitName()">Submit Name</button>

    <br />
    <br>

    <input type="file" accept="image/*" id="profileImage" />
    <br>
    <button v-on:click="updateProfileImg()">Submit Picture</button>

    <br />
    <br>

    <img :src="profileImageData" alt="">

  </div>
</template>

<script>

import axios from 'axios'
import { fbStorage } from '../../main'
// import * as firebase from 'firebase'

// below is an example of how to add fields to firebase database and get info based on an existing logged in user
export default {
  data () {
    return {
      name: 'defaultName',
      picture: '../pictures/pap.png',
      imgData: '',
      profileImageData: '',
      uploadTask: '',
      downloadUrl: ''
    }
  },
  created () {
    /** this function gets the name field after the name was submiited in the function below, if the user doesnt have a name yet
    then the catch error will show up, you always need the axios line below to get the user data**/
    axios.get('/users/' + this.$store.state.userId + '/.json' + '?auth=' + this.$store.state.idToken)
      .then(res => {
        this.name = res.data.name
      })
      .catch(err => {
        this.name = 'Please Enter You Name'
        console.log(err)
      })
  },
  methods: {
    /** this function puts the property in the users database, always need that axios line to put info in the database
     based on the current user logged in **/
    submitName () {
      axios.put('/users/' + this.$store.state.userId + '/.json' + '?auth=' + this.$store.state.idToken, {
        image: this.downloadUrl,
        name: this.name
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    submitPic (event) {
      // axios.post('https://pic-a-pup.appspot.com/pics')
      let input = event.target
      if (input.files && input.files[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    updateProfileImg () {
      let input = document.querySelector('#profileImage')
      if (input.files && input.files[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.profileImageData = e.target.result

          fbStorage.ref('imgs/').child(this.$store.state.userId + '_profile.png').put(input.files[0], {
            contentType: 'image/png'
          })

          this.uploadTask = fbStorage.ref('imgs/').child(this.$store.state.userId + '_profile.png').put(input.files[0], {
            contentType: 'image/png'
          })
          this.uploadTask.then(snapshot => {
            console.log(snapshot)
            this.downloadUrl = snapshot.downloadURL
            this.$emit('url', this.downloadUrl)
          })
        }
        reader.readAsDataURL(input.files[0])
      }
    }

  },
  watch: {
    uploadTask: function () {
      this.uploadTask.on('state_changed', sp => {
        console.log(Math.floor(sp.bytesTransferred / sp.totalBytes) * 100)
      })
    }
  }
}
</script>

<style scoped>
#feature a {
  font-size: 10vh;
  text-decoration: none;
  color: white;
}
  #dashboard {
    text-align: center;
  }

  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
