enyo.kind({
	name: "App",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable contentBg",
	components: [
      { kind:"Header" },
      {   
        kind:"SearchableList",
        // insert hardcoded data during component form. Same as setData in scripting form. 
        data:[
          {name:"Apple"},
          {name:"Banana"},
          {name:"Kiwi"},
          {name:"Orange"},
          {name:"Grapes"},
          {name:"Watermelon"},
          {name:"Pineapple"},
          {name:"Plum"},
          {name:"Jackfruit"}
        ]
      },
      { kind:"Footer" }
	],
 
	create: function(){
		  this.inherited(arguments);
	}
  
});