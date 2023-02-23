export interface ApiResponse{
  date: string;
  url: string;
  data: ApiResponseData
}

export interface ApiResponseData{
  Events: ApiResponseDataElement[];
  Births: ApiResponseDataElement[];
  Deaths: ApiResponseDataElement[];
  All?: ApiResponseDataElement[];
}

export interface ApiResponseDataElement{
  year: string;
  text: string;
  html: string;
  no_year_html: string;
  links: ApiResponseDataElementLink[]
}

export interface ApiResponseDataElementLink{
  link: string;
  title:string;
}
