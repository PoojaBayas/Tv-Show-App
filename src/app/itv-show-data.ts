export interface ITvShowData {
  show:
  {
    id: number;
    name : string,
    language: string,
    genres: string,
    url: string,
    runtime: number,
    rating:{
      average :number
    },
    image :{
      medium :string
    },
    summary: string
  }
}

