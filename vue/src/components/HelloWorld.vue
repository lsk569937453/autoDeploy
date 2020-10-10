<template>
  <div class="mainChar">
    <el-card class="cardCls">
      <el-row>
        <el-col :span="5" v-for="(item,index) in quantitativeFurnaceArray">
          <div>
            <h3>{{ index }}号定量炉</h3>
            <el-row style="text-align: center">
              <el-col :span="12">
                <el-progress type="dashboard" :percentage="percentage" :color="color" :stroke-width="15"
                             style="margin-top: 70px"></el-progress>
                <span>500KG</span>
              </el-col>
              <el-col :span="12">
                <vue-thermometer
                  :value="700"
                  :min="0"
                  :max="1000"
                  :options="defaultOptions"
                />
                <span>700°C</span>
              </el-col>

            </el-row>
            <el-button type="primary" @click="clickSetTemperature">设定</el-button>

          </div>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="cardCls">

      <el-row>
        <el-col :span="5" v-for="(item,index) in quantitativeFurnaceArray">
          <div>
            <h3>{{ index }}号保温炉</h3>
            <el-row style="text-align: center">
              <el-col :span="12">
                <div class="luziStatus"></div>


              </el-col>
              <el-col :span="12">
                <vue-thermometer
                  :value="700"
                  :min="0"
                  :max="1000"
                  :options="defaultOptions"
                />
                <span>700°C</span>
              </el-col>

            </el-row>
            <el-button type="primary" @click="clickSetTemperature">设定</el-button>

          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog
      title="温度设定"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="目标温度">
          <el-input v-model="form.tagetTem"></el-input>
        </el-form-item>
        <el-form-item label="上限温度">
          <el-input v-model="form.maxTem"></el-input>
        </el-form-item>
        <el-form-item label="下限温度">
          <el-input v-model="form.minTem"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>

    </el-dialog>

  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'

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
      form: {
        tagetTem: '',
        maxTem: '',
        minTem: '',
      },
      color: '#f56c6c',
      defaultOptions: {
        layout: {
          height: 200,
          width: 90
        }
      },
      dialogVisible: false,
      quantitativeFurnaceArray: [{
        number: "1"
      }, {
        number: "2"
      }, {
        number: "3"
      }, {
        number: "4"
      }],


    }
  },
  methods: {
    clickSetTemperature() {
      this.dialogVisible = true
    },
  }


}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainChar /deep/ .echarts {
  width: 100%;
  height: 100%;
}

.luziStatus {
  display: inline-block;
  width: 70px;
  height: 70px;
  background: red;
  border-radius: 50%;
  border: 1px solid #909399;
  margin-top: 70px;
}

.cardCls {
  padding: 0px 50px 50px 0px;
}

</style>
