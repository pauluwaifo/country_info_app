import React from "react";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { ApiContext } from "@/context/ApiContext";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import Icon from "react-native-vector-icons/Feather";
import { usePathname } from "expo-router";
import { useNavigation } from "expo-router";

const NavBar: React.FC = () => {
  const { search, setSearch, setActivateFilter, activateFilter } =
    useContext(ApiContext);
  const { state, dispatch } = useContext(ThemeContext);
  const logo = require("@/assets/images/logo.png");
  const logoLight = require("@/assets/images/logo-light.png");
  const pathname = usePathname();
  const segments = pathname.split("/");
  const country = segments[2];
  const navigate = useNavigation();

  if (pathname == "/") {
    return (
      <ThemedView style={styles.container}>
        {/* header/theme btn */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image
            source={state.lightMode ? logoLight : logo}
            style={styles.image}
          />
          <TouchableOpacity
            onPress={() => dispatch({ type: "TOGGLE_THEME" })}
            style={styles.themeBtn}
          >
            <Icon
              name={state.lightMode ? "sun" : "moon"}
              size={20}
              color={state.lightMode ? "black" : "white"}
            />
          </TouchableOpacity>
        </View>

        {/* search */}
        <View style={styles.input}>
          <Icon
            name="search"
            size={20}
            color={state.lightMode ? "black" : "white"}
          />
          <TextInput
            placeholder="Search Country"
            placeholderTextColor={logoLight ? "#667085" : "#EAECF0"}
            value={search}
            onChangeText={setSearch}
            style={[
              styles.textInput,
              { color: state.lightMode ? "#667085" : "#EAECF0" },
            ]}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.btn}>
            <Icon
              name="globe"
              size={20}
              color={state.lightMode ? "black" : "white"}
            />
            <ThemedText>EN</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={() => setActivateFilter(!activateFilter)}
          >
            <Icon
              name="filter"
              size={20}
              color={state.lightMode ? "black" : "white"}
            />
            <ThemedText>Filter</ThemedText>
          </TouchableOpacity>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        ></View>
      </ThemedView>
    );
  }
  return (
    <ThemedView
      style={[
        styles.container,
        { padding: 20, flexDirection: "row", alignItems: "center" },
      ]}
    >
      <TouchableOpacity
        style={{ flexBasis: "30%" }}
        onPress={() => navigate.goBack()}
      >
        <Icon
          name="arrow-left"
          size={20}
          color={state.lightMode ? "black" : "white"}
        />
      </TouchableOpacity>
      <ThemedText style={{ fontSize: 20, fontWeight: "600", flexBasis: "60%" }}>
        {country}
      </ThemedText>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    backgroundColor: "#98A2B333",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 5,
  },
  btn: {
    borderWidth: 0.2,
    borderColor: "#A9B8D4",
    flexDirection: "row",
    gap: 5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  textInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: "light",
    textAlign: "center",
    height: 40,
  },
  image: {
    width: "35%",
    height: undefined,
    aspectRatio: 4,
    resizeMode: "contain",
  },
  themeBtn: {
    backgroundColor: "#98A2B333",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 20,
  },
});

export default NavBar;
