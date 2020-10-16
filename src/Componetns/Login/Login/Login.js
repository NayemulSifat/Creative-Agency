import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from '../../../App';


const Login = () => {
    const style = {
        container: {
            textAlign: 'center',
            padding: '80px',
            border: '1px solid #f1eaea',
            borderRadius: '5px',
            margin: 'auto',
            marginTop: '90px'

        },
        button: {
            backgroundColor: 'white',
            border: '1px solid blue',
            borderRadius: '30px',
            padding: '10px',

        }

    }

    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: {pathname: "/dashBoard"} };




    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = {
                    name: displayName,
                    email: email
                }
                setloggedInUser(signedInUser);
                storeAuthToken();
            })
            .catch(function (error) {
                const errorMessage = error.message;
                console.log(errorMessage);
              });
    }


    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from)
            }).catch(function (error) {
            });
    }

    return (
        <div style={{}}>
            <div style={{ textAlign: 'center', marginBottom: 70, marginTop: '25px' }}>
                <img src="https://i.ibb.co/GPkmCwG/logo.png" alt="logo" border="0" style={{ height: "74px" }} />
            </div>
            <div className="row" style={{ border: '1px solid black', borderRadius: '10px', width: '45%', margin: 'auto', padding: '25px' }}>
                <div className="col-md-4 m-auto text-center" style={{ padding: "2%" }} >
                    <h2>Login With</h2>
                    <button onClick={handleGoogleSignIn} style={style.button} > <img style={{ height: '20px', width: '20px' }} src={'https://i.ibb.co/Jjt6XRw/google.png'} alt="Google" /> Continue with Google</button><br /><br />
                    <span>Don't have an account?<Link to=''>Create a new account</Link></span>
                </div>
            </div>

        </div>
    );
};

export default Login;