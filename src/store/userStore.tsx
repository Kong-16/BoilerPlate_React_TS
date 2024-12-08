import { create } from 'zustand';

interface UserState {
  username: string;
  token: string;

  setUsername: (username: string) => void;
  setToken: (token: string) => void;
}

const useUserStore = create<UserState>((set) => ({
  username: '',
  password: '',
  token: '',
  setUsername: (username) => set({username}),
  setToken: (token) => set({ token }),
}));

export default useUserStore;
