import React from "react";
import AxiosInstance from "../../api/AxiosInstance";

import { View, Text, Alert, Modal } from "react-native";
import { Button, Icon, Input } from "react-native-elements";


export default function Form(props: any) {

  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState('');
  const [category, setCategory] = React.useState('');



  const [isLoading, setLoading] = React.useState(false)

  const clearInputs = () => {
    setTitle('');
    setPrice('');
    setDescription('');
    setImage('');
    setCategory
  }

  const handleReturn = () => {
    clearInputs();
    props.navigation.goBack();
  }

  const handleCadastrar = async () => {
    console.log('entrou aqui')
    try {
      setLoading(true)
      await AxiosInstance.post('/products', {
        title, price, description, image, category
      })
      Alert.alert(
        "Sucesso",
      );
      clearInputs();
      setLoading(false);
      props.navigation.goBack();
    } catch (error) {
      console.log('Erro ao cadastrar o cliente: ' + JSON.stringify(error))
    } 
  }

  return (
    <View

    >
      <View >
        <Input
          onChangeText={setTitle}
          placeholder="Title"
          keyboardType="default"

          autoCompleteType={undefined}
        />
        <Input
          onChangeText={setPrice}
          placeholder="Price"
          keyboardType="default"


          autoCompleteType={undefined}
        />
        <Input
          onChangeText={setDescription}
          placeholder="Descrição"
          keyboardType="default"


          autoCompleteType={undefined}
        />
        <Input
          onChangeText={setImage}
          placeholder="Endereço Imagem"
          keyboardType="default"

          autoCompleteType={undefined}
        />
        <Input
          onChangeText={setCategory}
          placeholder="Category"
          keyboardType="default"

          autoCompleteType={undefined}
        />
        <Button
          title='CADASTRAR'
          onPress={handleCadastrar}
        />
      </View>
    </View>

  );

}