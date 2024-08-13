import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.BoxTitle}>
            <Text style={styles.texTitle}>🔥Foguentas🔥</Text>
            <Text>13/08/2024</Text>
            <Text>Aula dia 13</Text>
        </View>
    );
}