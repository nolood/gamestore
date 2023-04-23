export type GamePageTypes = {
    added: number,
    added_by_status: object,
    background_image: string,
    clip: null,
    dominant_color: string,
    genres: Array<object>,
    id: number,
    name: string,
    platforms: Array<object>,
    short_screenshots: Array<{id: number, image: string}>
}

export type GameTypes = {
    name: string,
    description_raw: string,
    creators_count: number,
    genres: Array<{ name: string, id: number }>,
    rating: number,
    developers: Array<{id: number, name: string, image_background: string}>,
    platforms: Array<{platform: {id: number, name: string, image_background: string}}>,
    stores: Array<{store: {id: number, name: string, image_background: string}}>,
    short_screenshots: Array<{id: number, image: string}>,
    background_image: string,
}