import { defineStore } from 'pinia'
import { useProductStore } from '@/stores/product'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  }),

  getters:{
    cartCount:(state) =>{
    return state.cartItems.reduce((total , item)=> total + item.quantity , 0)
    }
  },
  actions: {
    saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
    },

    addToCart(product) {
      const existingProduct = this.cartItems.find((item) => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity++
      } else {

        const productStore = useProductStore() 
        this.cartItems.push({
          ...product,
          quantity: 1,
          imageUrl: productStore.getProductImages(product),
        })
      }
      this.saveCart()
    },

    removeProduct(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId)
      this.saveCart()
    },

    increaseQuantity(productId) {
      const product = this.cartItems.find((item) => item.id === productId)
      if (product) product.quantity++
      this.saveCart()
    },

    decreaseQuantity(productId) {
      const product = this.cartItems.find((item) => item.id === productId)
      if (product && product.quantity > 1) {
        product.quantity--
        this.saveCart()
      }
    },
  },
})
