import database from "../../firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

export const fetchBooksFromDatabase = () => {
  return getDocs(collection(database, "books"));
};

export const insertNewBook = async (book) => {
  try {
    await addDoc(collection(database, "books"), book);
    const newBookList = await fetchBooksFromDatabase();
    return newBookList;
  } catch (err) {
    console.error(err);
  }
};

export const deleteBookById = async (id) => {
  try {
    await deleteDoc(doc(database, "books", id));
  } catch (error) {
    console.error(error);
  }
};

export const updateBook = async (book) => {
  try {
    await updateDoc(doc(database, "books", book?.id), book);
  } catch (err) {
    console.error(err);
  }
};
