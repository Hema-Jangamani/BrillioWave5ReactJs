fetch('http://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>data.map(item=>{
    console.log(item.address.city);
}));