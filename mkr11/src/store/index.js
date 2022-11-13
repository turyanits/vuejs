import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            uniData: [{
                    id: 1,
                    name: "Aragvi",
                    address: "Prospect Svobody",
                    specialisation: "bakery",
                    rating: 4,
                },
                {
                    id: 2,
                    name: "Stefanyo",
                    address: "Duhnovicha",
                    specialisation: "desserts",
                    rating: 5,
                },
                {
                    id: 3,
                    name: "Aragvi",
                    address: "Universitetska",
                    specialisation: "bakery",
                    rating: 4,
                },
                {
                    id: 4,
                    name: "Folks Patisserie",
                    address: "Ferenca Rakoci",
                    specialisation: "desserts",
                    rating: 5,
                },
            ]
        }
    },

    getters: {
        getConditers: (state) => state.Data,
    },

    mutations: {
        delete(state, name) {
            state.Data = state.Data.filter(item => item.name != name)
        },
        filterByAddress(state, address) {
            state.Data = state.Data.filter(item => item.address.toLocaleLowerCase().startsWith(address.toLocaleLowerCase()))
        },
        findByName(state, name) {
            state.Data = state.Data.filter(item => item.name.toLocaleLowerCase() == name.toLocaleLowerCase())
        }
    },

    actions: {
        deleteAction({ commit }, name) {
            commit('delete', name);
        },
        filterByAddressAction({ commit }, address) {
            commit('filterByAddress', address)
        },
        findByNameAction({ commit }, name) {
            commit('findByName', name)
        }
    }
})

export default store;