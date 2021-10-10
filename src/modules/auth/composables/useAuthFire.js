import { auth, firebase } from "src/firebase";
 import { useRouter } from "vue-router";

const useAuthFire = () => {
  const router = useRouter()
  const loginUser = async (email, password) => {
    
    try {
      const resp = await firebase.auth().signInWithEmailAndPassword(email, password)

      
      console.log(resp);
      router.push({ name: 'dashboard' })
    } catch (error) {
     return  {
        ok:false, message:error.message
      }
    }

  
  };
  return {
    loginUser
  }
};
export default useAuthFire;
