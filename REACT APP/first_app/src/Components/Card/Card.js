function Card(props){
    return(
        <div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.contact.name}</h5>
    <p class="card-text">{props.contact.city}</p>
    <p class="card-text">{props.contact.email}</p>
    <p class="card-text">{props.contact.phone}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}
export default Card;