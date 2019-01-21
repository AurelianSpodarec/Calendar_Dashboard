import Dashboard from '../../views/pages/Dashboard';
import ToDo from '../../views/pages/ToDo';
import Calendar from '../../views/pages/Calendar';
import Error404 from '../../views/pages/Error404';


export const routes = [
    {
        page: Dashboard,
        path: '#dashboard'
    },
    {
        page: ToDo,
        path: '#todo'
    },
    {
        page: Calendar,
        path: '#calendar'
    },

]

 