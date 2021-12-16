// Async - Await
const getData = async () => {
try {
    const resp = await fetch(`http://192.168.1.75:8000/api/users`);
    const { data } = await resp.json();
    data.forEach(element => {
        console.log(element);
    });
} catch (error) {
    console.log(error);
}
}

getData();