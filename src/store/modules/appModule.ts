import { mockCities } from "@/consts/cities";
import { cityUrl } from "@/endpoints/city";
import { appSetting, APP_ACTION, APP_SETTING_ACTION, APP_SETTING_THEME, GET_CITY_ITEMS_ACTION, GET_CITY_ITEMS_FAILED, GET_CITY_ITEMS_REQUEST, GET_CITY_ITEMS_SUCCESS, IAppStates, ICardListStates, IRootState } from "@/types/store";
import { Module } from "vuex";

export const appModule = (() => {
    const app: Module<IAppStates, IRootState> = {
        namespaced: true,
        state: {
            mode: "light"
        },
        getters: {
            mode(state) {
                return state.mode
            },
            isDark(state) {
                return state.mode === "dark"
            }
        },
        mutations: {
            [APP_SETTING_THEME]: (state, payload) => {
                state.mode = payload.dark ? "dark" : "light"
            },
        },
        actions: {
            [APP_SETTING_ACTION]: async ({ commit }, payload) => {
                const { key, ...config } = payload
                switch (key) {
                    case appSetting.theme:
                        commit(APP_SETTING_THEME, config)
                        break;

                }
            }
        }
    }
    return app;
})();