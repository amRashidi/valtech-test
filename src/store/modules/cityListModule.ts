import { mockCities } from "@/consts/cities";
import { cityUrl } from "@/endpoints/city";
import { GET_CITY_ITEMS_ACTION, GET_CITY_ITEMS_FAILED, GET_CITY_ITEMS_REQUEST, GET_CITY_ITEMS_SUCCESS, ICardListStates, IRootState } from "@/types/store";
import { Module } from "vuex";

export const cityListModule = (() => {
    const cityList: Module<ICardListStates, IRootState> = {
        namespaced: true,
        state: {
            items: [],
            loading: false
        },
        getters: {
            items(state) {
                return state.items
            },
            loading(state) {
                return state.loading
            }
        },
        mutations: {
            [GET_CITY_ITEMS_REQUEST]: (state) => {
                state.items = mockCities(7)
                state.loading = true
            },
            [GET_CITY_ITEMS_SUCCESS]: (state, payload) => {
                state.items = payload
                state.loading = false
            },
            [GET_CITY_ITEMS_FAILED]: (state) => {
                state.loading = false
            },
        },
        actions: {
            [GET_CITY_ITEMS_ACTION]: async ({ commit }) => {
                try {
                    commit(GET_CITY_ITEMS_REQUEST);
                    const response = await fetch(cityUrl)
                    const result = await response.json()
                    if (result) {
                        setTimeout(() => commit(GET_CITY_ITEMS_SUCCESS, result), 3000)

                    }
                } catch (error) {
                    commit(GET_CITY_ITEMS_FAILED, error);

                }
            }
        }
    };
    return cityList;
})();