let message = {
	props: {
		state: {type: String, default: 'success'},
		message: {type: String, default: 'WARN : edit your message in the instance\'s data'},
		header: String
	},

	template: `
		<div :class="state">
			<div class="header">
				<i class="close icon" @click="close"></i>
				{{ header }}
			</div>
			{{ message }}
		</div>
	`,

	methods: {
		close () {
			this.$emit('close')
		}
	}
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
		message: 'Un meilleur texte',
		header: 'header test',
		alertOk: false
	},

	methods: {
		showAlert () {
			this.alertOk = true;
		},

		hideAlert () {
			this.alertOk = false;
		}
	}
})