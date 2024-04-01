import React, { useState } from "react";
import { View, Text, TextInput, Image, Button, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Cadastro = ({ onCadastroSubmit }) => {
	const [nome, setNome] = useState("");
	const [contato, setContato] = useState("");
	const [imagem, setImagem] = useState(null);

	const handleCadastro = () => {
		if (!nome || !contato) {
			showAlert("Erro", "Preencha todos os campos.");
			return;
		}
		const novoFornecedor = { nome, contato, imagem };
		onCadastroSubmit(novoFornecedor);
		clearFields();
	};

	const showAlert = (title, message) => {
		Alert.alert(title, message);
	};

	const clearFields = () => {
		setNome("");
		setContato("");
		setImagem(null);
	};

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			setImagem(result.assets && result.assets.length > 0 ? result.assets[0].uri : null);
		}
	};

	return (
		<View style={{ margin: 20 }}>
			<Text style={styles.title}>Cadastro</Text>

			<TextInput style={styles.input} placeholder="Nome do Fornecedor" value={nome} onChangeText={(text) => setNome(text)} />
			<TextInput
				style={styles.input}
				placeholder="Contato"
				value={contato}
				onChangeText={(text) => setContato(text)}
			/>

			<Button title="Escolher imagem" onPress={pickImage} />
			{imagem && <Image source={{ uri: imagem }} style={styles.image} />}
			<Button title="Cadastrar" onPress={handleCadastro} />
		</View>
	);
};

const styles = {
	title: {
		fontSize: 33,
		marginBottom: 30,
		textAlign: "center",
	},
	input: {
		fontSize: 20,
		margin: 5,
		padding: 5,
		borderWidth: 2,
		borderRadius: 5,
	},
	image: {
		width: 200,
		height: 200,
		marginTop: 10,
		marginBottom: 10,
	},
};

export default Cadastro;