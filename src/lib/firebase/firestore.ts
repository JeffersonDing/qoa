import { db } from "./firebaseConfig";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";

export const chcekUserAdmin = async (uid: string): Promise<boolean> => {
  const docRef = doc(db, "admins", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    if (data && data.isAdmin) {
      return true;
    }
  }
  return false;
};

export const checkCurrentCode = async (
  otp: string
): Promise<{
  validate: boolean;
  event: string;
  id: string;
}> => {
  const docRef = doc(db, "codes", otp);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    if (docSnap.data().isActive) {
      return {
        validate: true,
        event: docSnap.data().event,
        id: docSnap.data().id,
      };
    }
  }
  return {
    validate: false,
    event: "",
    id: "",
  };
};

export const expireCode = async (
  otp: string,
  event: string
): Promise<string> => {
  //expires the given code, add new code to db, return the new code
  if (otp) {
    const docRef = doc(db, "codes", otp);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, {
        isActive: false,
      });
    }
  }
  // generate new random 6 digit code
  const newCode = Math.floor(100000 + Math.random() * 900000).toString();
  const newDocRef = doc(db, "codes", newCode);
  const newDocSnap = await getDoc(newDocRef);
  if (newDocSnap.exists()) {
    await updateDoc(newDocRef, {
      isActive: true,
      event,
    });
  } else {
    await setDoc(newDocRef, {
      isActive: true,
      event,
    });
  }
  // return the new code
  return newCode;
};

export const createEvent = async (event: string) => {
  // create event in firestore
  const docRef = doc(db, "events", event);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    await setDoc(docRef, {
      event,
    });
  } else {
    await updateDoc(docRef, {
      event,
    });
  }
};

export const addStudentToEvent = async (
  event: string,
  name: string | undefined
) => {
  if (!name || !event) {
    return;
  }
  const docRef = doc(db, "events", event);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    await updateDoc(docRef, {
      students: [name],
    });
  } else {
    await setDoc(docRef, {
      students: [name],
    });
  }
};
