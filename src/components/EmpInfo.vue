<template>
  <div>
    <table>
      <tr>
        <td>工号</td>
        <td>姓名</td>
        <td>昵称</td>
        <td>性别</td>
        <td>入职日期</td>
        <td>学历</td>
        <td>婚姻状况</td>
        <td>部门编号</td>
        <td>职位编号</td>
      </tr>
      <tr v-for="item in employee">
        <td>{{item.eno}}</td>
        <td>{{item.name}}</td>
        <td>{{item.nickname}}</td>
        <td>{{item.sex}}</td>
        <td>{{item.onboardat}}</td>
        <td>{{item.education}}</td>
        <td>{{item.wedding}}</td>
        <td>{{item.depno}}</td>
        <td>{{item.stano}}</td>
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
        nickname: 'nick',
         sex:'男',
         onboardat:'2020-12-10',
         education:'本科',
         wedding:'未婚',
         depno: 1,
         stano: 1
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
