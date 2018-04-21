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
                      <h1 class="headline" style="font-weight: bold;">Charles Wang</h1>

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
        <v-pagination :length="4" v-model="page"></v-pagination>
      </div>
    </v-content>
  </v-app>
 </div>
</template>

<script>
import { fbDatabase } from "../../main";

export default {
  data: () => ({
    page: 1,
    placeholder: '',
    posts: [],
    tile: false
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
    })
  },
  methods: {
  }
}
</script>

<style>

</style>
      