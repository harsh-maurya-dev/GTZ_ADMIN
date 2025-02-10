document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('lineChart').getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'], 
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgb(0, 133, 219)',
            backgroundColor: 'rgb(159, 209, 249)',
            fill: true,
            tension: 0.4,
          }
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
        scales: {
            y: {
              display: false, // Hide Y-axis completely
            },
          },
      },
    });
  });