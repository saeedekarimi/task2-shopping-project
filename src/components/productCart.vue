<template>
    <div>
    <v-card max-width="288" min-height="429" class="border-md rounded-xl  mt-5" variant="flat">
            <v-img
              :src="productStore.getProductImages(product)"
              max-height="256"
              max-width="256"
              class="mx-auto my-3"
              contain
            >
            </v-img>

            <div class="d-flex flex-row-reverse justify-space-between">
              <v-btn variant="solo"><v-img src="/images/Like.png" width="24"></v-img></v-btn>
              <v-card-title>
                <h6>{{ product.attributes.name }}</h6>
              </v-card-title>
            </div>

            <v-card-subtitle
              v-html="product.attributes.description"
              class="truncate-2"
            ></v-card-subtitle>
            <span class="pa-3">{{ product.attributes.display_price }}</span>
            <v-card-actions>
              
              <v-spacer></v-spacer>

              <v-btn @click="addProductToCart(product)" variant="flat" >
                <span style="font-size: 12px" class="ml-2">افزودن به سبد خرید</span>
                <v-icon color="red-darken-4">mdi mdi-basket</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
import { useCartStore } from '@/stores/cart'
const productStore = useProductStore()
const cartStore = useCartStore()

function addProductToCart(product){
cartStore.addToCart(product)
}

const props = defineProps({
  product:Object
  })
</script>

<style scoped>
:deep(.truncate-2) {
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-word;
}


</style>