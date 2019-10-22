<template>

<div>

<v-layout row wrap justify-space-around>
  <v-flex xs5>
    <v-card class="pa-2" v-for="mätning in manydevices" :key="mätning.location">
      <v-layout row>
      <v-flex xs3>
      <div class="caption grey--text">Rum </div>
      <div>{{mätning.location}}</div>
      </v-flex>
       <v-flex xs3>
      <div class="caption grey--text">Temperatur </div>
      <div>{{mätning.temperature}}</div>
      </v-flex>
      <v-flex xs3>
      <div class="caption grey--text">Luftfuktighet </div>
      <div>{{mätning.humidity}}</div>
      </v-flex>
      <v-flex xs2>
      <div class="caption grey--text">Senast mätning </div>
      <div>{{mätning.timestamp}}</div>
      </v-flex>
      </v-layout>
    </v-card>
  </v-flex>



  <v-flex xs5>
    <v-card>
    
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="10"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2">Mätning över tid</div>
      <div class="subheading font-weight-light grey--text">Rum</div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">senast mätning</span>
    </v-card-text>
  </v-card>

  </v-flex>
</v-layout>

  
  

  </div>

</template>

<script>
const axios = require("axios")
export default {
  data() {
    return {manyvalues:[],
      mätare: [

      ],
      device: [

      ],
    labels: [

    ],
    value: [

    ]
    },
    mounted(){
    this.getdata();
    this.getdevice();

    let dataandDevice=[];
    this.mätare.forEach(mät => {
    dataandDevice.push({humidity: mät.humidity,time: mät.timestamp})
    });
        this.device.forEach(mät => {
    dataandDevice.push({humidity: mät.humidity,time: mät.timestamp})
    });console.log(dataandDevice)
    this.manyvalues=dataandDevice;

    }
    methods {
      getdata(){
        var self = this;
       axios.get("https://jj3mdr0w1m.execute-api.us-east-1.amazonaws.com/beta/data").then(function(response) {
        self.mätare = JSON.parse(response.data.body) 
       })
       getdevice(){
         var self = this;
        axios.get("https://jj3mdr0w1m.execute-api.us-east-1.amazonaws.com/beta/device").then(function(response) {
        self.device = JSON.parse(response.data.body) 
       }
       }
      
     
    }
  },
  </script>


  
    


    