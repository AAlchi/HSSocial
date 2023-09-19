import { create } from "zustand";

interface MyState {
  spin: boolean;
  setSpin: (value: boolean) => void;
  popup: boolean;
  setPopup: (value: boolean) => void;
  isAuthOn: boolean;
  setIsAuthOn: (value: boolean) => void;
  authType: string;
  setAuthType: (value: string) => void;
  userInfo: Object;
  setUserInfo: (value: object) => void;
}

const zustandStore = create<MyState>((set) => ({
  spin: false,
  setSpin: (value) => set(() => ({ spin: value })),
  popup: false,
  setPopup: (value) => set(() => ({ popup: value })),
  isAuthOn: false,
  setIsAuthOn: (value) => set(() => ({ isAuthOn: value })),
  authType: "signin",
  setAuthType: (value) => set(() => ({ authType: value })),
  userInfo: {},
  setUserInfo: (value) => set(() => ({ userInfo: value })),
}));

export default zustandStore;
