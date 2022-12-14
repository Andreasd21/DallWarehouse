
<script setup>
import axios from 'axios';
</script>
<template>
    <!--Request{
        id:Number,
        DalluserId:Number,
        dateOfRequest:date,
        status:String
    }-->
<div v-if="isFetching">
    Loading...
</div>
<div v-else>
    <div class="row">
        <div class="col">{{ userName }}</div>
        <div class="col">{{ id }}</div>
    </div>
    <div class="row">
        <div class="col">{{ date }}</div>
        <div class="col">{{ status }}</div>
    </div>
</div>



</template>

<script>
    export default{
        data(){
            return{
                userName: null,
                isFetching:true
            }
        },
        props:{
            id: Number,
            UserId:Number,
            date:Date,
            status:String
    },
    mounted(){
        console.log(this.id)
        console.log(this.UserId)
        this.getuser()
    },
    methods:{
        async getuser(){
            await axios.get(`${import.meta.env.VITE_API_ENDPOINT}api/Users/`+this.UserId).then((res)=>{
                console.log(res)
                this.userName = res.data.name
                this.isFetching = false
            })
        }
    }
    }
</script>

<style>

</style>