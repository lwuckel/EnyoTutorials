enyo.kind({
	name: "App",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
      { kind:"Header" },
      {   
          kind: "Scroller",
          name: "contentControl",
          fit:true,
          touch:true, 
          thumb:true,
          components:[
            { 
              name:"registerFormControl",
              kind:"SampleForm" 
            }
          ]
      },
      { 
        kind:"Footer",
        onSubmit:"handleFormSubmit" 
      }
	],
 
	create: function(){
		  this.inherited(arguments);
	},
  handleFormSubmit:function(inSender,inEvent) {
      //Access a kind method is as simple as hashing it's name and trigger the method.
      this.payLoad = this.$.registerFormControl.getFormValues();
      console.log(this.payLoad);
      //This is a standard enyo.Ajax to post data. 
      var ajax = new enyo.Ajax({
          url: "http://www.yourgatewayurl.com",
          method:"POST",
          timeout:5000,
          contentType:"application/json"
      });
      // send parameters the remote service using the 'go()' method
      ajax.go(this.payLoad);
      // attach responders to the transaction object
      ajax.response(this, "processResponse");
      // handle error
      ajax.error(this, "processError");
  },
  processResponse:function(inSender,inResponse) {
      //To access the retrieved value just use inResponse;
      console.log(inResponse);
      alert("All Done");
  },
  processError:function(inSender,inResponse) {
      alert("Failed");
  } 
});