const App = ()=> {

  let products = [
   { name: "Laptop", price: 200000, _id: 1, quantity: 10},
   { name: "Mobile", price: 20000, _id: 2, quantity: 90},
   { name: "Laptop", price: 360, _id: 3, quantity: 60},

  ];
 let users = [
    {name:"nitan", surname:"thapa", _id:1, age: 20, gender:"male",email:"nitanthapa425@gmail.com", image : "img.jpg"},
    {name:"sita", surname:"thapa", _id:2, age: 30, gender:"female",email:"sitathapa425@gmail.com", image : "img.jpg"},
    {name:"rita", surname:"thapa", _id:3, age: 30, gender:"female",email:"ritathapa425@gmail.com", image : "img.jpg"},
    {name:"anusha", surname:"thapa", _id:4, age: 30, gender:"female",email:"anushathapa425@gmail.com", image : "img.jpg"},
  ]
 
   return    <div className= "container" style = {{backgroundColor: "lightgray", padding: "20px",  color: "black", borderRadius: "9px"}}>
   <center> <h3 style={{backgroundColor : "green", padding: "3px", margin : "10px" }}>Cosmos College of management</h3></center><hr></hr>
    <strong>Cosomos</strong> is located in sitapaila Museum marg.
    <div>
      <h4 >Courses Offered</h4>
      <table style={{border: "1px solid black"}}>
        <tbody>
        <tr>
        <th style={{border: "1px solid black"}}>Course</th> 
        <th style={{border: "1px solid black"}}>Seat Available </th></tr>
        <tr>
        <td style={{border: "1px solid black", color : "yellow"}}>BCE</td>
        <td style={{border: "1px solid black"}}>48</td>
        </tr>
        </tbody>
      </table>
      
      <p>fee structure of 4 year is {400000+ 400000}</p>
      <img src= "img.jpg" width = "300px" height ="175px" alt = "Error loading pic" />
      {products.map((item, i)=>{
        return <div key={i} style= {{flex:"auto", display: "flex",}}>
          <div style={{flex: "left ", alignItems: "center", width:"20%",border: "1px solid black", backgroundColor: "lightblue", margin: "10px", padding: "10px", borderRadius: "9px"}}>
           <p>Product name is <strong>{item.name}</strong></p>
           <p>Product price is {item.price}</p>
           <p>Quantity {item.quantity}</p>
        </div></div>
    })}
    
       
           {users.map((item, i)=>{
                return <table key={i} style={{border: "1px solid black"}}>
                  <tbody>
                  <tr style={{border: "1px solid black"}}>
                    <td style={{border: "1px solid black", padding: "10px"}}>Name:{item.name}</td>
                    <td style={{border: "1px solid black", padding: "10px"}}>Surename: {item.surname}</td>
                    <td style={{border: "1px solid black", padding: "10px"}}>ID : {item._id}</td>
                    <td style={{border: "1px solid black", padding: "10px"}}>age: {item.age}</td>
                    <td style={{border: "1px solid black", padding: "10px"}}>Gender: {item.gender}</td>
                    <td style={{border: "1px solid black", padding: "10px"}}>Email: {item.email}</td>
                    <td style={{border: "1px solid black", padding: "10px"}}>Image: <img src={item.image} style={{width: "100px", height: "100px"}} /></td>
                  </tr>
                  </tbody>

                </table>
         })}
        
   
    </div>
     
   </div>
  
};

export default App