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
                done: true
            },
            {
                text: 'learn JS',
                done: true
            }
        ]
    }
}
}).mount('#app')