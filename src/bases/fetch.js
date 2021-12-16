// Fetch API

const request = fetch(`http://192.168.1.75:8000/api/users`);
request
.then((res) => res.json())
.then(({data}) => {
    data.forEach(element => {
        console.log(element);
    });
})
.catch((err) => {
    console.log(err);
});;