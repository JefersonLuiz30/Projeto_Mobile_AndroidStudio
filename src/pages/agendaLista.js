// AgendaLista.js
import { useEffect, useState } from "react";
import { StyleSheet, Text, Touchable, View } from "react-native";
import { database } from "../services/database/firebase";
import { onValue, ref } from "firebase/database";
import { } from "@expo/vector-icons";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function AgendaList({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = ref(database, "person");

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

  console.log(users);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agenda de Contatos</Text>
      {users.map((user, index) => (
        <View key={user.id} style={styles.userItem}>
          <Text style={styles.userText}>{user.nome} -
            <FontAwesome name="calendar" size={24} color="black" />
            {user.teletone}</Text>
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
