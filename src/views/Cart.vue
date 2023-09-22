<script setup lang="ts">
import { PhMapPinLine, PhCurrencyDollar } from "@phosphor-icons/vue";
import NavbarMain from "../components/NavbarMain.vue";
</script>

<template>
  <NavbarMain />
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-4">
        <h4>Complete seu pedido</h4>
        <div class="coffee-card border-radius-5px mb-3">
          <div class="container-fluid">
              <div class="d-flex align-items-center mb-4">
                <div class="me-3">
                  <ph-map-pin-line :size="25" />
                </div>
                <div>
                  <p class="mb-0 fs-5">Endereço de entrega</p>
                  <p class="mb-0 fs-6">Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3">
                  <input type="text" class="form-control custom-input" placeholder="CEP">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-3">
                  <input type="text" class="form-control custom-input" placeholder="Rua">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mb-3">
                  <input type="text" class="form-control custom-input" placeholder="Número">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mb-3">
                  <input type="text" class="form-control custom-input" placeholder="Complemento">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mb-3">
                  <input type="text" class="form-control custom-input" placeholder="Bairro">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3">
                  <input type="text" class="form-control custom-input" placeholder="Cidade">
                </div>
                <div class="col-sm-12 col-md-12 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                  <input type="text" class="form-control custom-input" placeholder="UF">
                </div>
              </div>

          </div>
        </div>

        <div class="coffee-card border-radius-5px">
          <div class="d-flex align-items-center mb-4">
            <div class="me-3">
              <ph-currency-dollar :size="25" />
            </div>
            <div>
              <p class="mb-0 fs-5">Pagamento</p>
              <p class="mb-0 fs-6">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
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
.custom-input{
  height: 45px;
  background-color: #EDEDED;
}
.custom-input:focus{
  background-color: #EDEDED;
  border-color: #8D8686;
  box-shadow: none;
}
</style>
