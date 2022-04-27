//trata-se de uma lista de funções para manipular datas, que fazer filtragens baseadas em datas
//Ex: selecionar o mês atual; filtrar por mês...


import {Item} from '../types/Item'



//Fç que retornará no padrão 'ano-mês' 
export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`
}

//Fç que retornará itens de um determinado mês : ele pega a lista atual, filtra e retorna uma lista contendo somente os itens do mês específico

export const filterListByMonth = (list: Item[], date: string): Item[]=> {
    let newList: Item[] = []
    let [year, month] = date.split('-')

    for(let i in list) {
        if(
        list[i].date.getFullYear() === parseInt(year) &&
        (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i])
        }
        
    }
    return newList
}

//fç para formatar data no formato dd/mm/aaaa
export const formatDate = (date: Date): string => {
    let year = date.getFullYear()
    let month = date.getMonth() + 1 
    let day = date.getDate() + 1

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`

//fç que formata a data de 2022-03 para uma formatação Março de 2022

export const formatCurrentMonth = (currentMonth:string) : string => {
    let [year, month] = currentMonth.split('-')
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${months[parseInt(month) - 1]} de ${year}`
}