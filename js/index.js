mui.init();

mui.plusReady(function() {
	var html = document.documentElement;
	var self = plus.webview.currentWebview();
	var theFontSize = self.fontsize;
	html.style.fontSize = theFontSize;
})

function changeBarHeight() {
	if(localStorage.getItem("barHeight")) {
		var barHeight = JSON.parse(localStorage.getItem("barHeight"));
		var headerHeight = document.querySelector('.mui-bar-nav');
		headerHeight.style.height = barHeight + 2 + 'px';
		headerHeight.style.paddingTop = barHeight - 42 + 'px';
		headerHeight.nextElementSibling.style.paddingTop = barHeight + 2 + 'px';
	}
}