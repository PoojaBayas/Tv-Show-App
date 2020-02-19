

export interface ITvShowData {
  show:showDataModel
 
  
 }
 export interface showDataModel{
  id:number,
  name :string,
  url:string,
  genres:string,
  rating: {
    average:number
    },
  image: {
    medium: string
  },
  summary:string
}