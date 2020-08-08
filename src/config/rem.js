export default function(){
    function rem() {
        let deviceWidth = document.documentElement.clientWidth;
        document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";
      }
      
      rem();
      
      window.onresize = function() {
        rem();
      };
      
      // 禁止双击放大
      var lastTouchEnd = 0;
      document.documentElement.addEventListener(
        "touchend",
        function(event) {
          var now = Date.now();
          if (now - lastTouchEnd <= 300) {
            event.preventDefault();
          }
          lastTouchEnd = now;
        },
        false
      );
      // 禁止双指放大
      document.documentElement.addEventListener(
        "touchstart",
        function(event) {
          if (event.touches.length > 1) {
            event.preventDefault();
          }
        },
        false
      );
      
}