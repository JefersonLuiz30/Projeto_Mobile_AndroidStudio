
```
// AgendaLista.js

import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { database } from "../services/database/firebase";
import { onValue, ref } from "firebase/database";

export default function AgendaList({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(database, "users");

    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formatDatas = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setUsers(formatDatas);
      } else {
        setUsers([]);
      }
    });

    return () => unsubscribe(); // Limpa o listener ao desmontar o componente
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda de Contatos</Text>
      {users.map((user, index) => (
        <View key={user.id} style={styles.userItem}>
          <Text style={styles.userText}>{user.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  userItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  userText: {
    fontSize: 16,
  },
});


```


###Explicação das alterações:

Uso de onValue : A função onValue é usada para monitorar alterações em tempo real no nó "users" do Realtime Database. Isso garante que a lista de usuários seja atualizada automaticamente quando houver alterações no banco de dados.

Gerenciamento de estado: O estado users é atualizado com a lista completa de usuários a cada vez que o listener onValue é acionado. Isso evita a concatenação desnecessária de arrays, garantindo que o estado seja sempre atualizado com os dados mais recentes.

Limpeza do listener: A função unsubscribe é chamada no retorno da função useEffect para remover o listener quando o componente é desmontado. Isso evita vazamentos de memória e garante que o listener não continue a ser executado após o componente ser removido da tela.

Chave única para cada item: A propriedade key é definida para cada item na lista usando o user.id para garantir que o React possa identificar e atualizar os itens corretamente.

Estilização: O estilo itemContainer foi removido, pois não era necessário para a funcionalidade do componente.

Com essas alterações, o código agora renderiza a lista de usuários corretamente e atualiza o estado de forma eficiente.