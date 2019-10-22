<template>
  <v-toolbar app>
    <v-toolbar-title>
      <v-btn flat :to="'/ '" large class="headline text-uppercase">
        <span>Roligt </span>
        <span class="font-weight-light"> Väder</span>
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    
    <v-flex v-for="(link, i) in links" 
      :key="i" 
    >
      <v-btn
      flat
      :to="link.to"
      >
      {{link.text}}</v-btn>
    </v-flex>
  </v-toolbar>
</template>

<script>

export default {
  name: 'CoreToolbar',
  data: () => ({
    links: [
    {
      to:'Vidareinfo',
      text: 'Vidare Info'
    },
    {
      to: 'Login',
      text: 'Login'
    },
    ]
  })
}

</script>
