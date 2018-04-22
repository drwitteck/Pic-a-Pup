<template>
  <div >
    <select v-model="selected" v-bind:onselect="submitInfo()">
      <option disabled value="">Please select one</option>
      <option>00:00</option>
      <option>01:00</option>
      <option>02:00</option>
      <option>03:00</option>
      <option>03:00</option>
      <option>04:00</option>
      <option>05:00</option>
      <option>06:00</option>
      <option>07:00</option>
      <option>08:00</option>
      <option>09:00</option>
      <option>10:00</option>
      <option>11:00</option>
      <option>12:00</option>
      <option>13:00</option>
      <option>14:00</option>
      <option>15:00</option>
      <option>16:00</option>
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
      <option>23:00</option>
      <option>24:00</option>
    </select>
    <br>
    <span>Selected Times for {{ day }}: {{ selected }}</span>
  </div>
</template>

<script>
import axios from 'axios'

// below is an example of how to add fields to firebase database and get info based on an existing logged in user
export default {
  props: ['day', 'fbPath'],
  data () {
    return {
      selected: ''
    }
  },
  created () {
    /** this function gets the name field after the name was submiited in the function below, if the user doesnt have a name yet
     then the catch error will show up, you always need the axios line below to get the user data**/
    axios.get('/webUsers/' + this.$store.state.userId + '/.json' + '?auth=' + this.$store.state.idToken)
      .then(res => {
        this.name = res.data.name
      })
      .catch(err => {
        this.name = 'Please Enter Your Name'
        console.log(err)
      })
  },
  methods: {
    /** this function puts the property in the users database, always need that axios line to put info in the database
     based on the current user logged in **/
    submitInfo () {
      console.log('it works')
      axios.put('/webUsers/' + this.$store.state.userId + '/services/availableTimes/' + this.fbPath + '.json' + '?auth=' + this.$store.state.idToken, {
        time: this.selected
      })
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>
option{
  color:black;
}
  select{
    outline-color: #00b0ff;
    outline-width: 2px;
    border: 2px;
    padding: 3px;

  }
</style>
