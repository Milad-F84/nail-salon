import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLoggedIn: localStorage.getItem("LoggedIn") === "true",
  login: () => {
    localStorage.setItem("LoggedIn", "true");
    set({ isLoggedIn: true });
  },

  logout: () => {
    localStorage.removeItem("LoggedIn");
    set({ isLoggedIn: false });
  },
}));

export default useAuthStore;
