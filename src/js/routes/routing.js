import Dashboard from './../views/scenes/Dashboard';
import ToDo from './../views/scenes/ToDo';
import Calendar from './../views/scenes/Calendar';
import Error404 from './../views/scenes/Error404';


export const routes = [
    {
        scene: Dashboard,
        path: '#dashboard'
    },
    {
        scene: ToDo,
        path: '#todo'
    },
    {
        scene: Calendar,
        path: '#calendar'
    },

]

 