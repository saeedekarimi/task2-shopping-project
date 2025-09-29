<template>
  <v-card variant="flat">
    <v-tabs v-model="tab" align-tabs="start" color="deep-purple-accent-4">
      <v-tab :value="1">پیش فرض </v-tab>
      <v-tab :value="2">جدیدترین</v-tab>
      <v-tab :value="3">گران ترین</v-tab>
      <v-tab :value="4">ارزان ترین</v-tab>
      <v-tab :value="5">قدیمی ترین</v-tab>
    </v-tabs>

    <v-row v-if="loading" justify="center" class="my-4">
      <v-progress-circular
        indeterminate
        color="deep-purple-accent-4"
        size="48"
      ></v-progress-circular>
    </v-row>
  </v-card>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
const productStore = useProductStore()
const tab = ref(1)
const loading = ref(false)

const sortMap = {
 
  2: '-available_on',
  3: '-price',
  4: 'price',
  5: 'available_on',
}

watch(
  tab,
  async (newTab) => {
    const sortParam = sortMap[newTab]
    loading.value = true
    await productStore.getProducts(null , sortParam)
    loading.value = false
  },

  { immediate: true },
)
</script>
