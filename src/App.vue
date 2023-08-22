<script setup lang="ts">
import CardCoffe from './components/CardCoffe.vue'
import NavbarMain from './components/NavbarMain.vue'
import { PhShoppingCart } from '@phosphor-icons/vue'

</script>

<template>
  <NavbarMain />
  <div class="container mt-5 mb-5">
      <div class="row mb-5">
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <div class="mb-5">
            <h1>Encontre o café perfeito <br> para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver e a qualquer hora.</p>
          </div>
          <div class="list">
            <div class="list-item mb-3">
              <ph-shopping-cart :size="22" weight="fill" />
              Compra simples e segura
            </div>
            <div class="list-item mb-3">
              Embalagem mantém o café intacto
            </div>
            <div class="list-item mb-3">
              Entrega rápida e rastreada
            </div>
            <div class="list-item mb-3">
             O café chega fresquinho até você
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center">
          <img src="./assets/img/Banner.png" alt="Banner Coffe Delivery" class="w-100">
        </div>
      </div>

      <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-5">
            <h3 class="fw-bold">Nossos cafés</h3>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3">
            <CardCoffe />
          </div>
      </div>
  </div>
</template>

<style scoped>
.list{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}

.list-item{ 
  flex: 0 0 calc(50% - 5px);
}
</style>
