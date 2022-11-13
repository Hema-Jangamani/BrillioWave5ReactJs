var updateProductId = null;
const AddProduct = () => {
    let pname = document.getElementById('pname').value;
    let brand = document.getElementById('brand').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;

    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pname, brand, quantity, price })
    }).then(res => {
        GetProducts();
    });
}

const GetProducts = () => {
    fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => {
            document.getElementById('tableBody').innerHTML = '';
            data.map(item => {
                let row = document.createElement('tr');
                let tdID = document.createElement('td');
                let tdName = document.createElement('td');
                let tdBrand = document.createElement('td');
                let tdQuantity = document.createElement('td');
                let tdPrice = document.createElement('td');
                let tdDelete = document.createElement('td');
                let tdUpdate = document.createElement('td');
                tdID.innerHTML = item.id;
                tdName.innerHTML = item.pname;
                tdBrand.innerHTML = item.brand;
                tdQuantity.innerHTML = item.quantity;
                tdPrice.innerHTML = item.price;
                tdUpdate.innerHTML = `<i onclick="GetProduct(${item.id})" class="text-primary fas fa-pencil-alt"></i>`
                tdDelete.innerHTML = `<i onclick="RemoveProduct(${item.id})" class="fas fa-trash-alt text-danger"></i>`
                row.appendChild(tdID);
                row.appendChild(tdName);
                row.appendChild(tdBrand);
                row.appendChild(tdQuantity);
                row.appendChild(tdPrice);
                row.appendChild(tdUpdate);
                row.appendChild(tdDelete);

                document.getElementById('tableBody').appendChild(row);
            })
        });
}

const RemoveProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    }).then(res => {
        GetProducts();
    });
}

const UpdateProduct = () => {
    let pname = document.getElementById('pname').value;
    let brand = document.getElementById('brand').value;
    let quantity = document.getElementById('quantity').value;
    let price = document.getElementById('price').value;

    fetch(`http://localhost:3000/products/${updateProductId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pname, brand, quantity, price })
    }).then(res => {
        GetProducts();
    });
}

const GetProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`)
        .then(res => res.json())
        .then(data => {
            updateProductId = data.id;
            document.getElementById('pname').value = data.pname;
            document.getElementById('brand').value = data.brand;
            document.getElementById('quantity').value = data.quantity;
            document.getElementById('price').value = data.price;
        });
}

GetProducts();
