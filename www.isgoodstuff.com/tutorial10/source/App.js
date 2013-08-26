enyo.kind({
	name: "App",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable contentBg",
	components: [
      { kind:"Header" },
      {   
        fit:true,
        classes:"center",
        components:[
          {
            name:"contentPage",
            kind:"ContentHasNodeLoader"            
          }
        ]
      },
      { kind:"Footer", onFooterButtonTapped:"handleLoadExternal" }
	],
 
	create: function(){
		this.inherited(arguments);
	},
  handleLoadExternal:function(inSender,inEvent) {
    alert("Loading data.json");
    this.loadTextFile('assets/data.json', onSuccess, onError);
    function onSuccess(inSender,inRequest){
      this.$.contentPage.setData(inRequest.data);
    }
    function onError(){
      alert("Error in loading file");
    }
  },
  loadTextFile:function(url,onSuccess,onError){
    // A simple ajax called that have two callbacks as parameter.
    // returns itself back to the caller. 
    var ajaxGet =  new enyo.Ajax({
      url:url,
      method:'GET',
      handleAs:'json'
    }); 
    ajaxGet.go();
    ajaxGet.response(this, onSuccess);
    ajaxGet.error(this, onError);
  }
});