<template lang="">
  <div>
    <section class="p-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md section-title-contact">
            <h2 class="text-center mb-4 section-title">Contact Info</h2>
            <ul class="list-group list-group-flush lead">
              <li class="list-group-item bg-dark text-light">
                <span>Main Location:</span> 50 Main st Boston MA
              </li>
              <li class="list-group-item bg-dark text-light">
                <span>Enrollment Phone:</span> (555) 555-5555
              </li>
              <li class="list-group-item bg-dark text-light">
                <span>Student Phone:</span> (333) 333-3333
              </li>
              <li class="list-group-item bg-dark text-light">
                <span>Enrollment Email:</span> (555) enroll@frontendbc.test
              </li>
              <li class="list-group-item bg-dark text-light">
                <span>Student Email:</span>
                student@frontendbc.test
              </li>
            </ul>
          </div>
          <!-- Wrapper container -->
          <div class="container py-4">
            <!-- Bootstrap 5 starter form -->
            <form id="contactForm">
              <!-- Name input -->
              <div class="mb-3">
                <label class="form-label" for="name">Name</label>
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Name"
                  data-sb-validations="required"
                />
              </div>

              <!-- Email address input -->
              <div class="mb-3">
                <label class="form-label" for="emailAddress"
                  >Email Address</label
                >
                <input
                  class="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  data-sb-validations="required, email"
                />
              </div>

              <!-- Message input -->
              <div class="mb-3">
                <label class="form-label" for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  type="text"
                  placeholder="Message"
                  style="height: 10rem"
                  data-sb-validations="required"
                ></textarea>
              </div>

              <!-- Form submit button -->
              <div class="d-grid">
                <button class="btn btn-primary btn-lg" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
