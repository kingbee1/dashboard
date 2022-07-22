import React from 'react'
import { ChartComponent, SeriesCollectionDirective,HiloSeries, Tooltip,Crosshair, SeriesCollective, Inject, Legend, DateTime, SplineAreaSeries, SeriesDirective, Zoom, Logarithmic } from '@syncfusion/ej2-react-charts'
import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'

const date1 = new Date('2022, 7, 21');

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Financial' title='Financial Chart' />
    <ChartComponent
      id='charts'
      primaryXAxis={FinancialPrimaryXAxis}
      primaryYAxis={FinancialPrimaryYAxis}
      chartArea={{border : {width : 0}}}
      tooltip={{enable : true, shared: true  }}
      background ={currentMode === 'Dark' ? '#33373E' : '#fff' }
      crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
    >
      <Inject services={[HiloSeries, Tooltip, Crosshair, Zoom, DateTime, Logarithmic]} />
      <SeriesCollectionDirective>
       
        <SeriesDirective 
             dataSource={returnValue}
             xName="x"
             yName="low"
             name="Apple Inc"
             type="Hilo"
             low="low"
             high="high" 
        
        />
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Financial
