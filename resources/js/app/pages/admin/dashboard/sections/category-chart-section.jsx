import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';
import { useSelector } from 'react-redux';
import { ChartPieIcon } from '@heroicons/react/20/solid';

const CategoryChartSection = () => {
    const chartRef = useRef(null);
    const [chart, setChart] = useState(null);
    const { dashboard } = useSelector((state) => state.admin);

    // const totalQuantity = dashboard.categories.reduce((accumulator, item) => accumulator + item.count, 0);
    // const totalCount =dashboard.categories.length
    const data = dashboard?.categories?.filter(res => res.count !== 0)
    const total = data?.reduce((sum, category) => sum + category.count, 0);
    let categorysWithPercentage = data?.map(category => {
        console.log('category', category)
        const percentage = ((category.count / total) * 100).toFixed(2); // Calculate and format percentage
        return {
            ...category,
            percentage: parseFloat(percentage)
        };

    });

    let labels = []
    let series = []
    let hardwareIssue = []
    if (categorysWithPercentage) {
        labels = categorysWithPercentage.map(res => res.name);
        series = categorysWithPercentage.map(res => res.percentage)
        hardwareIssue = categorysWithPercentage.find(res => res.name == 'Hardware Issues')
    }

    const [hoveredLabel, setHoveredLabel] = useState("Hardware Issues");
    const [hoveredValue, setHoveredValue] = useState('');

    useEffect(() => {
        if (categorysWithPercentage) {
            setHoveredValue(hardwareIssue.percentage + '%')
        }
    }, [categorysWithPercentage]);
    const getChartOptions = () => ({
        series: series,
        // colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
        chart: {
            height: 320,
            width: "100%",
            type: "donut",
            events: {
                dataPointMouseEnter: (event, chartContext, config) => {
                    const value = config.w.config.series[config.dataPointIndex];
                    const label = labels[config.dataPointIndex];
                    setHoveredLabel(label);
                    setHoveredValue(value + '%');
                },
            },
        },
        tooltip: {
            enabled: false,
        },
        stroke: {
            colors: ["transparent"],
            lineCap: "",
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontFamily: "Inter, sans-serif",
                            offsetY: 20,
                            formatter: (hoveredLabel) => hoveredLabel,
                        },
                        total: {
                            showAlways: true,
                            show: true,
                            label: hoveredLabel,
                            fontFamily: "Inter, sans-serif",
                            formatter: () => hoveredValue,
                        },
                        value: {
                            show: true,
                            fontFamily: "Inter, sans-serif",
                            label: hoveredLabel,
                            offsetY: -20,
                            formatter: (value) => value + "%",
                        },
                    },
                    size: "60%",
                },
            },
        },
        grid: {
            padding: {
                top: -2,
            },
        },
        labels: labels,
        dataLabels: {
            enabled: false,
        },
        legend: {
            position: "right",
            fontFamily: "Inter, sans-serif",
        },
        yaxis: {
            labels: {
                formatter: (value) => value + "k",
            },
        },
        xaxis: {
            labels: {
                formatter: (value) => value + "k",
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
    });

    useEffect(() => {
        if (chartRef.current) {
            const apexChart = new ApexCharts(chartRef.current, getChartOptions());
            apexChart.render();
            setChart(apexChart);
        }
        return () => {
            if (chart) {
                chart.destroy();
            }
        };
    }, [hoveredLabel, hoveredValue]);

    useEffect(() => {
        if (chart) {
            chart.updateSeries(series);
        }
    }, [series, chart]);

    return (
        <div className='p-3 rounded-lg shadow-2xl'>
            <div className="flex text-3xl font-bold p-3">
                <ChartPieIcon className="size-10" />
                Tickets Categories Inquiry Chart
            </div>
            <div>
                <div className="flex flex-1 flex-col gap-0.5 text-md">
                    <div className="grid grid-cols-2 gap-2">
                        {data?.map((category, index) => (
                            category.count !== 0 && <div key={index} className="text-md text-gray-700">
                                {category.name}: {category.count}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-6" ref={chartRef}></div>
        </div>
    );
};

export default CategoryChartSection;
