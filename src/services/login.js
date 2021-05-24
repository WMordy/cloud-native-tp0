import firebase from '../env/firebase'
import app from '../env/firebase'
var handleLogin = async (email, password) => {
    console.log(`${email} ${password}`)
    try {
            var user = await app.auth().signInWithEmailAndPassword(email, password)
            var result = await user.user
            window.location.href = "/home"
              
             
        
    } catch (error) {
        console.log(error);
    }
}

export default handleLogin