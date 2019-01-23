
// Application Generic
import Dashboard from '../../views/pages/Dashboard';
import ToDo from '../../views/pages/ToDo';
import Calendar from '../../views/pages/Calendar';

// GitHub
import GithubProfile from '../../views/pages/github/profile/Profile';
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
        match: {
            action: 'index',
            controller: 'dashboard',
        }
    },
    {
        component: ToDo,
        match: {
            action: 'index',
            controller: 'todo',
        },
    },
    {
        component: Calendar,
        match: {
            action: 'index',
            controller: 'calendar',
        },
    },
    // GitHub
    {
        component: GithubProfile,
        match: {
            action: 'profile',
            controller: 'github',
        },
    },
    {
        component: GithubSearchUser,
        match: {
            action: 'search-user',
            controller: 'github',
        },
    },
    // Develop
    {
        component: DevelopButtons,
        match: {
            action: 'buttons',
            controller: 'develop',
        },
    },
    {
        component: DevelopTypography,
        match: {
            action: 'typography',
            controller: 'develop',
        },
    },
    {
        component: DevelopForms,
        match: {
            action: 'forms',
            controller: 'develop',
        }
    }

]