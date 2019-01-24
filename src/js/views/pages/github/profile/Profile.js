let GithubProfile = {
    render : async () => {
        let view = /*html*/`

            <div class="github-nav">
            <div class="github-nav__outer">

                <div class="github-nav__profile-details">
                    <img class="github-nav__profile-avatar" src="https://avatars2.githubusercontent.com/u/10155855?s=460&v=4" alt="" />
                    <div class="github-nav__profile-info">
                        <span class="github-nav__profile-name">Aurelian Spodarec</span>
                        <span class="github-nav__profile-handler">@AurelianSpodarec</span>
                    </div>
                </div>

                <ul class="github-nav__links">
                    <li class="github-nav__item">
                        <a class="github-nav__link" href="#tab1">
                            <span class="github-nav__item-name">Overview</span>
                        </a>
                    </li>
                    <li class="github-nav__item">
                        <a class="github-nav__link" href="#tab1">
                            <span class="github-nav__item-name">Repositories</span>
                            <span class="github-nav__item-counter">77</span>
                        </a>
                    </li>
                    <li class="github-nav__item">
                        <a class="github-nav__link" href="#tab1">
                            <span class="github-nav__item-name">Stars</span>
                            <span class="github-nav__item-counter">44</span>
                        </a>
                    </li>
                    <li class="github-nav__item">
                        <a class="github-nav__link" href="#tab1">
                            <span class="github-nav__item-name">Followers</span>
                            <span class="github-nav__item-counter">12</span>
                        </a>
                    </li>
                    <li class="github-nav__item">
                        <a class="github-nav__link" href="#tab1">
                            <span class="github-nav__item-name">Following</span>
                            <span class="github-nav__item-counter">25</span>
                        </a>
                    </li>
                </ul>
            </div>
            </div>

            <h1> Github Profile </h1>
            
            <div class="github-user-profile">

                <div class="github-user-profile__details">
                    <div class="github-user-profile__img-wrap"><img class="github-user-profile__img" src="https://avatars2.githubusercontent.com/u/10155855?s=460&v=4" alt=""/></div>
                    <div class="github-user-profile__info">
                        <h1>Aurelian Spodarec</h1>
                        <span>@AurelianSpodarec</span>
                    </div>
                </div>

  
                <div class="github-user-profile__bio">
                <p>
                    Apparently, this user prefers to keep an air of mystery about them. - You can always visit my website and find out more about how I can help you! 🥇 💯 👍 🥇 💯
                </p>
                </div>

                <ul class="github-details">
                    <li class="github-details__item">
                        <span class="github-details__icon">Icon</span>
                        <span class="github-details__name">LoveToCode</span>
                    </li>
                    <li class="github-details__item">
                        <span class="github-details__icon">Icon</span>
                        <span class="github-details__name">Poland/UK</span>
                    </li>
                    <li class="github-details__item">
                        <span class="github-details__icon">Icon</span>
                        <a class="github-details__link" href="mailto:aurelianxspodarec@gmail.com">aurelianxspodarec@gmail.com</a>
                    </li>
                    <li class="github-details__item">
                        <span class="github-details__icon">Icon</span>
                        <a class="github-details__link" href="http://aurelianspodarec.co.uk/">http://aurelianspodarec.co.uk/</a>
                    </li>
                </ul>

                <div class="speciality">
                    <span class="speciality__title">Topics & Specialities</span>
                    <ul>
                        <li class="speciality__tag-item">
                            <span class="speciality__tag-language speciality__tag-language--html">HTML</span>
                        </li>
                        <li class="speciality__tag-item">
                            <span class="speciality__tag-language speciality__tag-language--css">CSS</span>
                        </li>
                        <li class="speciality__tag-item">
                            <span class="speciality__tag-language speciality__tag-language--js">JavaScript</span>
                        </li>
                        <li class="speciality__tag-item">
                            <span class="speciality__tag-language speciality__tag-language--ruby">Ruby</span>
                        </li>
                        <li class="speciality__tag-item">
                            <span class="speciality__tag-language speciality__tag-language--php">PHP</span>
                        </li>
                    </ul>
                </div>
              
            </div>

            <div>
                <h2>Pinned Repositories</h2>

                <ol class="pinned-repo-list">
                    <li class="pinned-repo-item">
                    <div class="pinned-repo-content">
                        <span>
                            <span>Dragg</span>
                            <span>Webpack-to-WordPress-Starting-Template</span>
                        </span>
                        <p>
                            <span>CSS</span>
                            <span>Starred 4</span>
                            <span>Forked 3</span>
                        </p>
                    </div>
                    </li>
                </ol>
            </div>

        `
        return view;
    }

}

export default GithubProfile;