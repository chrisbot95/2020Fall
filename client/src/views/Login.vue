<template>
<form style="margin-top: 15px">
  <div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control">
    <button class="button is-success" @click.prevent="login">
      Login
    </button>
  </p>
</div>
</form>
</template>

<script>
import session from '@/models/session'

export default {
  methods: {
    login(){
      session.user = {
        name: 'John Smith',
        handle: 'johnsmith',
        profile: 'https://wi-images.condecdn.net/image/jgov7eBrRvb/crop/2040/f/6-facial-recognition-hero.jpg'
      }
      session.addNotification('Yay! You logged in', 'success')
      this.$router.push('feed')
    }
  }
}
</script>

<style>

</style>