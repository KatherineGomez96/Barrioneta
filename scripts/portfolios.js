// portfolios
const portfolios = [
    {
        name: "Portfolio de Abi",
        url: "https://portfolio-aluna.netlify.app/",
        image: "portfolios/portfolioAbi.png",
    },
    {
        name: "Portfolio de Ailén",
        url: "https://66f5beb4e1063b445274f964--aquamarine-cannoli-059041.netlify.app/",
        image: "portfolios/portfolioAilen.png",
    },
    {
        name: "Portfolio de Antonella",
        url: "https://porfolio-simonetti.netlify.app/",
        image: "portfolios/portfolioAnto.png",
    },
    {
        name: "Portfolio de Katherine",
        url: "https://portfoliokatherinegomez.netlify.app/",
        image: "portfolios/portfolioKathe.png",
    },
    {
        name: "Portfolio de Mirian",
        url: "https://portfolio-desarrolladoraweb.netlify.app/",
        image: "portfolios/portfolioMirian.png",
    },
    {
        name: "Portfolio de Rocío",
        url: "https://66f76a22a744c23f519363c9--jolly-pie-dfaba8.netlify.app/",
        image: "portfolios/portfolioRocio.png",
    },
    {
        name: "Portfolio de Violeta",
        url: "https://violetahours.vercel.app/",
        image: "portfolios/portfolioViole.png",
    }
];

const containerPortfolio = document.querySelector('.container-portfolio');

portfolios.forEach(portfolio => {
    const portfolioDiv = ` <div class="portfolio p-2 mb-2 bg-light">
    <img
        src=${portfolio.image} 
        alt="portfolio"
        class="img-fluid mb-2"
    />

    <p class="m-0 text-port">${portfolio.name}</p>
    <a class="portfolio-link" href=${portfolio.url} target="_blank">
    <i class="bi bi-arrow-up-right-square"></i>
    </a>
    </div> 
        
    `;

    containerPortfolio.innerHTML += portfolioDiv;
});