import { createStore } from 'vuex'

const dataUrl = "https://keenofourie.github.io/Vue_Project_JSON_Server/index.json";


export default createStore({
  state: {
    // resume
    details: null,
    passions: null,
    soft_skills: null,
    technical_skills: null,
    // testimonials
    testimonials: null,
    // projects
    projects: null
  },
  getters: {
  },
  mutations: {
    // resume
    setDetails(state, details) {
      state.details = details
    },
    setPassions(state, passions) {
      state.passions = passions
    },
    setSoftSkills(state, soft_skills) {
      state.soft_skills = soft_skills
    },
    setTechnicalSkills(state, technical_skills) {
      state.technical_skills = technical_skills
    },
    setEducation(state, education) {
      state.education = education
    },
    setWorkExperience(state, work_experience) {
      state.work_experience = work_experience
    },
    // testimonials
    setTestimonials(state, testimonials) {
      state.testimonials = testimonials
    },
    // projects
    setProjects(state, projects) {
      state.projects = projects
    }
  },
  actions: {
    // resume
    async fetchDetails(context) {
      try {
        let res = await fetch(dataUrl)
        console.log(res);
        let {details} = await res.json()
        console.log(details);
        context.commit('setDetails', details)
      } catch (e) {
        console.log(e.message);
      }
    },
    async fetchPassions(context) { 
      try {
        let res = await fetch(dataUrl)
        let {passions} = await res.json()
        context.commit('setPassions', passions)
      } catch (e) {
        console.log(e.message);
      }
  },
    async fetchSoftSkills(context) { 
      try {
        let res = await fetch(dataUrl)
        let {soft_skills} = await res.json()
        context.commit('setSoftSkills', soft_skills)
      } catch (e) {
        console.log(e.message);
      }
  },
    async fetchTechnicalSkills(context) { 
      try {
        let res = await fetch(dataUrl)
        let {technical_skills} = await res.json()
        context.commit('setTechnicalSkills', technical_skills)
      } catch (e) {
        console.log(e.message);
      }
  },
    async fetchEducation(context) { 
      try {
        let res = await fetch(dataUrl)
        let {education} = await res.json()
        context.commit('setEducation', education)
      } catch (e) {
        console.log(e.message);
      }
  },
    async fetchWorkExperience(context) { 
      try {
        let res = await fetch(dataUrl)
        let {work_experience} = await res.json()
        context.commit('setWorkExperience', work_experience)
      } catch (e) {
        console.log(e.message);
      }
  },
  // testimonials
  async fetchTestimonials(context) { 
    try {
      let res = await fetch(dataUrl)
      let {testimonials} = await res.json()
      context.commit('setTestimonials', testimonials)
    } catch (e) {
      console.log(e.message);
    }
},
  // projects
  async fetchProjects(context) { 
    try {
      let res = await fetch(dataUrl)
      let {projects} = await res.json()
      context.commit('setProjects', projects)
    } catch (e) {
      console.log(e.message);
    }
}
},
  modules: {
  }
})