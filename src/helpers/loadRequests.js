import { db } from '../firebase/firebase-config'
import { collection, query, getDocs } from "firebase/firestore";

export const loadRequests = async (uid) => {
    const requestsSnap = await getDocs(query(collection(db, `${uid}/services/requests`)));

    const requests = [];
    requestsSnap.forEach(snapHijo => {
        requests.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    return requests;
}