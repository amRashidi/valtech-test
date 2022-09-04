import { mount } from '@vue/test-utils';
import VBtn from "../src/components/btn/VBtn.vue";

test('mount btn', () => {
    expect(VBtn).toBeTruthy()
    const btn = mount(VBtn)
    expect(btn.classes()).toContain("v-btn");
})
test('btn slot', () => {
    const wrapper = mount(VBtn, {
        slots: {
            default: 'Read More',
        }
    })

    expect(wrapper.text()).toContain('Read More')
})
test('btn classses', async () => {
    expect(VBtn).toBeTruthy()
    const btn = mount(VBtn)
    expect(btn.classes()).toEqual(["v-btn"])
    await btn.setProps({ dark: true, text: true, disabled: true, outline: true })
    expect(btn.classes()).toEqual(["v-btn", "v-btn--outlined", "v-btn--disabled", "v-btn--text", "v-btn--dark"])
})
test('btn as router component', async () => {
    expect(VBtn).toBeTruthy()
    const btn = mount(VBtn, {
        props: {
        }
    })
    expect(btn.classes()).toEqual(["v-btn"])
    await btn.setProps({ router: true })
    expect(btn.find('router-link').exists()).toBe(true)
})