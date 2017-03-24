$(function() {
	$("#print").click(function(event) {
		print();
	});
	$(".tel").bind('input propertychange', function(event) {
		var tel = $(".tel").val();
		setTel(telComplete(tel));
		setTelColor();
	});
	$(".jscolor").change(function() {
		setTelColor();
	});
	$("#saveImage").click(function(event) {
		saveImage();
	});

	setTel(13666666666);
});

/*打印*/
function print(){
	$(".cards").printArea();
}

/*保存图片*/
function saveImage(){
	html2canvas($(".cards"), {
		onrendered: function(canvas) {
			Canvas2Image.saveAsJPEG(canvas, 842, 595);
		},
		width: 842,
		height: 595
	});

	alert("保存时请追加文件名后缀(.jpg),例: 名称.jpg");
}

/*电话号码补全*/
function telComplete(tel){
	if(tel.length < 11){
		var len = 11 - tel.length;
		for(var i = 0; i < len; ++i){
			tel += 0;
		}
	}
	return tel;
}

/*设置电话号码*/
function setTel(tel){
	$(".nums").empty();
	$(".nums").append(createNumbers(tel));

}

function setTelColor(){
	var c = $(".jscolor").val();
	$(".num").css({color:"#" + c})
}

function createNumbers(n){
	var str = "" + n;
	var html = "";
	var len = str.length;
	if(len > 1){
		html = createNumbers(str.substr(0, len - 1));
	}
	return html + "<div class='num'>" + str.substr(-1, 1) + "</div>";
}