<template>
  <el-card>
    <div slot="header" class="clearfix">
      <el-row>
        <el-col :span="10" :offset="4">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">检索</el-button>
        </el-col>
        <el-col :span="2" :offset="6">
          <el-button type="primary">导出</el-button>
        </el-col>
      </el-row>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="炉号"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="温度">
      </el-table-column>
      <el-table-column
        prop="flag"
        label="缺铝报警">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: "dataSearch",
  data() {
    return {
      value1: "",
      tableData: [{
        date: '2016-05-02',
        name: '01',
        address: '650',
        flag: 0
      }, {
        date: '2016-05-04',
        name: '02',
        address: '600',
        flag: 0
      }, {
        date: '2016-05-01',
        name: '03',
        address: '700',
        flag: 0
      }, {
        date: '2016-05-03',
        name: '04',
        address: '900',
        flag: 0
      }]
    }
  }
}
</script>

<style scoped>

</style>
