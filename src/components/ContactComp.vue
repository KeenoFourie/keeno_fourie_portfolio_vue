<template>
  <h3 id="heading_contact_us">CONTACT US:</h3>
    <div id="everything_in_contact">
        <div id="contact_content">
            <form class="col-5">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Name:</label>
                  <input type="name" aria-describedby="nameHelp" placeholder="Please Insert Name..." style="color: white" required>
                  <div id="nameHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Surname:</label>
                  <input type="surname" aria-describedby="surnameHelp" placeholder="Please Insert Surname..." style="color: white" required>
                  <div id="surnameHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email-address:</label>
                  <input type="email" aria-describedby="emailHelp" placeholder="Please Insert Email-address..." style="color: white" required>
                  <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Comments:</label>
                  <input type="comments" placeholder="Please Insert Your comments..." style="color: white" required>
                </div>
                <button type="submit" class="btn btn-transparent" id="submit_button">Submit</button>
              </form>
              <div class="col-5" id="contact_details">
                <p>Contact me:</p>
                <p><i class="fa-solid fa-phone fa-shake"></i> +27 81 747 1270</p>
                <p><i class="fa-solid fa-envelope fa-shake"></i> keenofourie614@gmail.com</p>
              </div>
        </div>
    </div>
</template>

<script >
    export default {
        
    }
</script>

<style scoped>

</style>