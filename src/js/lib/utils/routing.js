
// Application Generic
import Dashboard from '../../views/pages/Dashboard';
import ToDo from '../../views/pages/ToDo';
import Calendar from '../../views/pages/Calendar';

// GitHub
import GithubProfile from '../../views/pages/github/Profile';
import GithubSearchUser from '../../views/pages/github/SearchUser';

//Develop
import DevelopTypography from '../../views/pages/develop/Typography';
import DevelopButtons from '../../views/pages/develop/Buttons';
import DevelopForms from '../../views/pages/develop/Forms';


export const routes = [
    // Application Generic
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
    // GitHub
    {
        component: GithubProfile,
        path: '#github/profile'
    },
    {
        component: GithubSearchUser,
        path: '#github/search-user'
    },
    // Develop
    {
        component: DevelopButtons,
        path: '#develop/buttons'
    },
    {
        component: DevelopTypography,
        path: '#develop/typography'
    },
    {
        component: DevelopForms,
        path: '#develop/forms'
    },

]