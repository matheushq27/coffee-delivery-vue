<script setup lang="ts">
import { PhShoppingCart, PhMapPin } from "@phosphor-icons/vue";
</script>

<template>
  <nav class="navbar bg-body-white">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/Logo.png" alt="Logo Coffe Delivery" />
      </a>
      <div class="box-buttons">
        <div class="box-city">
          <ph-map-pin :size="22" />
          Porto Alegre, RS
        </div>
        <button class="btn-shopping-cart">
          <ph-shopping-cart :size="22" weight="fill" />
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.box-buttons {
  display: flex;
  align-items: center;
  gap: 5px;
}
.btn-shopping-cart {
  background-color: #f1e9c9;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  color: #c47f17;
  transition: 0.5s;
}

.box-city {
  background-color: #ebe5f9;
  color: #8047f8;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 500;
}
.btn-shopping-cart:hover {
  background-color: #c47f17;
  color: #f1e9c9;
}
</style>
