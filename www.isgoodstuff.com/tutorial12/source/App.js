enyo.kind({
	name: "App",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable contentBg",
	components: [
      { kind:"Header" },
      {   
        fit:true,
        kind:"CanvasChart"
      },
      { kind:"Footer",onFooterButtonTapped:"handlePlotGraph" }
	],
 
	create: function(){
		  this.inherited(arguments);
	},
  handlePlotGraph:function(inSender,inEvent) {
      this.waterfall("onPlotGraph");
  }
});