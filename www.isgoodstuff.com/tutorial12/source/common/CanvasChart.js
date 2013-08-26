enyo.kind({
    name: "CanvasChart",
    components:[
    	{
            style:"height:20px"
        },
        {
            style:"text-align:center !important; height:320px",
            components:[
                {
                    name:"canvas",
                    kind: "Canvas",
                    attributes: {width: 320, height: 320},
                    style:"border:1px solid #fff;background:#fff" 
                }
            ]
        }
    ],
    handlers:{
        //Waterfall event from the button from parent's footer.
        onPlotGraph:"handlePlotGraph"
    },
    published:{
        data:{
            xlabels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            ylabels:[0,100,200,300,400,500,600,700,800,900,1000,1100,1200],
            values:[200,250,400,300,500,700,800,400,500,550,700,1100],
            colors:["blue","red","green","yellow","orange","lime","gold","violet","pink","maroon","purple","magenta"]
        },
        cellIncrement:10    
    },
    create: function() {
        this.inherited(arguments);
    },
    rendered:function(){
        this.inherited(arguments);
        // 1. Let's draw some grid, using rectangles and fill up 320px with 10x10 boxes.
        this.drawGrid();
        // 2. Then, the defining guide lines for X and Y.
        this.drawXYLines();
        this.drawLabels();
    },
    drawGrid:function(){
        for (var y = 0; y < 32; y++) {
            for (var x = 0; x < 32; x++) {
                this.$.canvas.createComponent(
                    {
                        kind: "enyo.canvas.Rectangle", 
                        bounds:{t:(x*this.cellIncrement), l:(y*this.cellIncrement), w:10, h:10}, 
                        color:"#ffffff", 
                        outlineColor:"#cccccc"    
                    }
                );
            }
        }
        this.$.canvas.render();
    },
    drawXYLines:function(){
        //Drawing the Y GuideLine
        this.drawRect(10,30,2,320-40);
        //Drawing the X GuideLine
        this.drawRect(290,30,320-50,2);
    },
    drawLabels:function(){
        //Drawing label based on function drawLabels.
        //Draw based on Y first.
        for (var y = 0; y < this.data.ylabels.length; y++) {
            // From bottom l:30, t:280 but we use 295 because, each label is +10px of height +5 to centerize it to the grid to top.
            // But labels have to start slightly to the left.
            // Always trace/log the plotted top for reference.
            console.log("value : " + this.data.ylabels[y] + " is at coordinate top "+(295-(y*(this.cellIncrement*2))));
            this.drawText(this.data.ylabels[y],295-(y*(this.cellIncrement*2)),28,50,10,"right");
        }
        for (var x = 0; x < this.data.xlabels.length; x++) {
            // From bottom l:30, t:280 but we use 295 because, each label is +10px of height +5 to centerize it to the grid to top.
            // But labels have to start slightly to the left.
            // Always trace/log the plotted left reference.
            console.log("value : " + this.data.xlabels[x] + " is at coordinate left "+(50+(x*(this.cellIncrement*2))));
            this.drawText(this.data.xlabels[x],305,50+(x*(this.cellIncrement*2)),60,10,"center");
        }

    },
    handlePlotGraph:function(){
        this.plotGraph();
    },
    plotGraph:function(){
        for (var x = 0; x < this.data.values.length; x++) {
            // Finding the height of each bar 
            // based on our ratio 20px is 100 unit
            // So, 1px = 5 unit.

            // Remember the actual line of 0 starts from 290 not 295, 
            // thats just for label positioning.
            
            var realPlottedTop = this.data.values[x]/5;
            // The height of the bar is always the computed value of the ratio.
            // The top is measured by computed height - the actual 0's top.
            // 20px is just the bar width.
            // color is assigned via this.data.color.
            this.drawRect(290-Math.round(realPlottedTop),40+(x*(this.cellIncrement*2)),20,Math.round(realPlottedTop),this.data.colors[x]);   
        }
    },

    drawRect:function(top,left,width,height,color){
        if (arguments.length<5) {
            this.$.canvas.createComponent(
                {
                    kind: "enyo.canvas.Rectangle", 
                    bounds:{t:top, l:left, w:width, h:height}, 
                    color:"#aaa" 
                }
            );
        } else {
            this.$.canvas.createComponent(
                {
                    kind: "enyo.canvas.Rectangle", 
                    bounds:{t:top, l:left, w:width, h:height}, 
                    color:color 
                }
            );
        }
        this.$.canvas.render();
    },
    drawText:function(label,top,left,width,height,align){
        this.$.canvas.createComponent(
            {
                kind: "enyo.canvas.Text", 
                bounds:{t:top, l:left, w:width, h:height}, 
                color:"#333",
                align: align,
                font:"Arial 12pt",
                text:label
            }
        );
        this.$.canvas.render();
    }
});