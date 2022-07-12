export default {
    template: `
        <section v-show="inProgress.length">
            <h2 className="font-bold mb-2">In Progress</h2>

            <ul>
                <li
                    v-for="assignment in inProgress"
                :key="assignment.id"
            >
                <label>
                    {{ assignment.name }}

                    <input type="checkbox" v-model="assignment.complete" />
                </label>
            </li>
        </ul>
    </section>

    <section v-show="completed.length" class="mt-8">
        <h2 className="font-bold mb-2">Completed</h2>

        <ul>
            <li
                v-for="assignment in completed"
        :key="assignment.id"
    >
            <label>
                {{ assignment.name }}

                <input type="checkbox" v-model="assignment.complete" />
            </label>
        </li>
    </ul>

    </section >
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
        ]
    };
},
computed: {
    inProgress() {
        return this.assignments.filter(a => !a.complete);
    },

    completed() {
        return this.assignments.filter(a => a.complete);
    }
}
}