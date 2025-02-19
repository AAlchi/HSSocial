import { create } from "zustand";

interface UserInfo {
  id: string;
  username: string;
  email: string;
  name: string;
  profilePicture: string;
  bannerPicture: string;
  dateCreated: string;
  dateUpdated: string;
}

interface MyState {
  spin: boolean;
  setSpin: (value: boolean) => void;
  popup: boolean;
  setPopup: (value: boolean) => void;
  isAuthOn: boolean;
  setIsAuthOn: (value: boolean) => void;
  authType: string;
  setAuthType: (value: string) => void;
  userInfo: UserInfo | null;
  setUserInfo: (value: UserInfo | null) => void;
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
  userInfo: null,
  setUserInfo: (value) => set(() => ({ userInfo: value }))
}));

export default zustandStore;
