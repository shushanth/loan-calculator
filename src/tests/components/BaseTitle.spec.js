import {
  mount,
  shallowMount,
} from '@vue/test-utils';
import {
  mountComponentWithProps
} from '../helpers';

import BaseTitle from '@/components/shared/BaseTitle';

describe('BaseTitle.vue', () => {
  let BaseTitleWrapper = mount(BaseTitle);
  let BaseTitleShallowWrapper = shallowMount(BaseTitle);

  it('should render Vue instance', () => {
    expect(BaseTitleWrapper.isVueInstance()).toBeTruthy();
  });

  it('should have header wrapper element', () => {
    expect(BaseTitleShallowWrapper.find('div').exists()).toBe(true);
    expect(BaseTitleShallowWrapper.find('.title_wrapper').exists()).toBe(true);
  });

  it('should match passed props', () => {
    const BaseHeaderProps = mountComponentWithProps(BaseTitle, {
      propsData: {
      title: 'hello',
      type: 'primary',
      level: 'medium'
    }}).props();
    expect(BaseHeaderProps.title).toBeDefined();
    expect(BaseHeaderProps.title).toEqual('hello');
    expect(BaseHeaderProps.type).toBeDefined();
    expect(BaseHeaderProps.type).toEqual('primary');
  });
  
  it('should match the class based on the passed props', () => {
    const BaseTitleProps = mountComponentWithProps(BaseTitle, {
      propsData: {
      title: 'hello',
      type: 'primary',
      level: 'small'
    }
  });
  expect(BaseTitleProps.find('h4').exists()).toBeTruthy();
  expect(BaseTitleProps.find('h4.title_color--primary').exists()).toBeTruthy();
  });
});