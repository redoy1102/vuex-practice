import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        books: [
            {name: "Harry Potter", price: 100},
            {name: "Lord of The Rings", price: 150},
            {name: "Night Circus", price: 90},
            {name: "Lost World", price: 200},
            {name: "Lost World", price: 200}
        ]
    },
    getters: {
        saleBooks: (state) =>{
            let saleBooks = state.books.map((book) => {
                return{
                    name: book.name,
                    price: book.price/2
                }
            });
            return saleBooks;
        },
        saleBooks1: (state) => {
            let saleBooks1 = state.books.map((book) => {
                return {
                    name: book.name,
                    price: book.price/3
                }
            });
            return saleBooks1;
        }
    }
})