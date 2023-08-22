<script setup lang="ts">
//import { PHPlus } from '@phosphor-icons/vue'
//import { PHPlus } from '@phosphor-icons/vue'
</script>

<template>
    <div class="box-counter">
        <button class="btn-count">
            -
        </button>
        <div>0</div>
        <button class="btn-count">
            +
        </button>
    </div>
</template>

<style scoped>
.box-counter{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    margin: auto;
    background-color: #E6E5E5;
    padding: 5px 10px;
    border-radius: 5px;
}
.btn-count{
    border: 0;
    background-color: transparent;
    color: #8047F8;
}
</style>