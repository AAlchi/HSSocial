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
  usernames: string;
  setUsernames: (value: string) => void;
  emails: string;
  setEmails: (value: string) => void;
  mongoID: string;
  setMongoID: (value: string) => void;
  names: string;
  setNames: (value: string) => void;
  profilePicture: string;
  setProfilePicture: (value: string) => void;
  bannerPicture: string;
  setBannerPicture: (value: string) => void;
  publicOrPrivate: string;
  setPublicOrPrivate: (value: string) => void;
  bornOn: string;
  setBornOn: (value: string) => void;
  followers: string;
  setFollowers: (value: string) => void;
  following: string;
  setFollowing: (value: string) => void;
  dateCreated: string;
  setDateCreated: (value: string) => void;
  dateUpdated: string;
  setDateUpdated: (value: string) => void;
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
  usernames: "Fetching...",
  setUsernames: (value) => set(() => ({ usernames: value })),
  emails: "Fetching...",
  setEmails: (value) => set(() => ({ emails: value })),
  mongoID: "Fetching...",
  setMongoID: (value) => set(() => ({ mongoID: value })),
  names: "Fetching...",
  setNames: (value) => set(() => ({ names: value })),
  profilePicture: "Fetching...",
  setProfilePicture: (value) => set(() => ({ profilePicture: value })),
  bannerPicture: "Fetching...",
  setBannerPicture: (value) => set(() => ({ bannerPicture: value })),
  dateCreated: "Fetching...",
  setDateCreated: (value) => set(() => ({ dateCreated: value })),
  dateUpdated: "Fetching...",
  setDateUpdated: (value) => set(() => ({ dateUpdated: value })),
  bornOn: "Fetching...",
  setBornOn: (value) => set(() => ({ bornOn: value })),
  followers: "Fetching...",
  setFollowers: (value) => set(() => ({ followers: value })),
  following: "Fetching...",
  setFollowing: (value) => set(() => ({ following: value })),
  publicOrPrivate: "Fetching...",
  setPublicOrPrivate: (value) => set(() => ({ publicOrPrivate: value })),
}));

export default zustandStore;
