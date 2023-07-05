<template>
    <div id="projects_page">
        <div v-for="projects in projects" :key="projects.id" class="card text-bg-dark" id="projects_card_styling">
            <img :src="projects.image" class="card-img" :alt="projects.name">
            <div class="card-img-overlay" id="links_display">
              <h5 class="card-title">{{ projects.name }}</h5>
                <a :href="projects.netlify_link" target="_blank" id="button_projects_styling">GO LIVE</a>
                <a :href="projects.github_link" target="_blank" id="button_projects_styling">GITHUB</a>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },
        mounted() {
            this.$store.dispatch('fetchProjects')
        }
};
</script>

<style scoped>

</style>