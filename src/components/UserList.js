const UserList = ({ users }) => {
    const handleDelete = (e) => {
        // console.log('id',e);
        // console.log(e.target.getAttribute("data-did"))
        fetch('http://localhost:3000/users/' + e.target.getAttribute("data-did"), {
          method: 'DELETE'
        }).then((res) => {
          if(res.ok){
            console.log('deleted');
            e.nativeEvent.target.parentNode.parentNode.remove();

            // e.parentNode.parentNode
          }
        })
      }
    return (
      <tbody>
        {users.map(user => (
            <tr key={user.id}>
            <td>{ user.name }</td>
            <td>{ user.username }</td>
            <td>{ user.email }</td>
            <td><button data-did={user.id} onClick={handleDelete}>Delete</button></td>
            </tr>    
        ))}
      </tbody>
    );
  }
   
  export default UserList;