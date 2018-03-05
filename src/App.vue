<template>
  <div style="display:flex;">
    <div>
      <slot></slot>
      <router-view name="sidebar" />
    </div>
      <router-view name="content" />
  </div>
</template>
