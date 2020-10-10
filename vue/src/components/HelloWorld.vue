<template>
  <div class="mainChar">
    <el-card>
      <el-row>
        <el-col :span="5">
          <div>
            <h3>号定量炉</h3>
            <el-row style="text-align: center">
              <el-col :span="12">
                <el-progress type="dashboard" :percentage="percentage" :color="color" :stroke-width="15"
                             style="margin-top: 180px"></el-progress>
              </el-col>
              <el-col :span="12">
                <vue-thermometer
                  :value="5"
                  :min="-20"
                  :max="25"
                />
              </el-col>

            </el-row>
            <el-button type="primary">设定</el-button>

          </div>
        </el-col>
      </el-row>
    </el-card>



  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/toolbox'

export default {
  components: {
    'v-chart': ECharts
  },
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      data: [11],
      percentage: 10,
      color: '#f56c6c',
    }
  },


}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainChar /deep/ .echarts {
  width: 100%;
  height: 100%;
}

</style>
