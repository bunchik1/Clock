const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNUmber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes');

    function clock() {
        
    
    let time = new Date(),
         seconds = time.getSeconds() * 6,
         minutes = time.getMinutes() * 6,
         hours = time.getHours() * 30
         

    sec.style = `transform: rotate(${seconds}deg);`         
    min.style = `transform: rotate(${minutes}deg)`
    hour.style = `transform: rotate(${hours}deg)`

    hoursNUmber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
     minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    setTimeout(() => clock(), 1000)

    }

    clock()

    const links = document.querySelectorAll('.tabsItem'),
          tabs = document.querySelectorAll('.tabsContentItem');

          for (let i = 0;i < links.length; i++) {
              links[i].addEventListener('click', function (e) {
                  e.preventDefault()

                  for (let x = 0; x < links.length; x++) {
                      links[x].classList.remove('active');
                      tabs[x].classList.remove('active');

                  }

              tab(this, tabs[i])

              })
          }

          function tab(el, arr) {
              el.classList.add('active');
              arr.classList.add('active')
          }
    
