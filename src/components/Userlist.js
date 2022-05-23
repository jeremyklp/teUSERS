import React from 'react';




const Userlist = ({users, deleteuser, selectuser}) => {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
        <div>
            <div>
                
                {
                users.map( users => (
                <div id='card' key={users.id}>
                    <div><b>{users.first_name}</b></div> 
                    <div>{users.last_name}</div>
                    <div>{users.email}</div>
                    <div>{users.birthday}</div>
                    <button onClick={()=>deleteuser(users.id)}>Delete</button>
                    <button onClick={()=>selectuser(users)}>Edit</button>
                </div>
                ))
                }
                    
                
            </div>
        </div>
    );
};

export default Userlist;