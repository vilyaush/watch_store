const zakaz = document.querySelector("#watch");
console.log(zakaz)
zakaz.addEventListener('submit', async (event) => {
  event.preventDefault();
  const zakazData = Object.fromEntries(new FormData(zakaz));
  console.log(zakazData);
  const response = await fetch('/watch', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(zakazData),
  });
  if (response.ok) {
    window.location = '/message';
    response.body
  }
})


// const orders = document.querySelector("#orders");

// orders.addEventListener('click', async (event) => {
//   // event.preventDefault();
//   const zakazData = Object.fromEntries(new FormData(zakaz));
//   console.log(zakazData);
//   const response = await fetch('/watch', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(zakazData),
//   });
//   if (response.ok) {
//     window.location = '/';
//   }
// })
