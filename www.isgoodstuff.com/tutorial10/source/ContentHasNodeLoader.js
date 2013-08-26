enyo.kind({
    name: "ContentHasNodeLoader",
    kind: "Control",
    components: [
        {
        	tag:"div",
        	name:"contentControl",
        	content:"<p>Tap on the footer button to load content</p>",
        	//This renders any string with html tags allowed. Cool feature.
        	allowHtml:true
        }
    ],
    published:{
        data:null        
    },
    create: function() {
        this.inherited(arguments);
        if(this.data != null){
            this.dataChanged();
        }
    },
    dataChanged: function() {
        this.$.contentControl.setContent(this.data);
        var myDOM = this.$.contentControl.hasNode();
        // We can then use manual DOM javascripting after this.
        console.log(myDOM.getElementsByTagName('button'));
        var myButtonINeed = myDOM.getElementsByTagName('button')[0];
        console.log(myButtonINeed);
        myButtonINeed.onclick = function(event){
            alert("I've just attached an event!");
        };
    }
    
});