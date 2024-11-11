import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AuthContext from '../contexts/auth'
import PersonContext from "../contexts/person";

const icon = require("../../assets/favicon.png");

const Home = ({ navigation }) => {
  const { user, LogoutUser } = useContext(AuthContext);
  const { person } = useContext(PersonContext);
  
  // console.log( person );

  async function handleOnClickSair() {
    // console.log("saindo: ", user);
    await LogoutUser();
  }

  return (
    <View style={styles.container}>

      <View style={styles.body}>
        <Text style={styles.title}>Home</Text>
        <View style={styles.areaInput}>
          <Text>area principal</Text>
          <Text>  - - - - - - - - - - - - - </Text>
          <Text> email : {user?.email} </Text>
          <Text> logado : {user?.uuid} </Text>
          <Text> token : {user?.token}</Text>
          <Text> - - - - - - - - - - - - - </Text>

          <TouchableOpacity style={styles.button}
            onPress={handleOnClickSair}
          >
            <Text style={(styles.buttonText)}>
              Sair / Finalizar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    height: "60%",
    width: "100%",
    alignItems: "center",
  },
  image: {
    height: "20%",
    width: "100%",
    resizeMode: "contain",
  },
  areaInput: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 32,
    marginTop: 15,
  },
  textField: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    height: 50,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#778eec",
    borderRadius: 10,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  rodape: {
    flexDirection: "row",
    width: "62.75%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  rodapeText: {
    fontSize: 11,
    color: "black"
  },
  buttonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold"
  },
});

export default Home;