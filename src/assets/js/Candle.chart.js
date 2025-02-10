const ctx = document.getElementById('groupedBarChart').getContext('2d');
    
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'], // X-axis labels
        datasets: [
            {
                label: 'Dataset 1', // Blue bars
                data: [60, 50, 40, 60, 50, 30, 20], // Dataset 1 values
                backgroundColor: '#007bff', // Blue color
                borderRadius: 12, // Rounded corners
                barThickness: 20,
                maxBarThickness: 10,
                borderSkipped: false, // Apply rounded effect on full bar
            },
            {
                label: 'Dataset 2', // Pink bars
                data: [20, 70, 30, 70, 60, 40, 60], // Dataset 2 values
                backgroundColor: '#ff6f61', // Pink color
                borderRadius: 12, // Rounded corners
                barThickness: 20,
                maxBarThickness: 10,
                borderSkipped: false, // Apply rounded effect on full bar
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        spaceBetween:20,
        plugins: {
            legend: {
                display: false // Hide the legend
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Hide grid lines on the X-axis
                }
            },
            y: {
                beginAtZero: true, // Start Y-axis from zero
                max: 70, // Maximum Y-axis value
                ticks: {
                    stepSize: 20 // Increment for Y-axis ticks
                }
            }
        }
    }
});