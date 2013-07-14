enyo.kind({
	name: "SampleRepeater",
	fit:true,
	classes: "enyo-unselectable padding15px formBg",
	components: [
		{   
			// This is how repeater works looks exactly like List but, they dont
			// have scroller by default with them. Usually, they will scroller with  
			// the help of additional scroller as their parent. 
			name: "myRepeater", 
			kind: "Repeater", 
			count:0, 
			touch:true, 
			onSetupItem: "setupItem", 
			components: [
				{
					name: "item", 
					classes:"listItemContainer", 
					// I've removed this event, and shift the listen to the RepeaterItem itself.
					//ontap:'listItemTapped',
					components: [
						{
							// RepeaterItem is a special control item, that will 
							// repeat itself, when the count length is set.
							name: "itemSpecial",  
							kind:"RepeaterItem",
							// Attaching callbacks.
							onItemFlicked:"handleItemFlicked",
							onButtonsTapped:"handleButtonTapped"
						}
					]
				}
			]
		}				
	],
	create: function(inSender,inEvent){
		this.inherited(arguments);
		// Let's create 10 simple repeaters.
		this.$.myRepeater.setCount(10);
	},
	setupItem:function(inSender,inEvent) {
		// Each time a repeater is setCount, an item proxy will appear. 
		// This will automatically represent the child control of the repeater.
		// console.log(inEvent.item);
		// To access the itemSpecial's properties and method.
		inEvent.item.$.itemSpecial.setTitle("Title "+(inEvent.index + 1));
	},
	handleItemFlicked:function(inSender,inEvent) {
		console.log("This is the whole list item being flicked...");
		// telling the item to render a new class on it's background.
		inSender.resetColor();
		inSender.addClass("blueBg");
	},
	handleButtonTapped:function(inSender,inEvent) {
		console.log("This is the list buttons are being tapped...");
		//inSender.resetColor();
		console.log(inEvent);
		inSender.resetColor();
		inSender.addClass(inEvent.colorClass);
	}
});