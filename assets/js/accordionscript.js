// var acc = document.getElementsByClassName("accordion");
// var panel = document.getElementsByClassName('panel');

// for (var i = 0; i < acc.length; i++) {
//     acc[i].onclick = function() {
//         var setClasses = !this.classList.contains('active');
//         setClass(acc, 'active', 'remove');
//         setClass(panel, 'show', 'remove');

//         if (setClasses) {
//             this.classList.toggle("active");
//             this.nextElementSibling.classList.toggle("show");
//         }
//     }
// }

// function setClass(els, className, fnName) {
//     for (var i = 0; i < els.length; i++) {
//         els[i].classList[fnName](className);
//     }
// }

var acc = document.getElementsByClassName("accordion");
				var i;
				
				for (i = 0; i < acc.length; i++) {
				  acc[i].addEventListener("click", function() {
					this.classList.toggle("active");
					var panel = this.nextElementSibling;
					if (panel.style.maxHeight) { // if the button has been clicked already
					  panel.style.maxHeight = null;
					} else {
					  panel.style.maxHeight = panel.scrollHeight + "px";
					}
				  });
				}