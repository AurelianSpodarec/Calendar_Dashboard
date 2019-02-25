import { 
    SET_SELECTED_DAY_CELL
} from "./calendarBodyEvents";

export default (state, action) => {

    switch (action.type) {

        case SET_SELECTED_DAY_CELL: {
            return Object.assign({}, state, { selectedDayCellId: action.value });
        }

        default:
            return state;
    }
}