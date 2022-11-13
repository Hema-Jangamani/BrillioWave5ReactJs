import Card from "../Card/Card";
function Dashboard(){
    let mystyle={
        color:'red',
        fontFamily:'Monotype Corsiva',
        fontSize:'30pt',
        textDecoration:'underline'
    }
    let Contact={
        name:'Hema',
        city:'Gadag',
        email:'hema@gmail.com',
        phone:9087644690
    }
    return(
        <div>
            <h2 style={mystyle}>This is Dashboard</h2>
            <Card contact={Contact}/>
        </div>
    )
}
export default Dashboard;