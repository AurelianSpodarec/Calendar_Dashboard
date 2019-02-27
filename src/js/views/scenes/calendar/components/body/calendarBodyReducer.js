import { 
    SET_SELECTED_DAY_CELL,
    SET_DAY_EVENTS
} from "./calendarBodyEvents";

export default (state, action) => {

    switch (action.type) {

        case SET_SELECTED_DAY_CELL: {
            return Object.assign({}, state, { selectedDayCellId: action.value });
        }

        case SET_DAY_EVENTS: {
            return Object.assign({}, state, { events: action.value });
        }

        default:
            return state;
    }
}