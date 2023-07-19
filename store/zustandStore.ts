import { create } from "zustand";

interface MyState {
  authOn: boolean;
  setAuthOn: (value: boolean) => void;
  spin: boolean;
  setSpin: (value: boolean) => void;
  isAuthOn: boolean;
  setIsAuthOn: (value: boolean) => void;
  authType: string;
  setAuthType: (value: string) => void;
}

const zustandStore = create<MyState>((set) => ({
  authOn: false,
  setAuthOn: (value) => set(() => ({ authOn: value })),
  spin: false,
  setSpin: (value) => set(() => ({ spin: value })),
  isAuthOn: false,
  setIsAuthOn: (value) => set(() => ({ isAuthOn: value })),
  authType: "signin",
  setAuthType: (value) => set(() => ({ authType: value })),
}));

export default zustandStore;
