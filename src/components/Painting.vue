<script setup>
</script>
<template>

<div v-if="lightGrey" class="paintingCol lightGrey col">
    <div class="atribute">
      <div class="row">
        <div class="col" v-if="nameshort">Name:{{nameshort}}</div>
        <div class="col" v-else>Name:{{name}}</div>

        <div class="col">Price:{{price}}</div>
      </div>
      <div class="row">
        <div class="col">MadeBy:{{creator}}</div>
        <div class="col">CreationDate:{{DateOfCreation}}</div>
      </div>
    </div>
    <div class="paintingCard imagePainting" @click="paintingInfo">
      <img :src="location"/>
    </div>
</div>


<div v-else class="paintingCol col">
  <div class="atribute">
    <div class="row">
      <div class="col" v-if="nameshort">Name:{{nameshort}}</div>
      <div class="col" v-else>Name:{{name}}</div>
      <div class="col">Price:{{price}}</div>
    </div>
    <div class="row">
      <div class="col">MadeBy:{{creator}}</div>
      <div class="col">CreationDate:{{DateOfCreation}}</div>
    </div>
  </div>
  <div class="paintingCard imagePainting" @click="paintingInfo">
    <img :src="location"/>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      nameshort: null
    }
  },
    props: {
      lightGrey:String,
      id: Number,
    location: {
      type:String,
      default:'/src/assets/pictures/TestPainting.png'
    },
    name:String,
    DateOfCreation:String,
    creator:String,
    prompt:String,
    price:Number,
    description:String
    },
    mounted(){
      this.changeName()
    },


    methods: {
      paintingInfo() {
        //Navigeer naar painting info view;
        this.$router.push({
          name:"info",
          params: {Id : this.id }
        });
      },
      changeName(){
        if(this.name){
          if(this.name.length > 25){
            this.nameshort = this.name.slice(0,20) +'...'
          }
        }
      }
      
    }
}
</script>

<script>

  </script>

<style scoped>
img
{
  
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;

}
</style>