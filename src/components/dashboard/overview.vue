<template>
  <div>
   <v-app dark>
    <v-content style="margin:0; padding:0">
      <section>
        <v-parallax src="https://wallpapercave.com/wp/IrMqrhR.jpg" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <!-- <img src="../pictures/pap.png" alt="Vuetify.js" height="200"> -->
            <div>
            <h1 class="blue--text mb-2 display-1 text-xs-center">Overview</h1>
            <!-- <div class="subheading mb-3 text-xs-center">Dog lovers dream, providing a simple and fun interface to change the way its users search, inform themselves, and begin the process of adopting that perfect forever friend.</div> -->
            </div>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Features</h2>
              <span class="subheading">
                See what you could do, Pic-a-Fam!
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">pets</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Pic-a-Breed</div>
                    </v-card-title>
                    <v-card-text>
                      This feature will allow you to upload an image of a particular dog of interest, 
                      allow us to determine its breed, give you information about the breed, and we'll 
                      even find the availability of the breed at local animal shelters. What are you waiting for Pic-a-Fam? 
                    </v-card-text>
                    <v-card-actions class="layout justify-center">
                        <v-btn
                            class="blue lighten-2 mt-5"
                            dark
                            large
                            router-link to="/breed"
                            >
                            Get Started
                        </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">local_florist</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Pic-a-Park</div>
                    </v-card-title>
                    <v-card-text>
                      Interested in looking for a dog park near you? We have that information for you! 
                      Place a location you'll be around and we'll show you the nearest dog park(s). 
                    </v-card-text>
                    <v-card-actions class="layout justify-center">
                        <v-btn
                            class="blue lighten-2 mt-5"
                            dark
                            large
                            router-link to="/park"
                            >
                            Find Parks
                        </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Pic-a-Wah</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                    </v-card-text>
                    <v-card-actions class="layout justify-center">
                        <v-btn
                            class="blue lighten-2 mt-5"
                            dark
                            large
                            
                            >
                            Placeholder
                        </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="http://spaysa.org/wp-content/uploads/2013/02/winter-dog-snowflakes-hd-wallpaper-Dog-wallpaper-HD-free-wallpapers-backgrounds-images-FHD-4k-download-2014-2015-2016.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Check Out The Code!</div>
            <em>Kick-start Your Application Today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              GitHub
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm5>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Location</div>
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
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                    Have any pressing questions? Want to just talk?
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>215-742-2787</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Philadelphia, PA</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>capstone4398@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>
 </div>
</template>

<script>
export default {
  data () {
    return {
      center: {lat: 39.9818, lng: -75.1531},
      markers: [{
        position: {lat: 39.9818, lng: -75.1531}
      }, {
        position: {lat: 11.0, lng: 11.0}
      }]
    }
  }
}
</script>

<style>

</style>
