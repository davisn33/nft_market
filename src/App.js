import logo from './logo.svg';
import './App.css';
import Web3 from "web3"
import React from "react"
import {getMetamask} from "./utils/metamask"
import {Collectibles} from "./scripts/index"


function App() {
  const [acc,setAcc]= React.useState("")
  const [image,setImage]= React.useState("")


  const check = async ()=>{
    
    let accountdetails=await getMetamask();
    console.log(accountdetails)
    setAcc(accountdetails)
  }
  React.useEffect(()=>{
    check()
  },[])

  const createNew= async()=>{
    let obj = new Collectibles(acc.provider,acc.signer,acc.address,acc);
    let result=await obj.create(image,{test:"123"});
    console.log(result)
  }

  return (
    <div className="App">

      <div >Your account :{acc.address}</div>
      <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg" onChange={(e)=>{setImage(e.target.files[0])}}></input>
      <button onClick={createNew}>create</button>
    </div>
  );
}

export default App;
