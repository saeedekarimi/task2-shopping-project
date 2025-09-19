<template>
  <div class="pagination-wrapper">
    <v-btn variant="flat" :disabled="page === 1" @click="page--">
      <v-img src="/images/arrow-left.png" width="24" height="24" />
    </v-btn>

    <v-pagination
      v-model="page"
      :length="50"
      :total-visible="11"
      :prev-icon="null"
      :next-icon="null"
      class="custom-pagination"
      rounded="circle"
      dir="rtl"
    />

    <v-btn variant="flat" :disabled="page === 50" @click="page++">
      <v-img src="/images/arrow-right.png" width="24" height="24" />
    </v-btn>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const page = ref(1)

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
  width: 704px;
  height: 56px;
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

::v-deep(.custom-pagination .v-pagination__item.v-pagination__item--active) {
  background-color: #ca8289;
  color: white;
  border-color: #b02a37;
}
</style>
