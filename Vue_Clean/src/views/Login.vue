<template>
  <v-app id="login" class="secondary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img
                    src="https://icon-library.net/images/admin-icon-png/admin-icon-png-28.jpg"
                    alt="Vue Material Admin"
                    width="180"
                    height="180"
                  />
                  <h1 class="flex my-4 primary--text">Admin Login</h1>
                </div>
                <v-form>
                  <v-text-field
                    append-icon="person"
                    name="Användarnamn"
                    label="Användarnamn"
                    type="text"
                    v-model="username"
                    :error="error"
                    :rules="[rules.required]"
                  />
                  <v-text-field
                    :type="hidePassword ? 'password' : 'text'"
                    :append-icon="hidePassword ? 'visibility_off' : 'visibility'"
                    name="password"
                    label="Password"
                    id="password"
                    :rules="[rules.required]"
                    v-model="password"
                    :error="error"
                    @click:append="hidePassword = !hidePassword"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-snackbar v-model="showResult" :timeout="2000" top>{{ result }}</v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      username: [
        "edvinvare",
        "jesperribe",
        "mybjork",
        "hildagwiten",
        "rasmusrisberg"
      ],
      password:[
        "123456",
        "ABCD",
        "Hund",
        "Katt",
        "Fisk",
        "Häst"
      ] ,
      hidePassword: true,
      error: false,
      showResult: false,
      result: '',
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },

  methods: {
    login() {
      const vm = this;
      

      if (!vm.username || !vm.password) {

        vm.result = "Email and Password can't be null.";
        vm.showResult = true;

        return;
      }

      if (vm.username === vm.$root.username && vm.password === vm.$root.userPassword) {
        vm.$router.push({ name: 'admin' });
      }
      else {
        vm.error = true;
        vm.result = "Email or Password is incorrect.";
        vm.showResult = true;
      }
    }
  }
}
</script>

<style scoped lang="css">
#login {
  height: 130%;
  width: 100%;
  position: absolute;
  top: 1000;
  left: 0;
  content: "";
  z-index: 5;
}
</style>
