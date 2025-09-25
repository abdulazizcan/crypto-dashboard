class ApiService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async fetchCoins() {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
}

class UIManager {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);

    if (!this.container) {
      throw new Error("Container not found");
    }
  }
  renderCoins(dataMap) {
    this.container.innerHTML = "";
    dataMap.forEach((coin) => {
      const coinElement = document.createElement("div");
      coinElement.classList.add("coin-card");
      coinElement.innerHTML = `
        <img src="${coin.image}" alt="${coin.name}" class="coin-image">
        <h3>${coin.name}</h3>
        <p class="coin-symbol">${coin.symbol.toUpperCase()}</p>
        <p class="coin-price">$${coin.current_price.toLocaleString()}</p>
      `;
      this.container.appendChild(coinElement);
    });
  }
  renderError(message) {
    this.container.innerHTML = `<p class="error">${message}</p>`;
  }
}

class App {
  constructor() {
    this.apiService = new ApiService(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    this.uiManager = new UIManager("#crypto-container");
    this.cryptoDataMap = new Map();
    this.searchInput = document.querySelector("#search-input");
  }

  setupEventListeners() {
    this.searchInput.addEventListener("input", this.handleSearch.bind(this));
  }
  handleSearch(e) {
    const searchItem = e.target.value.trim().toLowerCase();
    if (!searchItem) {
      this.uiManager.renderCoins(this.cryptoDataMap);
      return;
    }

    const filteredCoins = new Map();
    this.cryptoDataMap.forEach((coin, id) => {
      const coinName = coin.name.toLowerCase();
      const symbol = coin.symbol;
      if (coinName.includes(searchItem) || symbol.includes(searchItem)) {
        filteredCoins.set(id, coin);
      }
    });
    this.uiManager.renderCoins(filteredCoins);
  }

  async init() {
    try {
      const coinsArray = await this.apiService.fetchCoins();
      coinsArray.forEach((coin) => {
        this.cryptoDataMap.set(coin.id, coin);
      });
      this.uiManager.renderCoins(this.cryptoDataMap);
      this.setupEventListeners();
    } catch (error) {
      this.uiManager.renderError(error.message);
    }
  }
}

const app = new App();
app.init();
