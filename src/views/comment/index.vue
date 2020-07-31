<template>
  <el-card>
    <bread-crumb slot="header">
      <!-- slot='title' 表示 评论管理给面包些的插槽 -->
      <template slot="title">评论管理</template>
    </bread-crumb>
    <!--  表格组件-->
    <el-table :data='list'>
      <el-table-column label="标题" width="600" prop="title"></el-table-column>
      <el-table-column label="评论状态" prop="comment_status" :formatter="formatterBool"></el-table-column>
      <el-table-column label="总评论数" prop="total_comment_count"></el-table-column>
      <el-table-column label="粉丝评论数" prop="fans_comment_count"></el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="scope">
          <el-button size="small" type="text">修改</el-button>
          <el-button size="small" type="text" @click="openOrClose">{{scope.row.comment_status? '关闭':'打开'}}评论</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    //   获取评论数据
    getComment () {
      this.$axios({
        url: '/articles', // 请求地址
        params: {
          response_type: 'comment' // 此参数用来控制获取数据类型
        }
        // query参数应该在哪个位置传 axios
        // params 传get参数也就是query参数
        // data   传body参数也就是请求体参数
      }).then(res => {
        console.log(res.data.results)
        this.list = res.data.results
      })
    },
    // 格式化
    formatterBool (row, column, cellValue, index) {
      return cellValue ? '正常' : '关闭'
    },
    // 打开或者关闭评论
    openOrClose (row) {
      const mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`是否确定${mess}评论`, '提示').then(() => {
        this.$axios({
          url: '/comments/status',
          method: 'put',
          params: {
            article_id: row.id
          },
          data: {
            allow_comment: !row.comment_status
          }
        }).then(() => {
          this.$message.success(`${mess}评论成功`)
          this.getComment()
        }).catch(() => {
          this.$message.error(`${mess}评论失败`)
        })
      })
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style>
</style>
