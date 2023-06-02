import { useStore } from "./bookStore";
import { get } from "lodash";

export const getKPoints = async () => {
  useStore.setState({ isLoading: true });
  const response = await fetch(`http://kushki.mockable.io/points`);
  const data = await response.json();
  console.log(data);
  useStore.setState({ points: get(data, "kPoints", []) });
  useStore.setState({ isLoading: false });
};
