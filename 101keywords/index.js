import data from './data.js';

Highcharts.chart('container', {
  title: {
    text: '101個自分のキーワード',
    style: {
      fontSize: '4vw'
    },
    align: 'center'
  },
  series: [
    {
      type: 'wordcloud',
      data
    }
  ],
  plotOptions: {
    wordcloud: {
      maxFontSize: 30,
      minFontSize: 8,
      style: {
        fontFamily: '"Helvetica Neue", "Helvetica", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", sans-serif',
        fontWeight: '600'
      },
      tooltip: {
        headerFormat: '<span style="font-size: 1.2em; font-weight: 400;">{point.key}</span><br />',
        pointFormatter() {
          return `<span style="font-size: 1.5em; font-weight: 600">${this.dec}</span>`;
        }
      }
    }
  },
});