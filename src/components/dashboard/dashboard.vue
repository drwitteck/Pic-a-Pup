<template>
  <!-- 
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

    <img :src="profileImageData" alt=""> -->
  <v-app id="inspire" dark>
    <!-- Sidenav -->
    <v-navigation-drawer
      id="drawer"
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://cis.temple.edu/sites/default/files/styles/portrait-large/public/user_pictures/picture-767-1518386325.jpg?itok=AsYTIEq5" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Charles Wang</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <!-- Link 1 -->
        <v-list-tile router-link to="/dashboard">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Link 2 -->
        <v-list-tile router-link to="/breed">
          <v-list-tile-action>
            <v-icon>pets</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Pic-a-Breed</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- Link 3 -->
        <!-- <v-list-tile @click="onLogout">
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
      </v-list>
    </v-navigation-drawer>
    <!-- Top Navbar -->
    <v-toolbar id="toolbar" app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Pic-a-Pup Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="onLogout">
          <v-icon>power_settings_new</v-icon>
            &nbsp; Sign Out
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Main View -->
    <v-content>
      <v-container fluid fill-height>
        <!-- align-center to put contents in center -->
        <v-layout justify-center>
          <v-flex shrink>
            <!-- New View Opens here -->
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <!-- Footer -->
    <v-footer app fixed>
      <span>&copy; 2018 Pic-a-Pup Corp</span>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
import { fbStorage } from "../../main";
// import * as firebase from 'firebase'

// below is an example of how to add fields to firebase database and get info based on an existing logged in user
export default {
  data() {
    return {
      name: "defaultName",
      picture: "../pictures/pap.png",
      imgData: "",
      profileImageData: "",
      uploadTask: "",
      downloadUrl: "",
      drawer: true
    };
  },
  props: {
    source: String
  },
  created() {
    /** this function gets the name field after the name was submiited in the function below, if the user doesnt have a name yet
     then the catch error will show up, you always need the axios line below to get the user data**/
    axios
      .get(
        "/users/" +
          this.$store.state.userId +
          "/.json" +
          "?auth=" +
          this.$store.state.idToken
      )
      .then(res => {
        this.name = res.data.name;
      })
      .catch(err => {
        this.name = "Please Enter You Name";
        console.log(err);
      });
  },
  methods: {
    /** this function puts the property in the users database, always need that axios line to put info in the database
     based on the current user logged in **/
    onLogout() {
      this.$store.dispatch("logout");
    },
    submitName() {
      axios
        .put(
          "/users/" +
            this.$store.state.userId +
            "/.json" +
            "?auth=" +
            this.$store.state.idToken,
          {
            image: this.downloadUrl,
            name: this.name
          }
        )
        .then(res => console.log(res))
        .catch(error => console.log(error));
    },
    submitPic(event) {
      // axios.post('https://pic-a-pup.appspot.com/pics')
      let input = event.target;
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = e => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    updateProfileImg() {
      let input = document.querySelector("#profileImage");
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = e => {
          this.profileImageData = e.target.result;

          fbStorage
            .ref("imgs/")
            .child(this.$store.state.userId + "_profile.png")
            .put(input.files[0], {
              contentType: "image/png"
            });

          this.uploadTask = fbStorage
            .ref("imgs/")
            .child(this.$store.state.userId + "_profile.png")
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
      }
    }
  },
  watch: {
    uploadTask: function() {
      this.uploadTask.on("state_changed", sp => {
        console.log(Math.floor(sp.bytesTransferred / sp.totalBytes) * 100);
      });
    }
  }
};
</script>

<style scoped>
#inspire {
  background: linear-gradient(45deg, #551053, #1e8196);
}
/* #drawer {
  background: linear-gradient(45deg, #551053, #1e8196);
} */
#toolbar {
  background: linear-gradient(45deg, #551053, #1e8196);
}
</style>
