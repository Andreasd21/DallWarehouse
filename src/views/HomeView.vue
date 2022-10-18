<script setup>
import axios from 'axios';
import PaintingRow from '../components/PaintingRow.vue'
</script>

<script>
export default {
  data() {
    return {
      post:[],
      info:null,
      rowCount:9
    };
  },
  methods: {
      addRow() {
        this.post.push(PaintingRow);
        this.post.push(PaintingRow);
        this.rowCount = this.rowCount + 2
      },
      loadData: async function() {
      await axios.get('https://localhost:44340/api/paintings').then(res =>{
      this.info = res

      let row= []
      let index =0;
      for(let x= 0; x<9;x++){
        for(let y=0;y<3;y++){
          row.push(res.data[index])
          index++
        }
        this.post.push(row)
        row = []
      }
      })
    }
    },
};
</script>
<template>
  <div class="container">
    {{info}}
    <span v-for="paintings in post">
      <PaintingRow :painting1="paintings[0]" :painting2="paintings[1]" :painting3="paintings[2]"/>
    </span>
      
    <div class="rowButton">
      <button class="addRowButton" @click="addRow">
        More
      </button>
    </div>
  </div>
</template>
