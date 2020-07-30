<template>
  <el-row type="flex" align="middle">
    <el-col :span="12">
      <i class="el-icon-s-fold"></i>
      <span>小白猫一只</span>
    </el-col>
    <!-- 右侧列 -->
    <el-col :span="12">
      <el-row type="flex" justify="end" align="middle">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <!--下拉菜单 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            小草一枚
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>git地址</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.user {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
