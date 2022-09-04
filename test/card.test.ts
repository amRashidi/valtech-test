import { mount } from '@vue/test-utils';
import VCardData from "../src/components/card/VCardData.vue";

test('mount card', () => {
    expect(VCardData).toBeTruthy()
    const card = mount(VCardData)
    expect(card.classes()).toContain("card");
})
test('card classses', async () => {
    expect(VCardData).toBeTruthy()
    const card = mount(VCardData, {
    })
    expect(card.classes()).toEqual(["card"])
    await card.setProps({ intro: true, loading: true })
    expect(card.classes()).toEqual(["card", "card--intro", "card--loading"])
})

test('card props', async () => {
    expect(VCardData).toBeTruthy()
    const card = mount(VCardData, {
        props: {
            title: "title",
            subtitle: "subtitle",
            description: "description",
            src: "src",
        }
    })
    expect(card.find(".card__title").text()).toEqual("title")
    expect(card.find(".card__subtitle").text()).toEqual("subtitle")
    expect(card.find(".card__description").text()).toEqual("description")
})
test('card props', async () => {
    expect(VCardData).toBeTruthy()
    const card = mount(VCardData, {
        props: {
            intro: false
        }
    })
    expect(card.find(".card__title").element).toMatchSnapshot()
    await card.setProps({ intro: false })
    expect(card.find(".card__title").element).toMatchSnapshot()
})