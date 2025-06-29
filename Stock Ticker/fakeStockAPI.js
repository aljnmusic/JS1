export function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: parseFloat((Math.random() * 3 + 20).toFixed(2)),
        open: 21.50,
        high: 23.00,
        low: 20.75,
        volume: Math.floor(Math.random() * 100000),
        marketCap: '1.2B',
        peRatio: 24.5,
        time: new Date().toLocaleTimeString()
    }
}

export function getStockData2() {
    return {
        name: 'Galos Gadget',
        sym: 'GGH',
        price: parseFloat((Math.random() * 3 + 15).toFixed(2)),
        open: 15.80,
        high: 17.20,
        low: 14.95,
        volume: Math.floor(Math.random() * 80000),
        marketCap: '950M',
        peRatio: 18.7,
        time: new Date().toLocaleTimeString()
    }
}
