import React , {useState, useEffect} from "react";
import User from './User';
import Instance from "./Instance";

const UserList = ()=>{
const [users, setUsers] = useState([]);

useEffect(()=>{
    Instance.get("/Users/list")
    .then(resp=>{
    console.log(resp.data);
    setUsers(resp.data);
     }).catch(err=>{
    console.log(err);
});
},[]);

return(
    <div>
        {
            users.map(users=>
                <User users = {users}></User>
            )
        }
    </div>
)

}
export default UserList;