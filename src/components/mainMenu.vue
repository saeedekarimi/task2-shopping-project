<template>
    <div class="d-flex ga-2 mb-8 px-16  ">
      <v-btn class="bg-error rounded-lg" width="184" height="48"> خودت طراحیش کن !</v-btn>
        <v-tabs v-model="tab" align-tabs="title" >
          <v-tab v-for="item in items" 
          :key="item" 
          :text="item" 
          :value="item"
          class="mx-4"
          >
        </v-tab>
        </v-tabs>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const tab = ref(null)

const items = [
  'پوشاک',
  'لوازم خانه',
  'قاب موبایل',
  'اکسسوری',
  'مدرسه و اداره',
  'کارت و پوستر',
  'جشن و مهمانی',
]

</script>
