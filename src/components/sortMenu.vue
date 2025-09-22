<template>
    <div class="mb-8">
        <v-tabs v-model="tab" align-tabs="title" >
          <v-tab v-for="item in items" 
          :key="item" 
          :text="item" 
          :value="item"
          class="mx-1"
          >
        </v-tab>
        </v-tabs>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const tab = ref(null)

const items = [
  'پر بازدید ترین',
  'جدید ترین ',
  'پرفروش ترین ',
  'گران ترین',
  ' ارزان ترین',
]

</script>
