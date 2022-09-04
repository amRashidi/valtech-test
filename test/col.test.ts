import { mount } from '@vue/test-utils';
import VCol from "../src/components/grid/VCol.vue";

test('mount col', () => {
    expect(VCol).toBeTruthy()
    const col = mount(VCol,{
        props:{
            col:4
        }
    })
    expect(col.classes()).toContain("v-col");
    col.setProps({ col: "test" })
    expect(col.classes()).not.toContain("v-col-test");
})
test('mount sm col', () => {
    expect(VCol).toBeTruthy()
    const col = mount(VCol,{
        props:{
            sm:4
        }
    })
    expect(col.classes()).toContain("v-col-sm-4");
    col.setProps({ sm: "test" })
    expect(col.classes()).not.toContain("v-col-sm-test");
})
test('mount md col', () => {
    expect(VCol).toBeTruthy()
    const col = mount(VCol,{
        props:{
            md:4
        }
    })
    expect(col.classes()).toContain("v-col-md-4");
    col.setProps({ md: "test" })
    expect(col.classes()).not.toContain("v-col-md-test");
})
test('mount lg col', () => {
    expect(VCol).toBeTruthy()
    const col = mount(VCol,{
        props:{
            lg:4
        }
    })
    expect(col.classes()).toContain("v-col-lg-4");
    col.setProps({ lg: "test" })
    expect(col.classes()).not.toContain("v-col-lg-test");
})