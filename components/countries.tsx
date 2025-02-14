import React, { useEffect, useState, useContext, useRef } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { ApiContext } from "@/context/ApiContext";
import ThemedText from "./ThemedText";
import ThemedView from "./ThemedView";
import FilterByContinent from "./filter_modal";
import { useRouter } from "expo-router";
import LoadingScreen from "./loading_screen";

const Countries = () => {
  const { state, search, activateFilter } = useContext(ApiContext);
  const { countries: data, loading } = state;
  const [countries, setCountries] = useState<string[]>([]);
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!loading) setCountries(data);
  }, [data]);

  const groupCountriesByLetter = (countries: any[]) => {
    return countries.reduce((acc: any, country: any) => {
      const firstLetter = country.name[0].toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(country);
      return acc;
    }, {});
  };

  const groupedCountries = groupCountriesByLetter(countries);

  const toggleContinent = (continent: string) => {
    setSelectedContinents((prev) =>
      prev.includes(continent)
        ? prev.filter((c) => c !== continent)
        : [...prev, continent]
    );
  };

  const filteredCountries = Object.keys(groupedCountries)
    .map((letter) => {
      const filteredCountriesByLetter = groupedCountries[letter].filter(
        (country: any) =>
          country.name.toLowerCase().includes(search.toLowerCase()) &&
          (selectedContinents.length === 0 ||
            selectedContinents.includes(country.continent))
      );

      if (filteredCountriesByLetter.length > 0) {
        return (
          <View key={letter}>
            <Text
              style={{
                fontSize: 15,
                color: "#667085",
                marginVertical: 10,
                marginBottom: 20,
              }}
            >
              {letter}
            </Text>
            <View style={{ gap: 20 }}>
              {filteredCountriesByLetter.map((country: any) => (
                <TouchableOpacity
                  key={country.name}
                  style={styles.countryContainer}
                  onPress={() => router.push(`/details/${country.name}`)}
                >
                  <Image
                    source={{ uri: country.href.flag }}
                    style={styles.flag}
                  />
                  <View style={styles.countryInfo}>
                    <ThemedText>{country.name}</ThemedText>
                    <Text style={styles.capitalText}>{country.capital}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        );
      }
    })
    .filter(Boolean);

  return (
    <React.Fragment>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ThemedView>
          {activateFilter && (
            <FilterByContinent
              toggleContinent={toggleContinent}
              selectedContinents={selectedContinents}
              setSelectedContinents={setSelectedContinents}
            />
          )}

          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {filteredCountries}
          </ScrollView>
        </ThemedView>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  countryContainer: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  flag: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  countryInfo: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 3,
  },
  capitalText: {
    color: "#667085",
  },
  icon: {
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },

  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});

export default Countries;
