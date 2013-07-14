enyo.kind({
	name: "App",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
      { kind:"Header" },
      {   
        name:"sampleControl",
        kind:"SampleRepeater" 
      }
	],
 
	create: function(){
		  this.inherited(arguments);
	}
});