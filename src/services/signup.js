import firebase from '../env/firebase'
import app from '../env/firebase'
var handleSignUP = async (email, password) => {
    console.log(`${email} ${password}`)
    try {
        const user = await app
            .auth()
            .createUserWithEmailAndPassword(email, password);
        alert("account created")
    } catch (error) {
        alert(error);
    }
}

export default handleSignUP