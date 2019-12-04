async function getAPI(endpoint) {
  const response = await fetch(endpoint);
  const myJson = await response.json();
  return myJson;
}

export default workAPI;
