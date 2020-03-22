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
        fetch(url)
            .then(res => res.json())
            .then((out) => {
                this.setState({data: out});
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
                    gridLineColor: '#2f3542',
                    labels: {
                        style: {
                            color: "#ffa600"
                        },
                        formatter: function() {
                            return Highcharts.numberFormat(this.value, 2);
                        }
                    },
                    title: {
                        text: 'Price (USD)',
                        style: {
                            color: "#ffa600"
                        }
                    }
                }, { // Secondary yAxis
                    gridLineColor: '#2f3542',
                    title: {
                        text: 'Volume (Millions)',
                        style: {
                            color: "#70a1ff"
                        }
                    },
                    labels: {
                        style: {
                            color: "#70a1ff"
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
                plotOptions: {
                    series: {
                      stacking: 'normal',
                      borderWidth: 0
                    }
                  },
                xAxis: {
                    type: 'datetime',
                    ordinal: true,
                    enabled: true,
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
                series: this.state.data,
            };

        // options.series = this.state.data;
        return(
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        )};
  
}

export default Chart;