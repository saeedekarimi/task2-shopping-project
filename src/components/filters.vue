<template>
  <v-row>
    <v-col>
      <v-card class="filter-card mt-3">
        <div class="d-flex justify-space-between align-center">
          <span class="filter-title">فیلترها</span>
          <v-btn @click="applyFilters" variant="text" color="" size="small">اعمال فیلترها</v-btn>

          <v-btn @click="removeFilters" variant="text" color="red-darken-4" size="small"
            >حذف فیلترها</v-btn
          >
        </div>

        <v-expansion-panels variant="accordion">
          <v-expansion-panel class="">
            <v-expansion-panel-title>برند</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-checkbox
                v-for="brand in brands"
                :key="brand.value"
                v-model="selectedBrands"
                :label="brand.label"
                :value="brand.value"
                density="compact"
                hide-details
              />
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>اندازه</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-checkbox
                v-for="size in sizes"
                :key="size.value"
                v-model="selectedSizes"
                :label="size.name"
                :value="size.name"
                density="compact"
                hide-details
              />
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>رنگ</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-checkbox
                v-for="color in colors"
                :key="color.value"
                v-model="selectedColors"
                :label="color.name"
                :value="color.name"
                density="compact"
                hide-details
              />
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-divider />

        <div class="">
          <div class="switch-row">
            <span class="switch-text"> ارسال امروز </span>
            <v-switch
              v-model="todayDelivery"
              hide-details
              inset
              density="compact"
              color="red-darken-4"
            />
          </div>
          <v-divider />

          <div class="switch-row">
            <span class="switch-text">فقط کالاهای موجود</span>
            <v-switch
              v-model="availableOnly"
              hide-details
              color="red-darken-4"
              density="compact"
              inset="1"
            />
          </div>
          <v-divider />
        </div>

        <v-expansion-panels variant="accordion" class="mt-4">
          <v-expansion-panel>
            <v-expansion-panel-title>محدوده قیمت</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-range-slider v-model="price" min="0" max="100" step="5" />
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>مدل</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-checkbox label="مدل A" value="A" />
              <v-checkbox label="مدل B" value="B" />
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-title>طرح</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-checkbox label="طرح A" value="A" />
              <v-checkbox label="طرح B" value="B" />
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '@/stores/product'
const productStore = useProductStore()
import qs from 'qs'

import { useRouter } from 'vue-router'
const router = useRouter()

const selectedBrands = ref([])
const selectedSizes = ref([])
const availableOnly = ref(false)

const selectedColors = ref([])
const todayDelivery = ref(false)
const price = ref([10, 50])

const sizes = computed(() => productStore.sizes)
const colors = computed(() => productStore.colors)

onMounted(() => {
  selectedColors.value = productStore.activeFilters.filter?.options?.color
  selectedSizes.value = productStore.activeFilters.filter?.options?.size
  availableOnly.value = productStore.activeFilters.filter?.in_stock
})

const brands = [
  { label: 'اچ پی', value: 'hp' },
  { label: 'ام اس آی', value: 'msi' },
  { label: 'ایسوس', value: 'asus' },
  { label: 'لنوو', value: 'lenovo' },
]

function applyFilters() {
  const filters = {
    filter: {
      options: {
        color: selectedColors.value,
        size: selectedSizes.value
      },
    },
    sort: productStore.activeFilters.sort || null,
  }
  if (availableOnly.value) {
    filters.filter.in_stock = 'true'
  }

  const queryStringFilters = qs.stringify(filters, {
    encode: false,
    arrayFormat: 'repeat',
  })

  router.push(`/?${queryStringFilters}`)
  productStore.getProducts(filters)
}

function removeFilters() {
  selectedSizes.value = []
  selectedColors.value = []
  availableOnly.value = false
  router.push({ path: '/' })
  productStore.clearFilters()
}
</script>

<style scoped>
.filter-card {
  border: 1px solid #eee;
  box-shadow: none;
  border-radius: 8px;
  padding: 1em;
}

.filter-title {
  font-weight: bold;
  font-size: 16px;
}

.switch-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  margin: 0 10px;
}

.switch-text {
  font-size: 14px;
  color: #333;
}

:deep(.v-expansion-panels),
:deep(.v-expansion-panel) {
  box-shadow: none !important;
  border: none !important;
  border-radius: 0 !important;

  margin: 0 !important;
  padding: 0 !important;
}

:deep(.v-expansion-panel-title) {
  border: none !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}

:deep(.v-expansion-panel__shadow) {
  display: none !important;
}

:deep(.v-expansion-panel-title__overlay) {
  background: transparent !important;
}
</style>
