//Base URL
const base_url = "https://rickandmortyapi.com/api/";

//urls
export const charactersUrl = () => `${base_url}character`;
export const locationsUrl = () => `${base_url}location`;
export const episodesUrl = (page) => `${base_url}episode?page=${page}`;

export const DetailsURL = (dataType, id) => `${base_url}${dataType}/${id}`;
