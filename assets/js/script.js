const { createApp } = Vue

createApp({
data() {
    return {
        newTask: '',
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
        ],
    }
},
methods: {
    removeTask(index) {
        this.tasks.splice(index, 1);
    },
    addTask() {
        if (this.newTask.length > 0) {
        this.tasks.push({text: this.newTask.charAt(0).toUpperCase()+this.newTask.slice(1), done: false});
        this.newTask = '';
        }
    }
}
}).mount('#app')