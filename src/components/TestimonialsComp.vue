<template>
    <div id="testimonial_position_styling">
        <div v-for="testimonials in testimonials" :key="testimonials.id" class="card text-bg-dark" id="testimonials_styling">
            <img id="edit_testimonial_image" :src="testimonials.image" class="card-img" alt="project_image">
            <div class="card-img-overlay" id="displaying_words_testimonial">
              <h5 class="card-title" id="testimonial_name">{{ testimonials.name }}:</h5>
              <p class="card-text">{{ testimonials.content }}</p>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },
        mounted() {
            this.$store.dispatch('fetchTestimonials')
        }
};
</script>

<style scoped>

</style>