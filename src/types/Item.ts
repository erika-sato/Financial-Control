// Ao trabalhar com typescript, preciso "tipar" os dados, para usá-los no Componente items.ts 
export type Item = {
    date: Date;
    category: string;
    title: string;
    value: number;
}