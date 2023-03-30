const { createApp } = Vue

createApp({
data() {
    return {
        tasks: [
            {
                text: 'learn HTML',
                done: true
            },
            {
                text: 'learn CSS',
                done: false
            },
            {
                text: 'learn JS',
                done: true
            }
        ]
    }
},
methods: {
    removeTask(index) {
        this.tasks.splice(index, 1);
    }
}
}).mount('#app')