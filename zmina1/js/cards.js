let cards = document.querySelector(".su__all")
let tops = document.querySelector(".tops")
// id 1

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id1.team_color}">
        <p class="font card-name">${id1.name}</p>
        <div class="stars" id="stars1"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id1.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id1.team_color}" style="background: none;">${id1.team}</mark></p>
    </div>
`)
let stars1 = document.querySelector("#stars1")
for (let index = 0; index < star1; index++) {
    stars1.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id1.team_color}"></i>`)
}

// id 2

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id2.team_color}">
        <p class="font card-name">${id2.name}</p>
        <div class="stars" id="stars2"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id2.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id2.team_color}" style="background: none;">${id2.team}</mark></p>
    </div>
`)
    let stars2 = document.querySelector("#stars2")
    for (let index = 0; index < star2; index++) {
        stars2.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id2.team_color}"></i>`)
}

// id 3

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id3.team_color}">
        <p class="font card-name">${id3.name}</p>
        <div class="stars" id="stars3"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id3.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id3.team_color}" style="background: none;">${id3.team}</mark></p>
    </div>
`)
    let stars3 = document.querySelector("#stars3")
    for (let index = 0; index < star3; index++) {
        stars3.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id3.team_color}"></i>`)
}

// id 4

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id4.team_color}">
        <p class="font card-name">${id4.name}</p>
        <div class="stars" id="stars4"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id4.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id4.team_color}" style="background: none;">${id4.team}</mark></p>
    </div>
`)
    let stars4 = document.querySelector("#stars4")
    for (let index = 0; index < star4; index++) {
        stars4.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id4.team_color}"></i>`)
}
// id 5

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id5.team_color}">
        <p class="font card-name">${id5.name}</p>
        <div class="stars" id="stars5"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id5.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id5.team_color}" style="background: none;">${id5.team}</mark></p>
    </div>
`)
    let stars5 = document.querySelector("#stars5")
    for (let index = 0; index < star5; index++) {
        stars5.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id5.team_color}"></i>`)
}

// id 6

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id6.team_color}">
        <p class="font card-name">${id6.name}</p>
        <div class="stars" id="stars6"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id6.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id6.team_color}" style="background: none;">${id6.team}</mark></p>
    </div>
`)
    let stars6 = document.querySelector("#stars6")
    for (let index = 0; index < star6; index++) {
        stars6.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id6.team_color}"></i>`)
}

// id 7 - top 3

tops.insertAdjacentHTML('beforeend', `
    <div class="star_card top3" id="${id7.team_color}">
        <p class="font card-name">${id7.name}</p>
        <div class="stars" id="stars7"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id7.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id7.team_color}" style="background: none;">${id7.team}</mark></p>
    </div>
`)
    let stars7 = document.querySelector("#stars7")
    for (let index = 0; index < star7; index++) {
        stars7.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id7.team_color}"></i>`)
}
// id 8

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id8.team_color}">
        <p class="font card-name">${id8.name}</p>
        <div class="stars" id="stars8"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id8.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id8.team_color}" style="background: none;">${id8.team}</mark></p>
    </div>
`)
    let stars8 = document.querySelector("#stars8")
    for (let index = 0; index < star8; index++) {
        stars8.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id8.team_color}"></i>`)
}
// id 9

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id9.team_color}">
        <p class="font card-name">${id9.name}</p>
        <div class="stars" id="stars9"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id9.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id9.team_color}" style="background: none;">${id9.team} | Капітан</mark></p>
    </div>
`)
    let stars9 = document.querySelector("#stars9")
    for (let index = 0; index < star9; index++) {
        stars9.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id9.team_color}"></i>`)
}

// id 10

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id10.team_color}">
        <p class="font card-name">${id10.name}</p>
        <div class="stars" id="stars10"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id10.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id10.team_color}" style="background: none;">${id10.team}</mark></p>
    </div>
`)
    let stars10 = document.querySelector("#stars10")
    for (let index = 0; index < star10; index++) {
        stars10.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id10.team_color}"></i>`)
}
// id 11

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id11.team_color}">
        <p class="font card-name">${id11.name}</p>
        <div class="stars" id="stars11"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id11.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id11.team_color}" style="background: none;">${id11.team}</mark></p>
    </div>
`)
    let stars11 = document.querySelector("#stars11")
    for (let index = 0; index < star11; index++) {
        stars11.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id11.team_color}"></i>`)
}

// id 12

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id12.team_color}">
        <p class="font card-name">${id12.name}</p>
        <div class="stars" id="stars12"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id12.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id12.team_color}" style="background: none;">${id12.team}</mark></p>
    </div>
`)
    let stars12 = document.querySelector("#stars12")
    for (let index = 0; index < star12; index++) {
        stars12.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id12.team_color}"></i>`)
}

// id 13

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id13.team_color}">
        <p class="font card-name">${id13.name}</p>
        <div class="stars" id="stars13"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id13.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id13.team_color}" style="background: none;">${id13.team}</mark></p>
    </div>
`)
    let stars13 = document.querySelector("#stars13")
    for (let index = 0; index < star13; index++) {
        stars13.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id13.team_color}"></i>`)
}

