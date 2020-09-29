import { createStore } from 'redux';

const incrementBy = ({incrementBy=1}={}) => (
    {
        type: 'INCREMENT',
        incrementBy
    }
);

const decrementBy = ({decrementBy = 1}={}) => (
    {
        type : 'DECREMENT',
        decrementBy
    }
);

const reset = () => (
    {
        type:'RESET'
    }
);

const set = ({count=1}) => (
    {
        type:'SET',
        count
    }
);

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }

        case 'RESET':
            return {
                count: 0
            }

        case 'SET':
            return {
                count: 101
            }

        default:
            return state
    }
});

// console.log(store.getState());

const unsubscribe = store.subscribe(() =>
    console.log(console.log(store.getState())
    )
);

store.dispatch(incrementBy());

store.dispatch(incrementBy({incrementBy:5}));

store.dispatch(reset());

store.dispatch(decrementBy());

store.dispatch(decrementBy({decrementBy:10}));

store.dispatch(set({count:-101}));