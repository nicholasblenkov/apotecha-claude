/* Apotecha — Bundle "The Set" Add to Cart */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var bundleBtn = document.querySelector('.apotecha-bundle__atc');
    if (!bundleBtn) return;

    bundleBtn.addEventListener('click', function () {
      var items = [];
      var thumbs = document.querySelectorAll('.apotecha-bundle__thumb[data-variant-id]');

      thumbs.forEach(function (thumb) {
        var variantId = thumb.dataset.variantId;
        if (variantId) {
          items.push({ id: parseInt(variantId, 10), quantity: 1 });
        }
      });

      if (items.length === 0) return;

      bundleBtn.disabled = true;
      bundleBtn.textContent = 'Adding...';

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: items })
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Cart add failed');
          return res.json();
        })
        .then(function () {
          bundleBtn.textContent = 'Added!';
          document.dispatchEvent(new CustomEvent('cart:refresh'));
          setTimeout(function () {
            bundleBtn.disabled = false;
            bundleBtn.textContent = 'ADD TO CART';
          }, 2000);
        })
        .catch(function () {
          bundleBtn.disabled = false;
          bundleBtn.textContent = 'ADD TO CART';
        });
    });
  });
})();
