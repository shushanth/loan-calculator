<template>
  <div class="title_wrapper">
    <h2
      v-if="this.level ==='medium'"
      :class="{
        'title_color--primary': (this.type === 'primary') || false,
      }"
    >{{title}}</h2>
    <h4
      v-if="this.level ==='small'"
      :class="{
        'title_color--primary': (this.type === 'primary') || false,
      }"
    >{{title}}</h4>
  </div>
</template>
<script>
export default {
  name: 'BaseHeader',
  props: {
    title: String,
    level: String,
    type: String,
  },
};
</script>
<style lang='scss'>
@import 'styles/base.scss';
.title {
  &_wrapper {
    @include styles-flex(row);
    padding: 10px 0;
  }
  &_color {
    &--primary {
      color: $styles-color-blue--cloud;
    }
  }
}
</style>