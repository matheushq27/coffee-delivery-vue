<script setup lang="ts">
import CardCoffe from "../components/CardCoffe.vue";
import NavbarMain from "../components/NavbarMain.vue";
import {
  PhShoppingCart,
  PhPackage,
  PhTimer,
  PhCoffee,
} from "@phosphor-icons/vue";
import { ref, onBeforeMount, onMounted, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const moduleCoffees = "coffees";

const arrayCoffees = ref([]);

const getCoffeesRequest = async () => {
  let data = await store.dispatch(`${moduleCoffees}/getCoffeesRequest`);
  arrayCoffees.value = data;
};

onMounted(async () => {
  await getCoffeesRequest();
  console.log(arrayCoffees.value);
});
</script>

<template>
  <NavbarMain />
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-4">
        <div class="mb-5">
          <h1>
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver e a qualquer
            hora.
          </p>
        </div>
        <div class="list">
          <div class="list-item mb-3">
            <div class="list-icon bg-cart">
              <ph-shopping-cart :size="22" weight="fill" color="#fff" />
            </div>

            Compra simples e segura
          </div>
          <div class="list-item mb-3">
            <div class="list-icon bg-package">
              <ph-package :size="22" color="#fff" />
            </div>
            Embalagem mantém o café intacto
          </div>
          <div class="list-item mb-3">
            <div class="list-icon bg-timer">
              <ph-timer :size="22" color="#fff" />
            </div>
            Entrega rápida e rastreada
          </div>
          <div class="list-item mb-3">
            <div class="list-icon bg-coffee">
              <ph-coffee :size="22" color="#fff" />
            </div>
            O café chega fresquinho até você
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 text-center mb-4">
        <img src="../assets/img/Banner.png" alt="Banner Coffe Delivery" class="banner-coffee"/>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-5">
        <h3 class="fw-bold">Nossos cafés</h3>
      </div>
      <div
        v-for="(coffee, index) in arrayCoffees"
        :key="index"
        class="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-5"
      >
        <CardCoffe :data="coffee" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.list-item {
  flex: 0 0 calc(50% - 5px);
}

.list-icon {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: inline-block;
  text-align: center;
  line-height: 2;
  margin-right: 10px;
}

.bg-cart {
  background-color: #c47f17;
}

.bg-package {
  background-color: #574f4d;
}

.bg-timer {
  background-color: #dbac2c;
}

.bg-coffee {
  background-color: #8047f8;
}

@media screen and (max-width: 540px) {
  .list {
    margin-top: 15px;
    margin-bottom: 15px;
    flex-direction: column;
    align-item: center;
  }

  .banner-coffee{
    width: 100%;
  }
}
</style>
