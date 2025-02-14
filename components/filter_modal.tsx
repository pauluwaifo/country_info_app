import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import Icon from "react-native-vector-icons/Feather";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import { ApiContext } from "@/context/ApiContext";

interface Props {
  toggleContinent: (value: string) => void;
  selectedContinents: string[];
  setSelectedContinents: React.Dispatch<any>;
}

const FilterByContinent: React.FC<Props> = ({
  toggleContinent,
  selectedContinents,
  setSelectedContinents,
}) => {
  const { state } = useContext(ThemeContext);
  const { lightMode } = state;
  const [active, setActive] = useState<boolean>(true);

  const {
    state: data,
    activateFilter,
    setActivateFilter,
  } = useContext(ApiContext);
  const { countries } = data;
  const uniqueContinents = countries.reduce((acc: any, country: any) => {
    if (!acc[country.continent]) {
      acc[country.continent] = true;
    }
    return acc;
  }, {});

  const continents = Object.keys(uniqueContinents);

  return (
    <ThemedView style={styles.container}>
      <View
        style={[
          styles.filter,
          { width: "100%", paddingHorizontal: 20, marginTop: 20 },
        ]}
      >
        <ThemedText style={{ fontSize: 20, fontWeight: "600" }}>
          Filter
        </ThemedText>
        <TouchableOpacity onPress={() => setActivateFilter(!activateFilter)}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 5,
              backgroundColor: "#98A2B3",
              marginRight: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="x" size={12} color={"white"} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={[styles.filter, { paddingHorizontal: 20, marginTop: 15 }]}>
        <ThemedText style={{ fontSize: 17 }}>Continent</ThemedText>
        <TouchableOpacity onPress={() => setActive(!active)}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 5,
              marginRight: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name={active ? "chevron-up" : "chevron-down"}
              size={20}
              color={lightMode ? "black" : "white"}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          gap: 16,
          paddingHorizontal: 20,
          width: "100%",
        }}
      >
        {continents.map((continent: string, index: number) => (
          <View
            key={index}
            style={{
              height: active ? "auto" : 40,
              opacity: active ? 1 : 0,
              display: active ? "flex" : "none",
            }}
          >
            {continent !== "null" && (
              <TouchableOpacity
                style={styles.filter}
                onPress={() => toggleContinent(continent)}
              >
                <ThemedText style={{ fontSize: 16 }}>{continent}</ThemedText>

                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: lightMode
                    ? "black"
                    : "white",
                    backgroundColor: selectedContinents.includes(continent)
                      ? lightMode
                        ? "black"
                        : "white"
                      : "transparent",
                    marginRight: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedContinents.includes(continent) ? (
                    <Icon
                      name="check"
                      size={12}
                      color={lightMode ? "white" : "black"}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>

      <View style={[styles.filter, { paddingHorizontal: 20, }]}>
        <ThemedText style={{ fontSize: 17 }}>Timezone</ThemedText>
        <TouchableOpacity onPress={() => setActive(!active)}>
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 5,
              marginRight: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name={active ? "chevron-up" : "chevron-down"}
              size={20}
              color={lightMode ? "black" : "white"}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.filter,
          {
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: 20,
          },
        ]}
      >
        <TouchableOpacity
          style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: lightMode ? "black" : "white",
            borderRadius: 5,
          }}
          onPress={() => setSelectedContinents([])}
        >
          <ThemedText style={{ fontSize: 15 }}>Reset</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActivateFilter(!activateFilter)}
          style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            backgroundColor: "#FF6C00CC",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>Show results</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    position: "absolute",
    flex: 1,
    zIndex: 999,
    bottom: 0,
    left: 0,
    height: "100%",
    width: "100%",
    gap: 18,
    borderWidth: 0.2,
    borderTopColor: "#A9B8D4",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  filter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default FilterByContinent;
