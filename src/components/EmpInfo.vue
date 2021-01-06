<template>
  <div>
    <table>
      <tr>
        <td>编号</td>
        <td>姓名</td>
      </tr>
      <tr v-for="item in employee">
        <td>{{item.eno}}</td>
        <td>{{item.name}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      msg: 'Hello',
      employee:[
        {
          eno: 1,
          name: 'Anthony',
          nickname: 'nick'
        }
      ]
    }
  },
  created () {
    const _this = this
    axios.get("http://localhost:8181/emp/all").then(function(resp){
      console.log(resp)
      _this.employee = resp.data
    })
  }
}
</script>

<style scoped>

</style>
