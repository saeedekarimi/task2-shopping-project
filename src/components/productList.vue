<template>
  <div>
    <v-row class="ma-0 pa-0">
      <v-col
        v-for="product in products"
        :key="product.id"
        class="pa-0"
        cols="12"
        sm="6"
        md="4"
        lg="4"
      >
        <v-sheet class="ma-2">
          <ProductCart :product="product" />
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
import ProductCart from '@/components/productCart.vue'
const productStore = useProductStore()
import qs from 'qs'

const products = computed(() => productStore.products)

onMounted(() => {
  const filtersFromUrl = qs.parse(location.search, {
    depth: 10,
    ignoreQueryPrefix: true,
  })
 
  productStore.activeFilters = {
    filter: {
      options: {
        color: filtersFromUrl.filter?.options?.color || [],
        size: filtersFromUrl.filter?.options?.size || [],
      },
      in_stock: filtersFromUrl.filter?.in_stock === 'true' || false
    },
    sort: filtersFromUrl.sort || null
  }

  productStore.getProducts({ ...productStore.activeFilters })
})
</script>

<style scoped></style>
