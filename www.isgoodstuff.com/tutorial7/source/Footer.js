enyo.kind({
    name: "Footer",
    kind: "Control",
    components: [
        {
            kind: "onyx.Toolbar",
            style:"text-align:center;margin:0px !important;padding:0px !important",
            components:[
        	{
        		kind:"onyx.Button",
        		classes:"fullScreenButton",
        		content:"Submit",
        		ontap:"handleSubmit"
        	}
            ]
        }
    ],
    handleSubmit:function(inSender,inEvent) {
    	this.bubble("onSubmit");
    }
});