import {  collection, query, where, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
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

//return true if document exsist
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

//Add a new document to the database
export async function addDocument(document, coll)
{
    try {
        const userCollection = collection(db, coll);
        await addDoc(userCollection, { ...document });
        console.log("Document successfully Added!");
    } catch (error) {
        console.error("Error Adding document: ", error);
    }
}

export async function deleteDocument(collectionName, documentId)
{
    try {
        const docRef = doc(db, collectionName, documentId);
        await deleteDoc(docRef);
        console.log("Document successfully deleted!");
    } catch (error) {
        console.error("Error removing document: ", error);
    }
  };

  export async function updateDocument(collectionName, documentId, updatedData)
  {
    try {
        const docRef = doc(db, collectionName, documentId);
        await updateDoc(docRef, updatedData);
        console.log("Document successfully updated!");
    } catch (error) {
        console.error("Error updating document: ", error);
    }
  };

export async function getCollection(coll)
{
    const userCollection = collection(db, coll);
    const adminRef = await getDocs(userCollection);
    const adminData = adminRef.docs.map(doc => (
        {
            id: doc.id,
            ...doc.data()
        }
    ));
    return ([...adminData]);
}

export async function getPublicUsersOrders(collectionName)
{
    const admin = collection(db, collectionName);
    const q = query(admin, where("viewOrders", "==", true))
    const adminRef = await getDocs(q);
    const adminData = adminRef.docs.map(doc => ({
        ...doc.data()
    }));
    return adminData;
}

