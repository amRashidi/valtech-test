import { mount } from '@vue/test-utils';
import VRow from "../src/components/grid/VRow.vue";

test('mount row', () => {
    expect(VRow).toBeTruthy()
    const row = mount(VRow, {
        props: {
            noGutters: true
        }
    })
    expect(row.classes()).toContain("v-row--no-gutters")
})