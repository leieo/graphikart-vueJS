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

let formUser = { 
	props: {
		value: Object
	},

	data () {
		return { 
			user: JSON.parse(JSON.stringify(this.value))
		}
	},

	methods: {
		save () {
			this.$emit('input', this.user)
		}
	},

	template: `
		<form class="main container" @submit.prevent="save">
			<p><slot name="haut"></slot></p>
			<div class="field">
				<label for="first">Prénom</label>
				<input id="first" type="text" v-model="user.firstname">
			</div>
			<div class="field">
				<label for="last">Nom</label>
				<input id="last" type="text" v-model="user.lastname">
			</div>
			<button class="ui button" type="submit">Envoyer</button>
			<p><slot name="bas"></slot></p>
		</form>
	`,

	mounted: function () {
		console.log(this)
	}
}

let vm = new Vue ({
	el: '#app',
	components: { message, counter, formUser },

	data: {
		message: 'Un meilleur texte',
		header: 'header test',
		alertOk: false,
		user: {
			firstname: 'Jean',
			lastname: 'Delatour'
		}
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