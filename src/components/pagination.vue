<template>
  <div class="pagination-wrapper mt-10">
    <v-btn variant="flat" @click="nextPage">
      <v-img src="/images/arrow-right.png" width="24" height="24" />
    </v-btn>

    <v-pagination
      v-model="cardStore.page"
      :length="totalPage"
      :total-visible="10"
      class="custom-pagination"
      rounded="circle"
    />

    <v-btn variant="flat" @click="prevPage">
      <v-img src="/images/arrow-left.png" width="24" height="24" />
    </v-btn>
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import { useCardStore } from '@/stores/card'
const cardStore = useCardStore()
const count = computed(() => cardStore.count)
const totalCount = computed(() => cardStore.totalCount)
const totalPage = computed(() => cardStore.totalPage)
const links = computed(() => cardStore.links)

onMounted(() => {
  cardStore.getCards()
})

watch(
  () => cardStore.page,
  (newPage, oldPage) => {
    if (newPage !== oldPage) {
      cardStore.getCards()
    }
  },
)

async function nextPage() {
  await cardStore.getCards(links.value.next)
}

async function prevPage() {
  await cardStore.getCards(links.value.prev)
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
