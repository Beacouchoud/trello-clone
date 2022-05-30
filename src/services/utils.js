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
    const fourthColId = await generateId("column", 9);
    store.dispatch({
        type: "ADD_BOARD",
        payload: { 
            id: firstBoardId, 
            title: "Bootcamp GeeksHubs",
            date: date
        }
    });

    store.dispatch({
        type: "ADD_COLUMN",
        payload: { 
            boardId: firstBoardId,
            id: firstColId, 
            title: "TODO" }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: firstColId,
            cardId: await generateId("card",3),
            cardText: "Write readmes"
        }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: firstColId,
            cardId: await generateId("card", 4),
            cardText: "Make the repository public"
        }
    });

    store.dispatch({
        type: "ADD_COLUMN",
        payload: { 
            boardId: firstBoardId,
            id: secondColId, 
            title: "DONE" }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: secondColId,
            cardId: await generateId("card", 5),
            cardText: "Dynamic showcase"
        }
    });

    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: secondColId,
            cardId: await generateId("card", 6),
            cardText: "Restaurant menu"
        }
    });

    store.dispatch({
        type: "ADD_BOARD",
        payload: { 
            id: secondBoardId, 
            title: "Prepare vacations",
            date,
        }
    });

    store.dispatch({
        type: "ADD_COLUMN",
        payload: { 
            boardId: secondBoardId,
            id: thirdColId, 
            title: "Buy" }
    });
    
    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: thirdColId,
            cardId: await generateId("card", 10),
            cardText: "Airplane tickets"
        }
    });
    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: thirdColId,
            cardId: await generateId("card", 12),
            cardText: "sunscreen"
        }
    });
    store.dispatch({
        type: "ADD_COLUMN",
        payload: { 
            boardId: secondBoardId,
            id: fourthColId, 
            title: "Already packed" }
    });
    store.dispatch({
        type: "ADD_CARD",
        payload: {
            columnId: fourthColId,
            cardId: await generateId("card", 11),
            cardText: "Bikinis"
        }
    });
};
