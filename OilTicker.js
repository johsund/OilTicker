/*globals define*/
define( ["jquery", "text!./style.css", "./js/tv"], function ( $, cssContent, tv ) {
	'use strict';
	$( "<style>" ).html( cssContent ).appendTo( "head" );
	return {
		initialProperties: {
			qHyperCubeDef: {
				qDimensions: [],
				qMeasures: [],
				qInitialDataFetch: [{
					qWidth: 10,
					qHeight: 50
				}]
			}
		},
		definition: {
			type: "items",
			component: "accordion",
			items: {
			}
		},
		snapshot: {
			canTakeSnapshot: true
		},
		paint: function ( $element, layout ) {
		  var width = $element.width();
		  var height = $element.height();
		  
		  var id = "container_" + layout.qInfo.qId;
			
			if(document.getElementById(id)) {
				$("#" + id).empty();
			}
			else {
				$element.append($('<iframe src="file:///C:/Users/jsn/Documents/Qlik/Sense/Extensions/OilTicker/tickerWidget.html" style="border: 0;overflow:hidden;"/>').attr("id", id).width(width).height(height));
			}
		
			//$("#"+id).append('<div id="iframediv" style="height:100%;width:100%;"></div>');


		
		//$("#"+id).append('<script type="text/javascript" src="https://d33t3vvu2t2yu5.cloudfront.net/tv.js"></script><script type="text/javascript">new TradingView.widget({"width": '+width+',"height":' +height+ ',"symbol": "CLN16","interval": "1","timezone": "Etc/UTC","theme": "White","style": "1","locale": "en","toolbar_bg": "#f1f3f6","hide_top_toolbar": true,"save_image": false,"hideideas": true});</script>');
		}
	};
} );

