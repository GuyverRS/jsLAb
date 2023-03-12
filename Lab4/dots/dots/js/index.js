// добавляй новые точки внутрь контейнера
let container = document.getElementById(`container`);

// шаблон для точек
// оказывается, CSS можно задавать ещё и вот так!
let template = `
<div
  class="dot"
  style="top: 100px; left: 100px;">
  100
</div>`;