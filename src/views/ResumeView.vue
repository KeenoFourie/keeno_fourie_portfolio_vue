<template>
    <div id="resume_background">
      <h3 id="heading_contact_us">RESUME:</h3>
    <div id="resume_page_styling">
          <div id="my_details" v-for="detail in details" :key="detail.id" class="card_styling">
            <p id="the_headings">DETAILS:</p>
              <p>Name: {{ detail.name }}</p>
              <p>Date of Birth: {{ detail.date_of_birth }}</p>
              <p>Gender: {{ detail.gender }}</p>
              <p>Location: {{ detail.location }}</p>
              <p>Cellphone Number: {{ detail.cellphone_number }}</p>
              <p>Email Address: {{ detail.email_address }}</p>
                </div>

          <div id="my_passions" v-for="passion in passions" :key="passion.id" class="card_styling">
            <p id="the_headings">PASSIONS:</p>
              <p>{{ passion.passion_content }}</p>
            </div>

          <div id="my_soft_skills" v-for="soft_skill in soft_skills" :key="soft_skill.id" class="card_styling">
            <p id="the_headings">SOFT SKILLS:</p>
              <p>{{ soft_skill.soft_skills_content }}</p>
            </div>

            
            <div id="my_education" v-for="education in education" :key="education.id" class="card_styling">
                <p id="the_headings">EDUCATION:</p>
                <p>Primary School: {{ education.primary_school }}</p>
                <p>High School: {{ education.high_school }}</p>
                <p>Currently: {{ education.currently }}</p>
            </div>
            
            <div id="my_work_experience" v-for="work_experience in work_experience" :key="work_experience.id" class="card_styling">
                <p id="the_headings">WORK EXPERIENCE:</p>
                <p>{{ work_experience.work }}</p>
            </div>
            
            <div id="my_technical_skills">
                <p id="the_headings">TECHNICAL SKILLS:</p>
                <div id="tech" v-for="technical_skill in technical_skills" :key="technical_skill.id" class="card_styling">
                    <p class="col-3">{{ technical_skill.content }}</p>
                    <p class="col-3"><i :class="technical_skill.content_icons"></i></p>
                    <p class="col-3" id="progress">{{ technical_skill.content_progress }}</p>
                </div>
            </div>
      </div>
    </div>
</template>
  
<script>
  export default {
  computed: {
      details() {
          return this.$store.state.details
      },
      passions() {
          return this.$store.state.passions
      },
      soft_skills() {
          return this.$store.state.soft_skills
      },
      technical_skills() {
          return this.$store.state.technical_skills
      },
      education() {
          return this.$store.state.education
      },
      work_experience() {
          return this.$store.state.work_experience
      }
  },
      mounted() {
          this.$store.dispatch('fetchDetails'),
          this.$store.dispatch('fetchPassions'),
          this.$store.dispatch('fetchSoftSkills'),
          this.$store.dispatch('fetchTechnicalSkills'),
          this.$store.dispatch('fetchEducation'),
          this.$store.dispatch('fetchWorkExperience')
      }
};
</script>
  
  
<style scoped>
  
</style>