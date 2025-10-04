import { defineStore } from 'pinia'
import axios from 'axios'
import qs from 'qs'
export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    images: [],
    page: 1,
    perPage: 9,
    totalCount: 0,
    totalPage: 0,
    count: 0,
    links: {},
    colors: [],
    sizes: [],
    activeFilters: {
      filter: {
        options: {
          color: [],
          size: [],
        },
        in_stock: false,
      },
      sort: null,
    },
  }),

  actions: {
    async getProducts(filters = null) {
      try {
        if (filters) {
          this.activeFilters = filters
        }

        const params = {
          include: 'images',
          page: this.page,
          per_page: this.perPage,
          ...this.activeFilters,
        }

        const response = await axios.get('/api/api/v2/storefront/products', {
          params,
          paramsSerializer: (params) => {
            return qs.stringify(params, { encode: false, arrayFormat: 'repeat' })
          },
          headers: {
            'Cache-Control': 'no-cache',
            Pragma: 'no-cache',
          },
        })

        this.products = response.data.data
        this.images = response.data.included
        this.count = response.data.meta.count
        this.totalCount = response.data.meta.total_count
        this.totalPage = response.data.meta.total_pages
        this.links = response.data.links
        this.colors = response.data.meta.filters.option_types[0].option_values
        this.sizes = response.data.meta.filters.option_types[1].option_values
      } catch (error) {
        console.log(error)
      }
    },

    getProductImages(product) {
      const imageId = product.relationships.images.data[0].id
      const image = this.images.find((img) => img.id === imageId)
      return image?.attributes?.styles?.[2]?.url
    },

    clearFilters() {
      this.activeFilters = {
        filter: {
          options: {
            color: [],
            size: [],
          },
          in_stock: false,
        },
        sort: null,
      }
      this.page = 1
      this.getProducts()
    },

    
  },
})
