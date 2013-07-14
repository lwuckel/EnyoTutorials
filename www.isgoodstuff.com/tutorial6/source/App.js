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
      this.loadStuffFromFile();
	},
  loadTextFile:function(url,onSuccess,onError){
    var ajaxGet =  new enyo.Ajax({
        url:url,
        method:'GET',
        handleAs:'json'
    }); 
    ajaxGet.go();
    ajaxGet.response(this, onSuccess);
    ajaxGet.error(this, onError);
  },
  loadStuffFromFile:function(){
      var self = this;
      this.loadTextFile('assets/datafromserver.json',onSuccess,onError);
      function onSuccess(inSender,inResponse){
          // Remember: always use a proxy variable in subfunctions.
          console.log(inResponse);
          self.pushToSampleForm(inResponse.data);
      }
      function onError(){
          alert("Error in loading file...");
      }
  },

  pushToSampleForm:function(param){
      // like how we getFormValues();, we use setFormValues() instead.
      this.$.registerFormControl.setFormValues(param);
  },

  handleFormSubmit:function(inSender,inEvent) {
      this.payLoad = this.$.registerFormControl.getFormValues();
      console.log(this.payLoad);
      var ajax = new enyo.Ajax({
          url: "http://www.yourgatewayurl.com",
          method:"POST",
          timeout:5000,
          contentType:"application/json"
      });
      ajax.go(this.payLoad);
      ajax.response(this, "processResponse");
      ajax.error(this, "processError");
  },
  processResponse:function(inSender,inResponse) {
      alert("All Done");
  },
  processError:function(inSender,inResponse) {
      alert("Failed");
  } 
});