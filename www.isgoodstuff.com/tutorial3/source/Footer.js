enyo.kind({
    name: "Footer",
    kind: "Control",
    components: [
        {
            kind: "onyx.Toolbar",
            // The footer
            layoutKind:"FittableColumnsLayout",
            components:[
                {
                      kind:"onyx.Button",
                      content:"Go Next Page",
                      ontap:"handleBtnNextPage",
                      fit:true   
                }
            ]
        }
    ],
    handleBtnNextPage:function(inSender,inEvent) {
      //Broadcast a global signal using enyo.Signal.
      enyo.Signals.send("onHandleBtnNextPageTap");
    }
});