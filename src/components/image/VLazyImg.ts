/* eslint-disable indent */
import {
    reactive,
    h,
    computed,
    ref,
    onMounted,
    onBeforeUnmount,
    defineComponent,
    Ref,
} from "vue";
import noImage from "/error.jpg";
import loadingImage from "/loading.png";
interface IObserverState {
    observer: IntersectionObserver | null;
    intersected: boolean;
    error: boolean;
    loaded: boolean;
}
export default defineComponent({
    props: {
        src: {
            type: String,
            default: "",
            required: true,
        },
        srcError: {
            type: String,
            default: noImage,
        },
        srcPlaceholder: {
            type: String,
            default: noImage,
        },
        srcset: {
            type: String,
        },
        intersectionOptions: {
            type: Object,
            default: () => ({}),
        },
        usePicture: {
            type: Boolean,
            default: false,
        },
    },
    inheritAttrs: false,
    setup(props, { attrs, slots, emit }) {
        const root: Ref<Element | null> = ref(null);
        const state: IObserverState = reactive({
            observer: null,
            intersected: false,
            error: false,
            loaded: false,
        });

        // Computed
        const srcImage = computed(() => {
            let src = loadingImage;
            if (state.intersected && props.src) src = props.src;
            if (state.error) {
                src = props.srcError;
            }
            return src;
        });
        const srcsetImage = computed(() =>
            state.intersected && props.srcset ? props.srcset : false
        );
        const load = () => {
            if (
                root.value &&
                root.value.getAttribute("src") !== props.srcPlaceholder
            ) {
                state.loaded = true;
                emit("load", root.value);
            }
        };
        const error = () => {
            state.error = true;
            emit("error", root.value);
        };
        onMounted(() => {
            if ("IntersectionObserver" in window) {
                state.observer = new IntersectionObserver((entries) => {
                    const image = entries[0];
                    if (image.isIntersecting) {
                        state.intersected = true;
                        state.observer && state.observer.disconnect();
                        emit("intersect");
                    }
                }, props.intersectionOptions);

                state.observer.observe(root.value as Element);
            }
        });
        onBeforeUnmount(() => {
            if ("IntersectionObserver" in window && state.observer) {
                state.observer.disconnect();
            }
        });

        return () => {
            const img = h("img", {
                ref: root,
                src: srcImage.value,
                srcset: srcsetImage.value || null,
                ...attrs,
                class: [
                    attrs.class,
                    "v-lazy-image",
                    { "v-lazy-image-loaded": state.loaded },
                ],
                onLoad: load,
                onError: error,
            });
            return img;
        };
    },
});