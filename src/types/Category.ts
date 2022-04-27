//para que o nome (food, salary...) fique dinâmico, e aceite qualquer nome que eu colocar, usei esta estrutura
//assim, ele aceitará qqr nome que for uma string, e dentro deste nome, haverá um objeto com os dados que especifiquei dentro das {}

export type Category = {
    [tag: string]: {
        title: string;
        color: string;
        expense: boolean;
    }
}