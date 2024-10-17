<template>
  <div>
    <el-button type="primary">按钮</el-button>

    <el-button type="primary">
      <el-icon style="vertical-align: middle">
        <ElIconSearch />
      </el-icon>
      <span style="vertical-align: middle"> Icon需要加ElIcon </span>
    </el-button>

    <el-button @click="ElMessage('hello')">button</el-button>
    <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
    <LazyElButton type="warning">lazy button</LazyElButton>
  </div>
</template>
