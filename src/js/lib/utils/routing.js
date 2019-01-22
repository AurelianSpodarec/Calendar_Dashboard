
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

// Not Found
import NotFound from '../../views/pages/NotFound';

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
        path: '#github/profile',
        match: {
            controller: 'github',
        },
    },
    {
        component: GithubSearchUser,
        path: '#github/search-user',
        match: {
            controller: 'github',
        },
    },
    // Develop
    {
        component: DevelopButtons,
        path: '#develop/buttons',
        match: {
            controller: 'develop',
        },
    },
    {
        component: DevelopTypography,
        path: '#develop/typography',
        match: {
            controller: 'develop',
        },
    },
    {
        component: DevelopForms,
        path: '#develop/forms',
        match: {
            controller: 'develop',
        },
    },
    // Not Found
    {
        component: NotFound,
        path: '#notfound',
    }

]