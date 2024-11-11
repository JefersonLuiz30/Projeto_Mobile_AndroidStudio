import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { getAllUser, newUserFatec } from "../services/realtime-database";
import { useContext, useState } from "react";
import AuthContext from "../contexts/auth";

const icon = require("../../assets/logosi.png");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { LoginUser } = useContext(AuthContext);

  const onGetAllUser = async () => {
    const lista = getAllUser();
  };

  const onNewUserFatec = async () => {
    const newuser = newUserFatec();
  };

  const onClickEntrar = async () => {
    const userLogin = await LoginUser(email, password);    
  };

  const OnClickRegistrar = () => {
    navigation.navigate("Registro", { name: "registro" });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icon} />
      <View style={styles.body}>
        <Text style={styles.title}>Fatec - Aula 21/10</Text>
        <View style={styles.areaInput}>
          <TextInput
            name="email"
            style={styles.textField}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            name="password"
            style={styles.textField}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity style={styles.button} onPress={onClickEntrar}>
            <Text style={(styles.buttonText, { color: "#fff" })}>Acessar</Text>
          </TouchableOpacity>
{/* 
          <TouchableOpacity style={styles.button}
             onPress={onNewUserFatec} >
            <Text style={(styles.buttonText, { color: "#fff" })}>
              teste
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}
             onPress={onGetAllUser} >
            <Text style={(styles.buttonText, { color: "#fff" })}>
              lista usuarios 
            </Text>
          </TouchableOpacity> */}

          <View style={styles.rodape}>
            <Text style={styles.rodapeText}>Não possui conta? {"   "}</Text>
            <TouchableOpacity onPress={OnClickRegistrar}>
              <Text
                style={
                  (styles.rodapeText,
                  { color: "red", fontWeight: 700, fontSize: 16 })
                }
              >
                Faça sua inscrição!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

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
    height: 230, 
    width: 230,  
    borderRadius: 75, 
    resizeMode: "cover", 
    marginTop: 15,
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
    color: "#000",
    fontWeight: "300",
    fontSize: 24,
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
    backgroundColor: "blue",
    borderRadius: 16,
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
    gap: 20,
  },

  rodapeText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  buttonText: {
    fontSize: 16,
    color: "red",
  },
});

export default Login;
