import React, { useEffect, useState } from 'react';



const Userrform = ({addUser, userselected, desselectuser,edituser}) => {

    const[firstname, setfirstname]= useState("")
    const[email, setemail]= useState("")
    const[birthday, setbirthday]= useState("")
    const[password, setpassword]=useState("")
    const[lastname, setlastname]=useState("")

    
    useEffect(()=>{
        if(userselected!==null){
            setfirstname(userselected.first_name)
            setemail(userselected.email)
            setbirthday(userselected.birthday)
            setpassword(userselected.password)
            setlastname(userselected.last_name)

        }
        else{
            setfirstname("")
            setemail("")
            setbirthday("")
            setpassword("")
            setlastname("")
        }




        
    },[userselected])





    const submit=(e)=>{
        e.preventDefault()

        const user={
            
            email: email,
            password:password,
            first_name: firstname,
            last_name:lastname,
            birthday:birthday
        }
        if(userselected===null){
            addUser(user);
        }else{
        edituser(user); 
        desselectuser()
       
        }
    } 

    return (
        <div id='form'>
            <form onSubmit={submit}>
            
            <div className='date'>
            <label htmlFor="email">email: </label>
            <input type="email"
            onChange={e => setemail(e.target.value)}
            value={email}
             />
            </div>
            

            <div className='date'>
            <label htmlFor="password">password: </label>
            <input type="password"
            onChange={e => setpassword(e.target.value)}
            value={password}
             />
            </div>
            

            <div className='date'>
            <label htmlFor="firstname">first Name: </label>
            <input type="text"
            onChange={e => setfirstname(e.target.value)}
            value={firstname}
             />
            </div>
           
            <div className='date'>
            <label htmlFor="lasttname">last Name: </label>
            <input type="text"
            onChange={e => setlastname(e.target.value)}
            value={lastname}
             />
            </div>
            

            <div className='date'>
            <label htmlFor="birthday">birthday: </label>
            <input type="date"
            onChange={e => setbirthday(e.target.value)}
            value={birthday}
             />
            </div>
            
            
            
            <button>submit</button>
            {userselected!==null&& <button 
                                    type='button' 
                                    onClick={desselectuser}>
                                    cancel
                                    </button>} 
            
            
            </form>    
        </div>
    );
};

export default Userrform;