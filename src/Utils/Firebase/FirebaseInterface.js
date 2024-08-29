import {  collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { ADMIN_COLLECTION, USERS_COLLECTION } from "../../Utils/constants"

import db from "./Firebase";

export async function LogUser(type, user, password)
{
    const admin = collection(db, type);
    const q = query(admin, where("user" , "==", user) , where("password", "==", password))
    const adminRef = await getDocs(q);
    const adminData = adminRef.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    if(adminData.length > 0)
    {
        return true;
    }
    return false;

}
export async function isUser(type, user)
{
    const admin = collection(db, USERS_COLLECTION);
    const q = query(admin, where(type , "==", user))
    const adminRef = await getDocs(q);
    const adminData = adminRef.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    if(adminData.length > 0)
    {
        return true;
    }
    return false;
}

export async function addUser(user, password)
{
    const userCollection = collection(db, USERS_COLLECTION);
    await addDoc(userCollection, {
        user: user,
        password: password
      });
}

