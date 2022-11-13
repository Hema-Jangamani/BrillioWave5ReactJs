// let promise=new Promise((resolve,reject)=>{
//     let error=false;
//     if(!error){
//         resolve('Task Completed');
//     }else{
//         reject('Error occured');
//     }
//  });
 
//  promise
//  .then(x=>console.log(x))
//  .catch(x=>console.log(x));

const items =['Item1', 'Item2'];

const GetItems = () =>{
    setTimeout(()=>{
        items.map(x=>console.log(x));
    },2000);
}

const AddItem=(item)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            items.push(item);
            let error=false;
            if(!error){
                resolve();
            }else{
                reject('Error Occured');
            }
        },3000);
    });
    
}
// AddItem('Item3')
// .then(x=>GetItems())
// .catch(err=>console.log('err'));

const RunTasks= async()=>{
    await AddItem('Item3');
    GetItems();
}
RunTasks();