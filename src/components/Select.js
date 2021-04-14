import React, {useState,  useEffect } from "react";
import { Link } from "react-router-dom";
import UserList from './UserList';

const Select = () => {
    const [users, setUsers] = useState(null); 

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setUsers(data);
        })
    }, [])
    
    return (
        <table cellPadding="5" cellSpacing="5" border="3" width="100%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
            </thead>
            { users && <UserList users={users} />}
            <tfoot>
                <tr>
                    <td colSpan="5"><Link to="/create">Add new user</Link></td>
                </tr>
            </tfoot>
        </table>
    );
};
export default Select;