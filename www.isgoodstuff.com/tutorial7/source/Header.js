enyo.kind({
    name: "Header",
    kind: "Control",
    components: [
        {
             kind: "onyx.Toolbar",
             name:"headerText",
             content:"Tutorial 6 : Loading Data to Form",
             style:"text-align:center"
        }
    ],
    // This is how you place your published method. For this example, i use headerLabel, you can add more properties by using "," just avoid
	// using "," at the the final attribute. Noticed once, this kind is created set and get along with headerLabelChanged is prepared.
	// Changed is good in data that keep refreshing, for example, if you are doing a pull to refresh etc. For this case, we used it to trigger a // change in our header label.
	published:{
	    headerLabel:""
	},
	create:function(){
	    this.inherited(arguments);
	},
	// Just assume, set and get is there already unless you want to manually override them, and to access headerLabel, 
	// just use this.headerLabel.
	headerLabelChanged:function(){
	    this.$.headerText.setContent(this.headerLabel);
	}  
});