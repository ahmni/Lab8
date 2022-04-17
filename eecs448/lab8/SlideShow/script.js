let index = 0
let arr = [
    "https://imageio.forbes.com/specials-images/imageserve/5ed00f17d4a99d0006d2e738/0x0.jpg?format=jpg&crop=4666,4663,x154,y651,safe&height=416&width=416&fit=bounds",
    "https://i.kym-cdn.com/entries/icons/mobile/000/033/421/cover2.jpg",
    "https://www.nme.com/wp-content/uploads/2021/02/Kanye-West.jpg",
    "https://api.time.com/wp-content/uploads/2021/08/GettyImages-1330153527.jpg?w=1600&quality=70",
    "https://images.complex.com/complex/images/c_fill,dpr_2.0,f_auto,q_auto,w_1400/fl_lossy,pg_1/rwznqrkgaw0kblmjzemg/kanye-west-college-dropout-bear-1?fimg-ssr"
]

let prev = document.getElementById('prev')
let img = document.getElementById('img')
let next = document.getElementById('next')

prev.addEventListener('click', () => {
    index--;
    if (index < 0) index = 4
    img.src = arr[index];
    
})

next.addEventListener('click', () => {
    index++;
    if (index > 4) index = 0
    console.log(arr[index])
    img.src = arr[index];
})