export interface Filme {
    id: number,
    name: string,
    genre: number | string,
    typeMovie: number | string,
    productType: number | string,
    mainActors?: string,
    mainDirectors: string,
    provider?: string,
    language?: string,
    price?: string,
    createdAt?: string,
    cover?: string,
}