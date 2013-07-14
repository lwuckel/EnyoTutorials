enyo.kind({
	name: "App",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
		  // Notice a global event doesn't depend on "parent control", 
      // it can be anywhere as long it's loaded in the same page.
      { 
        kind:"Signals", 
        onHandleBtnNextPageTap:"handleBtnNextPageSignal"
      },
      {
          kind:"Header",
          // Here is how we bind event listener to capture, bubbles.
          onBtnNextTap:"handleBtnNextBubble",
          onBtnBackTap:"handleBtnBackBubble"
      },
      {
          kind: "Scroller", 
          horizontal:"hidden", 
          touch:true,
          fit:true,
          thumb:true, 
          components:[
             {
                  tag:"h1",
                  //This is how we insert css class.
                  classes:"padding15px",
                  content:"This is content area...Hello World!!!"
              }
          ]              
      },
      {
          kind:"Footer"
      }
	],
	create: function(){
		this.inherited(arguments);
		console.log("App is created in memory");
	},
	rendered : function(){
		this.inherited(arguments);
		console.log("App is created in rendered into DOM");
	},
  handleBtnNextPageSignal : function(inSender,inEvent){
       alert("Global Event Triggered");
      new Page2().renderInto(document.body);
  },
  handleBtnNextBubble: function(inSender,inEvent){
      new Page2().renderInto(document.body);
  },
  handleBtnBackBubble: function(inSender,inEvent){
      alert("Back Button");
  }
});