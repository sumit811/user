import React, { useState } from "react";
import { Link } from "react-router-dom";
const Create = () => {
    const [name,setName] = useState('Name'); 
    const [username,setUsername] = useState('Username');
    const [email,setEmail] = useState('Email');
    const add = (e) => {
        console.log(e);
        e.preventDefault();
        const user = {name,username,email};
        fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{ "Content-type":"application/json"},
            body: JSON.stringify(user)
        }).then((d)=>{
            console.log(d);
        });
    }
    return (
        <div>
            <h2>Add New User</h2>
            <form onSubmit={add}>
                <table cellPadding="5" cellSpacing="5" border="2">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td><input type="text" required 
                            value={name}
                            onChange={(e) => setName(e.target.value)} /></td>
                        </tr>    
                        <tr>
                            <td>Username</td>
                            <td><input type="text" required 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><input type="text" required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="Submit" /></td>
                            <td><Link to="/">Back to home</Link></td>
                        </tr>
                        <tr>
                            <td>{name} - {username}</td>
                            <td>{email}</td>
                        </tr>
                    </tbody>    
                </table>
            </form>
            
        </div>
    );
}
export default Create;