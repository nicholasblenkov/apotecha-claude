/* Apotecha — Purchase Options Toggle (One-time vs Subscription) */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.apotecha-purchase-options');
    if (!container) return;

    var radios = container.querySelectorAll('input[name="purchase_option"]');
    var form = document.querySelector('product-form form, form[action*="/cart/add"]');

    radios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        var sellingPlanId = this.dataset.sellingPlan || '';
        var existing = form ? form.querySelector('input[name="selling_plan"]') : null;

        if (sellingPlanId) {
          if (existing) {
            existing.value = sellingPlanId;
          } else if (form) {
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'selling_plan';
            input.value = sellingPlanId;
            form.appendChild(input);
          }
        } else if (existing) {
          existing.remove();
        }

        container.querySelectorAll('.apotecha-purchase-option').forEach(function (opt) {
          opt.classList.remove('apotecha-purchase-option--active');
        });
        this.closest('.apotecha-purchase-option').classList.add('apotecha-purchase-option--active');
      });
    });
  });
})();
