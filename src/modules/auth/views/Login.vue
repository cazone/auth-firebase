<template>
 
      <q-card
          class="login-form"
          v-bind:style="
            $q.platform.is.mobile ? { width: '80%' } : { width: '30%' }
          "
        >
          <q-img src="~assets/pharmacy.jpg"></q-img>
          <q-card-section>
            
            <q-avatar
              size="74px"
              class="absolute"
              style="top: 0;right: 25px;transform: translateY(-50%);"
            >
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Log in to Dashboard
              </div>
            </div>
          </q-card-section>
          <q-card-section>
          
  
            <q-form        @submit="onSubmit" class="q-gutter-md">
              <q-input 
              filled 
              v-model="userForm.email" 
              label="Email" 
              lazy-rules
              :rules="[ 
              val => val && val.length > 0 || 'El campo email obligatorio',
              isValidEmail
              ]"
               />

              <q-input
                type="password"
                filled
                v-model="userForm.password"
                label="Password"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'El campo password  obligatorio']"
              />

              <div>
                <q-btn
                  label="Entrar"

                  type="submit"
                  color="primary"
                  
                />

              </div>
            </q-form>
          </q-card-section>
        </q-card>
      
 
</template>

<script>
import { ref } from 'vue'
import useAuthfire from '../composables/useAuthFire'
import { useQuasar } from 'quasar'


export default {
setup() {

   const $q = useQuasar()
    const {loginUser} = useAuthfire()

    const userForm = ref({
        email: 'fernando@gmail.com',
        password: '123456',
    })
    


    return {
            userForm,
            onSubmit: async () => {
               const {ok , message} = await   await   loginUser( userForm.value.email, userForm.value.password )
         
               if(!ok){

               } $q.notify({
        message,
          color: 'secondary'
        })

            },
            isValidEmail( val ) {
    const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    return emailPattern.test(val) || 'El correo no parece ser válido';
}
        }
    }
}
</script>
