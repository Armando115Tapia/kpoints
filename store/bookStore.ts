import { create } from "zustand";
import { IGetKPointsResponse } from "./interfaces/storeInterfaces";

export interface IStore {
  isLoading: boolean;
  points: IGetKPointsResponse[];
}

export const useStore = create<IStore>((set) => ({
  isLoading: false,
  points: [],
  setPoints: (points: IGetKPointsResponse[]) => set({ points }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
