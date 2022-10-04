<script setup>
</script>
<template>
<div class="navigation"> 
    <div class="lowLogo" @click="Home"></div>
    <div class="searchbar">
        <input type="text" placeholder="Search..." >
    </div>
    <div class="requestDiv">
      <Button class="requestButton" @click="Login">request</Button>
    </div>
</div>
</template>

<script>
export default {
    methods: {
      Home() {
        //Navigeer naar home view;
        this.$router.push("/");
      },
      Login() {
        //Navigeer naar request view;
        this.$router.push("/request");
      },
    }
}
</script>