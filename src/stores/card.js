import { defineStore } from 'pinia';
import axios from 'axios';
export const useCardStore = defineStore('card', {
  state: () => ({
    cards: [],
    images:[],
  }),

  actions: {
    async getCards() {
      try {
        const response = await axios.get('/api/api/v2/storefront/products', {
           params: { include: 'images' }
           } )
        this.cards = response.data.data
        this.images = response.data.included

        console.log(this.cards)
        console.log(this.images)
      } catch (error) {
        console.log(error)
      }
    },

     getProductImages(card){
    const imageId = card.relationships.images.data[0].id
    const image = this.images.find(img => img.id === imageId)
    return image.attributes.styles[2].url
     }
  },
})
