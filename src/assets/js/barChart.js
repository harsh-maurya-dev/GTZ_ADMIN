const trafficData = {
    labels: ['CTRADER', 'MATCHTRADER', 'DX TRADER', 'MetaTrader 5'], // Platform Names
    datasets: [{
        label: ' $',
        data: [1500, 2300, 1750, 2900], // Amount of money spent
        backgroundColor: [
            'rgb(0, 140, 255)',   // CTRADER
            'rgb(60, 218, 179)',   // MATCHTRADER
            'rgb(184, 107, 6)',   // DX TRADER
            'rgb(153, 102, 255)'   // MetaTrader 5
        ],
        borderColor: [
            'rgb(159, 209, 249)',
            '#ff6f61',
            'hsl(3deg 71% 55%)',
            'rgba(153, 102, 255, 1)'
        ],
        color:"black",
        borderWidth: 1
    }]
};

// User Details for Tooltip
const userDetails = [
    { platform: "CTRADER", users: "John, Alice", spent: "$1500" },
    { platform: "MATCHTRADER", users: "Mike, Sarah", spent: "$2300" },
    { platform: "DX TRADER", users: "Emma, Robert", spent: "$1750" },
    { platform: "MetaTrader 5", users: "Sophia, William", spent: "$2900" },
];

// Bar Chart Configuration
const config2 = {
    type: 'bar',
    data: trafficData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'black' // Changes legend label color
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const platform = context.label; // Platform name
                        const spent = context.raw; // Money spent
                        const user = userDetails.find(u => u.platform === platform);
                        return [
                            `Money Spent: $${spent}`,
                            `Users: ${user.users}`,
                        ];
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: "white", // Y-axis labels color
                },
                title: {
                    display: true,
                    text: 'Money Spent ($)',
                    color: "white"
                }
            },
            x: {
                ticks: {
                    color: "white", // Y-axis labels color
                },
                title: {
                    display: true,
                    text: 'Trading Platforms',
                    color: "white"
                }
            }
        }
    }
};

// Render the Chart
const ctx2 = document.getElementById('trafficBarChart').getContext('2d');
new Chart(ctx2, config2);