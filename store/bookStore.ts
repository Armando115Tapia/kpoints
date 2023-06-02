import { create } from "zustand";
import { IGetKPointsResponse } from "./interfaces/storeInterfaces";

export interface IStore {
  isLoading: boolean;
  points: IGetKPointsResponse[];
  currentMerchant: IGetKPointsResponse | null;
  setCurrentMerchant: (currentMerchant: IGetKPointsResponse | null) => void;
}

export const useStore = create<IStore>((set) => ({
  isLoading: false,
  points: [],
  currentMerchant: null,
  setPoints: (points: IGetKPointsResponse[]) => set({ points }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setCurrentMerchant: (currentMerchant: IGetKPointsResponse | null) =>
    set({ currentMerchant }),
}));
