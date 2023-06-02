import { useStore } from "./bookStore";
import { get } from "lodash";
import { IGetKPointsResponse } from "./interfaces/storeInterfaces";

export const getKPoints = async (
  setKPoints: React.Dispatch<React.SetStateAction<IGetKPointsResponse[]>>
) => {
  useStore.setState({ isLoading: true });
  const response = await fetch(`http://kushki.mockable.io/points`);
  const data = await response.json();
  setKPoints(get(data, "kPoints", []));
  useStore.setState({ points: get(data, "kPoints", []) });
  useStore.setState({ isLoading: false });
};
