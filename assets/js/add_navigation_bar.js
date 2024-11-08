const nav_div = document.getElementById("navigation-div");

const home_link = "/";
const performances_link = "/performances.html";

const icon_size = 16;

const github_icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="${icon_size}" height="${icon_size}" fill="currentColor" class="bi bi-github" viewBox="0 0 ${icon_size} ${icon_size}">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
`;
const github_link = "https://github.com/ryu-thakahashi";

const qiita_icon = `<img width="${icon_size}" height="${icon_size}" src="/assets/imgs/qiita-icon.png">`;
const qiita_link = "https://qiita.com/ryu-takahashi2718";

nav_div.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
    <a class="navbar-brand" href="${home_link}">Ryu Takahashi</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="${home_link}">ホーム</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="${performances_link}">業績</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    リンク
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                        <a class="dropdown-item item-align-start" href="${github_link}">
                            ${github_icon}
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="${qiita_link}">
                            ${qiita_icon}
                            Qiita
                        </a>
                    </li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Other Services</a></li>
                </ul>            
            </li>
        </ul>
    </div>
</div>
</nav>
`;
