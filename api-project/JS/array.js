const url = "https://sports.api.decathlon.com/sports";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const Data = await response.json();
    console.log(Data);
    return Data;
  } catch (error) {
    console.log(error);
  }
}
const Data = getData(url);
export { Data };
