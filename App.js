import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Cadastro from "./components/Cadastro";
import Lista from "./components/Lista";


export default function App() {
	const [fornecedores, setFornecedores] = useState([]);

	const handleCadastro = (novoFornecedor) => {
		setFornecedores([...fornecedores, novoFornecedor]);
	};

	return (
		<ScrollView contentContainerStyle={styles.scrollContainer}>
			<View style={styles.container}>
				<Cadastro onCadastroSubmit={handleCadastro} />
				<Lista fornecedores={fornecedores} />
				<StatusBar style="auto" />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		flexGrow: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});