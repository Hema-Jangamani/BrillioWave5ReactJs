// const header=document.getElementById('header');
// const element = document.createElement('p');
// element.innerHTML='Welcome to Javascript DOM';
// header.appendChild(element); 

// const countriesArray = ['India','Australia','China','Japan','Russia'];
// countriesArray.map(item=>{
//     const list= document.createElement('li');
//     list.innerHTML=item;
//     document.getElementById('countries').appendChild(list);
// })

// const elem=document.getElementById('div1').children;
// const sib = elem[0].nextSibling;
// console.log(sib.nextSibling.innerHTML);

const userElement =document.getElementById('users');
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
     data.map(item =>{
        //  console.log(item.name)
        const li=document.createElement('li')
        li.innerHTML=item.name;
        userElement.appendChild(li);
     });
});

const userElement1 =document.getElementById('users');
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
     data.map(item =>{
        //  console.log(item.name)
        const section=document.createElement('section')
        const h1=document.createElement('h1')
        const p1=document.createElement('p')
        const p2=document.createElement('p')
        const p3=document.createElement('p')
        const hr=document.createElement('hr')
        h1.innerHTML=item.name;
        p1.innerHTML=item.email;
        p2.innerHTML=item.phone;
        p3.innerHTML=item.address.city;

        section.appendChild(h1);
        section.appendChild(p1)
        section.appendChild(p2);
        section.appendChild(p3)
        section.appendChild(hr)

        document.getElementById('userList').appendChild(section);
     });
});