/* eslint-disable */
<template>
  <div id="park">
    <h1>Parks</h1>
    <!-- <gmap-map
      id="map"
      :center="center"
      :zoom="16"
      style="width: 80vw; height: 30vw; margin: auto;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map> -->

    <v-layout row wrap>
      <v-flex xs4 offset-sm1>
        <div class="input-group input-group--dirty theme--dark input-group--text-field primary--text">
          <label>Enter an address</label>
          <div class="input-group__input">
            <GmapAutocomplete @place_changed="setPlace"></GmapAutocomplete>
            </div>
          <div class="input-group__details"><!---->
          </div>
        </div>
      </v-flex>
      <v-flex xs4>
        <!-- <v-btn
            class="blue lighten-2"
            dark
            large
            @click="usePlace"
            >
            Find
        </v-btn> -->
        <v-btn
            class="blue lighten-2"
            dark
            large
            @click="searchForParks"
            >
            Find Parks
        </v-btn>
      </v-flex>
    </v-layout>
    <div>

    <br/>

    <GmapMap style="width: 70vw; height: 30vw; margin: auto;" :zoom="13" :center="center">
      <GmapMarker v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        :clickable="true" @click="toggleInfoWindow(marker, index)"
        />
      <GmapMarker
        v-if="this.place"
        label="★"
        :position="{
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }"
        />
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        
              <v-card light>
                <v-card-media style="margin:0" :src="snippet" height="5vh">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{name}}</h3>
                    <div>
                      {{infoContent}}
                    </div>
                  </div>
                </v-card-title>
                <v-card-actions>
                </v-card-actions>
              </v-card>
          
      </gmap-info-window>
        
    </GmapMap>

    <div id="map"></div>
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      center: { lat: 39.9818, lng: -75.1531 },
      snippet:'',
      markers: [],
      map: '',
      place: null,
      currentPlaceLat: '',
      currentPlaceLng: '',
      infoContent: '',
      name: '',
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
          //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      country: [{ text: "US" }, { text: "Hi" }, { text: "Hi" }, { text: "HI" }]
    };
  },
  methods: {
    setPlace (place) {
      this.place = place
    },
    usePlace(place) {
      this.markers = []
      if (this.place) {
        (this.center.lat = this.place.geometry.location.lat()),
          (this.center.lng = this.place.geometry.location.lng()),
          this.markers.push({
            position: {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng()
            },
            infoText: this.place.name
          });
      }
    },
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;
      this.name = marker.name;
      this.snippet = marker.snippet;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    searchForParks() {
      this.usePlace(this.place)
      this.map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 39.9818, lng: -75.1531 },
          zoom: 15
      });
      var service = new google.maps.places.PlacesService(this.map);
      var infowindow = new google.maps.InfoWindow();
      // service.nearbySearch(
      //   {
      //     location: this.center,
      //     radius: 500,
      //     type: ["park"]
      //   }, (results, status) => {
      //   if (status === 'OK') {
      //     for (var i = 0; i < results.length; i++) {
      //       // this.createMarker(results[i]);
      //       console.log(results[i].geometry.location.lat());
      //       console.log(results[i].geometry.location.lng());
      //       this.markers.push({
      //         position: {
      //           lat: results[i].geometry.location.lat(),
      //           lng: results[i].geometry.location.lng()
      //         }
      //       });
      //     }
      //   } else {
      //     console.log("No Parks In this range!")
      //   }
      // });

      // Testing Dog Park search Query query Dog Park and remove type or leave it type park and query dog...
      service.textSearch(
        {
          location: this.center,
          radius: 16000,
          query: 'Dog',
          type: 'park'
        }, (results, status) => {
        if (status === 'OK') {
          for (var i = 0; i < results.length; i++) {
            var photos = results[i].photos;
            if (!photos) {
              return;
            }

            console.log(results[i]);
            this.markers.push({
              position: {
                lat: results[i].geometry.location.lat(),
                lng: results[i].geometry.location.lng()
              },
              infoText: results[i].formatted_address,
              name: results[i].name,
              snippet: photos[0].getUrl({'maxHeight': 400})
            });
          }
        } else {
          console.log("No Parks In this range!")
        }
      });
    }
  }
}
</script>

<style scoped>

</style>
