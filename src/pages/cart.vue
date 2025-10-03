<template>
<v-container>
    <v-row dense>
      <v-col cols="12" sm="7" md="9">
        <MainCart />
      </v-col>

      <v-col cols="12" sm="5" md="3">
        <SideBar />
      </v-col>
    </v-row>
</v-container>
</template>

<script setup>
import MainCart from '@/components/carts/mainCart.vue';
import SideBar from '@/components/carts/sideBar.vue';



</script>

<style scoped>



</style>
