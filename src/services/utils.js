let id = 10;

export const generateId = async (prefix = "id", num = ++id) => {
    return new Promise((resolve, reject) => {
        resolve(`${prefix}${num}`)
    })
}

export const generateSampleData = async (store) => {
    const date = new Date().toLocaleDateString("es-ES")
    const firstBoardId = await generateId("board", 0);
    const secondBoardId = await generateId("board", 7);
    const firstColId = await generateId("column", 1);
    const secondColId = await generateId("column", 2);
    const thirdColId = await generateId("column", 8);
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
            cardId: await generateId("card",3),
            cardText: "Card nº1"
        }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: firstColId,
            cardId: await generateId("card", 4),
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
            cardId: await generateId("card", 5),
            cardText: "Card 1"
        }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: secondColId,
            cardId: await generateId("card", 6),
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
