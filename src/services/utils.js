let id = 0;

export const generateId = (prefix = "id") => {
    return `${prefix}${++id}`;
}

export const generateSampleData = (store) => {

    const firstColId = generateId("column");
    const secondColId = generateId("column");

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
            cardId: generateId("card"),
            cardText: "Card nº1"
        }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: firstColId,
            cardId: generateId("card"),
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
            cardId: generateId("card"),
            cardText: "Card 1"
        }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: secondColId,
            cardId: generateId("card"),
            cardText: "Card number 2"
        }
    });
};
