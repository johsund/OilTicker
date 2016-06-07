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
				$element.append($('<iframe src="https://cdn.rawgit.com/johsund/OilTicker/916e80cbc9e2286814897fd2928ab95cf6920608/tickerWidget.html" style="border: 0;overflow:hidden;"/>').attr("id", id).width(width).height(height));
			}
		}
	};
} );

