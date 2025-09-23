import { defineStore } from 'pinia'
import axios from 'axios'
import Products from '@/pages/products.vue'
export const useCardStore = defineStore('product', {
  state: () => ({
    products: [],
    images: [],
    page: 1,
    perPage: 9,
    totalCount: 0,
    totalPage: 0,
    count: 0,
    links: {},
  }),

  actions: {
    async getCards(url) {
      try {
        const response =url 
        ? await axios.get(url)
         : await axios.get('/api/api/v2/storefront/products', {
          params: { include: 'images', page: this.page, per_page: this.perPage },
        })
        this.products = response.data.data
        this.images = response.data.included
        this.count = response.data.meta.count
        this.totalCount = response.data.meta.total_count
        this.totalPage = response.data.meta.total_pages
        this.links = response.data.links

        if (response.data.links?.self) {
      const urlObj = new URL(response.data.links.self)
      this.page = parseInt(urlObj.searchParams.get('page')) || 1
    }
       console.log(this.links)
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    },

    getProductImages(product) {
      const imageId = product.relationships.images.data[0].id
      const image = this.images.find((img) => img.id === imageId)
      return image.attributes.styles[2].url
    },
  },
})
