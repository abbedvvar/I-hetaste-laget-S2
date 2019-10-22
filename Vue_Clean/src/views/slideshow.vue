<template>
  
    <v-card
    elevation="24"
    max-width="1200"
    class="mx-auto"
  >
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      height="800"> 
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">{{ slide }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-list two-line>
      <v-list-item>
        <v-list-item-action>
          <v-switch
            v-model="cycle"
            label="Cycle Slides"
            inset
          ></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
          'purple',
        ],
        cycle: false,
        slides: [
          'Vardagsrummet',
          'Klassrummet',
          'Terrariet',
          'Hallonrummet',
          'Köket',
          'Alla',
        ],
      }
    },
  }
</script>
