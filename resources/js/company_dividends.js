Chart.pluginService.register({
    beforeDraw: function (chart) {
        if (chart.config.options.elements.center) {
            //Get ctx from string
            var ctx = chart.chart.ctx;

            //Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = '#333';
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
            //Start with a base font of 30px
            ctx.font = "40px " + fontStyle;

            //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(20 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight);

            //Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 1.7);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            //Draw text in center
            ctx.fillText(txt, centerX, centerY);
        }
    }
});

var ticker = $('.ticker').text();

function get_dividends(ticker){
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    var token = $('meta[name="csrf-token"]').attr('content');

    $.ajax({
        url: '/company/'+ticker+'/get_dividends/',
        type:'GET',
        dataType:'json',
        data:{
            _token:token,
            ticker:ticker
        },
        success:function(response){
            console.log(response); 

            build_charts(response);       
        }
    });
}

function build_charts(response){

    var dates=[];
    var div_amounts=[];

    for(let i=0;i<response.length;i++){
        dates.push(response[i].paymentDate);
        div_amounts.push(response[i].amount);
    }

    var config = {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Dividend Amount',
                data: div_amounts,
                backgroundColor: '#3490dc',
                borderColor: '#97BDDC',
                fill: false,
                borderDash: [5, 5],
                pointRadius: 8,
                pointHoverRadius: 11,
            }]
        },
        options: {
            responsive: true,
            legend: {
                display:false
            },
            hover: {
                mode: 'index'
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Payment Date'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Amount Paid'
                    }
                }]
            },
            title: {
                display: true,
                text: 'Dividend Payments by Payment Date'
            }
        }
    };

        var ctx = document.getElementById('dividend_histroy_chart').getContext('2d');
        window.myLine = new Chart(ctx, config);
}

get_dividends(ticker);