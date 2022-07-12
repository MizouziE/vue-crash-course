import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },

    template: `
    <section class="space-y-6">
        <assignment-list :assignments="inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="completed" title="Completed"></assignment-list>
        
        <form @submit.prevent="add">
            <div class="border border-gray-500 rounded-sm text-black">
                <input v-model="newAssignment" placeholder="New task..." class="p-2"/>
                <button type="submit" class="bg-white p-2 border-l text-bold">+</button>
            </div>
        </form>
    </section>
`,

    data() {
    return {
        assignments: [
            {
                name: 'Finish Tutorial',
                complete: false,
                id: 1
            },
            {
                name: 'Understand Vue 3',
                complete: false,
                id: 2
            },
            {
                name: 'Build something with it',
                complete: false,
                id: 3
            }
        ],
        newAssignment: ''
    };
},

computed: {
    inProgress() {
        return this.assignments.filter(a => !a.complete);
    },

    completed() {
        return this.assignments.filter(a => a.complete);
    }
},

methods: {
    add() {
        this.assignments.push({
            name: this.newAssignment,
            completed: false,
            id: this.assignments.length + 1
        });

        this.newAssignment = '';
    }
}
}