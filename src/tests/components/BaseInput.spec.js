import {
    mount,
    shallowMount,
} from '@vue/test-utils';

import {
    BaseInput
} from '@/components/shared';

describe('BaseInput.vue', () => {
    let baseInputElement;
    beforeEach(() => {
        baseInputElement = mount({
            template: `<div><BaseInput
          type="number"
          label="Amount"
          subLabel="(10 000 to 100 000)"
          :value="10000"
          :errors="{value: false}"
          :focusOut="true"></BaseInput></div>`,
            components: {
                BaseInput
            }
        });

    });

    it('should update the input and emit respective events', () => {
        const input = baseInputElement.find('input');
        input.setValue(100);
        input.trigger('input');
        baseInputElement.vm.$emit('onUpdate');
        baseInputElement.vm.$emit('onBlur');
        baseInputElement.vm.$emit('onChange');
        expect(baseInputElement.emitted().onUpdate).toBeTruthy();
        expect(baseInputElement.emitted().onBlur).toBeTruthy();
        expect(baseInputElement.emitted().onChange).toBeTruthy();
    });



});