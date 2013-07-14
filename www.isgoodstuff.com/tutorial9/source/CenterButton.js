enyo.kind({
	name: "CenterButton",
	kind:"onyx.Button",
	style:"margin-top:120px",
	classes:"centerButton",
	content:"I'm Just A Button",
	handlers:{
		// Place the handler bucket and you are all set :)
		onParentWaterFall:"handleFetchWater"
	},
	handleFetchWater:function(inSender,inEvent){
		// Let's console the incoming value;
		// Notice that, it has the object properties color waterfalled
		// to it without any other function call !!. 
		console.log(inEvent);
		// Taking the value of color, we then, style the button in response.
		// add !important to force it just incase, the style is overrided.
		this.setStyle("background:"+inEvent.color+" !important");
	}
});