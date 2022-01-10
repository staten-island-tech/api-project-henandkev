const url = "https://api.disneyapi.dev/characters";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const arrayData = await response.json();
    console.log(arrayData);
    return arrayData;
  } catch (error) {
    console.log(error);
  }
}
const arrayData = getData(url);
export { arrayData };
