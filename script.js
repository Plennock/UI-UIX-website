document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('energy-graph').getContext('2d');

    var energyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Energy Usage (kWh)',
            data: [150, 120, 100, 140, 160, 130],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 1)',
            borderWidth: 6,
            lineTension: 0.3,
            pointRadius: 10,
            pointHoverRadius: 50 

        }]
    };

    var energyChart = new Chart(ctx, {
        type: 'line',
        data: energyData,
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            
            plugins: {
                legend: {
                    labels: {
                        fontColor: 'black'
                    }
                }
            },
            elements: {
                line: {
                    backgroundColor: 'rgba(0, 255, 0, 0)'
                }
            },
            
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Your house, over time'
                },
                legend: {
                    display: true,
                    position: 'bottom'
                }
            },
            
            elements: {
                line: {
                    borderColor: 'black'
                }
            }
        }
    });
});
