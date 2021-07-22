import { View, StyleSheet } from "react-native";

export default function App() {
  const dynamicStyle = { marginLeft: 5 };
  return (
    <div className="App">
      <View style={style.wrap}>
        <View style={StyleSheet.flatten([style.inner, dynamicStyle])} />
      </View>
    </div>
  );
}

const style = StyleSheet.create({
  wrap: {
    backgroundColor: "yellow",
    marginLeft: 5
  },
  inner: {
    backgroundColor: "red",
    height: 100,
    margin: 10
  }
});
