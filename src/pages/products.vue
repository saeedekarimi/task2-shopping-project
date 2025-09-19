<template>
  <v-col class="mb-10">
    <v-row class="d-flex flex-row">
      <div>
        <productCard />
        <Pagination />
      </div>

      <filters />
    </v-row>
  </v-col>
</template>

<script setup>
import productCard from '@/components/productCard.vue'
import filters from '@/components/filters.vue'
import Pagination from '@/components/pagination.vue';
</script>



<style scoped>

</style>