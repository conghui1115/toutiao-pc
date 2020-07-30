<template>
  <el-container>
    <el-aside>
      <layout-aside></layout-aside>
    </el-aside>
    <el-container>
      <el-header>头部</el-header>
      <el-main>
        主题
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutAside from '@/components/home/layout-aside'
export default {
  components: {
    'layout-aside': LayoutAside
  }
}
</script>

<style>
</style>
