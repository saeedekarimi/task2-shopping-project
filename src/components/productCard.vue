<template>
  <div >
        <v-row class="ma-0 pa-0">
          <v-col v-for="card in cards" :key="card.id" class="pa-0" >
            <div class="d-flex ga-2 ">
            <v-card width="288" height="429" class="cards mt-5">
              <v-img
                :src="cardStore.getProductImages(card)"
                height="256"
                width="256"
                class="mx-auto my-3"
                contain
              >
              </v-img>

              <div class="d-flex flex-row-reverse justify-space-between">
                <v-btn variant="solo"><v-img src="/images/Like.png" width="24"></v-img></v-btn>
                  <v-card-title>
                  <h6>{{ card.attributes.name }}</h6>
                </v-card-title>
              </div>

              <v-card-subtitle v-html="card.attributes.description" class=""></v-card-subtitle>
              <span class="pa-3">{{ card.attributes.display_price }}</span>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn variant="flat">
                  <v-icon color="green">mdi mdi-basket</v-icon>
                  <span style="font-size: 12px">add to store</span>
                </v-btn>
              </v-card-actions>
            </v-card>
            </div>
         </v-col>
    </v-row>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCardStore } from '@/stores/card'
const cardStore = useCardStore()

const cards = computed(() => cardStore.cards)

onMounted(() => {
  cardStore.getCards()
})
</script>

<style scoped>
.cards {
  border: 1px solid #fff;
  border-radius: 16px;
}



</style>
