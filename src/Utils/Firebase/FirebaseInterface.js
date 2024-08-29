import {  collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { ADMIN_COLLECTION, USERS_COLLECTION } from "../../Utils/constants"

import db from "./Firebase";

export async function LogUser(type, user, password)
{
    const admin = collection(db, type);
    const q = query(admin, where("username" , "==", user) , where("password", "==", password))
    const adminRef = await getDocs(q);
    const adminData = adminRef.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    return adminData[0];
}
export async function isDocument(value, type, coll)
{
    const admin = collection(db, coll);
    const q = query(admin, where(type , "==", value))
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

export async function addDocument(document, coll)
{
    const userCollection = collection(db, coll);
    await addDoc(userCollection, { ...document });
}

