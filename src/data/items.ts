import { Item } from '../types/Item'   //importando os dados "tipados"

export const items: Item [] = [
    { date: new Date(2022, 2, 8 ), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2022, 2, 8 ), category: 'food', title: 'Burger King', value: 28 },
    { date: new Date(2022, 2, 6 ), category: 'rent', title: 'Aluguel', value: 2300 },
    { date: new Date(2022, 1, 2 ), category: 'salary', title: 'Salário da empresa', value: 4500 }
]  //Dados para começar a fazer o sistema