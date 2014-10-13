module.exports = function() { 

	// WebGL is a JavaScript API that allows us to implement 
	// interactive 3D graphics, straight in the browser.

	var gl;

	function init(){
		var canvas = document.getElementById("glcanvas");
	
		gl = initWebGL(canvas);

		if(gl) {
			gl.clearColor(0.0,0.0,0.0,1.0);
			g.enable(gl.DEPTH_TEST);
			gl.depthFunc(gl.LEQUAL);
			gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
		}
	}


	return {
		init: init
	}

}