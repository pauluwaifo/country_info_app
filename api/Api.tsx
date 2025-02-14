import {COUNTRY_API_KEY} from "@env"

const getAllCountries = async () => {
  try {
    const response = await fetch(
      "https://restfulcountries.com/api/v1/countries",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 2114|2hKw6zSnvdsAA0E67AaXbaDm5hpHrrjfUNhcEuuX",
        },
        method: "GET",
      }
    );
    return response.json();
  } catch (err) {
    const response = {
      message: "Error fetching data",
      error: err instanceof Error ? err.message : String(err),
    };
    return response;
  }
};

const getSingleCountry = async (countryId: string) => {
  const response = await fetch(
    `https://restfulcountries.com/api/v1/countries/${countryId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${COUNTRY_API_KEY}`,
      },
      method: "GET",
    }
  );
  return response.json();
};

export { getAllCountries, getSingleCountry };
