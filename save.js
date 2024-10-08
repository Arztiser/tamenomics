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
