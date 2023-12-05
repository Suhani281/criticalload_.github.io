function calculate() {
  const E = parseFloat(document.getElementById('material').value);
  const A = parseFloat(document.getElementById('area').value);
  const L = parseFloat(document.getElementById('length').value);

  if (isNaN(E) || isNaN(A) || isNaN(L)) {
    alert('Please enter valid numbers');
    return;
  }

  const criticalLoad = Math.PI ** 2 * E * A / (L ** 2);
  document.getElementById('result').textContent = criticalLoad.toFixed(2);
}
