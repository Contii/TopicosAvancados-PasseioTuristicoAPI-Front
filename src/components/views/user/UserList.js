import axios from "axios";
import { useEffect, useState } from "react"; 
import { API_URL } from "../../../AppConsts";

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect( () => {
        axios.get(API_URL + "/users")
            .then( res => {
                console.log(res);
                if(res.status == 200) {
                    setUsers(res.data.data);
                }
            })
            .catch( (err) => {
                console.error(err);
            });
    }, []);


    return (
        <>
            <div>
                <h2>Usuários</h2>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                    </tr>
                </thead>

                <tbody>
                    { users.map( u => (
                        <tr key={u.id}>
                            <td><img src={u.avatar}/></td>
                            <td>{u.first_name} {u.last_name}</td>
                            <td>{u.email}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </>
    );
}