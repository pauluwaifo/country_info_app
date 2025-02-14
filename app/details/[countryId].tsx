import React, { Children, useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { getSingleCountry } from "@/api/Api";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import LoadingScreen from "@/components/loading_screen";

interface InfoProps {
  children: React.ReactNode;
  name: string;
}

const CountryDetails: React.FC = () => {
  const { countryId } = useLocalSearchParams();
  const [countryDetails, setCountryDetails] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await getSingleCountry(countryId as string);
        setCountryDetails(response?.data);
      } catch (err) {
        console.log(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [countryId]);

  const Info: React.FC<InfoProps> = ({ children, name }) => {
    return (
      <ThemedText style={{ fontSize: 16, fontWeight: "600" }}>
        {name}:{" "}
        <ThemedText style={{ fontWeight: "300" }}>{children}</ThemedText>
      </ThemedText>
    );
  };

  return (
    <React.Fragment>
      {loading ? (
        <LoadingScreen />
      ) : (
        <ThemedView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View>
              <Image
                source={{ uri: countryDetails?.href?.flag }}
                style={styles.flag}
              />
            </View>

            <View>
              <Info name="Full Name">{countryDetails?.full_name}</Info>
              <Info name="Population">{countryDetails?.population}</Info>
              <Info name="Region">{countryDetails?.continent}</Info>
              <Info name="Capital">{countryDetails?.capital}</Info>
            </View>

            <View>
              <Info name="President">
                {countryDetails?.current_president
                  ? countryDetails?.current_president?.name
                  : "N/A"}
              </Info>
              <Info name="Gender">
                {countryDetails?.current_president
                  ? countryDetails?.current_president?.gender
                  : "N/A"}
              </Info>
              <Info name="Appointment start date">
                {countryDetails?.current_president
                  ? countryDetails?.current_president?.appointment_start_date
                  : "N/A"}
              </Info>
              <Info name="Appointment end date">N/A</Info>
            </View>

            <View>
              <Info name="Size">{countryDetails?.size}</Info>
              <Info name="Currency">{countryDetails?.currency}</Info>
              <Info name="Dialing code">+{countryDetails?.phone_code}</Info>
            </View>

            <View>
              <Info name="Independence">
                {countryDetails?.independence_date
                  ? countryDetails?.independence_date
                  : "N/A"}
              </Info>
              <Info name="Country code">{countryDetails?.iso3}</Info>
              <Info name="Timezone">N/A</Info>
            </View>
          </ScrollView>
        </ThemedView>
      )}
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    gap: 20,
  },
  flag: {
    width: "100%",
    height: undefined,
    borderRadius: 10,
    aspectRatio: 1.7,
  },
});

export default CountryDetails;
