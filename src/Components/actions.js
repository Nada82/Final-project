let nextComId = 0;

export const addCom = text => ({
    type: 'ADD_COM',
    id: nextComId++,
    text
});
