<template>
  <el-row type="flex" align="middle">
    <el-col :span="12">
      <i class="el-icon-s-fold"></i>
      <span>小白猫一只</span>
    </el-col>
    <!-- 右侧列 -->
    <el-col :span="12">
      <el-row type="flex" justify="end" align="middle">
        <el-avatar :src="userInfo.photo"></el-avatar>
        <!--下拉菜单 -->
        <el-dropdown  @command="handleCommand">
          <span class="el-dropdown-link">
            小草一枚
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="user">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    handleCommand (command) {
      // this.$message('click on item ' + command)
      // debugger
      if (command === 'user') {
        alert('hai')
      } else if (command === 'git') {
        window.location.href = 'http://www.baidu.com'
      } else {
        // 退出登录
        // 1.删除本地存的token 2. 跳转到登录页
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      }
    }
  },
  created () {
    const token = localStorage.getItem('user-token')
    // 获取用户信息
    this.$axios({
      url: '/user/profile',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      this.userInfo = res.data
    })
  }
}
</script>

<style lang='less' scoped>
.user {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
