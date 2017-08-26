$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '���Ա𻮷ֵ�ˮ����������'
        },
        xAxis: {
            categories: ['ƻ��', '����', '��', '����', '�㽶']
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'ˮ������'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '����: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'С��',
            data: [5, 3, 4, 7, 2],
            stack: 'male'
        }, {
            name: 'С��',
            data: [3, 4, 4, 2, 5],
            stack: 'male'
        }, {
            name: 'С��',
            data: [2, 5, 6, 2, 1],
            stack: 'female'
        }, {
            name: 'С��',
            data: [3, 0, 4, 4, 3],
            stack: 'female'
        }]
    });
});