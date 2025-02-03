import axios from "axios";
import { api_base_url, api_key } from "../const";

export const getMoviesService = async (search) => {
  try {
    const res = await axios.get(
      api_base_url + "?apikey=" + api_key + "&s=" + search
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// api_base_url + "?apikey=" + api_key + "&s=" + search

// const res = {
//     data: [marverl, barbie, superman],
//     status: 200, 500, 400
//     error: true o false
//   }
