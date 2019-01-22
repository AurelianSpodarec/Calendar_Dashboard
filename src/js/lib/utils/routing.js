import Dashboard from '../../views/pages/Dashboard';
import ToDo from '../../views/pages/ToDo';
import Calendar from '../../views/pages/Calendar';

import GithubProfile from '../../views/pages/github/Profile';
import GithubSearchUser from '../../views/pages/github/SearchUser';


export const routes = [
    {
        component: Dashboard,
        path: '#dashboard'
    },
    {
        component: ToDo,
        path: '#todo'
    },
    {
        component: Calendar,
        path: '#calendar'
    },
    {
        component: GithubProfile,
        path: '#github/profile'
    },
    {
        component: GithubSearchUser,
        path: '#github/search-user'
    },

]

 