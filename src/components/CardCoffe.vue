<script setup lang="ts">
import CounterButton from "./CounterButton.vue";
import { PhShoppingCart } from '@phosphor-icons/vue'
import { ref } from "vue";

const counter = ref(0);

function updateCounter(newCount: number) {
  counter.value = newCount;
}

</script>

<template>
  <div class="card-coffee">
    <div class="card-coffee-header">
      <img
        class="card-coffee-img"
        alt="Imagem café"
        src="../assets/img/expresso-tradicional.png"
      />
      <div class="box-card-coffee-tags">
        <span class="card-coffee-tags">Tradicional</span>
        <span class="card-coffee-tags">Com leite</span>
        <span class="card-coffee-tags">Gelado</span>
      </div>
    </div>
    <div class="card-coffee-body">
      <h5>Expresso Tradicional</h5>
      <p>O tradicional café feito com água quente e grãos moídos</p>
    </div>
    <div class="card-coffee-footer">
      <div>
        <span class="simbol-money font-family-baloo-2">R$</span>
        <span class="price font-family-baloo-2">9,90</span>
      </div>
      <CounterButton @update="updateCounter" />
      <button class="card-coffee-btn-cart">
        <ph-shopping-cart :size="22" weight="fill" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.card-coffee-header {
  text-align: center;
  margin-bottom: 20px;
}

.box-card-coffee-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
  margin-top: 15px;
}
.card-coffee-tags {
  padding: 5px 10px;
  background-color: #f1e9c9;
  color: #c47f17;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: 500;
}
.card-coffee-body {
  text-align: center;
}

.card-coffee-body p {
  color: #8d8686;
}
.card-coffee {
  background-color: #f3f2f2;
  border-top-left-radius: 5px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 5px;
  padding: 0px 15px 15px 15px;
}
.card-coffee-img {
  margin-top: -25px;
}

.card-coffee-footer{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.card-coffee-btn-cart{
  border: none;
    background-color: #4B2995;
    padding: 4px 8px;
    border-radius: 5px;
    color: #fff;
}

.simbol-money{
  font-size: 15px;
  margin-right: 5px;
  color: #574F4D;
}

.price{
  font-size: 25px;
  color: #574F4D;
}
</style>
