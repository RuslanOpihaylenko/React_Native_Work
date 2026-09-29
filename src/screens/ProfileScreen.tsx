import { Text, View, Button, TextInput } from "react-native";
import { RootStackParamList } from "../navigation/DetailsStackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
type Props = NativeStackScreenProps<RootStackParamList, "Profile">;
export default function ProfileScreen({ navigation }: Props) {
  const [name, setName] = useState<string>("");
    return (
    <View>
      <Text>Профіль</Text>
      <TextInput placeholder="Enter Name" value={name} onChangeText={setName}/>
      <Button
        title="Відкрити деталі"
        onPress={() => {
        if(name.trim() === "") {
            return;
        }
          navigation.navigate("Details", { username: name});
        }}
      />
    </View>
  );
}