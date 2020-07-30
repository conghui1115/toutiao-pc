<template>
  <el-container>
    <el-aside style="width:230px">
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>
        <index-header></index-header>
      </el-header>
      <el-main>
        主题
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style>
</style>
