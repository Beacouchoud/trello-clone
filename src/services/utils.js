let id = 10;

export const generateId = (prefix = "id", num = ++id) => {
    return `${prefix}${num}`;
}

export const generateSampleData = (store) => {
    const date = new Date().toLocaleDateString("es-ES")
    const firstBoardId = generateId("board", 0);
    const secondBoardId = generateId("board", 7);
    const firstColId = generateId("column", 1);
    const secondColId = generateId("column", 2);
    const thirdColId = generateId("column", 8);
    store.dispatch({
        type: "ADD_BOARD",
        payload: { 
            id: firstBoardId, 
            title: "First Board",
            date: date
        }
    });

    store.dispatch({
        type: "ADD_COLUMN",
        payload: { 
            boardId: firstBoardId,
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
            boardId: firstBoardId,
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

    store.dispatch({
        type: "ADD_BOARD",
        payload: { 
            id: secondBoardId, 
            title: "Second Board",
            date,
        }
    });

    store.dispatch({
        type: "ADD_COLUMN",
        payload: { 
            boardId: secondBoardId,
            id: thirdColId, 
            title: "Second column" }
    });
};
