// videos usado com base: https://www.youtube.com/watch?v=1aL-f5ydrc8&list=PLWUFLphNVZjtnnD5YH5N-Fko-_RaSWIKQ&index=5


// agenda
// apelido
// :
// "teste"
// email
// :
// "teste@gmail.com"
// imageUrl
// :
// "https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fman-user-color-icon%2F&psig=AOvVaw20t50-nPmG9PRONmAjnDaQ&ust=1728387781997000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjjxbGY_IgDFQAAAAAdAAAAABAE"
// nome
// :
// "teste"
// observacao
// :
// "teste inclusão manual"
// telefone
// :
// "16 99999-9999"
// uuid
// :
// "Zl9bDgQi8BP7ISttiBOCjqnOOew1"



import { db } from './database/firebase'
import { set, push, ref, get } from "firebase/database";

export function newUserFatec() {
    const newDocRed = push(ref(db,"agenda"))
    set(newDocRed,{
        nome: "teste.gmail",
        email: "teste@gmail.com",
        imageUrl : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Fman-user-color-icon%2F&psig=AOvVaw20t50-nPmG9PRONmAjnDaQ&ust=1728387781997000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjjxbGY_IgDFQAAAAAdAAAAABAE",
        uuidAuth: "Zl9bDgQi8BP7ISttiBOCjqnOOew1",
        teletone: "16 9.9999-1199",
        observacao: "teste inclusao via função"
    })
    .then( ()=>{
        return { success: true , message: "usuario criado com sucesso"}
    })
    .catch( (error)=>{
        return { success: false , message: `falha ao Incluir o ususario : ${error.message}`}
    });
  }

  export async function getAllUser() {
    const usersArray = [];
    const dbref = ref(db,"agenda");
    const snapshot = await get(dbref);
    if (snapshot.exists()) {
        usersArray.push(...Object.values(snapshot.val())); // Adiciona os usuários ao array
        console.log(usersArray);
        const jsonResponse = JSON.stringify(usersArray); // Converte para JSON
        return jsonResponse;
    } else {
        return {};
    }
}

export async function getAllAgenda() {
    const usersArray = [];

    const dbRef = ref(db, "agenda");
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
        usersArray.push(...Object.values(snapshot.val())); // Adiciona os usuários ao array
        console.log("get: ", usersArray);
        
        const jsonResponse = JSON.stringify(usersArray); // Converte para JSON
        console.log("get-json: ", jsonResponse);

        return jsonResponse; // Retorna o array de objetos formatados
    } else {
        console.log("Nenhum dado encontrado.");
        return [];
    }
}