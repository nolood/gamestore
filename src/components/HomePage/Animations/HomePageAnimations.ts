import {HomePageAnimationsTypes} from "./HomePageAnimType";

export const HomePageTSelectionAnim: HomePageAnimationsTypes = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1
    },
    transition: {
        type: 'tween',
        duration: 2,
    }
}