document.addEventListener('DOMContentLoaded', () => {
    // Ensure the balance and inventory are set up at the beginning
    let balance = 1000;
    let bankBalance = 500;
    let inventory = {};
    let lastHuntTime = 0;
    let lastWorkTime = 0;
    let lastFishTime = 0;
    let lastSearchTime = 0;
    let lastCrimeTime = 0;

    // Function to update the balance display (assuming you have this in your original code)
    function updateBalanceDisplay() {
        document.getElementById('balanceDisplay').textContent = `Balance: $${balance}`;
        document.getElementById('bankBalanceDisplay').textContent = `Bank: $${bankBalance}`;
    }

    // Ensure this function runs initially to update any balances/inventory on load
    updateBalanceDisplay();

    // Function to save the game's progress
    document.getElementById('saveProgressButton').addEventListener('click', () => {
        const gameState = {
            balance: balance,
            bankBalance: bankBalance,
            inventory: inventory,
            lastHuntTime: lastHuntTime,
            lastWorkTime: lastWorkTime,
            lastFishTime: lastFishTime,
            lastSearchTime: lastSearchTime,
            lastCrimeTime: lastCrimeTime
        };
        localStorage.setItem('tamenomicsGameState', JSON.stringify(gameState));
        alert('Game progress saved!');
    });

    // Function to load the game's progress
    document.getElementById('loadProgressButton').addEventListener('click', () => {
        const savedState = localStorage.getItem('tamenomicsGameState');
        if (savedState) {
            const gameState = JSON.parse(savedState);
            balance = gameState.balance;
            bankBalance = gameState.bankBalance;
            inventory = gameState.inventory;
            lastHuntTime = gameState.lastHuntTime;
            lastWorkTime = gameState.lastWorkTime;
            lastFishTime = gameState.lastFishTime;
            lastSearchTime = gameState.lastSearchTime;
            lastCrimeTime = gameState.lastCrimeTime;
            updateBalanceDisplay();
            alert('Game progress loaded!');
        } else {
            alert('No saved progress found.');
        }
    });

    // Function to clear saved progress
    document.getElementById('clearProgressButton').addEventListener('click', () => {
        localStorage.removeItem('tamenomicsGameState');
        alert('Saved progress cleared.');
    });
});
