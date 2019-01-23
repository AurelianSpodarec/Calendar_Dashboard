let GithubProfile = {
    render : async () => {
        let view = /*html*/`
            
            <h1> Github Profile </h1>
            
            <div class="github-user-profile">

                <div>
                    <div class="github-user-profile__img-wrap"><img src="https://avatars2.githubusercontent.com/u/10155855?s=460&v=4" alt=""/></div>
                    <div class="github-user-profile__img">
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

        `
        return view;
    }

}

export default GithubProfile;