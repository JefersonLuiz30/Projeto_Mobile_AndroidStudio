import { db } from './database/firebase'
import { set, push, ref, get } from "firebase/database";

export function newPerson(nome, email, telefone, uuid) {
    const newDocRed = push(ref(db, "person"))
    set(newDocRed, {
        nome: nome,
        email: email,
        uuidAuth: uuid,
        teletone: telefone,

    })
        .then(() => {
            return { success: true, message: "usuario criado com sucesso" }
        })
        .catch((error) => {
            return { success: false, message: `falha ao Incluir o ususario : ${error.message}` }
        });
}

