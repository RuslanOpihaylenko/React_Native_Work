import { View, Text } from "react-native";
import { RootStackParamList } from "../navigation/DetailsStackNavigator";
type Props = NativeStackScreenProps<RootStackParamList, "Details">
import { NativeStackScreenProps } from "@react-navigation/native-stack";
export default function DetailsScreen({route}: Props) {
    const {username} = route.params;
    return (
        <View>
      <Text>Деталі про користувача {username}</Text>
    </View>
    );
};