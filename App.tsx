import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import CalcInput from "./components/CalcInput";

export default function App() {
  const [volume, setVolume] = useState("");
  const [alcoholAmount, setAlcoholAmount] = useState("");
  const [price, setPrice] = useState("");

  const numberOfUnits =
    (parseFloat(volume) * parseFloat(alcoholAmount) * 0.789) / 1200;

  const krPerUnit = parseFloat(price) / numberOfUnits;

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Alculator</Text>

      <View style={{ width: "50%" }}>
        <CalcInput
          label="Mængde"
          affix="ml."
          value={volume}
          onChange={(text) => setVolume(text)}
        />
        <CalcInput
          label="Alkoholprocent"
          affix="%"
          value={alcoholAmount}
          onChange={(text) => setAlcoholAmount(text)}
        />
        <CalcInput
          label="Pris"
          affix="kr."
          value={price}
          onChange={(text) => setPrice(text)}
        />

        <View style={{ marginTop: 30 }}>
          <Text variant="bodyLarge">
            Genstande: {isNaN(numberOfUnits) ? 0 : numberOfUnits.toFixed(1)}
          </Text>
          <Text variant="bodyLarge">
            Pris pr. genstand: {isNaN(krPerUnit) ? 0 : krPerUnit.toFixed(1)} kr.
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
