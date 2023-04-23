import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CarouselTypes} from "../../components/HomePage/Carousel/CarouselTypes";
import {GamePageInfoProps} from "../../components/GamePage/GamePageInfo";
import {GameTypes} from "../../components/GamePage/GamePageTypes";

type UserState = {
    homepageCarouselItems: Array<CarouselTypes>,
    topRatedGamesItems: Array<CarouselTypes>,
    latestGamesItems: Array<CarouselTypes>,
    recentUpdatedGamesItems: Array<CarouselTypes>,
}

const initialState: UserState = {
    homepageCarouselItems: [{name: '', background_image: '', id: 0, short_screenshots: []}],
    topRatedGamesItems: [],
    latestGamesItems: [],
    recentUpdatedGamesItems: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setHomepageCarouselItems(state, action: PayloadAction<Array<CarouselTypes>>) {
            state.homepageCarouselItems = action.payload
        },
        setTopRatedGamesItems(state, action: PayloadAction<Array<CarouselTypes>>) {
            state.topRatedGamesItems = action.payload
        },
        setLatestGamesItems(state, action: PayloadAction<Array<CarouselTypes>>) {
            state.latestGamesItems = action.payload
        },
        setRecentUpdatedGamesItems(state, action: PayloadAction<Array<CarouselTypes>>) {
            state.recentUpdatedGamesItems = action.payload
        },
    }
})

export const {setHomepageCarouselItems, setTopRatedGamesItems, setLatestGamesItems, setRecentUpdatedGamesItems} = userSlice.actions;

export default userSlice.reducer;