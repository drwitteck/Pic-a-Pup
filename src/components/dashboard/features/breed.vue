<template>
  <div id="app">
    <div class="container">
      <p v-if="zipcode">Your zipcode: {{ zipcode }}</p>
      <input type="text" v-model="zipcode" placeholder="19111">

      <!--UPLOAD-->
      <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
        <h1>Upload Your Pup</h1>
        <div class="dropbox">
          <input type="file" multiple :name="uploadFieldName" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
            accept="image/*" class="input-file">
            <p v-if="isInitial">
              Drag and drop your pup-pic here <br> or <br> Click to search for your pup-pic
            </p>
            <p v-if="isSaving">
              Uploading your pup...
            </p>
        </div>
      </form>
      <!--SUCCESS-->
      <button v-on:click="sendImageBackend()">Submit To Backend</button>
      <div v-if="isSuccess">
        <!-- Fake service Multiple Upload test -->
        <!-- <h2>Uploaded {{ uploadedFiles.length }} pup successfully.</h2> -->

        <h2>Uploaded pup successfully.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()" class="uploadAgain">Upload pup again</a>
        </p>
        <ul class="list-unstyled">
          <!-- Uncomment if want to use fake.service -->
          <!-- <li v-for="item in uploadedFiles">
            <img :src="item.url" class="img-responsive img-thumbnail" :alt="item.originalName">
          </li> -->

          <img :src="item_url" alt="">
        </ul>
      </div>
      <!--FAILED-->
      <div v-if="isFailed">
        <h2>Uploaded failed.</h2>
        <p>
          <a href="javascript:void(0)" @click="reset()">Try again</a>
        </p>
        <pre>{{ uploadError }}</pre>
      </div>
      <p v-if="realBreed">Dog Breed is: {{ realBreed }}</p>
      <p v-if="breedInfo">About this Breed: {{ breedInfo }}</p>
      <!--<p v-if="shelter">About the Shelter <br><br> Address: {{ shelter }}</p>-->
      <!--<p v-if="sheltercity">City: {{ sheltercity }}</p>-->
      <!--<p v-if="shelterzip">Zip: {{ shelterzip }}</p>-->
    </div>
  </div>
</template>

<script>
// swap as you need
// import { upload } from "./file-upload.fake.service"; // fake service
// import { upload } from './file-upload.service';   // real service
import { wait } from './utils'
import { fbStorage } from '../../../main'
import axios from 'axios'
import VueResources from 'vue-resource'

const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3
const BASE_URL = 'http://localhost:3001'

const breedPageinstance = axios.create({
  baseURL: '18.219.234.144'
})

export default {
  breedPageinstance,
  name: 'app',
  data () {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: 'photos',
      item_url: '',
      downloadURL: '',
      zipcode: '',
      realBreed: '',
      breedInfo: ''
      // shelter: '',
      // sheltercity: '',
      // shelterzip: ''
    }
  },
  computed: {
    isInitial () {
      return this.currentStatus === STATUS_INITIAL
    },
    isSaving () {
      return this.currentStatus === STATUS_SAVING
    },
    isSuccess () {
      return this.currentStatus === STATUS_SUCCESS
    },
    isFailed () {
      return this.currentStatus === STATUS_FAILED
    }
  },
  methods: {
    reset () {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL
      this.uploadedFiles = []
      this.uploadError = null
    },
    save (formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING
      const url = `${BASE_URL}/photos/upload`
      this.upload()
      // New Upload Code

      // upload(formData)
      //   .then(wait(1500))
      //   .then(x => {
      //     this.uploadedFiles = [].concat(x);
      //     this.currentStatus = STATUS_SUCCESS;
      //   })
      //   .catch(err => {
      //     this.uploadError = err.response;
      //     this.currentStatus = STATUS_FAILED;
      //   });
    },
    filesChange (fieldName, fileList) {
      // handle file changes
      const formData = new FormData()

      if (!fileList.length) return

      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name)
      })
      // save it
      this.save(formData)
    },
    upload () {
      let input = document.querySelector('.input-file')
      if (input.files && input.files[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.item_url = e.target.result

          fbStorage.ref('imgs/').child(this.$store.state.userId + '_pup.png').put(input.files[0], {
            contentType: 'image/png'
          })

          this.uploadTask = fbStorage.ref('imgs/').child(this.$store.state.userId + '_pup.png').put(input.files[0], {
            contentType: 'image/png'
          })
          this.uploadTask.then(snapshot => {
            console.log(snapshot)
            this.downloadUrl = snapshot.downloadURL
            this.$emit('url', this.downloadUrl)
          })
        }
        reader.readAsDataURL(input.files[0])
        this.currentStatus = STATUS_SUCCESS
      }
    },
    sendImageBackend1 () {
      axios.post('http://httpbin.org/post', {
        breed: 'Beagle',
        location: this.zipcode,
        url: this.downloadUrl
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    sendImageBackend () {
      this.$http.post('http://18.219.234.144', {
        breed: 'Lab',
        location: this.zipcode,
        url: this.downloadUrl
      })
        .then(response => {
          console.log(response)
          console.log(response.body.age)
          this.realBreed = response.body.breed
          this.breedInfo = response.body.breed_info
          // this.shelter = response.body['shelter Contact'].address1
          // this.sheltercity = response.body['shelter Contact'].city
          // this.shelterzip = response.body['shelter Contact'].zip
        }, error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.reset()
  }

}
</script>

<style lang="scss">
h1 {
  background-size: contain;
  margin: auto;
  text-align: center;
  margin: 5vh;
}
.dropbox {
  background-size: contain;
  margin: auto;
  width: 50vw;
  align-items: center;
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

.uploadAgain {
  text-decoration: none;
  color: white;
  border: 2px solid white;
  padding: 2px;
}
</style>
