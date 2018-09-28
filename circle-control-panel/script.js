$(function() {
	let intervalId = 0;
	let pos = {};
	$('#control-point').draggable(
		{
			start: () => {
				intervalId = setInterval(() => {
					let vector ={};
					let ratio = 100 / 124;
					let x = parseInt(pos.x * ratio);
					let y = parseInt(pos.y * ratio);
					console.log(x, y);
					let r = parseInt(Math.sqrt(x * x + y * y));
					let angle = getAngle(x, y);
					vector.r = r;
					vector.angle = angle;
					console.log(vector);
				}, 500)
			},
			drag: (e, ui) => {
				let rPanel = $('#panel').width() / 2;
				let rControlPoint = $('#control-point').width() / 2;
				let originalX = rPanel - rControlPoint;
				let originalY = rPanel - rControlPoint;
				let x = ui.position.left - originalX;
				let y = ui.position.top - originalY;
				let l = Math.sqrt(x * x + y * y);
				let lIn = Math.min(rPanel - rControlPoint, l);
				ui.position = {
					'left': x / l * lIn + originalX, 
					'top': y / l * lIn + originalY
				};
				pos.x = parseInt(ui.position.left - ui.originalPosition.left);
				pos.y = parseInt(ui.position.top - ui.originalPosition.top);
			},
			stop: () => {
				clearInterval(intervalId);
			}
		},
		{
			revert: true
		}
	)
})

function getAngle(x, y) {
	if (x === 0) {
		return y > 0 ? 90 : 270;
	}
	let a = Math.atan(y / x);
	let ret = a * 180 / Math.PI;
	if (x < 0) {
		ret = 180 + ret;
	}
	if (ret > 360) {
		ret -= 360;
	}
	if (ret < 0) {
		ret += 360;
	}
	return parseInt(ret);
}



