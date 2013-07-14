enyo.kind({
    name: "Header",
    // Make sure the name matches the file name.
    kind: "Control",
    components: [
        {
             kind: "onyx.Toolbar",
             layoutKind:"FittableColumnsLayout",
              components: [
              {
                  kind:onyx.Button,
                  style:"width:80px;background:green;",
                  ontap:"handleBtnBack", 
                  content:"Back"
              },
              {
                  content:"Header",
                  style:"text-align:center;",
                  fit:true
              },
              {
                  kind:onyx.Button,
                  style:"width:80px;background:red;",
                  ontap:"handleBtnNext",
                  content:"Next"
              }
          ]
        }
    ],
    create:function(){
       this.inherited(arguments);
       // Noticed even you can override create and rendered. Because, they exist in every enyo.kind
    },
    handleBtnNext: function(inSender,inEvent){
        // It's a good practice to also send the inSender/inEvent back to the parent as identification. 
        // Parent control can know which control is sending.
        this.bubble("onBtnNextTap",inSender);
        inEvent.preventDefault();
        // Sometimes to stop clicking through, we use inEvent.preventDefault(); to stop events from
        // transferring over.
    },
    handleBtnBack: function(inSender,inEvent){
        // Alternatively you can send with only one parameter which is the "custom event name".
        this.bubble("onBtnBackTap",inSender);
        inEvent.preventDefault();
    }
});      

      