import Vuex from 'vuex';
import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(Vuex);
Vue.use(VueRouter)

const Store = new Vuex.Store({
    state: [
        {
          name: "Pep Guardiola",
          stats: {
            w: 18,
            l: 2,
            d: 5,
          },
          clubs: [
            {
              name: "Barcelona FC",
              players: [
                {
                  name: "Lionel Messi",
                  age: 34,
                },
                {
                  name: "Neymar Jr",
                  age: 29,
                },
                {
                  name: "Luis Suarez",
                  age: 34,
                },
              ],
            },
            {
              name: "FC Bayern",
              players: [
                {
                  name: "Thomas Müller",
                  age: 32,
                },
                {
                  name: "Thiago Alcântara",
                  age: 30,
                },
                {
                  name: "Robert Lewandowski",
                  age: 33,
                },
              ],
            },
            {
              name: "Man City",
              players: [
                {
                  name: "Kevin De Bruyne",
                  age: 30,
                },
                {
                  name: "Raheem Sterling",
                  age: 27,
                },
                {
                  name: "Sergio Agüero",
                  age: 33,
                },
              ],
            },
          ],
        },
        {
          name: "José Mourinho",
          stats: {
            w: 15,
            l: 2,
            d: 8,
          },
          clubs: [
            {
              name: "Man Utd",
              players: [
                {
                  name: "Bastian Schweinsteiger",
                  age: 37,
                },
                {
                  name: "Marcus Rashford",
                  age: 24,
                },
                {
                  name: "Paul Pogba",
                  age: 28,
                },
              ],
            },
            {
              name: "Chelsea",
              players: [
                {
                  name: "John Terry",
                  age: 41,
                },
                {
                  name: "Eden Hazard",
                  age: 30,
                },
                {
                  name: "Didier Drogba",
                  age: 43,
                },
              ],
            },
            {
              name: "Real Madrid",
              players: [
                {
                  name: "Iker Casillas",
                  age: 31,
                },
                {
                  name: "Sergio Ramos",
                  age: 35,
                },
                {
                  name: "Cristiano Ronaldo",
                  age: 36,
                },
              ],
            },
          ],
        },
        {
          name: "Thomas Tuchel",
          stats: {
            w: 18,
            l: 3,
            d: 4,
          },
          clubs: [
            {
              name: "Borussia Dortmund",
              players: [
                {
                  name: "Pierre-Emerick Aubameyang",
                  age: 32,
                },
                {
                  name: "Marco Reus",
                  age: 32,
                },
                {
                  name: "İlkay Gündoğan",
                  age: 31,
                },
              ],
            },
            {
              name: "Chelsea",
              players: [
                {
                  name: "Édouard Osoque Mendy",
                  age: 29,
                },
                {
                  name: "Jorginho",
                  age: 29,
                },
                {
                  name: "Mason Mount",
                  age: 22,
                },
              ],
            },
            {
              name: "Paris Saint-Germain",
              players: [
                {
                  name: "Kylian Mbappé",
                  age: 22,
                },
                {
                  name: "Ángel Di María",
                  age: 33,
                },
                {
                  name: "Neymar Jr",
                  age: 29,
                },
              ],
            },
          ],
        },
    ]
})
export default Store