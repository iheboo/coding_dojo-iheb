import React ,{useState}from 'react'

const Hook = (props) => {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [passeword,setPasseword]=useState("");
    const createUser=(ev) => {
        ev.preventDefault();
        // this for of the retare of update /stop refrech
        const user={username,email,passeword};
        console.log("welcome",user)
    }
  return (
    <form onSubmit={createUser}>
        <div>
            <label >username:</label>
            <input on onChange={(ev) => setUsername(ev.target.value)} value={username}/>
            {/* / value for rest in the input when pres the button  */}
        </div>
        <div>
            <label >email:</label>
            <input on onChange={(ev) => setEmail(ev.target.value)} value={email}/>
        </div>
        <div>
            <label >passeword:</label>
            <input on onChange={(ev) => setPasseword(ev.target.value) } value={passeword}/>
        </div>
        <div>
            <label >confirm passeword:</label>
            <input on onChange={(ev) => setPasseword(ev.target.value) } value={passeword}/>
        </div>
        <input type="submit" value="create User" />
            <p>username:::::{username}</p>
            <p>email:::::{email}</p>
            <p>passeword::::::{passeword}</p>

    </form>

  )
}

export default Hook