<template>
  <div>
    <v-row>
      <v-card-text> سبد خرید</v-card-text>
      <v-divider class="" color="grey-darken-4"  />

      <v-col v-for="cart in carts" :key="cart.id">
        <v-card class="d-flex ga-8 justify-space-between align-center" elevation="0" max-width="800" >
          <div class="d-flex align-center mr-4">
            <v-btn @click="removeProduct(cart)" variant="flat">
              <v-img src="/images/close-square.png" width="24"></v-img>
            </v-btn>
            <v-img :src="cart.imageUrl" height="120" width="126" class="mx-auto my-3" contain>
            </v-img>
          </div>

          <div class="d-flex  justify-space-between flex-grow-1">
            <v-card-title class="ml-10">
              <h6>{{ cart.attributes.name }}</h6>
            </v-card-title>
            <span class="price">{{ cart.attributes.display_price }}</span>
          </div>

          <div class="d-flex flex-column mr-16">
            <v-card-actions>
              <div class="d-flex border-md justify-center mt-10 rounded-lg">
                <div class="border-e-md">
                  <v-btn
                    @click="increase(cart.id)"
                    icon="mdi-plus"
                    variant="plain"
                    size="small"
                  ></v-btn>
                </div>
                <span class="px-4 mt-2">{{ cart.quantity }}</span>
                <div class="border-s-md">
                  <v-btn
                    @click="decrease(cart.id)"
                    class="decrease"
                    icon="mdi-minus"
                    variant="plain"
                    size="small"
                  ></v-btn>
                </div>
              </div>
            </v-card-actions>

            <div class="d-flex align-center justify-end">
              <v-img src="/images/truck-fast.png" width="24"></v-img>
              <v-card-text>ارسال از سه روز آینده</v-card-text>
            </div>
            
          </div>
        </v-card>
        <v-divider color="grey-darken-4" class="my-2" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useProductStore } from '@/stores/product'

const cartStore = useCartStore()
const productStore = useProductStore()

const carts = computed(() => cartStore.cartItems)
console.log(carts.value)
function removeProduct(cart) {
  cartStore.removeProduct(cart.id)
}

function increase(cartId) {
  cartStore.increaseQuantity(cartId)
}

function decrease(cartId) {
  cartStore.decreaseQuantity(cartId)
}
</script>

<style scoped></style>
