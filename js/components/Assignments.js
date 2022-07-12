import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
    <section class="space-y-6">
        <assignment-list :assignments="inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="completed" title="Completed"></assignment-list>
        
        <assignment-create @add="add"></assignment-create>
    </section>
`,

    data() {
        return {
            assignments: [
                {
                    name: 'Finish Tutorial',
                    complete: false,
                    id: 1,
                    tag: 'work'
                },
                {
                    name: 'Understand Vue 3',
                    complete: false,
                    id: 2,
                    tag: 'neither'
                },
                {
                    name: 'Build something with it',
                    complete: false,
                    id: 3,
                    tag: 'fun'
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
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    }
}