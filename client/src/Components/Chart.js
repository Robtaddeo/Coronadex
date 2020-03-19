import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


class Chart extends React.Component {
    constructor() {
      super();
      this.state = {
          data: []
      };
    }

    componentDidMount() {
        let url = this.props.dataUrl;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then((out) => {
                this.setState({data: out});
                console.log(this.state.data);
            })
            .catch(err => { throw err });
    }

    render() {
        const options = {
                chart: {
                    backgroundColor: 'transparent' 
                },
                title: {
                    text: this.props.title,
                    style: {
                        color: 'white'
                    }
                },
                legend: {
                    enabled: true
                },
                yAxis: [{ // Primary yAxis
                    labels: {
                        style: {
                            color: "#ffa600"
                        },
                        formatter: function() {
                            return Highcharts.numberFormat(this.value, 2);
                        }
                    },
                    title: {
                        text: 'Price',
                        style: {
                            color: "#ffa600"
                        }
                    }
                }, { // Secondary yAxis
                    title: {
                        text: 'Volume',
                        style: {
                            color: "#003f5c"
                        }
                    },
                    labels: {
                        format: '${value}',
                        style: {
                            color: "#003f5c"
                        },
                        formatter: function() {
                            return Highcharts.numberFormat(this.value, 2);
                        }
                    },
                    opposite: true
                }],
                tooltip: {
                    shared: true
                },
                xAxis: {
                    type: 'datetime',
                    enabled: true,
                    gridLineColor: '#2d3436',
                    labels: {
                        style : {
                            color: 'white'
                        }
                    },
                    title: {
                        style : {
                            color: 'white'
                        }
                    }
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, Highcharts.getOptions().colors[0]],
                                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    }
                },
                series: []
            };

        options.series = this.state.data;
        return(
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        )};
  
}

export default Chart;