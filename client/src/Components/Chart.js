import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


class Chart extends React.Component {
    constructor() {
      super();
      this.state = {
          data: []
      }
    }

    componentDidMount() {
        let url = this.props.dataUrl;
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
                yAxis: {
                    enabled: true,
                    gridLineColor: '#2d3436',
                    title: {
                        text: 'Rate',
                        style: {
                            color: 'white'
                        }
                    },
                    labels: {
                        style : {
                            color: 'white'
                        }
                    }
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
                        text: "Date",
                        style : {
                            color: 'white'
                        }
                    }
                },
                series: [
                    {
                        data: this.state.data,
                        color: '#e67e22',
                    }
                ]
            };

        return(
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        )};
  
}

export default Chart;