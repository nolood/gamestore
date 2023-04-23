export type GameCardTypes = {
    name: string,
    background_image: string,
    id: number,
    released: string,
    rating: number,
    platforms: Array<{platform: {name: string, id: number}}>
    genres: Array<{id: number, name: string}>
}

export type GameData = {
    results: Array<object>,
    count: number
}