async function getData() {
    try {
        const result = await fetch(`https://wallhaven.cc/api/v1/search`);
        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getData