export interface IInfo {
    count: number;
    next: string;
    pages: number;
    prev: null;
}

interface ILocation {
    name: string;
    url: string;
}

export interface IResult {
    created: string | number | Date;
    episode: string[];
    gender: string;
    id: number;
    image: string;
    location: ILocation;
    name: string;
    origin: ILocation;
    species: string;
    status: string;
    type: string;
    url: string;
}

export interface IData {
    info: IInfo;
    results: IResult[];
}

export interface IOption {
    id: number;
    name: string;
}
