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
          <label>Enter a city</label>
          <div class="input-group__input">
            <GmapAutocomplete @place_changed="setPlace"></GmapAutocomplete>
            </div>
          <div class="input-group__details"><!---->
          </div>
        </div>
      </v-flex>
      <v-flex xs4>
        <v-btn
            class="blue lighten-2"
            dark
            large
            @click="usePlace"
            >
            Find
        </v-btn>
        <!-- <v-btn
            class="blue lighten-2"
            dark
            large
            @click="searchForParks"
            >
            Parks
        </v-btn> -->
      </v-flex>
    </v-layout>
    <div>
    
    <br/>

    <GmapMap style="width: 70vw; height: 30vw; margin: auto;" :zoom="16" :center="center">
      <GmapMarker v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        />
      <GmapMarker
        v-if="this.place"
        label="★"
        :position="{
          lat: this.place.geometry.location.lat(),
          lng: this.place.geometry.location.lng(),
        }"
        />
    </GmapMap>

    <div id="map"></div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 39.9818, lng: -75.1531 },
      markers: [],
      map: '',
      place: null,
      country: [{ text: "US" }, { text: "Hi" }, { text: "Hi" }, { text: "HI" }]
    };
  },
  methods: {
    setPlace(place) {
      this.place = place;
    },
    usePlace(place) {
      if (this.place) {
        (this.center.lat = this.place.geometry.location.lat()),
          (this.center.lng = this.place.geometry.location.lng()),
          this.markers.push({
            position: {
              lat: this.place.geometry.location.lat(),
              lng: this.place.geometry.location.lng()
            }
          });
      }
    },
    // searchForParks() {
    //   map = new google.maps.Map(document.getElementById('map'), {
    //       center: { lat: 39.9818, lng: -75.1531 },
    //       zoom: 15
    //   });
    //   var service = new google.maps.places.PlacesService(this.map);
    //   service.nearbySearch(
    //     {
    //       location: { lat: 39.9818, lng: -75.1531 },
    //       radius: 500,
    //       type: ["park"]
    //     }, (results, status) => {
    //     if (status === 'OK') {
    //       console.log("k")

    //       // for (var i = 0; i < results.length; i++) {
    //       //   this.createMarker(results[i]);
    //       // }
    //     } else {
    //       console.log("Not Ok")
    //     }
    //   });
    // },
    
    // createMarker(place) {
    //   var placeLoc = this.place.geometry.location;
    //   var marker = new google.maps.Marker({
    //     position: place.geometry.location
    //   });
    // }
  }
};
</script>

<style scoped>

</style>
