import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getDatabase, ref, onValue } from "firebase/database"; // Importação correta do Firebase
import { app } from "../services/database/firebase"; // Importando a instância do Firebase configurada
import { ref, get } from "firebase/database";

export default function AgendaList({ navigation }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const db = getDatabase(app); // Obter a instância do banco de dados
        const usersRef = ref(db, 'users'); // Referência ao nó 'users' no banco

        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const formattedData = Object.entries(data).map(([id, value]) => ({
                    id,
                    ...value
                }));
                setUsers(formattedData);
            }
        });

        // Cleanup: Remove o listener quando o componente for desmontado
        return () => {
            usersRef.off();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Agenda de Contatos</Text>
            {users.map((user, index) => (
                <View key={index} style={styles.userItem}>
                    <Text>{user.name}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    userItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    userText: {
        fontSize: 16,
    },
    itemContainer : {
        width: "100%",
        backgroundColor: "#f9c561"
    }
});
