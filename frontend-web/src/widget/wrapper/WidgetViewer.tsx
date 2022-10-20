import React, { useEffect, useState } from 'react';
import { Divider, Stack, Typography } from '@mui/material';
import { WIDGET_TYPE } from '@/constant';
import LineChart from '@/widget/modules/linechart/LineChart';
import PieChart from '@/widget/modules/piechart/PieChart';
import NumericBoard from '@/widget/modules/board/NumericBoard';
import TableBoard from '@/widget/modules/board/TableBoard';
import DonutChart from '@/widget/modules/piechart/DonutChart';
import ScatterChart from '@/widget/modules/scatterchart/ScatterChart';
import BubbleChart from '@/widget/modules/scatterchart/BubbleChart';
import RadarChart from '@/widget/modules/radarchart/RadarChart';
import TreemapChart from '@/widget/modules/treemapchart/TreemapChart';
import HeatmapChart from '@/widget/modules/heatmapchart/HeatmapChart';
import GaugeChart from '@/widget/modules/gaugechart/GaugeChart';
import CandlestickChart from '@/widget/modules/candlestickchart/CandlestickChart';
import Bar3DChart from '@/widget/modules/3dchart/Bar3dChart';
import Line3DChart from '@/widget/modules/3dchart/Line3dChart';
import Scatter3DChart from '@/widget/modules/3dchart/Scatter3dChart';
import Bubble3dChart from '@/widget/modules/3dchart/Bubble3dChart';
import WaterfallBarChart from '@/widget/modules/barchart/WaterfallBarChart';
import PolarBarChart from '@/widget/modules/barchart/PolarBarChart';
import MixedLinePieChart from '@/widget/modules/mixedchart/MixedLinePieChart';
import MixedDonutPieChart from '@/widget/modules/mixedchart/MixedDonutPieChart';
import MixedLineStackedBarChart from '@/widget/modules/mixedchart/MixedLineStackedBarChart';

