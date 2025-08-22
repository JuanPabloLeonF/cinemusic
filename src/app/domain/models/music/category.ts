export interface Category {
    name: String;
}

export interface TypeSearch {
    type: String;
    value: String;
}

export interface TypeSvgSearch {
    type: String;
    value: boolean;
}

export enum TypeSearchEnum {
    CATEGORY = "CATEGORY",
    SEARCH = "SEARCH",
    ARTIST = "ARTIST",
}

export enum CategoriesEnum {
    ALL = "ALL",
    POP = "POP",
    ROCK = "ROCK",
    HIP_HOP = "HIP HOP",
    ELECTRONIC = "ELECTRONIC",
    RAP = "RAP",
    JAZZ = "JAZZ",
    BLUES = "BLUES",
    COUNTRY = "COUNTRY",
    RNB = "RNB",
    REGGAE = "REGGAE",
    METAL = "METAL",
}