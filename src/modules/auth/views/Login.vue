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
            <q-form class="q-gutter-md">
              <q-input filled v-model="userForm.email" label="Email" lazy-rules />

              <q-input
                type="password"
                filled
                v-model="userForm.password"
                label="Password"
                lazy-rules
              />

              <div>
                <q-btn
                  label="Entrar"
                  to="/dashboard"
                  type="button"
                  color="primary"
                  
                />

              </div>
            </q-form>
          </q-card-section>
        </q-card>
      
 
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'



export default {
setup() {

    const router = useRouter()
    const { loginUser } = useAuth()

    const userForm = ref({
        email: 'fernando@gmail.com',
        password: '123456',
    })


    return {
            userForm,
            onSubmit: async() => {
                const { ok, message } = await loginUser( userForm.value )

                if ( !ok ) Swal.fire('Error', message, 'error' )
                else router.push({ name: 'no-entry' })
            }
        }
    }
}
</script>
