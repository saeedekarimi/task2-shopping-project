<template>
  <v-card variant="flat">
    <v-tabs v-model="tab" align-tabs="start" color="red-darken-4">
      <v-tab :value="null">پیش فرض </v-tab>
      <v-tab value="-available_on">جدیدترین</v-tab>
      <v-tab value="-price">گران ترین</v-tab>
      <v-tab value="price">ارزان ترین</v-tab>
      <v-tab value="available_on">قدیمی ترین</v-tab>
    </v-tabs>

    <v-row v-if="loading" justify="center" class="my-4">
      <v-progress-circular indeterminate color="red-darken-4" size="48"></v-progress-circular>
    </v-row>
  </v-card>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
const productStore = useProductStore()
const tab = ref(null)
const loading = ref(false)
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

onMounted(() => {
  if (route.query.sort) {
    tab.value = route.query.sort
  }
})

watch(tab, async (newTab) => {
  loading.value = true
  try {
    const currentQuery = { ...route.query }

    if (newTab) {
      currentQuery.sort = newTab
    } else {
      delete currentQuery.sort
    }
    await router.replace({ query: currentQuery })
    productStore.page = 1
    await productStore.getProducts({
      ...productStore.activeFilters,
      sort: newTab,
    })
  } catch (error) {
    console.error('Error fetching products:', error)
  } finally {
    loading.value = false
  }
})
</script>
