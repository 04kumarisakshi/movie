import Header from "../Components/Header"
import BackgroundImage from "../Components/BackgroundImage"
import styled from "styled-components"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";
  import { useNavigate } from "react-router-dom";
  import { firebaseAuth } from "../utils/Firebase";
import { useState } from "react"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const navigate = useNavigate();
      const handleLogIn = async () => {
        try {
        
          await createUserWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
          console.log(error.code);
        }
      };
    
      onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/");
      });
  return (
  <Container >
    <div className="content">
    <BackgroundImage/>
        <Header/>
            <div className="body flex column a-center j-center">
                <div className="text flex column">
                   <h3>Login</h3>
                </div>
                <div className="form">
                <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
         
             
         
          </div>
          <button onClick={handleLogIn}>Login to your Account</button>
        </div>
      </div>
     
  </Container>
  )
}

export default Login


const Container = styled.div`
 position: relative;
 .content{
    postion:absolute;
    top:0;
    left:0;
    background-color: rgba(0, 0, 0, 0.5);
    height :100vh;
    width1:100vw;
    display: grid;
    grid-template-rows: 0vh 35vh;
 }
 .body {
    button {
        padding: 0.5rem 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    gap: 1rem;
    .text {
      gap: 1rem;
      text-align: center;
      font-size: 1.6rem;
      
      h1 {
     
        padding: 0 25rem;
      }
    }
    .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;
        input {
            color: black;
            border: none;
            padding: 1rem;
            margin:1rem;
             border-radius: 1.2rem;
            font-size: 1rem;
            border: 1px solid black;
            &:focus {
              outline: none;
            }
        
        .container {
          gap: 2rem;
        
          input {
            padding: 0.5rem 0.5rem;
            width: 15rem;
            font-size: 1.rem;
            
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }

        }
    
  }
  
}

`;