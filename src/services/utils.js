let id = 10;

export const generateId = (prefix = "id", num = ++id) => {
    return `${prefix}${num}`;
}

export const generateSampleData = (store) => {

    const firstColId = generateId("column", 1);
    const secondColId = generateId("column", 2);

    store.dispatch({
        type: "ADD_COLUMN",
        payload: { 
            id: firstColId, 
            title: "First Column" }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: firstColId,
            cardId: generateId("card",3),
            cardText: "Card nº1"
        }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: firstColId,
            cardId: generateId("card", 4),
            cardText: "This is the second card"
        }
    });

    store.dispatch({
        type: "ADD_COLUMN",
        payload: { 
            id: secondColId, 
            title: "Second column" }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: secondColId,
            cardId: generateId("card", 5),
            cardText: "Card 1"
        }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: secondColId,
            cardId: generateId("card", 6),
            cardText: "Card number 2"
        }
    });
};
