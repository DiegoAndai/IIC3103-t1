import axios from 'axios';

export function toUrlIndexedForm(results) {
  return results.reduce((urlIndexed, resource) => (
    { ...urlIndexed, [resource.url]: resource }
  ), {});
}

export function formResourceUrl(type, id = '') {
  return `https://rickandmortyapi.com/api/${type}/${id}`;
}

export function getResource(url) {
  return axios.get(url);
}
