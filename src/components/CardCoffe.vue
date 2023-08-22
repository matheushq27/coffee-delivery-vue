<script setup lang="ts">

</script>

<template>
 <div class="card-coffee">
    <div class="card-coffee-header">
        <img class="card-coffee-img" alt="Imagem café" src="../assets/img/expresso-tradicional.png">
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
        
        
    </div>
 </div>
</template>

<style scoped>
.card-coffee-header{
    text-align: center;
    margin-bottom: 20px;
}

.box-card-coffee-tags{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    margin-top: 15px;
}
.card-coffee-tags{
    padding: 5px 10px;
    background-color: #F1E9C9;
    color: #C47F17;
    border-radius: 50px;
    text-transform: uppercase;
    font-weight: 500;
}
.card-coffee-body{
    text-align: center;
}

.card-coffee-body p{
    color: #8D8686;
}
.card-coffee{
    background-color: #F3F2F2;
    border-top-left-radius: 5px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 5px;
    padding: 0px 15px 15px 15px;
}
.card-coffee-img{
    margin-top: -25px;
}
</style>
