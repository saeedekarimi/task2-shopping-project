<template>
  <v-container  class="main-container">
    <HeaderComponent />
    <MainMenu />

    <v-row class="content-row" dense>
      <v-col cols="12" sm="6" md="3">
          <Filters />
      </v-col>

      <v-col cols="12" sm="6" md="9">
        <SortMenu />
        <ProductCard />
        <Pagination />
      </v-col>
    </v-row>

  </v-container>
      <FooterComponent />

</template>

<script setup>
import ProductCard from '@/components/productCard.vue'
import Filters from '@/components/filters.vue'
import Pagination from '@/components/pagination.vue'
import HeaderComponent from '@/components/headerComponent.vue'
import MainMenu from '@/components/mainMenu.vue'
import SortMenu from '@/components/sortMenu.vue'
import FooterComponent from '@/components/footerComponent.vue'
</script>

<style scoped>
.main-container{
  margin: 0 3em;
}
</style>
