<template>
<div class="d-flex justify-content-center">
    <form>
      <div class="row">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">Meno</label>
          <input type="name" class="form-control" id="name" aria-autocomplete="inline">
          <label for="subject" class="form-label">Predmet</label>
          <input type="subject" class="form-control" id="subject" aria-autocomplete="inline">
        </div>
      </div>
      <div class="col">
        <div class="mb-3 form-check">
          <label class="form-label" for="message">Správa</label>
          <textarea type="message" class="form-control" id="message" rows="3"></textarea>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary" @click="submitForm">Poslať</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
        };
    },  
    methods: {
        send(message) {
            this.message = message;
        },
        submitForm() {
            alert('Ďakujeme!');
    },
    },
};
</script> 

  <style>
</style>