import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
Card:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

},
titleProdutos: {
    fontWeight: '700',
    fontSize: 22,
    letterSpacing: 0.5,
    marginTop: 16,
},
produtosContainer1: {
    padding: 0,
    paddingBottom: 10,
    marginLeft: -13,
    marginBottom: 50,
    height: 260,
},
produtosContainer2: {
    padding: 0,
    marginHorizontal: -13,
    marginBottom: 130,
},
produtoContainer: {
    width: 165,
    height: 229,
    alignItems: 'center',
    justifyContent: 'center',
},
produtoContainerImage: {
    width: 133,
    height: 133,
    borderRadius: 5,
    marginBottom: 10
},
textCardTitle: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.5,
},
textCardValue: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.5,
    color: '#dc1e3e',
}
});

export default styles;