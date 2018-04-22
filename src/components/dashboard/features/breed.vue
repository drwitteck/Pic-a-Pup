<template>
  <v-flex>
    <div class="container">
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
        <br>
        <v-divider></v-divider>
        <!-- <h1>View Recent Posts!</h1> -->
        <!-- Possibly going to be a 'recent posted sort of deal' -->

        <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h2>Photo Guidelines</h2>
                <span class="subheading">
                  Quick Simple Steps To Get The Best Results
                </span>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Step 1</div>
                      </v-card-title>
                      <v-card-text>
                        Find a dog image! Obtain one from the internet or capture the image with any device and upload it to your computer
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Step 2</div>
                      </v-card-title>
                      <v-card-text>
                        The image should be full-faced view, good lighting, and not in fog. If the image does not meet the following requirements, the result may be obscured.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Step 3</div>
                      </v-card-title>
                      <v-card-text>
                        Go to the area above, drag and drop your image there or click in the area to search for your image within your filesystem.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>
      </form>
      <!--SUCCESS-->
      <div v-if="isSuccess">
        <!-- Fake service Multiple Upload test -->
        <!-- <h2>Uploaded {{ uploadedFiles.length }} pup successfully.</h2> -->
        <h1>Uploaded Pup Successfully</h1>
        <!-- <ul class="list-unstyled"> -->
          <!-- Uncomment if want to use fake.service -->
          <!-- <li v-for="item in uploadedFiles">
            <img :src="item.url" class="img-responsive img-thumbnail" :alt="item.originalName">
          </li> -->
          <!-- <img :src="item_url" alt=""> -->
        <!-- </ul> -->
        <v-layout row wrap>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-card-media
                :src="item_url"
                contain
                height="300px"
              >
              </v-card-media>
              <v-card-title primary-title>
                <div v-if="!realBreed">
                  <div class="headline">Awesome Pup</div>
                  <br>
                  <span class="white--text">Almost done! Enter your ZIP code and click 'learn more' to find out more about your pup</span>
                  <br>
                  <v-flex xs8>
                    <v-text-field
                      name="input-1"
                      label="ZIP Code"
                      class="input-group--focused black--text"
                      v-model="zipcode"
                      dark
                    />
                  </v-flex>
                </div>

                <div v-if="realBreed">
                    <div class="headline">{{ realBreed }}</div>
                    <br>
                    <!-- <v-progress-circular
                      :size="100"
                      :width="15"
                      :rotate="-90"
                      :value= breedProb
                      color="primary"
                    >
                    {{ breedProb }}%
                    </v-progress-circular> -->
                    <p>Probability: {{ breedProb }}%</p>
                    <v-progress-linear :value="breedProb" height="10" color="info"></v-progress-linear>
                </div>
              </v-card-title>
              <v-card-actions v-if="realBreed">
                <!-- <v-btn flat color="white" @click="addressToLatLong">Shelter</v-btn> -->
                <v-layout row>
                  <v-dialog v-model="dialog" persistent max-width="290">
                    <v-btn flat color="cyan" dark slot="activator" @click="writeImageResult()">Post to Social Feed</v-btn>
                    <v-card>
                      <v-card-title class="headline">Posted to Feed</v-card-title>
                      <v-card-text>Cool, you just posted your result for others to see! Want to see what others have posted?</v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat @click.native="dialog = false" router-link to="/profile">Yay</v-btn>
                        <v-btn color="red darken-1" flat @click.native="dialog = false">Nah</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-layout>
                <v-tooltip right>
                  <v-btn icon @click.native="show = !show" slot="activator">
                    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                  </v-btn>
                  <span>Breed Info</span>
                </v-tooltip>
              </v-card-actions>
              <v-card-actions v-if="!realBreed">
                <v-btn flat color="cyan" @click="sendImageBackend()">Learn More</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
              <v-slide-x-transition>
                <v-card-text v-show="show">
                  <span v-if="breedInfo" class="white--text">{{ breedInfo }}</span>
                </v-card-text>
              </v-slide-x-transition>
            </v-card>
            <br>
            <v-btn
              href="javascript:void(0)"
              color="blue-grey"
              class="white--text"
              @click="reset()"
            >
              Upload Another Pup
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            
          <!-- Shelter? -->
          </v-flex>
          <v-layout v-if="shelter || sheltercity">
            <v-container grid-list-xl>
              <v-layout row wrap justify-center class="my-5">
                <v-flex xs12 sm5>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <h1>View Shelters On the Map Here!</h1>
                    </v-card-title>
                    <v-card-text>
                      <gmap-map
                        :center="center"
                        :zoom="16"
                        style="width: 20vw; height: 20vw; margin: auto;"
                      >
                        <gmap-marker
                          :key="index"
                          v-for="(m, index) in markers"
                          :position="m.position"
                          :clickable="true"
                          :draggable="true"
                          @click="center=m.position"
                        ></gmap-marker>
                      </gmap-map>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm5 offset-sm1>
                  <v-card class="elevation-0 transparent">
                    <v-card-title primary-title class="layout justify-center">
                      <h1>Shelter<br> Information</h1>
                    </v-card-title>
                    <v-list class="transparent">
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">place</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Address: {{ shelter }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">location_city</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>City: {{ sheltercity }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">domain</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Zip: {{ shelterzip }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">email</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>E-Mail: {{ shelteremail }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="blue--text text--lighten-2">phone</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>Phone: {{ shelterphone }}</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
                <v-btn
                  href="javascript:void(0)"
                  color="blue-grey"
                  class="white--text"
                  @click="sendImageBackend()"
                >
                  View Another Shelter
                  <v-icon right dark>search</v-icon>
                </v-btn>
              </v-layout>
            </v-container>
          </v-layout>

          <v-layout v-if="shelterAvail">
            <v-flex xs12>
              <h1>Looks like there are no shelters around you who has this breed <v-icon large>sentiment_very_dissatisfied</v-icon></h1>
            </v-flex>
          </v-layout>
          <!-- Test for shelter -->
          <!-- <v-layout>
            <v-flex xs6>
              <h1>(Test View Will be deleted soon) View Shelters On the Map Here!</h1>
              <gmap-map
                :center="center"
                :zoom="7"
                style="width: 30vw; height: 30vw; margin:auto;"
              >
                <gmap-marker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  :clickable="true"
                  :draggable="true"
                  @click="center=m.position"
                ></gmap-marker>
              </gmap-map>
            </v-flex>
            <v-flex xs6 id="shelterInfo">
              <h1>(Test View Will be deleted soon) Shelter Information</h1>
              <p>About the Shelter <br><br> Address: 123 Temple Street</p>
              <p>City: Philadelphia</p>
              <p>Zip: 19123</p>
            </v-flex>
          </v-layout> -->
        </v-layout>
      </div>
      <!--FAILED-->
      <div v-if="isFailed">
        <h1>Uploaded failed.</h1>
        <p>
          <a href="javascript:void(0)" @click="reset()">Try again</a>
        </p>
        <pre>{{ uploadError }}</pre>
      </div>
    </div>
  </v-flex>
</template>

<script>
// swap as you need
// import { upload } from "./file-upload.fake.service"; // fake service
// import { upload } from './file-upload.service';   // real service
import { wait } from "./utils";
import { fbStorage } from "../../../main";
import { fbDatabase } from "../../../main";
import axios from "axios";
import VueResources from "vue-resource";

const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;
const BASE_URL = "http://localhost:3001";

const breedPageinstance = axios.create({
  baseURL: "18.219.234.144"
});

export default {
  breedPageinstance,
  name: "app",
  data() {
    return {
      dialog: false,
      center: {
        lat: 39.9818, 
        lng: -75.1531
      },
      markers: [{
        position: {lat: 39.9818, lng: -75.1531}
      }],
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: "photos",
      item_url: "",
      downloadURL: "",
      zipcode: "",
      backendResponse: "",
      realBreed: "",
      breedInfo: "",
      breedProb:"",
      shelter: "",
      sheltercity: "",
      shelterzip: "",
      shelteremail: "",
      shelterphone: "",
      shelterAvail: "",
      show: false
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {
    reset() {
      // reset form to initial state
      this.center = {
        lat: 39.9818, 
        lng: -75.1531
      },
      this.markers= [{
        position: {lat: 39.9818, lng: -75.1531}
      }],
      this.currentStatus = STATUS_INITIAL
      this.uploadedFiles = []
      this.uploadError = null
      this.uploadFieldName = 'photos'
      this.item_url = ''
      this.downloadURL = ''
      this.zipcode = ''
      this.backendResponse = ''
      this.realBreed = ''
      this.breedInfo = ''
      this.breedProb = ''
      this.shelter = ''
      this.sheltercity = ''
      this.shelterzip = ''
      this.shelteremail = '',
      this.shelterphone = '',
      this.shelterAvail = '',
      this.show = false
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;
      const url = `${BASE_URL}/photos/upload`;
      this.upload();
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
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map(x => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });
      // save it
      this.save(formData);
    },
    upload() {
      let input = document.querySelector(".input-file");
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = e => {
          this.item_url = e.target.result;

          fbStorage
            .ref("imgs/")
            .child(this.$store.state.userId + "_pup.png")
            .put(input.files[0], {
              contentType: "image/png"
            });

          this.uploadTask = fbStorage
            .ref("imgs/")
            .child(this.$store.state.userId + "_pup.png")
            .put(input.files[0], {
              contentType: "image/png"
            });
          this.uploadTask.then(snapshot => {
            console.log(snapshot);
            this.downloadUrl = snapshot.downloadURL;
            this.$emit("url", this.downloadUrl);
          });
        };
        reader.readAsDataURL(input.files[0]);
        this.currentStatus = STATUS_SUCCESS;
      }
    },
    writeImageResult() {
      fbDatabase
        .ref('FeedDogSearchResult/')
        .push({
          breed: this.realBreed,
          dogImageSent: this.downloadUrl,
          probability: (this.breedProb / 100)
        });
    },
    sendImageBackend1() {
      axios
        .post("http://httpbin.org/post", {
          breed: "Beagle",
          location: this.zipcode,
          url: this.downloadUrl
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    sendImageBackend () {
      this.$http.post('http://18.188.145.20', {
        // breed: 'Lab',
        location: this.zipcode,
        url: this.downloadUrl
      })
        .then(response => {
          console.log(response)
          this.backendResponse = response.body
          this.realBreed = response.body.breed
          this.breedInfo = response.body.breed_info
          this.breedProb = Math.round(response.body.prob * 100)
          this.shelter = response.body.shelter_contact.address1
          this.sheltercity = response.body.shelter_contact.city
          this.shelterzip = response.body.shelter_contact.zip
          this.shelteremail = response.body.shelter_contact.email
          this.shelterphone = response.body.shelter_contact.phone
          this.shelterAvail = false
          this.addressToLatLong()
        }).catch(error => {
          if(this.backendResponse.model_error) {
            console.log("here I am")
            this.realBreed = "Model Cannot Identify the Breed"
            this.breedInfo = "You sure this ain't a CAT?! Upload again or another image."
            this.breedProb = 0
          } else {
            console.log("no error")
          }
          console.log("Image Backend" + error)
          this.shelterAvail = true
        })
    },
    addressToLatLong () {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': this.shelter + this.sheltercity + this.shelterzip}, (results, status) => {
        if (status === 'OK') {

          console.log(results[0].geometry.location.lat())
          console.log(results[0].geometry.location.lng())
          
          this.center.lat = results[0].geometry.location.lat()
          this.center.lng = results[0].geometry.location.lng()

          this.markers = [{
            position: {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()}
          }]
        } else {
          console.log("No Address")
          this.shelter = "Address N/A"
        }
      });
    }
  },
  mounted() {
    this.reset();
  }
};
</script>

<style lang="scss">
h1 {
  background-size: contain;
  margin: auto;
  text-align: center;
  margin: 5vh;
}

#shelterInfo {
  text-align: center;
}

.card__title {
  // text-align: center;
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

.card {
  padding: 20px;
}

.headline {
  background: linear-gradient(#d660d2, #1e8196);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
