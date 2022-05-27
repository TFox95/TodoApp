
const persistedState = () => { // <-- FOCUS HERE
    let lastState = localStorage.getItem("http://Asterisks.com:reduxState");
    if (lastState !== null) {
        return JSON.parse(lastState) // re-initialize the store

    } else {
        return null
    }
};

export class authStateLoader {

    loadState() {
        try {
            const serializedState = persistedState();


            if (serializedState === 'null' || null) {
                return this.initializeState();
            } else {
                return serializedState;
            }
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem("http://Asterisks.com:reduxState", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return {
            //state object
        }
    };
}



export default persistedState;