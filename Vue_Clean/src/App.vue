<template>
  <v-app>
    <core-Toolbar />
  
<core-View />
   
  </v-app>
</template>

<script>
  export default {
    components: {
      // CoreToolbar: () => import('@/components/core/Toolbar'),
      CoreView: () => import('@/components/View'),
      CoreToolbar: () => import('@/components/Toolbar')
  },
}
</script>
