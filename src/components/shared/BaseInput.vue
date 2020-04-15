<template>
  <div class="input">
    <base-label :label="label" :subLabel="subLabel"/>
    <input
      :class="{
          'input_element': true,
          'input_element--error': (this.errors.value) || false
        }"
      @input="onInputChange"
      @change="onInputChange"
      @blur="onInputBlur"
      :type="type"
      :value="value || ''"
    >
  </div>
</template>
<script>
import BaseLabel from './BaseLabel';

export default {
  name: 'BaseInput',
  props: {
    type: String,
    label: String,
    subLabel: String,
    value: String | Number,
    onUpdate: Function,
    errors: Object,
    focusOut: Boolean,
  },
  components: {
    'base-label': BaseLabel,
  },
  methods: {
    onInputChange(event) {
      const { target: { value } } = event;
      this.$emit('onUpdate', value);
    },
    onInputBlur() {
      this.$props.focusOut && this.$emit('blur');
    }
  }    
}
</script>
<style lang="scss">
@import 'styles/base.scss';

.input {
  @include styles-flex(column);
  width: 100%;
  margin: 10px 0;    

  &_element {
    padding: 10px;
    margin: 10px 0;
    outline: 0;

    &--error {
      border: 1px solid $styles-color-red-safron;
    }
  }
}
</style>