window.toggleSidebar = () => {
    const sidebar = document.getElementById('main-sidebar');
    const mainPanel = document.getElementById('main-panel');
    const mainHeader = document.getElementById('main-header');

    sidebar.classList.toggle('is-folded');
    mainPanel.classList.toggle('is-toggle');
    mainHeader.classList.toggle('is-toggle');
}


// Select all items
// Select 'nav-sub-list' if the parent has 'nav-has-dropdown'

// Display block
// Count the height of the 'nav-sub-list'
// Set the height on click
document.addEventListener("DOMContentLoaded", function() {


        let navItems = document.querySelectorAll(".nav-item");

        // On Click, add class 'open'
        // On click another list, take the previous class 'open' and dd it to the clicked element

        for (let i = 0; i < navItems.length; i++) {
            let navItem = navItems[i];
            navItem.addEventListener('click', function(e) {
                let navLi = e.currentTarget;

                // LI has a drop-down - add class open | if not, don't add it
                if(navLi.classList.contains('nav-has-dropdown')) {
                    navLi.classList.toggle('open');
                } 

                let navLinks = document.querySelectorAll(".nav-link");
                for(let i = 0; i < navLinks.length; i++) {
                    let navLink = navLinks[i];
                    navLink.addEventListener('click', function(e) {
                        let navAnchor = e.currentTarget;
                        console.log(navAnchor);
                    })
                }

                // If Li doesn't contains class 'nav-has-dropdown' - add class 'active';

                console.log(navLi);
            })
        }


        // for (let i = 0; i < navItems.length; i++) {
        //     let navItem = navItems[i];

        //     navItem.addEventListener('click', function(e) {
        //         console.log(e.currentTarget)

        //         var containsDrop = e.currentTarget.classList;

        //         if(containsDrop.contains('nav-has-dropdown')) {
        //             console.log('contains nav-has-dropdown');

        //             const navItemChildren = document.getElementsByClassName('nav-has-dropdown')[0].children
        //             console.log(navItemChildren);

        //             // get the height of the 'nav-sub-list'
        //         }

        //     })
        // }


  });



// if(navItem.classList.contains(nav-has-dropdown) {
//     console.log('yes');
// }

// console.log(navItems)