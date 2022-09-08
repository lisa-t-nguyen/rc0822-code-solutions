var tabContainer = document.querySelector('.tab-container');
var allTab = document.querySelectorAll('.tab');
var allView = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < allTab.length; i++) {
      if (allTab[i] === event.target) {
        allTab[i].className = 'tab active';
      } else {
        allTab[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {
    var dataView = event.target.getAttribute('data-view');
    for (let i = 0; i < allView.length; i++) {
      var allViewAtt = allView[i].getAttribute('data-view');
      if (allViewAtt === dataView) {
        allView[i].className = 'view';
      } else {
        allView[i].className = 'view hidden';
      }
    }
  }
});
