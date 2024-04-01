import { View, Text, Image } from "react-native";

const Lista = ({ fornecedores }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Lista:</Text>

			{fornecedores.map((fornecedor, index) => (
				<View key={index} style={styles.fornecedorContainer}>
					<Text style={styles.nomeFornecedor}>Nome: {fornecedor.nome}</Text>
					<Text>Contato: {fornecedor.contato}</Text>
					{fornecedor.imagem && <Image source={{ uri: fornecedor.imagem }} style={styles.imagemFornecedor} />}
				</View>
			))}
		</View>
	);
};

const styles = {
	container: {
		margin: 20,
	},
	title: {
		fontSize: 24,
		marginBottom: 10,
		textAlign: "center",
	},
	input: {
		fontSize: 16,
		marginBottom: 10,
		padding: 10,
		borderWidth: 1,
		borderRadius: 5,
	},
	fornecedorContainer: {
		marginBottom: 20,
        borderWidth: 2,
        padding: 15,
	},
	nomeFornecedor: {
		fontSize: 20,
		fontWeight: "bold",
	},
	imagemFornecedor: {
		width: 200,
		height: 200,
		marginTop: 10
	},
};

export default Lista;