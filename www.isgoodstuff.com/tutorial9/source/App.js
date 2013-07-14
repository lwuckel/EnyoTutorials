enyo.kind({
	name: "App",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
      { kind:"Header" },
      { 
        classes:"center",
        components:[
          { name:"colorMenuControl", kind:"ColorMenu" }
        ] 
      },
      {   
        name:"contentPage",
        fit:true,
        classes:"contentBg center",
        components:[
          {
              kind:"CenterButton"
          }
        ]
      },
      { 
        kind:"Footer",
        onSendWaterfall:"handleButtonWaterFallTapped" 
      }
	],
 
	create: function(){
		  this.inherited(arguments);
	},
  handleButtonWaterFallTapped:function(inSender,inEvent) {
      // Upon receiving event onSendWaterfall bubbling from this Footer.js;
      // We need to get the values from the kind named "ColorMenu.js"
      // To obtain a radioGroup value, by default, it comes with attribute "active"
      // which is the currently active child-control. From that control we just
      // need to query it's content.
      console.log( "Content value from ColorMenu is : "+ this.$.colorMenuControl.active.content );

      //Next, getting it's content from ColorMenu. We then waterfall it.
      //By setting an object as 2nd parameter makes it accessible in inEvent of the handler
      //which we will handle in CenterButton.js
      this.waterfall("onParentWaterFall",{color:this.$.colorMenuControl.active.content});  
  }
});