<template>
  <div class="login">
    <!-- logo -->
    <el-card class="login-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单 -->
      <el-form style="margin-top:20px" :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item prop='mobile'>
          <el-input placeholder="请输入手机号"  v-model="loginForm.mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width:60%"  placeholder="请输入验证码"  v-model="loginForm.code"></el-input>
          <el-button plain style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="checked">
          <el-checkbox v-model="loginForm.checked">我已同意</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: '',
        checked: false
      },
      rules: {
        mobile: [
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3-9]\d{9}/, message: '您的手机号不正确' }
        ],
        code: [
          {
            required: true, message: '验证码不为空'
          },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }
        ],
        checked: [
          {
            validator: function (rule, value, callback) {
              value ? callback() : callback(new Error('您必须同意条款'))
            }
          }
        ]
      },
      methods: {
        login () {
          this.$refs.loginForm.validator().then(() => {

          })
        }
      }
    }
  }
}
</script>

<style lang = 'less' scoped>
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-card {
  width: 500px;
  height: 350px;
}
.logo {
  text-align: center;
  img {
    width: 200px;
  }
}
</style>
