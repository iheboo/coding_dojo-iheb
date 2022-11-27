import React,{useState} from 'react'

const Validation = (props) => {
    const [usermane,setUsername]=useState("");
    const [usermaneError,setUsernameError]=useState("");
    const [emil,setEmail]=useState("");
    const [emilError,setEmailError]=useState("");
    const [passeword,setPasseword]=useState("");
    const [passewordEroor,setPassewordError]=useState("");
    const [confpasseword,setConfPasseword]=useState("");
    const [confpassewordEroor,setConfPassewordError]=useState("");

    const[hasBeenSubmit,setHasBeenSubmit]=useState(false);
    // now our stop refrech "preventDeafault"for create user

    const createUser =(ev) =>{
        ev.preventDefault();
        const New={usermane,emil,passeword,confpasseword}
        console.log('hi',New);
        setHasBeenSubmit(true);
    };
    const  Confirm =() =>{
        if (hasBeenSubmit){
            return "thanks for you trast "
        } else{
            return " submit now"
        };
    }
    const handleUsername =(e) =>{
        setUsername(e.target.value);
        // if (e.target.value.length<3){
        //     setUsernameError("name must be more than 3 element");
        // }else setUsernameError("");
    }
    const handleUsername2 =() =>{
        if (usermane.length < 3){
            setUsernameError("name must be more than 3 element");
        }else setUsernameError("");
    }
    const handleEmail =(e) => {
        setEmail(e.target.value);
        if (e.target.value.length<5){
            setEmailError ("must be  @ in your Email");
        }else setEmailError("")
    }
    const handlePasseword=(e) =>{
        setPasseword (e.target.value);
        if (e.target.value.length<8){
            setPassewordError("must be more than 8 element");
        }else setPassewordError("")
    }
    const handileConfPasse =(e) =>{
        setConfPasseword (e.target.value);
        if (e.target.value.length<8){
            setConfPassewordError(" confirm passeword must be match element");
        }else setPassewordError("")
    }
    
  return (
    <form onSubmit={(e) => {
        createUser(e);
        handleUsername2();
    }}>
        <h3>{Confirm()}</h3>
        <div>
            <label >setUsername:</label>
            <input onChange={handleUsername} value={usermane} />
            { <p style={{color:'red'}}> {usermaneError} </p> }
        </div>
        <div>
            <label >email:</label>
            <input onChange={handleEmail} value={emil}  />{
                <p style={{color:'red'}}> {emilError}</p>
            }
        </div>
        <div>
            <label >passeword:</label>
            <input onChange={handlePasseword} value={passeword} />{
                <p style={{color:'red'}}> {passewordEroor}</p>
            }
        </div>
        <div>
            <label >confirm passeword:</label>
            <input onChange={handileConfPasse} value={confpasseword}  />{
                <p style={{color:'red'}}> {confpassewordEroor}</p>
            }
        </div>
        <input type="submit" value="submit" />
    </form>
  )
}

export default Validation