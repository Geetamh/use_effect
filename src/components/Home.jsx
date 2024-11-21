
import { useEffect,useState } from "react";
import './home.css';



export default function FetchData(){

    const [data,setData] = useState([]);

    useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
            .then(res=>setData(res));
},[])

return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>website</th>

                </tr>
            </thead>
            <tbody>
                {
                    data.map((val) => {
                        return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.username}</td>
                                <td>{val.email}</td>
                                <td>{val.address.zipcode}</td>
                                <td>{val.phone}</td>
                                <td>{val.website}</td>



                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
)
}