const WidgetViewer = props => {
  const { title, widgetType, widgetOption, dataSet } = props;

  const [module, setModule] = useState(null);
  // const [componentOption, setComponentOption] = useState({});
  // let testModule = null;
  // const chartProps = { option: widgetOption, dataSet: dataSet, seriesOp: undefined, createOp: undefined };

  useEffect(() => {
    if (widgetType && widgetOption && dataSet) renderWidget();
  }, [widgetType, widgetOption, dataSet]);

  const renderWidget = () => {
    console.log('===== renderWidget');
    let module = null;
    const chartProps = { option: widgetOption, dataSet: dataSet };

    switch (widgetType) {
      case WIDGET_TYPE.BOARD_NUMERIC:
        module = <NumericBoard {...chartProps} />;
        break;
      case WIDGET_TYPE.BOARD_TABLE:
        module = <TableBoard {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_LINE:
        module = <LineChart {...chartProps} />;
        // testModule = testLineChart;
        break;
      case WIDGET_TYPE.CHART_STACKED_LINE:
        module = <LineChart {...chartProps} seriesOp={{ stack: 'total', label: { show: true, position: 'top' } }} />;
        break;
      case WIDGET_TYPE.CHART_AREA:
        module = <LineChart {...chartProps} seriesOp={{ areaStyle: {} }} />;
        break;
      case WIDGET_TYPE.CHART_STACKED_AREA:
        module = (
          <LineChart
            {...chartProps}
            seriesOp={{
              areaStyle: {},
              stack: 'total',
              label: { show: true, position: 'top' },
            }}
          />
        );
        break;
      case WIDGET_TYPE.CHART_BAR:
        module = (
          <LineChart
            {...chartProps}
            seriesOp={{ type: 'bar' }}
            defaultOp={{
              tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
              yAxis: { boundaryGap: [0, 0.01] },
              emphasis: { focus: 'none' },
            }}
          />
        );
        break;
      case WIDGET_TYPE.CHART_STACKED_BAR:
        module = <LineChart {...chartProps} seriesOp={{ type: 'bar', stack: 'total', label: { show: true } }} />;
        break;
      case WIDGET_TYPE.CHART_COLUMN:
        module = (
          <LineChart
            {...chartProps}
            axis="y"
            seriesOp={{ type: 'bar' }}
            defaultOp={{
              grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
              tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
              xAxis: { boundaryGap: [0, 0.01] },
              emphasis: { focus: 'none' },
            }}
          />
        );
        break;
      case WIDGET_TYPE.CHART_STACKED_COLUMN:
        module = (
          <LineChart
            {...chartProps}
            axis="y"
            seriesOp={{ type: 'bar', stack: 'total', label: { show: true } }}
            defaultOp={{
              grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
            }}
          />
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_LINE_BAR:
        module = (
          <LineChart
            {...chartProps}
            defaultOp={{
              tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
              yAxis: { boundaryGap: [0, 0.01] },
              emphasis: { focus: 'none' },
            }}
            seriesOp={{ smooth: false }}
          />
        );
        break;
      case WIDGET_TYPE.CHART_PIE:
        module = <PieChart {...chartProps} />;
        break;

      case WIDGET_TYPE.CHART_DONUT:
        module = <DonutChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_NIGHTINGALE:
        module = (
          <DonutChart
            {...chartProps}
            seriesOp={{
              roseType: 'area',
              itemStyle: { borderRadius: 8 },
            }}
          />
        );
        break;
      case WIDGET_TYPE.CHART_SCATTER:
        module = <ScatterChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_BUBBLE:
        module = <BubbleChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_RADAR:
        module = <RadarChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_TREEMAP:
        module = <TreemapChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_HEATMAP:
        module = <HeatmapChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_SUNBURST:
        module = <TreemapChart {...chartProps} seriesOp={{ type: 'sunburst', label: { rotate: 'radial' } }} />;
        break;
      case WIDGET_TYPE.CHART_GAUGE:
        module = <GaugeChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_CANDLESTICK:
        module = <CandlestickChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_FUNNEL:
        module = (
          <PieChart
            {...chartProps}
            seriesOp={{
              type: 'funnel',
              width: '70%',
              gap: 4,
              label: {
                show: true,
                position: 'inside',
              },
            }}
          />
        );
        break;
      case WIDGET_TYPE.CHART_3D_BAR:
        module = <Bar3DChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_3D_LINE:
        module = <Line3DChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_3D_SCATTER:
        module = <Scatter3DChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_3D_BUBBLE:
        module = <Bubble3dChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_WATERFALL_BAR:
        module = <WaterfallBarChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_WATERFALL_COLUMN:
        module = <WaterfallBarChart {...chartProps} axis="y" />;
        break;
      case WIDGET_TYPE.CHART_POLAR_BAR:
        module = <PolarBarChart {...chartProps} />;
        break;
      case WIDGET_TYPE.CHART_POLAR_STACKED_BAR:
        module = <PolarBarChart {...chartProps} seriesOp={{ stack: 'stack' }} />;
        break;
      case WIDGET_TYPE.MIXED_CHART_LINE_PIE:
        module = <MixedLinePieChart {...chartProps} />;
        break;
      case WIDGET_TYPE.MIXED_CHART_AREA_PIE:
        module = <MixedLinePieChart {...chartProps} seriesOp={{ areaStyle: {} }} />;
        break;
      case WIDGET_TYPE.MIXED_CHART_BAR_PIE:
        module = (
          <MixedLinePieChart
            {...chartProps}
            seriesOp={{ type: 'bar' }}
            defaultOp={{
              tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
              yAxis: { boundaryGap: [0, 0.01] },
              emphasis: { focus: 'none' },
            }}
          />
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_COLUMN_PIE:
        module = (
          <MixedLinePieChart
            {...chartProps}
            axis="y"
            seriesOp={{ type: 'bar' }}
            defaultOp={{
              grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
              tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
              xAxis: { boundaryGap: [0, 0.01] },
              emphasis: { focus: 'none' },
            }}
          />
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_STACKED_BAR_PIE:
        module = <MixedLinePieChart {...chartProps} seriesOp={{ type: 'bar', stack: 'total', label: { show: true } }} />;
        break;
      case WIDGET_TYPE.MIXED_CHART_STACKED_COLUMN_PIE:
        module = (
          <MixedLinePieChart
            {...chartProps}
            axis="y"
            seriesOp={{ type: 'bar', stack: 'total', label: { show: true } }}
            defaultOp={{
              grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
            }}
          />
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_STACKED_LINE_PIE:
        module = <MixedLinePieChart {...chartProps} seriesOp={{ stack: 'total', label: { show: true, position: 'top' } }} />;
        break;
      case WIDGET_TYPE.MIXED_CHART_STACKED_AREA_PIE:
        module = (
          <MixedLinePieChart
            {...chartProps}
            seriesOp={{
              areaStyle: {},
              stack: 'total',
              label: { show: true, position: 'top' },
            }}
          />
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_DONUT_PIE:
        module = <MixedDonutPieChart {...chartProps} />;
        break;
      case WIDGET_TYPE.MIXED_CHART_NIGHTINGALE_PIE:
        module = (
          <MixedDonutPieChart
            {...chartProps}
            seriesOp={{
              roseType: 'area',
              itemStyle: { borderRadius: 8 },
            }}
          />
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_LINE_STACKED_BAR:
        module = <MixedLineStackedBarChart {...chartProps} />;
        break;
      case WIDGET_TYPE.MIXED_CHART_LINE_BOARD_NUMERIC:
        module = (
          <React.Fragment>
            <NumericBoard
              {...chartProps}
              // option={widgetOption.numericOption}
            />
            <LineChart
              {...chartProps}
              // option={widgetOption.chartOption}
            />
          </React.Fragment>
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_AREA_BOARD_NUMERIC:
        module = (
          <React.Fragment>
            <NumericBoard {...chartProps} />
            <LineChart {...chartProps} seriesOp={{ areaStyle: {} }} />;
          </React.Fragment>
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_BAR_BOARD_NUMERIC:
        module = (
          <React.Fragment>
            <NumericBoard {...chartProps} />
            <LineChart
              {...chartProps}
              seriesOp={{ type: 'bar' }}
              defaultOp={{
                tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
                yAxis: { boundaryGap: [0, 0.01] },
                emphasis: { focus: 'none' },
              }}
            />
          </React.Fragment>
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_COLUMN_BOARD_NUMERIC:
        module = (
          <React.Fragment>
            <NumericBoard {...chartProps} />
            <LineChart
              {...chartProps}
              axis="y"
              seriesOp={{ type: 'bar' }}
              defaultOp={{
                grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
                tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
                xAxis: { boundaryGap: [0, 0.01] },
                emphasis: { focus: 'none' },
              }}
            />
          </React.Fragment>
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_STACKED_LINE_BOARD_NUMERIC:
        module = (
          <React.Fragment>
            <NumericBoard {...chartProps} />
            <LineChart {...chartProps} seriesOp={{ stack: 'total', label: { show: true, position: 'top' } }} />
          </React.Fragment>
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_STACKED_AREA_BOARD_NUMERIC:
        module = (
          <React.Fragment>
            <NumericBoard {...chartProps} />
            <LineChart
              {...chartProps}
              seriesOp={{
                areaStyle: {},
                stack: 'total',
                label: { show: true, position: 'top' },
              }}
            />
          </React.Fragment>
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_STACKED_BAR_BOARD_NUMERIC:
        module = (
          <React.Fragment>
            <NumericBoard {...chartProps} />
            <LineChart {...chartProps} seriesOp={{ type: 'bar', stack: 'total', label: { show: true } }} />;
          </React.Fragment>
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_STACKED_COLUMN_BOARD_NUMERIC:
        module = (
          <React.Fragment>
            <NumericBoard {...chartProps} />
            <LineChart
              {...chartProps}
              axis="y"
              seriesOp={{ type: 'bar', stack: 'total', label: { show: true } }}
              defaultOp={{
                grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
              }}
            />
          </React.Fragment>
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_DONUT_BOARD_NUMERIC:
        module = (
          <React.Fragment>
            <NumericBoard
              {...chartProps}
              sx={{
                position: 'absolute',
                zIndex: 1000,
                top: '50%',
                left: 0,
                right: 0,
                margin: 'auto',
                transform: 'translateY(-50%)',
              }}
            />
            <DonutChart {...chartProps} />
          </React.Fragment>
        );
        break;
      case WIDGET_TYPE.MIXED_CHART_NIGHTINGALE_BOARD_NUMERIC:
        module = (
          <React.Fragment>
            <NumericBoard
              {...chartProps}
              sx={{
                position: 'absolute',
                zIndex: 1000,
                top: '50%',
                left: 0,
                right: 0,
                margin: 'auto',
                transform: 'translateY(-50%)',
              }}
            />
            <DonutChart
              {...chartProps}
              seriesOp={{
                roseType: 'area',
                itemStyle: { borderRadius: 8 },
              }}
            />
          </React.Fragment>
        );
        break;

      default:
        module = '컴포넌트가 선택되지 않았다!';
        break;
    }

    console.log('module', module);
    setModule(module);
  };

  // const defaultComponentOption = {
  //   grid: { top: 50, right: 50, bottom: 50, left: 50 },
  //   tooltip: { trigger: 'axis' },
  //   xAxis: {
  //     type: 'category',
  //   },
  //   yAxis: {
  //     type: 'value',
  //   },
  //   series: [],
  //   emphasis: {
  //     focus: 'series',
  //     blurScope: 'coordinateSystem',
  //   },
  // };
  //
  // useEffect(() => {
  //   if (testModule) {
  //     const newOption = testModule({ ...chartProps });
  //     setComponentOption({ ...defaultComponentOption, ...newOption });
  //   }
  // }, [widgetOption, dataSet]);

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        border: '1px solid #DADDDD',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%', py: 1 }}>
        <Typography variant="subtitle1" component="span" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
      </Stack>
      <Divider sx={{ marginBottom: 4 }} />

      <Stack
        sx={{
          width: '100%',
          height: '100%',
          maxHeight: '600px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {module}
        {/*<ReactECharts*/}
        {/*  option={componentOption}*/}
        {/*  style={{ height: '100%', maxHeight: '600px', width: '100%' }}*/}
        {/*  lazyUpdate={true}*/}
        {/*  notMerge={true}*/}
        {/*/>*/}
      </Stack>
    </Stack>
  );
};

export default WidgetViewer;
