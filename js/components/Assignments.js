import AssignmentList from "./AssignmentList.js";

export default {
    components: { AssignmentList },

    template: `
    <assignment-list :assignments="inProgress" title="In Progress"></assignment-list>
    <assignment-list :assignments="completed" title="Completed"></assignment-list>
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