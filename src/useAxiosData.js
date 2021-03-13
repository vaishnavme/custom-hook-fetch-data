import { useState, useEffect } from "react";
import axios from "axios";

export default function useAxiosData(url) {
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(url);
        setAddresses(response.data.addresses);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const addDataHandler = async (data) => {
    try {
      const {
        data: { address }
      } = await axios.post(url, {
        address: {
          city: data
        }
      });
      setAddresses((prevList) => prevList.concat(address));
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Axios: ", addresses);
  return { addresses, addDataHandler };
}
