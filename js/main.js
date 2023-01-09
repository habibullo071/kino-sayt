let elSearch = document.querySelector('.search__input')
let elCategory = document.querySelector('.select__category')
let elReyting = document.querySelector('.select__reyting')
let elYear = document.querySelector('.select__year')
let elList = document.querySelector('.list')
const dataa = movies.splice(0,1000)
mapper(dataa)
function mapper(dataa) {
    dataa.forEach((e) => {
        let newLi = document.createElement('li')
        newLi.innerHTML = `<div class="card" style="width: 14rem;">
        <img src="https://i.ytimg.com/vi/${e.ytid}/hq720.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e.Title.toString().split("").splice(0, 23).join("")}...</h5>
          <p class="card-text">${e.Categories.toString().split("").splice(0, 27).join("")}...</p>
          <p class="card-text">${e.imdb_rating}</p>
          <p class="card-text">${e.movie_year}</p>
          <a href="https://www.youtube.com/watch?v=${e.ytid}"target="_blank" class="btn btn-primary">Watch film</a>
        </div>
      </div>`
        elList.appendChild(newLi)
    })
}
elSearch.addEventListener('keyup', (e) => {
    elList.innerHTML = ''
    let searchValue = e.target.value
    const searchData = []
    dataa.map((e) => {
        if (e.Title.toString().toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
            searchData.push(e)
        } else {
            console.log();
        }
    })
    mapper(searchData)
    console.log(searchData);
})
const CategoryList = []
dataa.forEach((e) => {
    if (CategoryList.includes(e.Categories) != true) {
        CategoryList.push(e.Categories)
    }
})
CategoryList.forEach((e) => {
    let elOption = document.createElement('option')
    elOption.textContent = e
    elCategory.appendChild(elOption)
})
const categoryValue = []
elCategory.addEventListener('change', (e) => {
    elList.innerHTML = ''
    let changeValue = e.target.value
    dataa.forEach((item) => {
        if (item.Categories == changeValue) {
            categoryValue.push(item)
        }
    })
    mapper(categoryValue)
})

elReyting.addEventListener('change', (e) => {
    elList.innerHTML = ''
    let reyting = e.target.value
    if (reyting == 'max') {
        dataa.sort((a, b) => a.imdb_rating + b.imdb_rating).reverse()
        mapper(dataa)

    } else {
        dataa.sort((a, b) => a.imdb_rating - b.imdb_rating)
        mapper(dataa)
    }
})
elYear.addEventListener('change', (e) => {
    elList.innerHTML = ''
    let year = e.target.value
    if (year == 'max') {
        dataa.sort((a, b) => a.movie_year + b.movie_year).reverse()
        mapper(dataa)

    } else {
        dataa.sort((a, b) => a.movie_year - b.movie_year)
        mapper(dataa)
    }
})