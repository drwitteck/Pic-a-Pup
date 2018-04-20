/* eslint-disable */
<template>
  <div id="profileinfo">
    <h1>Profile Info</h1>
    <v-layout row wrap>
      <v-flex xs4 offset-sm1>
      </v-flex>
      <v-flex xs4>
      </v-flex>
    </v-layout>
    <div>
      <v-layout row wrap>
        <br/>
        <v-flex xs6 offset-sm1>
        </v-flex>
        <v-flex xs4>
        </v-flex>
      </v-layout>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      profilepicture: '',
      name: '',
      zip: '',
      proserv: false,
      recserv: false
    }
  }
}
</script>

<style>

</style>
