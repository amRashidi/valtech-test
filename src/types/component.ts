import { LocationAsRelativeRaw } from "vue-router";

export interface IVBtn {
    router?: boolean;
    rounded?: boolean;
    to?: LocationAsRelativeRaw;
    outline?: boolean;
    text?: boolean;
    dark?: boolean;
    disabled?: boolean
}