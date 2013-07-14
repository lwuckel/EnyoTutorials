enyo.kind({
	name: "App",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
		  {
          kind: "onyx.Toolbar",
          layoutKind:"FittableColumnsLayout",
          components: [
              {
                  kind:onyx.Button,
                  style:"width:80px;background:green;",
                  ontap:"handleBtnBack", 
                  content:"Back"
              },
              {
                  content:"Header",
                  style:"text-align:center;",
                  fit:true
              },
              {
                  kind:onyx.Button,
                  style:"width:80px;background:red;",
                  ontap:"handleBtnNext",
                  content:"Next"
              }
          ]
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
            kind: "onyx.Toolbar",
            // The footer
            layoutKind:"FittableColumnsLayout",
            components:[
                {
                      kind:"onyx.Button",
                      content:"Go Next Page",
                      ontap:"handleBtnNextPage",
                      fit:true   
                }
            ]
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
        handleBtnNextPage : function(inSender,inEvent){
            new Page2().renderInto(document.body);
        },
        handleBtnNext: function(inSender,inEvent){
            new Page2().renderInto(document.body);
        },
        handleBtnBack: function(inSender,inEvent){
            //For each enyo event handler comes with inSender, the control that sends the event and the inEvent the actual event itself.
            alert("Back Button");
        }
});