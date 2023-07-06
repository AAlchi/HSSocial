import { create } from "zustand";

interface MyState {
  authOn: boolean;
  setAuthOn: (value: boolean) => void;
}

const zustandStore = create<MyState>((set) => ({
  authOn: false,
  setAuthOn: (value) => set(() => ({ authOn: value })),
}));

export default zustandStore;
