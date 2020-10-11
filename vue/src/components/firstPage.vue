<template>

  <div>
    <el-card>
      <el-button @click="clickAddProject">AddProject</el-button>
    </el-card>

    <el-card style="margin: 50px">
      <el-table
        :data="projects"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="Date"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="Name"
        >
        </el-table-column>
        <el-table-column
          prop="machineCount"
          label="MachineCount">
        </el-table-column>

        <el-table-column

          label="Action"
        >
          <template slot-scope="scope">
            <el-button @click="detailProject(scope.row)" type="text" style="font-size: 15px">detail</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>


    <el-dialog :visible.sync="dialogFormVisible" style="text-align: left">
      <el-row>
        <el-form ref="form" :model="projectForm" label-width="120px">
          <el-col :span="16">
            <el-form-item label="ProjectName">
              <el-input v-model="projectForm.name"></el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
      <el-row>
        <el-col :offset="6" :span="2">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
        </el-col>
        <el-col :offset="1" :span="2">
          <el-button type="primary" @click="projectFormSubmit">确 定</el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "firstPage",
  data() {
    return {
      projects: [],
      projectForm: {},
      dialogFormVisible: false,
    }
  }, methods: {
    clickAddProject() {
      this.dialogFormVisible = true;

    }, projectFormSubmit() {
      if (this.projectForm.name == undefined || this.projectForm.name == "") {
        return
      }
      let project = {
        name: this.projectForm.name,
        date: "2020-10-11",
        machineCount: 0
      }
      this.projects.push(project)
      this.dialogFormVisible = false

    }, detailProject(row) {
      this.$router.push({name: "projectMain"});

    },
  },
}
</script>

<style scoped>

</style>
