export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-500 rounded-sm text-black">
                <input v-model="newAssignment" placeholder="New task..." class="p-2"/>
                <button type="submit" class="bg-white p-2 border-l text-bold">+</button>
            </div>
        </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            
            this.newAssignment = '';
        }
    }
}