
<script setup>
</script>
<template>
<div class="grey row text" v-if="grey">
    {{prompt}}
</div>


<div class="row text" v-else>
    {{prompt}}
</div>
</template>

<script>
    export default{
        data(){
            return{
                grey:false,
            }
        },
        props:{
            prompt: String,
            Count:Number
    },
    mounted(){
        console.log(this.prompt)
        if (this.Count % 2 == 0){
            this.grey = true
        }
    },
    }
</script>

<style>
.grey{
    background-color: grey;
    color:ghostwhite
}

.text{
    justify-content: center;
    align-content: center;
        height:5vh;
    cursor: pointer;
}
</style>