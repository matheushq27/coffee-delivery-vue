<template>
    <div class="box-counter">
        <button @click="remove" class="btn-count">
            <ph-minus :size="16" />
        </button>
        <div>{{ counting }}</div>
        <button @click="add" class="btn-count">
            <ph-plus :size="16" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { PhPlus, PhMinus } from '@phosphor-icons/vue'
import { ref } from 'vue'

const { count } = defineProps({
  count:{
    type: Number,
    required: false,
    default: () => 0
  }
})

const counting = ref(count)

const emits = defineEmits(['update'])

function add() {
  counting.value++
  emits('update', counting.value)
}

function remove() {
  if (counting.value <= 0) {
    return
  }
  counting.value--
  emits('update', counting.value)
}

</script>

<style scoped>
.box-counter{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
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