<template>
    <div>
        <h1>Pic-a-Services</h1>
        <v-content style="margin:0; padding:0">
            <section>
                <v-layout
                column
                wrap
                align-center
                >
                <v-flex xs12>
                    <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex xs12 md4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                            <div class="headline text-xs-center">Dog Sitting</div>
                            </v-card-title>
                            <v-card-text>
                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                            </v-card-text>
                        </v-card>
                        </v-flex>
                        <v-flex xs12 md4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                            <div class="headline">Dog Training</div>
                            </v-card-title>
                            <v-card-text>
                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                            </v-card-text>
                        </v-card>
                        </v-flex>
                        <v-flex xs12 md4>
                        <v-card class="elevation-0 transparent">
                            <v-card-title primary-title class="layout justify-center">
                            <div class="headline text-xs-center">Dog Walking</div>
                            </v-card-title>
                            <v-card-text>
                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt.
                            </v-card-text>
                        </v-card>
                        </v-flex>
                    </v-layout>
                    </v-container>
                </v-flex>
                </v-layout>
            </section>

            <section>
                <v-data-table
                    style="margin:5vh"
                    :headers="headers"
                    :items="items"
                    class="elevation-1"
                >
                    <template slot="headerCell" slot-scope="props">
                    <v-tooltip bottom>
                        <span slot="activator">
                        {{ props.header.text }}
                        </span>
                        <span>
                        {{ props.header.text }}
                        </span>
                    </v-tooltip>
                    </template>
                    <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.email }}</td>
                    <td class="text-xs-right">{{ props.item.phoneNumber }}</td>
                    <td class="text-xs-right">{{ props.item.city }}</td>
                    <td class="text-xs-right">{{ props.item.state }}</td>
                    <td class="text-xs-right">{{ props.item.country }}</td>
                    <td class="text-xs-right">{{ props.item.zipcode }}</td>
                    </template>
                </v-data-table>
            </section>
        </v-content>
    </div>
</template>

<script>
import { fbDatabase } from "../../../main";

export default {
  data() {
    return {
      headers: [
        {
          text: "Service Provider",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "E-mail", align: "right", value: "e-mail" },
        { text: "Phone", align: "right", value: "phone" },
        { text: "City", align: "right", value: "city" },
        { text: "State", align: "right", value: "state" },
        { text: "Country", align: "right", value: "country" },
        { text: "Zip Code", align: "right", value: "zip code" }
      ],
      items: [],
      serviceProviders: []

    };
  },
  mounted(){
    fbDatabase
      .ref('webUsers/')
      .once('value', (items) => {
      items.forEach((post) => {
        this.items.push({
          ref: post.ref,
          user: this.$store.state.userId,
          name: post.child('info').child('name').val(),
          email: post.child('info').child('email').val(),
          phoneNumber: post.child('info').child('phoneNumber').val(),
          city: post.child('info').child('city').val(),
          country: post.child('info').child('country').val(),
          state: post.child('info').child('state').val(),
          zipcode: post.child('info').child('zipcode').val(),
          services: post.child('services').val()
        })
      })
      this.items.reverse()
      console.log(this.items[0])
    })
  }
};
</script>

<style>

</style>
