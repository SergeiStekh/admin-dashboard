import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/areaDiagramData'
import { useStateContext } from '../../contexts/ContextProvider';

const AreaDiagram = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={areaPrimaryXAxis}
      PrimaryYAxis={areaPrimaryYAxis}
      chartArea={{border: {width: '0'}}}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend ]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, idx) => (
            <SeriesDirective key={idx} {...item}/>
          ))}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default AreaDiagram