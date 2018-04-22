<template>
  <div>
   <v-app dark>
    <v-content style="margin:0; padding:0">
      <section>
        <v-parallax src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/EvVhCC0deijtsl1b4/videoblocks-programming-code-background-abstract-seamless-loop-animation_bklmxmhjw_thumbnail-full01.png" height="300">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <v-flex
              xs12
              sm6
              md8
              text-xs-center
              layout
              align-center
              justify-center
            >
              <v-avatar
                :tile="tile"
                :size=150
                class="grey lighten-4"
              >
                <img src="https://cis.temple.edu/sites/default/files/styles/portrait-large/public/user_pictures/picture-767-1518386325.jpg?itok=AsYTIEq5" alt="avatar">
              </v-avatar>
            </v-flex>
            <v-flex
              xs12
              text-xs-center
              layout
              align-center
              justify-center
            >
              <h1 class="headline" style="font-weight: bold; margin: 0 auto">
                Charles Wang
              </h1>
              <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <!-- <v-btn color="primary" dark slot="activator">Open Dialog</v-btn> -->
                <v-btn flat icon slot="activator" color="white">
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-card>
                  <v-toolbar dark style="border-radius:5px; background: linear-gradient(45deg, #551053, #1e8196);" >
                    <v-btn icon @click.native="dialog = false" dark>
                      <v-icon>close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Profile Editor</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <!-- <v-toolbar-items>
                      <v-btn dark flat @click.native="dialog = false">Save</v-btn>
                    </v-toolbar-items> -->
                  </v-toolbar>
                  <profile-info />
                  <!-- <v-list three-line subheader>
                    <v-subheader>User Info</v-subheader>
                    <v-list-tile avatar>
                      <v-list-tile-content>
                        <v-list-tile-title>Content filtering</v-list-tile-title>
                        <v-list-tile-sub-title>Set the content filtering level to restrict apps that can be downloaded</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                      <v-list-tile-content>
                        <v-list-tile-title>Password</v-list-tile-title>
                        <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                  <v-divider></v-divider>
                  <v-list three-line subheader>
                    <v-subheader>General</v-subheader>
                    <v-list-tile avatar>
                      <v-list-tile-action>
                        <v-checkbox v-model="notifications"></v-checkbox>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Notifications</v-list-tile-title>
                        <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                      <v-list-tile-action>
                        <v-checkbox v-model="sound"></v-checkbox>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Sound</v-list-tile-title>
                        <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                      <v-list-tile-action>
                        <v-checkbox v-model="widgets"></v-checkbox>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                        <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list> -->
                </v-card>
              </v-dialog>
            </v-flex>
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
              <h2 class="headline">Recent Pic-a-Breed Posts</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>

                <v-flex xs12 md4 v-for="post in posts.slice(0+(page-1)*6, 6+(page-1)*6)" :key="post.user">
                  <v-card style="border-radius:5px; background: linear-gradient(45deg, #551053, #1e8196);" class="white--text" >
                    <v-container fluid grid-list-lg >
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline"> {{ post.breed }} </div>
                            <div>Probability: {{ post.probability }}</div>
                          </div>
                          <v-card-actions>
                      <!-- <v-btn flat dark>View Now</v-btn> -->
                          </v-card-actions>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            :src="post.dogImageSent"
                            height="125px"
                            contain
                          ></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <div class="text-xs-center">
        <v-pagination :length="6" v-model="page"></v-pagination>
      </div>
    </v-content>
  </v-app>
 </div>
</template>

<script>

import { fbDatabase } from "../../main";
import Info from './src/../profileinfo.vue'

export default {
  name: 'info',
  components: {
    'profile-info': Info
  },
  data: () => ({
    page: 1,
    placeholder: '',
    posts: [],
    tile: false,
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false
  }),
  mounted(){
    fbDatabase
      .ref('FeedDogSearchResult/')
      .once('value', (posts) => {
      posts.forEach((post) => {
        this.posts.push({
          ref: post.ref,
          user: this.$store.state.userId,
          breed: post.child('breed').val(),
          dogImageSent: post.child('dogImageSent').val(),
          probability: Math.round(post.child('probability').val()*100)
        })
      })
      this.posts.reverse()
    })
  },
  methods: {
  }
}
</script>

<style>

</style>
