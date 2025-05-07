document.addEventListener('DOMContentLoaded', function() {
    // Register Chart.js plugins
    Chart.register(ChartDataLabels);
    
    // Initialize vitamin chart with enhanced visuals
    const vitaminCtx = document.getElementById('vitaminChart').getContext('2d');
    const vitaminChart = new Chart(vitaminCtx, {
        type: 'bar',
        data: {
            labels: ['Vitamin C', 'Vitamin A', 'Vitamin B6', 'Folate'],
            datasets: [{
                label: 'Hàm lượng vitamin trong 100g ổi',
                data: [228, 418.08, 0.11, 0.049],
                backgroundColor: [
                    'rgba(255, 87, 34, 0.7)',
                    'rgba(255, 193, 7, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(33, 150, 243, 0.7)'
                ],
                borderColor: [
                    'rgb(255, 87, 34)',
                    'rgb(255, 193, 7)',
                    'rgb(76, 175, 80)',
                    'rgb(33, 150, 243)'
                ],
                borderWidth: 2,
                borderRadius: 6,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 20,
                    bottom: 10
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Hàm lượng (mg)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: {top: 10, bottom: 10}
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.2)',
                        borderDash: [5, 5]
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
                        },
                        font: {
                            size: 12
                        },
                        padding: 8
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        },
                        padding: 8
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Thành phần vitamin trong 100g ổi',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    color: '#2e7d32'
                },
                subtitle: {
                    display: true,
                    text: 'Số liệu dựa trên nghiên cứu khoa học',
                    padding: {
                        bottom: 20
                    },
                    color: '#757575',
                    font: {
                        size: 14,
                        style: 'italic'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(46, 125, 50, 0.9)',
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 13
                    },
                    padding: 12,
                    cornerRadius: 6,
                    caretSize: 6,
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
                },
                datalabels: {
                    align: 'end',
                    anchor: 'end',
                    color: function(context) {
                        return context.dataset.backgroundColor[context.dataIndex].replace('0.7', '1');
                    },
                    font: {
                        weight: 'bold'
                    },
                    formatter: function(value) {
                        if (value >= 100) {
                            return value;
                        } else if (value >= 1) {
                            return value.toFixed(1);
                        } else {
                            return value.toFixed(3);
                        }
                    },
                    offset: 5,
                    padding: 0
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart'
            }
        }
    });

    // Initialize mineral chart with enhanced visuals
    const mineralCtx = document.getElementById('mineralChart').getContext('2d');
    const mineralChart = new Chart(mineralCtx, {
        type: 'bar',
        data: {
            labels: ['Kali', 'Magiê', 'Canxi', 'Sắt', 'Kẽm'],
            datasets: [{
                label: 'Hàm lượng khoáng chất trong 100g ổi',
                data: [417, 22, 18, 0.5, 0.2],
                backgroundColor: [
                    'rgba(33, 150, 243, 0.7)',
                    'rgba(156, 39, 176, 0.7)',
                    'rgba(76, 175, 80, 0.7)',
                    'rgba(255, 87, 34, 0.7)',
                    'rgba(255, 193, 7, 0.7)'
                ],
                borderColor: [
                    'rgb(33, 150, 243)',
                    'rgb(156, 39, 176)',
                    'rgb(76, 175, 80)',
                    'rgb(255, 87, 34)',
                    'rgb(255, 193, 7)'
                ],
                borderWidth: 2,
                borderRadius: 6,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 20,
                    bottom: 10
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Hàm lượng (mg)',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: {top: 10, bottom: 10}
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.2)',
                        borderDash: [5, 5]
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
                        },
                        font: {
                            size: 12
                        },
                        padding: 8
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        },
                        padding: 8
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Thành phần khoáng chất trong 100g ổi',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    color: '#2e7d32'
                },
                subtitle: {
                    display: true,
                    text: 'Số liệu dựa trên nghiên cứu khoa học',
                    padding: {
                        bottom: 20
                    },
                    color: '#757575',
                    font: {
                        size: 14,
                        style: 'italic'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(46, 125, 50, 0.9)',
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 13
                    },
                    padding: 12,
                    cornerRadius: 6,
                    caretSize: 6,
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
                },
                datalabels: {
                    align: 'end',
                    anchor: 'end',
                    color: function(context) {
                        return context.dataset.backgroundColor[context.dataIndex].replace('0.7', '1');
                    },
                    font: {
                        weight: 'bold'
                    },
                    formatter: function(value) {
                        if (value >= 100) {
                            return value;
                        } else if (value >= 1) {
                            return value.toFixed(1);
                        } else {
                            return value.toFixed(2);
                        }
                    },
                    offset: 5,
                    padding: 0
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeOutQuart',
                delay: function(context) {
                    return context.dataIndex * 100;
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

    // Add active class to nav links on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar .nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Initialize Bootstrap tooltips and popovers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

    // Add animation to elements when scrolling
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Add fade in animation to sections
    const fadeInSections = document.querySelectorAll('.section');
    
    fadeInSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
    });
    
    // Add special effects to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;
            
            const xMove = (xPercent - 0.5) * 20;
            const yMove = (yPercent - 0.5) * 20;
            
            document.documentElement.style.setProperty('--move-x', `${xMove}px`);
            document.documentElement.style.setProperty('--move-y', `${yMove}px`);
        });
    }
});