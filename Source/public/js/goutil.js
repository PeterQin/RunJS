function CreateDiagram(){
	var goMake = go.GraphObject.make;
		var myDiagram =
		goMake(go.Diagram, "myDiagramDiv",
		{
	      initialContentAlignment: go.Spot.Center, // center Diagram contents
	      "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
	      layout: goMake(go.TreeLayout, // specify a Diagram.layout that arranges trees
	      {
	      	angle: 0, 
	      	layerSpacing: 50, 
	      	alignment: go.TreeLayout.AlignmentStart
	      })
	  });

		// the template we defined earlier
		myDiagram.nodeTemplate =
		goMake(go.Node, "Horizontal",
			{ background: "#44CCFF" },
			goMake(go.Picture,
				{ margin: 10, width: 50, height: 50, background: "red" },
				new go.Binding("source")),
			goMake(go.TextBlock, "Default Text",
				{ margin: 12, stroke: "white", font: "bold 16px sans-serif" },
				new go.Binding("text", "name"))
			);

		// var model = goMake(go.TreeModel);
		// model.nodeDataArray = aNodeDataArray;
		// myDiagram.model = model;

		// define the Link template
		myDiagram.linkTemplate =
		goMake(go.Link,
			{ routing: go.Link.Orthogonal,
				selectable: false },
				goMake(go.Shape,
					{ strokeWidth: 3, stroke: "#333" }));

	return myDiagram;
};


define(function(require, exports) {
	var FMyDiagram;

	exports.InitDiagram = function (){
		if (FMyDiagram) {
			return FMyDiagram;
		};

		FMyDiagram = CreateDiagram();
		return FMyDiagram;
	};

	exports.RebuildGraph = function(nodeDataArray) {    
		FMyDiagram.model = new go.TreeModel(nodeDataArray);
	}

});