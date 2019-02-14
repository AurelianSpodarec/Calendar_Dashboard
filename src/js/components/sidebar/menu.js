{
    selectedScene: 0,
    sidebarMenu = [    
        {
            separatorName: "Applications",
        },
        {
            id: 0,
            name: "Dashboard",
            link: "#dashboard",
            icon: "<i class=\"nav-link-icon fas fa-rocket\"></i>",
        },
        {
            separatorName: "Connected APIS",
        },
        {
            id: 1,
            name: "GitHub",
            icon: "<i class=\"nav-link-icon far fa-calendar-check\"></i>",
            dropdownMenu: [
                {
                    id: 2,
                    name: "My Profile",
                    link: "#github/profile",
                },
                {
                    id: 3,
                    name: "Search User",
                    link: "#github/search-user",
                }
            ]
        }
    ];
}