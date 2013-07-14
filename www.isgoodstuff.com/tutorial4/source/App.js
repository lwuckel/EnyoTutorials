enyo.kind({
	name: "App",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
      { kind:"Header" },
      {   
          name: "appList", 
          kind: "List", 
          fit:true, 
          count:0, 
          touch:true, 
          onSetupItem: "setupItem", 
          components: [
              {
                  name: "listItem", 
                  classes:'listItemContainer', 
                  ontap:'listItemTapped', 
                  components: [
                      {
                        name: "itemTitle",  
                        content:"Set Title..."
                      }
                  ]
              }
          ]
      },
      { kind:"Footer" }
	],
  datasource:[
        { name:"Alex", age:"13" },
        { name:"Aric", age:"12" },
        { name:"Anthony", age:"12" },
        { name:"Alfonso", age:"11" },
        { name:"Boon", age:"11" },
        { name:"Catherine", age:"11" },
        { name:"Casidy", age:"13" },
        { name:"Cody", age:"13" },
        { name:"Chloe", age:"13" },
        { name:"Cindy", age:"12" },
        { name:"David", age:"12" },
        { name:"Daud", age:"11" },
        { name:"Eddie", age:"13" }
  ],
	create: function(){
		this.inherited(arguments);
		this.$.appList.setCount(this.datasource.length);
    // using setCount will trigger the onSetupItem event about 13 times.
    // setupItem is where you populate the list.
	},
  setupItem:function(inSender,inEvent) {
     //During the iteraction of setupItem, this event will create inEvent.index which is
     //assigned automatically. inEvent.index is very useful, to map array index of datasource.

     //In enyo, this.variableName is the same as to var a variable. Only difference is they remained
     //within the closure.
     this.childName = this.datasource[inEvent.index].name; 
     this.$.itemTitle.setContent(this.childName);
  },
  listItemTapped:function(inSender,inEvent) {
     //Best practice you should always refer your index with the ones in memory.
     //Reason being, list can be highly dynamic and some can be sorted and filtered search.
     //Always try to referred the index with the ones in the memory.
      alert("Age of "+this.datasource[inEvent.index].name+" is "+this.datasource[inEvent.index].age);
  }
});