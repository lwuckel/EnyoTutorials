enyo.kind({
    name: "RepeaterItem",
    kind: "Control",
    style:"padding:10px;",
    //Never places events prior components node. Always place after components.
    //Nest them if you must.
    components:[
        {
            // Placing onflick after components node.
            onflick:"handleFlicked",
            layoutKind: "FittableColumnsLayout",
            components: [
                {
                	tag:"h1",
                	name:"title",
                	style:"width:50%",
                	content: "Set Title..."
                },
                {
                	style:"width:50%;text-align:right",
                	components:[
                		{
                			kind:"onyx.Button",
                			name:"btnA",
                			colorClass:"redBg",
                            classes:"buttonA",
                			content:"Button A",
                            ontap:"handleButtonTapped"
                		},
                		{
                			kind:"onyx.Button",
                			name:"btnB",
                            colorClass:"greenBg",
                			classes:"buttonB",
                			content:"Button B",
                            ontap:"handleButtonTapped"
                		}
                	]
                }
            ]
        }
    ],
    // I'm also making use of published methods here.
    published:{
    	title:"Set Title..."
    },
    // Attaching callbacks in events node. 
    // To connect a callback, simply replace on with do prefix to the callback name.
    events:{
        // Leave it empty, onItemFlicked and onButtonsTapped is what you should 
        // use outside the parent. See SampleRepeater.
        onItemFlicked:"",
        onButtonsTapped:""
    },
    titleChanged:function(){
    	this.$.title.setContent(this.title);
    },
    resetColor:function() {
        this.removeClass("blueBg");
        this.removeClass("redBg");
        this.removeClass("greenBg");
    },
    handleButtonTapped:function(inSender,inEvent){
        // Noticed I've replaced "on" with "do", to connect a callback.
        // By default, the events will always fire inSender, inEvent back to parent.
        // You can append object to inEvent with adding a parameter to it.
        // In our case, we pushed inSender which is the button control object
        // back to the parent as inEvent.
        this.doButtonsTapped(inSender);
    },
    handleFlicked:function(inSender,inEvent){
        // Noticed I've replaced "on" with "do", to connect a callback to the handlers.
        this.doItemFlicked();
    }
});