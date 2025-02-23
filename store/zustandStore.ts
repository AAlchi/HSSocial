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
  popup: boolean;
  setPopup: (value: boolean) => void;  
}

const zustandStore = create<MyState>((set) => ({ 
  popup: false,
  setPopup: (value) => set(() => ({ popup: value })), 
}));

export default zustandStore;
