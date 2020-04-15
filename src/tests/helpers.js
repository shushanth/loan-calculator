import {
    mount,
    shallowMount,
} from '@vue/test-utils';

export const mountComponentWithProps = (component, propsData, mountOption) => {
  return mountOption === 'mount ' ? mount(component, propsData) : shallowMount(component, propsData);
};