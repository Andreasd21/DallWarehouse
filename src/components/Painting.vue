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
    <div class="paintingCard testPainting" @click="paintingInfo"></div>
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
  <div class="paintingCard testPainting" @click="paintingInfo"></div>
</div>
</template>

<script>
export default {
    props: ['lightGrey'],

    methods: {
      paintingInfo() {
        //Navigeer naar painting info view;
        this.$router.push("info");
      },
    }
}
</script>

<script>

  </script>