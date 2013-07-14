enyo.kind({
	name: "Page2",
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
          tag:"div",
          classes:"padding15px orangeBg",
          // You can also add multiple classes of css into classes attribute.
          fit:true,
          components:[
            {
                tag:"h3",
                content:"This is page 2!"    
            },
            {
                kind:"Image",
                style:"width:128px;height:128px",
                src:"assets/img/icon.png"    
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
		console.log("Page 2 is created in memory");
	},
	rendered : function(){
		this.inherited(arguments);
		console.log("Page 2 is created in rendered into DOM");
	},
        handleBtnNextPage : function(inSender,inEvent){
            //For each enyo event handler comes with inSender, the control that sends the event and the inEvent the actual event itself.
            alert("End of Page");
        },
        handleBtnNext: function(inSender,inEvent){
            //For each enyo event handler comes with inSender, the control that sends the event and the inEvent the actual event itself.
            alert("End of Page");
        },
        handleBtnBack: function(inSender,inEvent){
            new App().renderInto(document.body);
        }
});