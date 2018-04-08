<template>
    <div>
        <div id="map"></div>
        <v-btn @click="searchForParks"></v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pyrmont: {lat: -33.867, lng: 151.195},
            map: '',
            infowindow: ''
        };
    },
    methods: {
        searchForParks() {
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 39.9818, lng: -75.1531 },
                zoom: 15
            });
            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch(
            {
                location: this.pyrmont,
                radius: 500,
                type: ["park"]
            }, (results, status) => {
                if (status === 'OK') {
            
                    for (var i = 0; i < results.length; i++) {
                    // this.createMarker(results[i]);
                    console.log(results[i].geometry.location.lat);
                    console.log(results[i].geometry.location.lng);
                    var marker = new google.maps.Marker({
                        position: results[i].geometry.location
                    });
                    }
                } else {
                    console.log("Not Ok")
                }
            });
        }
    
    }

}
</script>

<style>
#map {
        height: 100%;
      }
</style>
