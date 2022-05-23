import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios"
import Userrform from './components/Userrform';
import Userlist from './components/Userlist';




function App() {

  const[users, setusers]=useState([])
  const[userselected, setuserselected]= useState(null)


  const selectuser=users=>{
    setuserselected(users);
  }
  


  const desselectuser=()=>{ 
    setuserselected(null)
 
  }
  const edituser=user=>{
    axios.put(`https://users-crud1.herokuapp.com/users/${userselected.id}/`, user)
      .then(()=> getuser())
    console.log(user);
  }






  useEffect(()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
        .then( res => setusers(res.data))
    
    
    },[])
  

    const getuser =() => {
      axios.get("https://users-crud1.herokuapp.com/users/")
          .then( res => setusers(res.data))
    }


  const addUser = (user)=>{
    axios.post("https://users-crud1.herokuapp.com/users/", user)
          .then(()=> getuser())
  }

 const deleteuser= id =>{
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(()=> getuser())
    
  }



  
  







  return (
    <div className="App">
     
     <Userlist 
     users={users} 
     deleteuser={deleteuser} 
     selectuser={selectuser}
     />

     <Userrform 
     addUser={addUser} 
     userselected={userselected}
     desselectuser={desselectuser}
     edituser={edituser}/>
    </div>
  );
}

export default App;
