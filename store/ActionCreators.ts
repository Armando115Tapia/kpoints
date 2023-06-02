import { useStore } from "./bookStore";
import { get } from "lodash";
import {
  IGetKPointHistory,
  IGetKPointHistoryResponse,
  IGetKPointsResponse,
} from "./interfaces/storeInterfaces";

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

export const getKPointsHistory = async (
  setKPointsHistory: React.Dispatch<
    React.SetStateAction<IGetKPointHistoryResponse>
  >
) => {
  useStore.setState({ isLoading: true });
  const response = await fetch(`http://kushki.mockable.io/points-history`);
  const data = await response.json();

  setKPointsHistory(data);
  useStore.setState({ history: data });
  useStore.setState({ isLoading: false });
};