// id 14

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id14.team_color}">
        <p class="font card-name">${id14.name}</p>
        <div class="stars" id="stars14"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id14.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id14.team_color}" style="background: none;">${id14.team}</mark></p>
    </div>
`)
    let stars14 = document.querySelector("#stars14")
    for (let index = 0; index < star14; index++) {
        stars14.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id14.team_color}"></i>`)
}

// id 15 top 1

tops.insertAdjacentHTML('beforeend', `
    <div class="star_card top1" id="${id16.team_color}">
        <p class="font card-name">${id16.name}</p>
        <div class="stars" id="stars16"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id16.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id16.team_color}" style="background: none;">${id16.team}</mark></p>
    </div>
`)
    let stars16 = document.querySelector("#stars16")
    for (let index = 0; index < star16; index++) {
        stars16.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id16.team_color}"></i>`)
}

// id 16 top 2

tops.insertAdjacentHTML('beforeend', `
    <div class="star_card top2" id="${id15.team_color}">
        <p class="font card-name">${id15.name}</p>
        <div class="stars" id="stars15"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id15.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id15.team_color}" style="background: none;">${id15.team}</mark></p>
    </div>
`)
    let stars15 = document.querySelector("#stars15")
    for (let index = 0; index < star15; index++) {
        stars15.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id15.team_color}"></i>`)
}

// id 17

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id17.team_color}">
        <p class="font card-name">${id17.name}</p>
        <div class="stars" id="stars17"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id17.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id17.team_color}" style="background: none;">${id17.team}</mark></p>
    </div>
`)
    let stars17 = document.querySelector("#stars17")
    for (let index = 0; index < star17; index++) {
        stars17.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id17.team_color}"></i>`)
}

// id 18

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id18.team_color}">
        <p class="font card-name">${id18.name}</p>
        <div class="stars" id="stars18"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id18.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id18.team_color}" style="background: none;">${id18.team} | Капітан</mark></p>
    </div>
`)
    let stars18 = document.querySelector("#stars18")
    for (let index = 0; index < star18; index++) {
        stars18.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id18.team_color}"></i>`)
}

// id 19

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id19.team_color}">
        <p class="font card-name">${id19.name}</p>
        <div class="stars" id="stars19"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id19.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id19.team_color}" style="background: none;">${id19.team}</mark></p>
    </div>
`)
    let stars19 = document.querySelector("#stars19")
    for (let index = 0; index < star19; index++) {
        stars19.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id19.team_color}"></i>`)
}

// id 20

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id20.team_color}">
        <p class="font card-name">${id20.name}</p>
        <div class="stars" id="stars20"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id20.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id20.team_color}" style="background: none;">${id20.team}</mark></p>
    </div>
`)
    let stars20 = document.querySelector("#stars20")
    for (let index = 0; index < star20; index++) {
        stars20.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id20.team_color}"></i>`)
}

// id 21

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id21.team_color}">
        <p class="font card-name">${id21.name}</p>
        <div class="stars" id="stars21"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id21.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id21.team_color}" style="background: none;">${id21.team}</mark></p>
    </div>
`)
    let stars21 = document.querySelector("#stars21")
    for (let index = 0; index < star21; index++) {
        stars21.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id21.team_color}"></i>`)
}

// id 22

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id22.team_color}">
        <p class="font card-name">${id22.name}</p>
        <div class="stars" id="stars22"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id22.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id22.team_color}" style="background: none;">${id22.team}</mark></p>
    </div>
`)
    let stars22 = document.querySelector("#stars22")
    for (let index = 0; index < star22; index++) {
        stars22.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id22.team_color}"></i>`)
}

// id 23

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id23.team_color}">
        <p class="font card-name">${id23.name}</p>
        <div class="stars" id="stars23"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id23.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id23.team_color}" style="background: none;">${id23.team}</mark></p>
    </div>
`)
    let stars23 = document.querySelector("#stars23")
    for (let index = 0; index < star23; index++) {
        stars23.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id23.team_color}"></i>`)
}

// id 24

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id24.team_color}">
        <p class="font card-name">${id24.name}</p>
        <div class="stars" id="stars24"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id24.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id24.team_color}" style="background: none;">${id24.team}</mark></p>
    </div>
`)
    let stars24 = document.querySelector("#stars24")
    for (let index = 0; index < star24; index++) {
        stars24.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id24.team_color}"></i>`)
}

// id 25

cards.insertAdjacentHTML('beforeend', `
    <div class="star_card" id="${id25.team_color}">
        <p class="font card-name">${id25.name}</p>
        <div class="stars" id="stars25"></div>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Загальна кількість: ${id25.stars}</p>
            <p class="font" style="margin-top: 15px; font-size: 20px; text-align: center;">Команда: <mark class="${id25.team_color}" style="background: none;">${id25.team}</mark></p>
    </div>
`)
    let stars25 = document.querySelector("#stars25")
    for (let index = 0; index < star25; index++) {
        stars25.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-star ${id25.team_color}"></i>`)
}