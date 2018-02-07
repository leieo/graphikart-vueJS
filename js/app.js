Vue.component('message', {
	props: ['type', 'message'],
	template: `
		<div :class="type">
			{{ message }}
		</div>
	`
})

let vm = new Vue ({
	el: '#app',
	data: {
		message: 'Un meilleur texte'
	},
	methods: {
		demo: function () {
			console.log('demo')
		},
		demo2:function () {
			console.log('demo2')
		}
	}
})