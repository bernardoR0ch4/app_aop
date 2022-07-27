import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Keyboard } from 'react-native';
import { Text, Card } from 'react-native-elements';
import AxiosInstance from '../../api/AxiosInstance';
import styles from './styles'

type ProductsType = {
    id: number;
    title: string
    price: number;
    category: string;
    description: string;
    image: string;
}

const Products = ({ navigation }) => {
    const [products, setProducts] = useState<ProductsType[]>([]);

    useEffect(() => {
        getDadosProducts();
    }, []);

    const getDadosProducts = async () => {
        AxiosInstance.get(
            `/products`
        ).then(result => {
            console.log('Dados dos produtos: ' + JSON.stringify(result.data));
            setProducts(result.data);
        }).catch((error) => {
            console.log("Erro ao carregar a lista de produtos - " + JSON.stringify(error));
        });
    }
    return (
        <ScrollView >
            <ScrollView >
                {
                    products.map((k, i) => (
                        <TouchableOpacity key={i}
                            onPress={() => console.log(`Produto ${k.title} foi clicado`)}
                        /*style={styles.botao_categoria}*/
                        >
                            <View /*style={styles.view_itens_categoria}*/>
                                <Card>
                                    <Card.Image
                                        source={{ uri: k.image }}
                                        width={undefined}
                                        height={undefined}
                                    />

                                    <Card.Divider />
                                    <Card.Title >
                                        {k.title}
                                    </Card.Title>
                                    <Text >
                                        {k.description}
                                    </Text>
                                    <Card.Divider />
                                    <Text>
                                     ${k.price}
                                    </Text>

                                </Card>

                            </View>
                        </TouchableOpacity>

                    ))
                }

            </ScrollView>
        </ScrollView>
    );
}


export default Products;
