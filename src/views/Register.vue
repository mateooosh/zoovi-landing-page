<script setup lang="ts">
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()

const state = reactive({
  username: '',
  email: '',
  password: '',
  confirmedPassword: ''
})

const onRegister = (): void => {
  console.log('register', state)
}

const goToLogin = (): void => {
  router.push('/login')
}
</script>

<template>
  <div class="flex flex-row h-screen">
    <div class="flex-1 bg-red-50">
      <img src="/login.png" class="cover-img"/>
    </div>
    <div class="flex justify-center items-center flex-1">
      <div class="flex flex-col gap-30 w-360">
        <div class="heading1B text-black">Zarejestruj się do Zoovi</div>
        <div class="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
        <div class="flex flex-col gap-8">
          <div class="bodyB text-neutral">Nazwa użytkownika</div>
          <InputText v-model="state.username" class="h-40" placeholder="Nazwa użytkownika"/>
        </div>
        <div class="flex flex-col gap-8">
          <div class="bodyB text-neutral">E-mail</div>
          <InputText v-model="state.email" class="h-40" placeholder="E-mail"/>
        </div>
        <div class="flex flex-col gap-8">
          <div class="bodyB text-neutral">Hasło</div>
          <Password v-model="state.password" class="h-40" weak-label="Słabe" medium-label="Średnie" strong-label="Silne"
                    prompt-label="Wprowadź hasło" placeholder="Hasło"/>
        </div>
        <div class="flex flex-col gap-8">
          <div class="bodyB text-neutral">Hasło</div>
          <Password v-model="state.confirmedPassword" class="h-40" :feedback="false" placeholder="Potwierdź hasło"/>
        </div>
        <Button @press="onRegister" class="h-40">Zarejestruj się</Button>
        <div class="flex flex-row justify-center">
          <div class="bodyB text-neutral">Masz już konto? <span class="text-primary hover:cursor-pointer" @click="goToLogin">Zaloguj się!</span></div>
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