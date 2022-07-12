import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
    <section class="flex gap-8">
        <assignment-list :assignments="inProgress" title="In Progress">
            <assignment-create @add="add"></assignment-create>
        </assignment-list>
        <assignment-list 
            v-if="showCompleted"
            :assignments="completed" 
            title="Completed" 
            can-toggle
            @toggle="showCompleted = !showCompleted"
            ></assignment-list>
        
    </section>
`,

    data() {
        return {
            assignments: [
                {
                    "name": "Finish Tutorial",
                    "complete": false,
                    "id": 1,
                    "tag": "work"
                },
                {
                    "name": "Understand Vue 3",
                    "complete": false,
                    "id": 2,
                    "tag": "neither"
                },
                {
                    "name": "Build something with it",
                    "complete": false,
                    "id": 3,
                    "tag": "fun"
                },
                {
                    "name": "Use fake backend",
                    "complete": true,
                    "id": 4,
                    "tag": "dev"
                }
        
            ],
            showCompleted: true
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

    // created() {
    //     fetch('http://127.0.0.1:8000/assignments')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.assignments = data;
    //         });
    // },

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