import { flushPromises, mount } from '@vue/test-utils';
import VLazyImg from "../src/components/image/VLazyImg";

test('mount img', () => {
    expect(VLazyImg).toBeTruthy()
    const img = mount(VLazyImg)
    expect(img.classes()).toContain("v-lazy-image");
})
test('attr img', () => {
    expect(VLazyImg).toBeTruthy()
    const img = mount(VLazyImg, {
        props: {
            src: "/cities/venice.jpg",
        }
    })
    expect(img.html()).toMatchSnapshot()
})
test('img loading src', async () => {
    expect(VLazyImg).toBeTruthy()
    const img = mount(VLazyImg)
    await img.setProps({ src: "/cities/venice.jpg" })
    expect(img.attributes('src')).toEqual("/loading.png")
})