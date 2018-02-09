class NotificationStore {
	
	constructor () {
		this.state = {
			count: 0
		}
	}

	increment () {
		this.state.count++
	}

	decrement () {
		this.state.count--
	}
}

let notifications_store = new NotificationStore()




let counter = {
	data: function() {
		return {
			state: notifications_store.state
		}
	},

	computed: {
		count() {
			return this.state.count
		}
	},

	methods: {
		increment() {
			notifications_store.increment()
		}
	},

	template: `<button @click="increment"> {{ count }} </button>`
}

let notifications = {
	components: { counter },
	methods: {
		addNotification () {
			notifications_store.increment()
		}
	},
	template : `
		<div>
			<button @click="addNotification">Add</button>
		</div>
	`
}

new Vue({
	el: "#app",
	components: { counter, notifications }
})