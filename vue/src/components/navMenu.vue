<template>
  <div id="NavMenu" style="height: 100%;width: 100%">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-demo"
      @select="handleSelect"
      mode="horizontal"
      router
      background-color="rgb(50, 65, 87)"
      text-color="#fff"
      active-text-color="rgb(32, 160, 255)"
    >
      <template v-for="item in navMenuData">
        <el-menu-item :index="item.index" v-if="!item.child" :key="item.index">{{ item.name }}</el-menu-item>
        <el-submenu :index="item.index" v-if="item.child" :key="item.index">
          <template slot="title">{{ item.name }}</template>
          <template v-for="item2 in item.child">
            <el-menu-item :index="item2.index" :key="item2.index">{{ item2.name }}</el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activeIndex: "firstPage",
      navMenuData: [
        {index: "firstPage", name: "Projects"},
        // {index: "dataSearch", name: "Task List"},


      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key
    },

  },
  computed: {
    activeMenu() {
      const route = this.$route
      const {meta, path} = route
      if (path == "/downloadShare")
        return "shareFile";
      if (meta.activeMenu)
        return meta.activeMenu
      return this.activeIndex
    }
  },
  mounted() {
    console.log(this.activeIndex);
    console.log(this.$route.path);
    this.activeIndex = this.$route.path.substring(1, this.$route.path.length);
  },
};
</script>

<style scoped>
.el-menu-item:hover {
  background: rgb(40, 52, 70) !important;
}

#NavMenu /deep/ .el-menu-item {
  font-weight: 600;
  font-size: 20px;
}

#NavMenu /deep/ .el-menu-item {
  color: rgb(32, 160, 255) !important;
}

#NavMenu /deep/ .el-menu-item.is-active {
  color: white !important;
  background: rgb(40, 52, 70) !important;
}

#NavMenu /deep/ .el-menu-demo {
  padding-left: 300px;
  padding-right: 300px;
}

.el-submenu__title:hover {
  background: rgb(40, 52, 90) !important;
}
</style>
