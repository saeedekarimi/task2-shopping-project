<template>
  <div class="pagination-wrapper my-10">
    <v-btn variant="flat" @click="prevPage">
      <v-img src="/images/arrow-right.png" width="24" height="24" />
    </v-btn>

    <v-pagination
      v-model="productStore.page"
      :length="totalPage"
      :total-visible="10"
      next-icon="null"
      prev-icon="null"
      class="custom-pagination"
      rounded="circle"
    />

    <v-btn variant="flat" @click="nextPage">
      <v-img src="/images/arrow-left.png" width="24" height="24" />
    </v-btn>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useProductStore } from '@/stores/product'
const productStore = useProductStore()
const count = computed(() => productStore.count)
const totalCount = computed(() => productStore.totalCount)
const totalPage = computed(() => productStore.totalPage)
const links = computed(() => productStore.links)


watch(
  () => productStore.page,
  (newPage, oldPage) => {
    if (newPage !== oldPage) {
   productStore.getProducts({
        ...productStore.activeFilters
      })    }
  },
)

function nextPage() {
  if (productStore.page < totalPage.value) {
    productStore.page++
  }
}

function prevPage() {
  if (productStore.page > 1) {
    productStore.page--
  }
}
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.custom-pagination {
  border: 1px solid #d6d6d6;
  border-radius: 24px;
  max-width: 700px;
  height: 55px;
}

::v-deep(.custom-pagination .v-pagination__item) {
  border: 1px solid #656565;
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  padding: 10px;
  margin: 12px;
}

::v-deep(.custom-pagination .v-pagination__item:hover) {
  background-color: #f0a3aa !important;
  color: white !important;
}
</style>
