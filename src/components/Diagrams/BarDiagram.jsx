import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, Tooltip, Category, DataLabel } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/barDiagramData'
import { useStateContext } from '../../contexts/ContextProvider';

const BarDiagram = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
  )
}

export default BarDiagram