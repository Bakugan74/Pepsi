(function () {
  var square = document.querySelector('.infoa');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      var entrySquare = entry.target.querySelector('.infoa-items');
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entrySquare.classList.add('infoa-animation');
        return;
      }

      entrySquare.classList.remove('infoa-animation');
    });
  });

  observer.observe(square);
})();

  (function () {
    var square = document.querySelector('.infoa');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        var entrySquare = entry.target.querySelector('.infoa-items2');
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entrySquare.classList.add('infoa-animation');
          return;
        }
  
        entrySquare.classList.remove('infoa-animation');
      });
    });
  
    observer.observe(square);
  })();