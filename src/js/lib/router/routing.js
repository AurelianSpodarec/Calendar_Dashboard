
// Application Generic
import Dashboard from '#views/scenes/dashboard/Dashboard';
import ToDo from '#views/scenes/todo/ToDo';
import Calendar from '#views/scenes/calendar';

// GitHub
import GithubProfile from '#views/scenes/github/profile/Profile';
import GithubSearchUser from '#views/scenes/github/SearchUser';

//Develop
import DevelopTypography from '#views/scenes/develop/Typography';
import DevelopButtons from '#views/scenes/develop/Buttons';
import DevelopForms from '#views/scenes/develop/Forms';

import router from '.';

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
        // className: 'calendar',
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