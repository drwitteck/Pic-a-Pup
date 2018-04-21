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
      <!-- The stuffffffffff Put Info Here -->
      <div id="info">
        <profile-info />
        <router-view></router-view>
      </div>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Your Recent Pic-a-Breed Posts</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card color="cyan darken-1" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">German Sheppard</div>
                            <div>Probability: 100%</div>
                          </div>
                          <v-card-actions>
                      <v-btn flat dark>View Now</v-btn>
                    </v-card-actions>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            src="http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg"
                            height="125px"
                            contain
                          ></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card color="cyan darken-1" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">German Sheppard</div>
                            <div>Probability: 100%</div>
                          </div>
                          <v-card-actions>
                      <v-btn flat dark>View Now</v-btn>
                    </v-card-actions>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            src="http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg"
                            height="125px"
                            contain
                          ></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card color="cyan darken-1" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">German Sheppard</div>
                            <div>Probability: 100%</div>
                          </div>
                          <v-card-actions>
                      <v-btn flat dark>View Now</v-btn>
                    </v-card-actions>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            src="http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg"
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
      <!-- end of section -->

      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Others Recent Pic-a-Breed Posts</h2>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card color="cyan darken-1" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">German Sheppard</div>
                            <div>Probability: 100%</div>
                          </div>
                          <v-card-actions>
                      <v-btn flat dark>View Now</v-btn>
                    </v-card-actions>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            src="http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg"
                            height="125px"
                            contain
                          ></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card color="cyan darken-1" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">German Sheppard</div>
                            <div>Probability: 100%</div>
                          </div>
                          <v-card-actions>
                      <v-btn flat dark>View Now</v-btn>
                    </v-card-actions>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            src="http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg"
                            height="125px"
                            contain
                          ></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card color="cyan darken-1" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">German Sheppard</div>
                            <div>Probability: 100%</div>
                          </div>
                          <v-card-actions>
                      <v-btn flat dark>View Now</v-btn>
                    </v-card-actions>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            src="http://cdn.akc.org/content/article-body-image/housetrain_adult_dog_hero.jpg"
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
    </v-content>
  </v-app>
 </div>
</template>

<script>
import Info from './src/../profileinfo.vue'
export default {
  name: 'info',
  components: {
    'profile-info': Info
  },
  data () {
    return {
      tile: false
    }
  }
}
</script>

<style>

</style>
