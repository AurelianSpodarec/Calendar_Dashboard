menu = [
    {
        separatorName: "Applications",
    },
    {
        name: "Dashboard",
        link: "#dashboard",
        icon: "<i class=\"nav-link-icon fas fa-rocket\"></i>",
        isActive: false
    },
    {
        separatorName: "Connected APIS",
    },
    {
        name: "GitHub",
        icon: "<i class=\"nav-link-icon far fa-calendar-check\"></i>",
        isDropdownActive: false,
        dropdownMenu: [
            {
                name: "My Profile",
                link: "#github/profile",
                isActive: false
            },
            {
                name: "Search User",
                link: "#github/search-user",
                isActive: false
            }
        ]
    }
];