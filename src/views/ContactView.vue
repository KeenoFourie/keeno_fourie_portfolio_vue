<template>
    <div id="contact_background">
      <h3 id="heading_contact_us"></h3>
    <div id="everything_in_contact">
        <div id="contact_content">
            <form action="https://formspree.io/f/mnqkqnvz" method="POST">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Name:</label>
                  <input type="name" aria-describedby="nameHelp" placeholder="Please Insert Name..." style="color: white" required name="name">
                  <div id="nameHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Surname:</label>
                  <input type="surname" aria-describedby="surnameHelp" placeholder="Please Insert Surname..." style="color: white" required name="surname">
                  <div id="surnameHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email-address:</label>
                  <input type="email" aria-describedby="emailHelp" placeholder="Please Insert Email-address..." style="color: white" required name="email">
                  <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Comments:</label>
                  <input type="comments" placeholder="Please Insert Your comments..." style="color: white" required name="comments">
                </div>
                <button type="submit" class="btn btn-transparent" id="submit_button">Submit</button>
              </form>
              <div class="col-5" id="contact_details">
                <p id="contact_name">Contact me:</p>
                <p><i class="fa-solid fa-phone fa-shake"></i> +27 81 747 1270</p>
                <p><i class="fa-solid fa-envelope fa-shake"></i> keenofourie614@gmail.com</p>
              </div>
        </div>
    </div>
    </div>
</template>
  
<script>
      export default {
          
      }
</script>
  
  
<style scoped>
  
</style>