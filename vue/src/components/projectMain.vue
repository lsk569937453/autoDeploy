<template>
  <div>
    <el-card>
      <h1>Projects</h1>
      <el-row>
        <el-col :span="3">
          <el-button type="primary">add the shell before exec</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="primary">add the exec file</el-button>
        </el-col>
        <el-col :span="3">
          <el-button type="primary">add the shell after exec</el-button>
        </el-col>
      </el-row>

    </el-card>
    <el-card style="margin: 50px">
      <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="date"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="ip"
        >
        </el-table-column>

      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "projectMain", data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped>

</style>
