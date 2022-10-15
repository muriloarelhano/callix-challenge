import axios from "axios";
const spaceXApiHttpClient = axios.create({
  baseURL: process.env.REACT_APP_SPACEX_API_URL || "http://localhost:3000",
});

export const getNextLaunch = async (
  setData: any,
  setError: any,
  setLoading: any
) => {
  setLoading(true);
  try {
    const data = (await spaceXApiHttpClient.get("launches/next")).data;
    setLoading(false);
    setError(false);
    setData(data);
  } catch (error) {}
};
export const getLastLaunch = async (
  setData: any,
  setError: any,
  setLoading: any
) => {
  try {
    const data = (await spaceXApiHttpClient.get("launches/last")).data;
    setLoading(false);
    setError(false);
    setData(data);
    return data;
  } catch (error) {}
};
export const getUpcomingLaunches = async (
  setData: any,
  setError: any,
  setLoading: any
) => {
  try {
    const data = (await spaceXApiHttpClient.get("launches/upcoming")).data;
    setLoading(false);
    setError(false);
    setData(data);
    return data;
  } catch (error) {}
};
export const getPastLaunches = async (
  setData: any,
  setError: any,
  setLoading: any
) => {
  try {
    const data = (await spaceXApiHttpClient.get("launches/past")).data;
    setLoading(false);
    setError(false);
    setData(data);
    return data;
  } catch (error) {}
};
