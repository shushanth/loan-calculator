<template>
  <div class="label_wrapper">
    <p class="label">{{label}}</p>
    <p class="sub_label">{{subLabel}}</p>
  </div>
</template>
<script>
export default {
  name: 'BaseLabel',
  props: {
    label: String,
    subLabel: String,
  },
};
</script>
<style lang="scss">
@import 'styles/base.scss';

  .label_wrapper {
    @include styles-flex(row);
    @include styles-flex--align(_, center);
    .label {
      font-size: 18px;
      padding: 0 3px;
    }

    .sub_label {
      font-size: 13px;
      padding: 0 3px;
    }
  }
</style>

