import { mount } from '@vue/test-utils';
import VContainer from "./../src/components/grid/VContainer.vue";

test('mount container', () => {
    expect(VContainer).toBeTruthy()
    const container = mount(VContainer, {
        props: {
            fluid: true
        }
    })
    expect(container.classes()).toContain("v-container--fluid")
})