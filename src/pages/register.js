import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import AuthContext from "../contexts/auth";
import { newPerson } from "../services/personService";

const icon = require("../../assets/logosi.png");

const Register = ({ navigation }) => {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const { createUser } = useContext(AuthContext)

  const handleReturnLogin = () => {
    navigation.navigate("Login", { name: "login" });
  }

  async function handleOnClick() {
    const uuid =" TEste teste;"
    const person= newPerson(nome, email, telefone, uuid);

    const usuario = await createUser(email, password);
    if (usuario){
      console.log(usuario);
      const uuid = usuario?.uuid;
      const person = newPerson(nome, telefone, email, uuid)
    }
    console.log(usuario);
  }

  return (

    <ScrollView>



      <View style={styles.container}>
        <Image style={styles.image} source={icon} />
        <View style={styles.body}>
          <Text style={styles.title}>Registro</Text>
          <View style={styles.areaInput}>

            <TextInput
              name="nome"
              style={styles.textField}
              placeholder=" informe seu Nome"
              keyboardType="default"
              onChangeText={text => setNome(text)}
            />

            <TextInput
              name="telefone"
              style={styles.textField}
              placeholder=" informe seu Telefone"
              keyboardType="phone-pad"
              onChangeText={text => setTelefone(text)}
            />

            <TextInput
              name="email"
              style={styles.textField}
              placeholder=" informe seu Email"
              keyboardType="default"
              onChangeText={text => setEmail(text)}
            />


            <TextInput
              name="password"
              style={styles.textField}
              placeholder="informe sua senha"
              keyboardType="default"
              secureTextEntry
              onChangeText={text => setPassword(text)}
            />
            <TextInput
              name="password2"
              style={styles.textField}
              placeholder="repita a senha"
              keyboardType="default"
              secureTextEntry
              onChangeText={text => setPassword2(text)}
            />
            <TouchableOpacity style={styles.button}
              onPress={() => handleOnClick()}
            >
              <Text style={(styles.buttonText, { color: "#F0F8FF" })}>
                Cadastro
              </Text>
            </TouchableOpacity>

            <View style={styles.rodape}>
              <Text style={styles.rodapeText}>Já possui conta? {"   "}</Text>
              <TouchableOpacity onPress={handleReturnLogin}>
                <Text
                  style={
                    (styles.rodapeText,
                      { color: "#000", fontWeight: 700, fontSize: 16 })
                  }
                >
                  Voltar ao login
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.rodape}>
            </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>

    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F8FF",
    marginTop: 30,
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
    backgroundColor: "#006400",
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
    color: "#fff",
  },
});

export default Register;