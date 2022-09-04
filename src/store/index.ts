import { createStore } from "vuex";
import { IRootState } from "@/types/store";
import { cityListModule } from "./modules/cityListModule";
import { appModule } from "./modules/appModule";


export const store = createStore<IRootState>({
    modules: {
        cities: cityListModule,
        app: appModule

    }
});
