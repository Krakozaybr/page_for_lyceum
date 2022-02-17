const moon_url = 'Images/moon.png'
const sun_url = 'Images/sun.png'
const theme_btn = document.getElementById('change_theme')
const root_style = document.querySelector(':root').style
const day_theme = {
  colors: {
    '--main-color': '#40a1ff',
    '--second-color': '#2b58ff',
    '--third-color': '#0023c6',
    '--shadow-color': '#C0C0C0',
    '--active-shadow': 'black',
    '--text-color': 'black',
    '--background-color': 'white',
    '--quote-color': 'yellow'
  },
  icon: sun_url
}
const night_theme = {
  colors: {
    '--main-color': '#111111',
    '--second-color': '#130f25',
    '--third-color': '#00063a',
    '--shadow-color': '#3c4267',
    '--active-shadow': 'grey',
    '--text-color': 'white',
    '--background-color': 'black',
    '--quote-color': 'grey'
  },
  icon: moon_url
}
const themes = [
  day_theme,
  night_theme
]
let cur_theme = 1 // темная тема смотрится лучше
function toggle_theme() {
  obj = themes[cur_theme]
  theme_btn.src = obj.icon
  for (let key in obj.colors) {
    let value = obj.colors[key]
    root_style.setProperty(key, value)
  }
  cur_theme = (cur_theme + 1) % themes.length
}

theme_btn.addEventListener('click', toggle_theme)
toggle_theme()
