// let a=true

// let promise=new Promise(function(r,e) {
//     setTimeout(function(s) {
//         if (a) {
//             r('kitob mavjud')
//         }
//         else{
//             e('kitob mavjut emas')
//         }
//     })
// })

// promise
// .then(function(data) {
//     console.log(data);
// })

// .catch(function(err) {
//     console.log(err);
// })

// async function fetch() {
//     return 'salom';
// }
// fetch().then(data=>console.log(data))

// let a=2

// try {
//         console.log(3,b);

// } catch (error) {
//     console.log(5,error);
// }
let wraper = document.querySelector(".wraper");
let loader=document.querySelector('.loader')
function createCard(user) {
    return `
          <div class="card">
              <img src="${user.flag}">
              <h2>davlat   ${user.country}</h2>
              <h2>code ${user.code}</h2>
              <h2>id ${user.id}</h2>
          </div>
          `;
  }
document.addEventListener('DOMContentLoaded',function() {
      fetch("https://cars-pagination.onrender.com/all-countries", {
        method: "GET",
      })

            .then(function (resp) {
                 if (resp.status < 300) {
                 return resp.json();
                }
            })
        .then(function (data) {
            // wraper.style.display='block'
            data.forEach((user) => {
              let card = createCard(user);
              wraper.innerHTML += card;
            //   console.log(wraper);
            });
        //   console.log(data);
        })
        .catch(function (err) {
            // wraper.style.display='block'
          console.log(err);
        })
        
        .finally(function() {
            loader.style.display='none'
        })
})







// let wraper = document.querySelector(".wraper");
// function create(user) {
//     return `
//           <div class="card">
//               <h1>${user.name}</h1>
//               <h2>${user.surname}</h2>
//               <h2>${user.email}</h2>
//               <h2>${user.phone}</h2>
//           </div>
//           `;
//   }
// fetch('https://cars-pagination.onrender.com/all-countries',{
//     method:"GET"
// })

//     .then(function(response) {
//         if (response.status==200) {
//             return response.json()
//         }
//     })
//     .then(function(data) {
//         // data.forEach(user => {
//         //     let card=create(user)
//         //     wraper.innerHTML+=card
//         //     console.log(wraper);
//         // });
//         console.log(data);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
