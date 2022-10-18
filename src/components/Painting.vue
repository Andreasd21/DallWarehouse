<script setup>
</script>
<template>

<div v-if="lightGrey" class="paintingCol lightGrey col">
    <div class="atribute">
      <div class="row">
        <div class="col">Name:...</div>
        <div class="col">Price:...</div>
      </div>
      <div class="row">
        <div class="col">MadeBy:...</div>
        <div class="col">CreationDate:...</div>
      </div>
    </div>
    <div class="paintingCard imagePainting" @click="paintingInfo">
      <img :src="location"/>
    </div>
</div>


<div v-else class="paintingCol col">
  <div class="atribute">
    <div class="row">
      <div class="col">Name:...</div>
      <div class="col">Price:...</div>
    </div>
    <div class="row">
      <div class="col">MadeBy:...</div>
      <div class="col">CreationDate:...</div>
    </div>
  </div>
  <div class="paintingCard imagePainting" @click="paintingInfo">
    <img :src="location"/>
  </div>
</div>
</template>

<script>
export default {
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
    prompt:String
    },

    methods: {
      paintingInfo() {
        //Navigeer naar painting info view;
        this.$router.push({
          name:"info",
          params: {Id : this.id }
        });
      },
    }
}
</script>

<script>

  </script>