<script setup>
import axios from "axios";
import Request from "../components/Request.vue"
import RequestInfoVue from "../components/RequestInfo.vue";
import {refuse} from "../assets/JS/Request"
import {accept} from "../assets/JS/Request"
</script>

<script>
export default{
  data(){
    return {
      info: [],
      activeRequest: -1,
      isFetching:true,
      promps:[]
    }
  },
  mounted(){
    this.LoadData()
  } ,
  methods:{
    async LoadData(){
      await axios.get(`${import.meta.env.VITE_API_ENDPOINT}api/Requests/GetPending`).then((res)=>{
        console.log(res)
        this.info = res.data
        this.isFetching = false
        for (let index = 0; index < res.data.length; index++) {
          const element = res.data[index];
          this.promps.push(element.prompt)
        }
        console.log(this.promps)
      })
    },
    RequestInfo(index){
      this.activeRequest = index;
    },
    acceptButton(){
      accept(this.info[this.activeRequest].id)
      this.Updatepromps()
    },
    refuseButton(){
      refuse(this.info[this.activeRequest].id)
      this.Updatepromps()
    },
    Updatepromps(){
      this.promps.splice(this.activeRequest,1)
      this.info.splice(this.activeRequest,1)
      this.activeRequest = -1
    }
  }
}
</script>

<template>
  <div v-if="isFetching">
    Loading...
  </div>

  <div class="container requestview" v-else>
    <div class="row">
      <div class="col request text">
        <div v-for="(promp,index) in promps" :key="index">
          <Request :prompt="promp" :Count="index" @click="RequestInfo(index)"  />
        </div>
      </div>
      <div class="col declare">
        <div class="requestindividuel" v-if="activeRequest != -1" :key="activeRequest">
          <RequestInfoVue :id="info[activeRequest].id" :UserId="info[activeRequest].dallUserId" :date="info[activeRequest].dateOfRequest" :status="info[activeRequest].status"/>

            <div class="decisions">
            <button class="accept" @click="acceptButton">
              Accept
            </button>
            <button class="refuse" @click="refuseButton">
              Refuse
            </button>
          </div>
        </div>
        <div v-else class="text">
          Click a request
        </div>
          
      </div>
    </div>

  </div>
</template>

<style>
.request{
  overflow-y: scroll;
  height: auto;
  max-height: 30vh;
}
.requestview{
  margin-top: 15vh;
}
.text{
  text-align: center;
}
.decisions{
  display: flex;
  flex-direction: column;

}
.accept{
  background-color: green;
  margin-bottom: 2vh;
  margin-top: 2vh;
  color: ghostwhite;
}
.refuse{
  background-color: red;
  color: ghostwhite;
}

</style>
