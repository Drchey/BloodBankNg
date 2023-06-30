import React, { Component } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Delivered', 'New Orders', 'To Be Delivered'],
  datasets: [
    {
      label: '#Orders Today',
      data: [12, 34, 19],
      backgroundColor: ['#00897b', '#3949ab', '#d81b60'],
    },
  ],
}

export class Invoice extends Component {
  render() {
    return (
      <div className="invoice card m-2">
        <Pie height={`100`} data={data} />
      </div>
    )
  }
}

export default Invoice
