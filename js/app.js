let message = {
	props: {
		state: {type: String, default: 'success'},
		message: {type: String, default: 'WARN : edit your message in the instance\'s data'}
	},
	template: `
		<div :class="state">
			{{ message }}
		</div>
	`
}

let counter = {
	data: function() {
		return  {
			count: 0
		}
	},

	props: {
		start: {type: Number, default: 0}
	},

	methods: {
		increment: function() {
			this.count ++;
		}
	},

	template: `
		<button @click="increment">
			{{ count }}
		</button>
	`,

	mounted: function() {
		this.count = this.start;
	}
}

let vm = new Vue ({
	el: '#app',
	components: { message, counter },
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