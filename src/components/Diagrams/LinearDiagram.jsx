import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/linearDiagramData'
import { useStateContext } from '../../contexts/ContextProvider';

const LinearDiagram = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      PrimaryYAxis={LinePrimaryYAxis}
      chartArea={{border: {width: '0'}}}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip ]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, idx) => (
            <SeriesDirective key={idx} {...item}/>
          ))}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LinearDiagram