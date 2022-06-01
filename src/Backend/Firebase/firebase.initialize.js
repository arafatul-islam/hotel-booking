import { initializeApp } from 'firebase/app'
import firebaseConfig from './firebase.config'
import { getFirestore } from '@firebase/firestore'
const initializeAuthentication = () => {
  initializeApp(firebaseConfig)
}
export const db = getFirestore(initializeApp(firebaseConfig))
export default initializeAuthentication
