<script setup>
import Painting from "./Painting.vue";

</script>
<script>
export default {
    props:{painting1:{
    id: Number,
    location:String,
    name:String,
    DateOfCreation:String,
    creator:String,
    prompt:String
  },
  painting2:{
    id: Number,
    location:String,
    name:String,
    DateOfCreation:String,
    creator:String,
    prompt:String
  },
  painting3:{
    id: Number,
    location:String,
    name:String,
    DateOfCreation:String,
    creator:String,
    prompt:String
  }},
  created(){
  }
}
</script>
<template>
<div class="paintingRow row ">
    <Painting v-bind='painting1'/>
    <Painting v-bind='painting2' lightGrey="true"/>
    <Painting v-bind='painting3'/>        
</div>
</template>