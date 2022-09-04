import { flushPromises, shallowMount } from '@vue/test-utils';
import AppHeader from "./../src/components/app/AppHeader.vue";

test('mount app header', () => {
    expect(AppHeader).toBeTruthy()
    const wrapper = shallowMount(AppHeader, {
        props: {
            isDark: false
        }
    })
    expect(wrapper.find('button').exists())
})
test('dark mode test app header', async () => {
    expect(AppHeader).toBeTruthy()
    const wrapper = shallowMount(AppHeader, {
        props: {
            isDark: false
        }
    })
    expect(wrapper.find('.app__header--light')).toBeTruthy()
    await wrapper.find('.app__header--light').trigger('click')
    expect(wrapper.find('.app__header--dark')).toBeTruthy()
})