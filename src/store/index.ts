import { createStore } from "vuex";
import axios from "axios";

interface CoffeeItem {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  categories: string[];
}

const BASE_URL = "http://localhost:3000";

const store = createStore({
  strict: true,
  modules: {
    coffees: {
      namespaced: true,
      state: () => ({
        coffees: [],
      }),
      mutations: {
        INSERT_COFFEES(state, arrayCoffees: CoffeeItem[]) {
          state.coffees = arrayCoffees;
        },
      },
      actions: {
        getCoffeesRequest: async ({ commit }) => {
          let result = [];
          try {
            const resp = await axios.get(`${BASE_URL}/coffees`);
            result = resp.data;
          } catch (error) {}
          commit("INSERT_COFFEES", result);
          return result;
        },
      },
      getters: {
        getCoffees(state) {
          return state.coffees;
        },
      },
    },
  },
});

export default store;
