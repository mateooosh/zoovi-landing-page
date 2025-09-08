<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const state = reactive({
  username: '',
  password: '',
  rememberMe: false
})

const onLogin = (): void => {
  console.log('login', state)
}

const goToRegister = (): void => {
  router.push('/register')
}
</script>

<template>
  <div class="flex flex-row h-screen">
    <div class="flex-1">
      <img src="/login.png" class="cover-img"/>
    </div>
    <div class="flex justify-center items-center flex-1">
      <div class="flex flex-col gap-30 w-360">
        <div class="heading1B text-black">Zaloguj się do Zoovi</div>
        <div class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
        <div class="flex flex-col gap-8">
          <div class="bodyB text-neutral">Nazwa użytkownika</div>
          <InputText v-model="state.username" class="h-40" placeholder="Nazwa użytkownika"/>
        </div>
        <div class="flex flex-col gap-8">
          <div class="bodyB text-neutral">Hasło</div>
          <Password v-model="state.password" class="h-40" :feedback="false" placeholder="Hasło"/>
          <div class="flex flex-row justify-between mt-8">
            <div class="flex items-center gap-12">
              <Checkbox v-model="state.rememberMe" binary inputId="rememberMe"/>
              <label for="rememberMe" class="captionB text-neutral">Zapamiętaj mnie</label>
            </div>
            <div class="captionB text-primary hover:cursor-pointer">Nie pamiętasz hasła?</div>
          </div>
        </div>
        <Button @click="onLogin" class="h-40">Zaloguj się</Button>
        <div class="flex flex-row justify-center">
          <div class="bodyB text-neutral">Nie masz konta? <span class="text-primary hover:cursor-pointer" @click="goToRegister">Zarejestruj się!</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-password-input) {
  flex: 1
}

.cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>