<template>
  <el-container style="height: 100%">
    <el-header class="header">
      <div class="logo">
        <span class="site-name">VSG博客系统</span>
      </div>
      <div class="links">
        aaaaaaaaaaa
      </div>
    </el-header>
    <el-container class="main-container">
      <el-aside class="aside">
        <y-tree
            :data="data"
            node-key="id"
            default-expand-all
            draggable
            :expand-on-click-node="true">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span class="icon-container">
          <i class="el-icon-plus" @click.stop="() => append(data)"></i>
          <i class="el-icon-delete" @click.stop="() => remove(node, data)"></i>
        </span>
      </span>
        </y-tree>
      </el-aside>
      <el-main>
        <div style="height: 500px">
          <mavon-editor v-model="value"/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import YTree from "../../components/tree/src/tree";
  let id = 1000;
  export default {
    name: "v-article",
    components: {YTree},
    data() {
      const data = [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }];
      return {
        value:'',
        data: JSON.parse(JSON.stringify(data)),
        data: JSON.parse(JSON.stringify(data))
      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      append(data) {
        const newChild = {id: id++, label: 'testtest', children: []};
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    background-color: #fff;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 60px;
    width: 100%;
    z-index: 20;
    box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
    .logo {
      .site-name {
        font-size: 20px;
        font-weight: 600;
        color: #2c3e50;
      }
    }
  }
  .main-container {
    height: calc(100% - 60px);

    .aside {
      background: rgb(255, 255, 255);
      flex: 0 0 200px;
      max-width: 300px;
      min-width: 300px;
      width: 300px;
      border-right: 1px solid #e8e8e8;

      .custom-tree-node {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        padding-right: 8px;
        .icon-container{
          display: flex;
          width: 40px;
          justify-content: space-between;
          align-items: center;
          .el-icon-plus{
            transition: all .3s;
            &:hover{
              font-size: 30px;
              color: #67C23A;
            }
          }
          .el-icon-delete{
            transition: all .3s;
            &:hover{
              font-size: 30px;
              color: #F56C6C;
            }
          }
        }
      }
    }
  }

</style>
