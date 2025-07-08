/*
Say Hello Code - Data Visualizations
Copyright (c) 2025 Dynamic Devices Ltd

This work is licensed under the Creative Commons Attribution 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/
*/

// Visualization module for Say Hello Code
var Visualizations = (function() {
    'use strict';

    var charts = {};
    var isChartsVisible = false;

    // Initialize all visualizations
    function init() {
        console.log('Initializing visualizations...');

        if (typeof languages === 'undefined' || !languages.length) {
            console.warn('Languages data not available for visualizations');
            return;
        }

        if (typeof Chart === 'undefined') {
            console.error('Chart.js library not loaded');
            return;
        }

        console.log('Languages data available:', languages.length, 'languages');
        console.log('Chart.js available:', typeof Chart);

        setupVisualizationToggle();
        createVisualizationContainer();
        // Don't initialize charts immediately, wait for user to click toggle
    }

    // Setup the toggle button for showing/hiding visualizations
    function setupVisualizationToggle() {
        var header = document.querySelector('.header');
        var toggleBtn = document.createElement('button');
        toggleBtn.id = 'visualizationToggle';
        toggleBtn.className = 'visualization-toggle-btn';
        toggleBtn.innerHTML = '📊 Show Visualizations';
        toggleBtn.addEventListener('click', toggleVisualizations);

        // Insert after the clear filters button
        var clearBtn = document.getElementById('clearFilters');
        if (clearBtn && clearBtn.parentNode) {
            clearBtn.parentNode.insertBefore(toggleBtn, clearBtn.nextSibling);
        } else {
            header.appendChild(toggleBtn);
        }
    }

    // Create the container for all visualizations
    function createVisualizationContainer() {
        var container = document.createElement('div');
        container.id = 'visualizationContainer';
        container.className = 'visualization-container hidden';
        container.innerHTML = `
            <div class="visualization-header">
                <h2>📊 Language Data Visualizations</h2>
                <p>Explore insights from our collection of 240+ programming languages</p>
            </div>
            <div class="visualization-grid">
                <div class="chart-container">
                    <h3>Languages by Creation Year</h3>
                    <canvas id="timelineChart"></canvas>
                </div>
                <div class="chart-container">
                    <h3>Category Distribution</h3>
                    <canvas id="categoryChart"></canvas>
                </div>
                <div class="chart-container">
                    <h3>Popularity vs Difficulty</h3>
                    <canvas id="popularityChart"></canvas>
                </div>
                <div class="chart-container">
                    <h3>Programming Paradigms</h3>
                    <canvas id="paradigmChart"></canvas>
                </div>
            </div>
        `;

        // Insert after the statistics section
        var stats = document.querySelector('.stats'); // Changed from getElementById('statistics') to querySelector('.stats')
        if (stats && stats.parentNode) {
            stats.parentNode.insertBefore(container, stats.nextSibling);
        } else {
            document.body.insertBefore(container, document.getElementById('languagesContainer'));
        }
    }

    // Toggle visualization visibility
    function toggleVisualizations() {
        console.log('Toggle visualizations clicked');

        var container = document.getElementById('visualizationContainer');
        var toggleBtn = document.getElementById('visualizationToggle');

        console.log('Container found:', !!container);
        console.log('Toggle button found:', !!toggleBtn);

        if (!container) {
            console.error('Visualization container not found');
            return;
        }

        if (isChartsVisible) {
            container.classList.add('hidden');
            toggleBtn.innerHTML = '📊 Show Visualizations';
            isChartsVisible = false;
            console.log('Hiding visualizations');
        } else {
            container.classList.remove('hidden');
            toggleBtn.innerHTML = '📊 Hide Visualizations';
            isChartsVisible = true;
            console.log('Showing visualizations');

            // Initialize charts if not already done
            if (Object.keys(charts).length === 0) {
                console.log('Initializing charts for the first time');
                initializeCharts();
            }
        }
    }

    // Initialize all chart visualizations
    function initializeCharts() {
        if (!isChartsVisible) return;

        try {
            createTimelineChart();
            createCategoryChart();
            createPopularityChart();
            createParadigmChart();
        } catch (error) {
            console.error('Error initializing charts:', error);
        }
    }

    // 1. Timeline Chart - Languages by Creation Year
    function createTimelineChart() {
        var ctx = document.getElementById('timelineChart');
        if (!ctx) return;

        // Group languages by decade and store language names
        var decades = {};
        var languagesByDecade = {};

        languages.forEach(function(lang) {
            var decade = Math.floor(lang.year / 10) * 10;
            var decadeLabel = decade + 's';

            decades[decadeLabel] = (decades[decadeLabel] || 0) + 1;

            if (!languagesByDecade[decadeLabel]) {
                languagesByDecade[decadeLabel] = [];
            }
            languagesByDecade[decadeLabel].push(lang.name);
        });

        // Sort decades chronologically
        var sortedDecades = Object.keys(decades).sort(function(a, b) {
            return parseInt(a) - parseInt(b);
        });

        var labels = sortedDecades;
        var data = sortedDecades.map(function(decade) { return decades[decade]; });

        charts.timeline = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Languages Created',
                    data: data,
                    backgroundColor: 'rgba(74, 144, 226, 0.8)',
                    borderColor: 'rgba(74, 144, 226, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                var decade = context.label;
                                var count = context.parsed.y;
                                var languageList = languagesByDecade[decade];

                                var result = [count + ' languages created'];

                                if (languageList && languageList.length > 0) {
                                    result.push(''); // Empty line
                                    result.push('Languages:');

                                    // Show first 10 languages, then "and X more" if there are more
                                    var displayLanguages = languageList.slice(0, 10);
                                    displayLanguages.forEach(function(lang) {
                                        result.push('• ' + lang);
                                    });

                                    if (languageList.length > 10) {
                                        result.push('• ... and ' + (languageList.length - 10) + ' more');
                                    }
                                }

                                return result;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    // 2. Category Distribution Pie Chart (with combined categories)
    function createCategoryChart() {
        var ctx = document.getElementById('categoryChart');
        if (!ctx) return;

        // Group categories into broader groups to reduce clutter
        var categoryGroups = {
            'Popular Languages': ['Popular', 'Web', 'Object-Oriented'],
            'Systems & Low-Level': ['Systems', 'Legacy', 'Vintage'],
            'Specialized': ['Functional', 'Data Science', 'Scientific', 'Academic'],
            'Development': ['Mobile', 'Game Development', 'Scripting'],
            'Configuration & Markup': ['Configuration', 'Markup', 'Shell'],
            'Emerging & Experimental': ['Emerging', 'Esoteric', 'Additional'],
            'Other': ['Specialized', 'Other']
        };

        var groupedCategories = {};

        languages.forEach(function(lang) {
            var primaryCategory = lang.primaryCategory || 'Other';
            var groupFound = false;

            // Find which group this category belongs to
            for (var group in categoryGroups) {
                if (categoryGroups[group].indexOf(primaryCategory) !== -1) {
                    groupedCategories[group] = (groupedCategories[group] || 0) + 1;
                    groupFound = true;
                    break;
                }
            }

            // If no group found, put in "Other"
            if (!groupFound) {
                groupedCategories['Other'] = (groupedCategories['Other'] || 0) + 1;
            }
        });

        var labels = Object.keys(groupedCategories);
        var data = Object.values(groupedCategories);
        var colors = generateColors(labels.length);

        charts.category = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 2,
                    borderColor: '#1a1a1a'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                var percentage = ((context.parsed / data.reduce(function(a, b) { return a + b; }, 0)) * 100).toFixed(1);
                                return context.label + ': ' + context.parsed + ' (' + percentage + '%)';
                            }
                        }
                    }
                }
            }
        });
    }

    // 3. Popularity vs Difficulty Scatter Plot
    function createPopularityChart() {
        var ctx = document.getElementById('popularityChart');
        if (!ctx) return;

        // Process data for scatter plot
        var difficultyMap = {
            'Beginner': 1,
            'Beginner to Intermediate': 1.5,
            'Intermediate': 2,
            'Intermediate to Advanced': 2.5,
            'Advanced': 3,
            'Beginner to Advanced': 2,  // Wide range, use middle
            'Varies': 2  // Unknown/variable, use middle
        };

        var scatterData = languages.map(function(lang) {
            return {
                x: difficultyMap[lang.difficulty] || 2,
                y: lang.popularity || 0,
                label: lang.name
            };
        });

        charts.popularity = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Languages',
                    data: scatterData,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        displayColors: false,
                        callbacks: {
                            title: function(context) {
                                return context[0].raw.label;
                            },
                            beforeBody: function() {
                                return null;
                            },
                            body: function(context) {
                                var ctx = context[0];
                                // Create reverse mapping to get original difficulty from numeric value
                                var reverseDifficultyMap = {
                                    1: 'Beginner',
                                    1.5: 'Beginner to Intermediate',
                                    2: 'Intermediate',
                                    2.5: 'Intermediate to Advanced',
                                    3: 'Advanced'
                                };

                                var difficulty = reverseDifficultyMap[ctx.parsed.x] || 'Intermediate';
                                return [
                                    'Difficulty: ' + difficulty,
                                    'Popularity: ' + ctx.parsed.y
                                ];
                            },
                            label: function() {
                                return null; // Suppress default label
                            },
                            afterLabel: function() {
                                return null; // Suppress after label
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Difficulty Level'
                        },
                        min: 0.5,
                        max: 3.5,
                        ticks: {
                            stepSize: 0.5,
                            callback: function(value) {
                                var labels = {
                                    1: 'Beginner',
                                    1.5: 'Beg-Int',
                                    2: 'Intermediate',
                                    2.5: 'Int-Adv',
                                    3: 'Advanced'
                                };
                                return labels[value] || '';
                            }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Popularity Score'
                        },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // 4. Programming Paradigms Bar Chart
    // 4. Programming Paradigms Bar Chart (Fixed for Chart.js 3.x)
    function createParadigmChart() {
        var ctx = document.getElementById('paradigmChart');
        if (!ctx) return;

        // Process paradigms data
        var paradigms = {};
        languages.forEach(function(lang) {
            if (lang.paradigms && Array.isArray(lang.paradigms)) {
                lang.paradigms.forEach(function(paradigm) {
                    // Filter out "Multi-paradigm" as it's not a specific paradigm
                    if (paradigm.toLowerCase() !== 'multi-paradigm') {
                        paradigms[paradigm] = (paradigms[paradigm] || 0) + 1;
                    }
                });
            }
        });

        // Sort by count and take top 10
        var sortedParadigms = Object.entries(paradigms)
            .sort(function(a, b) { return b[1] - a[1]; })
            .slice(0, 10);

        var labels = sortedParadigms.map(function(item) { return item[0]; });
        var data = sortedParadigms.map(function(item) { return item[1]; });

        charts.paradigm = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of Languages',
                    data: data,
                    backgroundColor: 'rgba(153, 102, 255, 0.8)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', // This makes it horizontal
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.x + ' languages';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }

    // Generate colors for charts
    function generateColors(count) {
        var colors = [
            '#4A90E2', '#7ED321', '#F5A623', '#D0021B', '#9013FE',
            '#50E3C2', '#B8E986', '#4A4A4A', '#9B9B9B', '#BD10E0',
            '#F8E71C', '#8B572A', '#417505', '#9013FE', '#50E3C2'
        ];
        
        var result = [];
        for (var i = 0; i < count; i++) {
            result.push(colors[i % colors.length]);
        }
        return result;
    }

    // Public API
    return {
        init: init,
        toggle: toggleVisualizations,
        refresh: initializeCharts
    };
})();

// Initialize visualizations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait for languages data to be available
    var initAttempts = 0;
    var maxAttempts = 10;
    
    function tryInit() {
        if (typeof languages !== 'undefined' && languages.length > 0) {
            Visualizations.init();
        } else if (initAttempts < maxAttempts) {
            initAttempts++;
            setTimeout(tryInit, 500);
        } else {
            console.warn('Could not initialize visualizations: languages data not available');
        }
    }
    
    tryInit();
});