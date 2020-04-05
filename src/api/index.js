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
  console.log(`fetching ${url}`);
  return axios.get(url);
}

async function recursiveGet(url, responses = []) {
  const { data: { info: { next }, results } } = await getResource(url);
  const mergedResults = [...responses, ...results];
  if (next === '') {
    return mergedResults;
  }
  return recursiveGet(next, mergedResults);
}

export async function getAllResourcePages(type) {
  return recursiveGet(`https://rickandmortyapi.com/api/${type}`);
}
