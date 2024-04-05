import { useState } from "react";

function Login(){
    const [huhu,sethuhu] = useState('');
    const duma = async function(){
        console.log(huhu)
        return true
    }
    return (
        <div>
            {/* <form action="/"> */}
                <input name="username" required value={huhu} onChange={(e)=>sethuhu(e.target.value)}></input>
                <td></td>
                <input type="password" name="password"></input>
                <td></td>
                <button type="submit" onClick={()=>duma()}>Login</button>
            {/* </form> */}
        </div>
    );
}
export default Login;