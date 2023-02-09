import {
  makeGetRequest,
} from '../clients/clientWrapper';

const baseURL = 'https://api.jikan.moe/v4';

/**
 * Función para obtener el listado de animes recomendados
 * @returns Promesa con la respuesta
 */
export function getTopAnimes() {
  const url = `${baseURL}/top/anime`;
  return makeGetRequest(url);
}

/**
 * Función para obtener un anime por su identificador
 * @returns Promesa con la respuesta
 */
export function getAnimeById(id) {
  const url = `${baseURL}/anime/${id}`;
  return makeGetRequest(url);
}
