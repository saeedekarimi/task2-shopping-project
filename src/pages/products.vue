<template>
  <v-card class="main">
    <v-col class="mb-10">
      <HeaderComponent />
      <MainMenu />
      <v-row class="d-flex flex-row">
        <v-col cols="3">
          <filters />
        </v-col>
        <v-col cols="9">
          <div>
            <SortMenu />
            <productCard />
            <Pagination />
          </div>
        </v-col>

        <FooterComponent />
      </v-row>
    </v-col>
  </v-card>
</template>

<script setup>
import productCard from '@/components/productCard.vue'
import filters from '@/components/filters.vue'
import Pagination from '@/components/pagination.vue'
import HeaderComponent from '@/components/headerComponent.vue'
import MainMenu from '@/components/mainMenu.vue'
import SortMenu from '@/components/sortMenu.vue'
import FooterComponent from '@/components/footerComponent.vue'
</script>

<style scoped>
.main {
  padding: 0 10em;
}
</style>
