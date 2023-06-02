import { create } from "zustand";
import {
  IGetKPointHistory,
  IGetKPointHistoryResponse,
  IGetKPointsResponse,
} from "./interfaces/storeInterfaces";

export interface IStore {
  isLoading: boolean;
  points: IGetKPointsResponse[];
  history: IGetKPointHistoryResponse;
  currentMerchant: IGetKPointsResponse | null;
  setCurrentMerchant: (currentMerchant: IGetKPointsResponse | null) => void;
  setHistoryPoints: (history: IGetKPointHistoryResponse) => void;
}

export const useStore = create<IStore>((set) => ({
  currentMerchant: null,
  history: { history: [] },
  isLoading: false,
  points: [],
  setCurrentMerchant: (currentMerchant: IGetKPointsResponse | null) =>
    set({ currentMerchant }),
  setHistoryPoints: (history: IGetKPointHistoryResponse) => set({ history }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setPoints: (points: IGetKPointsResponse[]) => set({ points }),
}));
