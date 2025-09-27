<template>
  <div>
    <HeaderComponent />
        <MainMenu />

    <main>
      <RouterView /> 
    </main>
    
    <FooterComponent /> 
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/headerComponent.vue"
import FooterComponent from "@/components/footerComponent.vue"
import MainMenu from "@/components/mainMenu.vue";

</script>
