const todo_imgs_count = 9
const weather_imgs_count = 9

const weather = {
		div: document.getElementById('spinner2'),
		cur: 0,
		imgs: [
						'Images/weather1.jpg',
						'Images/weather2.jpg',
						'Images/weather3.jpg',
						'Images/weather4.jpg'
		]
}
const todo = {
		div: document.getElementById('spinner3'),
		cur: 0,
		imgs: [
						'Images/todo1.jpg',
						'Images/todo2.jpg',
						'Images/todo3.jpg',
						'Images/todo4.jpg',
						'Images/todo5.jpg',
						'Images/todo6.jpg',
						'Images/todo7.jpg',
						'Images/todo8.jpg',
						'Images/todo9.jpg',
		]
}

function slide(obj, count) {
	 obj.cur = (obj.cur + (count % obj.imgs.length) + obj.imgs.length) % obj.imgs.length
	 let h = `url('${obj.imgs[obj.cur]}')`
	 obj.div.style.setProperty('background-image', h)
	 console.log(obj.cur)
}

document.getElementById('weather_prev').addEventListener('click', function () {
				slide(weather, -1)
})
document.getElementById('weather_next').addEventListener('click', function () {
				slide(weather, 1)
})
document.getElementById('todo_next').addEventListener('click', function () {
				slide(todo, 1)
})
document.getElementById('todo_prev').addEventListener('click', function () {
				slide(todo, -1)
})
slide(todo, 0)
slide(weather, 0)
