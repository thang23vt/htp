document.addEventListener('DOMContentLoaded', function() {
    // Initialize vitamin chart
    const vitaminCtx = document.getElementById('vitaminChart').getContext('2d');
    const vitaminChart = new Chart(vitaminCtx, {
        type: 'bar',
        data: {
            labels: ['Vitamin C (mg)', 'Vitamin A (mg)', 'Vitamin B6 (mg)', 'Folate (mg)'],
            datasets: [{
                label: 'Hàm lượng vitamin trong 100g ổi',
                data: [228, 418.08, 0.11, 0.049],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Hàm lượng (mg)'
                    },
                    ticks: {
                        callback: function(value) {
                            if (value >= 100) {
                                return value;
                            } else if (value >= 1) {
                                return value.toFixed(1);
                            } else {
                                return value.toFixed(3);
                            }
                        }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Thành phần vitamin trong 100g ổi',
                    font: {
                        size: 16
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let value = context.raw;
                            if (value >= 100) {
                                return `${value} mg`;
                            } else if (value >= 1) {
                                return `${value.toFixed(2)} mg`;
                            } else {
                                return `${value.toFixed(3)} mg`;
                            }
                        }
                    }
                }
            }
        }
    });

    // Initialize mineral chart
    const mineralCtx = document.getElementById('mineralChart').getContext('2d');
    const mineralChart = new Chart(mineralCtx, {
        type: 'bar',
        data: {
            labels: ['Kali (mg)', 'Magiê (mg)', 'Canxi (mg)', 'Sắt (mg)', 'Kẽm (mg)'],
            datasets: [{
                label: 'Hàm lượng khoáng chất trong 100g ổi',
                data: [417, 22, 18, 0.5, 0.2],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(201, 203, 207, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Hàm lượng (mg)'
                    },
                    ticks: {
                        callback: function(value) {
                            if (value >= 100) {
                                return value;
                            } else if (value >= 1) {
                                return value.toFixed(1);
                            } else {
                                return value.toFixed(2);
                            }
                        }
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Thành phần khoáng chất trong 100g ổi',
                    font: {
                        size: 16
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let value = context.raw;
                            if (value >= 100) {
                                return `${value} mg`;
                            } else if (value >= 1) {
                                return `${value.toFixed(2)} mg`;
                            } else {
                                return `${value.toFixed(3)} mg`;
                            }
                        }
                    }
                }
            }
        }
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize all popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    // Highlight current section in navigation based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.academic-section');
        const navLinks = document.querySelectorAll('.toc a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 100)) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    });
});
