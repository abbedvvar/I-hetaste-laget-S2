<template>
  <v-card
    flat
    class="py-12"
  >
    <v-card-text>
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
           <p class="text-center">Välj termometer</p>
         </v-col>
           <v-btn>
             <v-text>1: Vardagsrummet</v-text>
            </v-btn>
           <v-btn>
             <v-text>2: Klassrummet</v-text>
           </v-btn>
            <v-btn>
              <v-text>3: Terrariet</v-text>
           </v-btn>
           <v-btn>
              <v-text>4: Hallonrummet</v-text>
           </v-btn>
           <v-btn>
              <v-text>5: Kafeterian</v-text>
          </v-btn>
          <router-link :to="{ path: '/Vidareinfo'}" replace>
          <v-btn>
            <v-text>Se alla termometrar</v-text>
          </v-btn>
        </router-link>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        toggle_exclusive: undefined,
      }
    },
  }
</script>