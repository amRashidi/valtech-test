export interface IRootState {
}
export interface ICardListStates {
    items: {
        item: {
            intro: boolean;
            subtitle: string
            title: string
            src: string
            description: string
        },
        grid: Record<string, number | string>
    }[],
    loading: boolean
}
export interface IAppStates {
    mode: "dark" | "light"
}
export enum appSetting {
    theme = "app-theme"
}
//define city items action type
export const GET_CITY_ITEMS_ACTION = "GET_CITY_ITEMS_ACTION";
export const GET_CITY_ITEMS_REQUEST = "GET_CITY_ITEMS_REQUEST";
export const GET_CITY_ITEMS_SUCCESS = "GET_CITY_ITEMS_SUCCESS";
export const GET_CITY_ITEMS_FAILED = "GET_CITY_ITEMS_FAILED";

//define citylist module path
export const CITY_LIST_MODULE = "cities/"
export const CITY_LIST_ACTION = CITY_LIST_MODULE + GET_CITY_ITEMS_ACTION
export const CITY_LIST_ITEMS = CITY_LIST_MODULE + 'items'
export const CITY_LIST_LOADING = CITY_LIST_MODULE + 'loading'

//define app setting action type
export const APP_SETTING_ACTION = "APP_SETTING_ACTION";
export const APP_SETTING_THEME = "APP_SETTING_THEME";

//define citylist module path
export const APP_MODULE = "app/"
export const APP_ACTION = APP_MODULE + APP_SETTING_ACTION
export const APP_IS_DARK = APP_MODULE + 'isDark'
export const APP_MODE = APP_MODULE + 'mode'


