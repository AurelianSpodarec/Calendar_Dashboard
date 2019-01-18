import dashboardPage from './../views/scenes/Dashboard';
import todoPage from './../views/scenes/ToDo';
import calendarPage from './../views/scenes/Calendar';
import error404Page from './../views/scenes/Error404';


export const routes = [
    {
        component: dashboardPage,
        path: '#dashboard'
    },
    {
        component: todoPage,
        path: '#todo'
    },
    {
        component: calendarPage,
        path: '#calendar'
    },

]

 