export default {
    template: `

    <div class="flex gap-2">
        <button 
            @click="$emit('update:currentTag', tag)"
            v-for="tag in tags"
            class="border rounded-sm px-1.5 py-0.5 text-xs" 
            :class="{
                'border-green-400 text-green-500' : tag === currentTag
            }"
            >{{ tag }}</button>
    </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}