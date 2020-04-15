import {
    mount,
    shallowMount,
} from '@vue/test-utils';
import {
    mountComponentWithProps
} from '../helpers';

import BaseLabel from '@/components/shared/BaseLabel';

describe('BaseLabel.vue', () => {
    let BaseLabelWrapper = mount(BaseLabel);
    let BaseLabelShallowWrapper = shallowMount(BaseLabel);

    it('should render Vue instance', () => {
        expect(BaseLabelWrapper.isVueInstance()).toBeTruthy();
    });

    it('should have header wrapper element', () => {
        expect(BaseLabelShallowWrapper.find('div').exists()).toBe(true);
        expect(BaseLabelShallowWrapper.find('.label_wrapper').exists()).toBe(true);
    });

    it('should match passed props', () => {
        const BaseHeaderProps = mountComponentWithProps(BaseLabel, {
            propsData: {
                label: 'hello',
                subLabel: 'loan calculator',
            }
        }).props();
        expect(BaseHeaderProps.label).toBeDefined();
        expect(BaseHeaderProps.label).toEqual('hello');
        expect(BaseHeaderProps.subLabel).toBeDefined();
        expect(BaseHeaderProps.subLabel).toEqual('loan calculator');
    });
    it('should match the class based on the passed props', () => {
        const BaseLabelProps = mountComponentWithProps(BaseLabel, {
            propsData: {
                label: 'hello',
                subLabel: 'loan'
            }
        });
        expect(BaseLabelProps.find('p.label').exists()).toBeTruthy();
        expect(BaseLabelProps.find('p.sub_label').exists()).toBeTruthy();
    });
});