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
    console.log('entrou aqui', title)
    try {
      setLoading(true)
      await AxiosInstance.post('/products', {
        title: title, price: price, description: description, image: image, category: category
      })
      Alert.alert(
        "Sucesso",
      );
      console.log("Nome:", title, "Preço:", price, "Descrição:", description, "Imagem:", image, "Categoria:", category, "[*If you send an object like the code above, it will return you an object with a new id. remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error. You can check it on: https://fakestoreapi.com/docs]")
      clearInputs();
      setLoading(false);
      props.navigation.goBack();
    } catch (error) {
      console.log('Erro ao cadastrar o produto: ' + JSON.stringify(error))
    }
  }

  return (
    <View>
      <View>
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
          placeholder="Description"
          keyboardType="default"


          autoCompleteType={undefined}
        />
        <Input
          onChangeText={setImage}
          placeholder="Image URL"
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