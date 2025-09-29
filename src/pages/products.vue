<template>
  <v-container  class="main-container">
    <v-row class="content-row" dense>
      <v-col cols="12" sm="6" md="3">
          <Filters />
      </v-col>

      <v-col cols="12" sm="6" md="9">
        <SortMenu />
        <ProductList />
        <Pagination />
      </v-col>
    </v-row>

  </v-container>

</template>

<script setup>
import Filters from '@/components/filters.vue'
import Pagination from '@/components/pagination.vue'
import SortMenu from '@/components/sortMenu.vue'
import ProductList from '@/components/productList.vue'
</script>

<style scoped>
.main-container{
  margin: 0 3em;
}
</style>
