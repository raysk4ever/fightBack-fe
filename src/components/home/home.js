import React from 'react';
import './home.scss'
import {PieChart, Pie, Legend, Tooltip, ResponsiveContainer} from 'recharts';
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      pieData: [
        {
          "name": "Sexual",
          "value": 5900
        },
        {
          "name": "Harassments",
          "value": 4000
        },
        {
          "name": "Stalking",
          "value": 1000
        },
        {
          "name": "Abuse",
          "value": 2500
        },
        {
          "name": "Other",
          "value": 9800
        }
      ]  
     }
  }
  render() { 
    return ( 
      <div className='home-container'>
        <div className='home-top-container'>
          {this.state.pieData.map(item=>(
            <div key={item.name} className="card-long">
              <span>{item.name}</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        <div className='home-graph-container'>
          <div className='pie-container'>
            <ResponsiveContainer width={630} height={400}>
              <PieChart >
                <Pie data={this.state.pieData} label dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#333" />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div><div className='pie-container'>
            <ResponsiveContainer width={630} height={400}>
              <PieChart >
                <Pie data={this.state.pieData} label dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#333" />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
      </div>
     );
  }
}
 
export default Home;