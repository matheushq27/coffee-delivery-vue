<script setup lang="ts">
import { PhMapPinLine } from "@phosphor-icons/vue";
import NavbarMain from "../components/NavbarMain.vue";
</script>

<template>
  <NavbarMain />
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-4">
        <h4>Complete seu pedido</h4>
        <div class="coffee-card border-radius-5px">
          <div class="d-flex align-items-center">
            <div class="me-3">
              <ph-map-pin-line :size="25" />
            </div>
            <div>
              <p class="mb-0 fs-5">Endereço de entrega</p>
              <p class="mb-0 fs-6">Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-4">
        <h4>Cafés selecionados</h4>
        <div class="coffee-card border-radius-custom">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.coffee-card {
  background-color: #F3F2F2;
  padding: 30px;
}
.border-radius-5px{
  border-radius: 5px;
}
.border-radius-custom{
  border-top-left-radius: 5px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 5px;
}
</style>
