<template>
  <form class="user-form" method="POST" @submit.prevent="send">
          <div class="row">
              <div class="input-field col s6">
                  <input id="firstname" type="text" class="validate" v-model="user.firstname" v-model.trim="user.firstname" @input="$v.user.firstname.$touch()">
                  <label for="firstname">Prenom</label>
                  <span class="form-group__message alert" v-if="!$v.user.firstname.required && $v.user.firstname.$dirty">Le champ "Prenom" est obligatoire</span>
                  <span class="form-group__message alert" v-if="!$v.user.firstname.minLength">Il doit y avoir un minimum de {{$v.user.firstname.$params.minLength.min}} lettres.</span>
              </div>
              <div class="input-field col s6">
                  <input id="lastname" type="text" class="validate" v-model="user.lastname" v-model.trim="user.lastname" @input="$v.user.lastname.$touch()">
                  <label for="lastname">Nom</label>
                  <span class="form-group__message alert" v-if="!$v.user.lastname.required && $v.user.lastname.$dirty">Le champ "Nom" est obligatoire</span>
                  <span class="form-group__message alert" v-if="!$v.user.lastname.minLength">Il doit y avoir un minimum de {{$v.user.lastname.$params.minLength.min}} lettres.</span>
              </div>
          </div>
          <div class="row">
              <p>
                  <input name="gender" type="radio" id="male" value="male" v-model="user.gender" v-model.trim="user.gender" @input="$v.user.gender.$touch()">
                  <label for="male">Homme</label>
              </p>
              <p>
                  <input name="gender" type="radio" id="female" value="female" v-model="user.gender" v-model.trim="user.gender" @input="$v.user.gender.$touch()">
                  <label for="female">Femme</label>
              </p>
              <span class="form-group__message alert" v-if="!$v.user.gender.required && $v.user.gender.$dirty">Le champ "Genre" est obligatoire</span>
          </div>
          <div class="row">
              <div class="input-field col s12">
                  <input id="email" type="email" class="validate" v-model="user.email" v-model.trim="user.email" @input="$v.user.email.$touch()">
                  <label for="email">Email</label>
                  <span class="form-group__message alert" v-if="!$v.user.email.required && $v.user.email.$dirty">Le champ "Email" est obligatoire</span>
                  <span class="form-group__message alert" v-if="!$v.user.email.email">La saisie ne correspond pas à une email</span>
              </div>
          </div>
          <div class="row">
              <div class="input-field col s6">
                  <input id="phone" type="tel" class="validate" v-model="user.phone" v-model.trim="user.phone" @input="$v.user.phone.$touch()">
                  <label for="phone">Telephone</label>
                  <span class="form-group__message alert" v-if="!$v.user.phone.required && $v.user.phone.$dirty">Le champ "Telephone" est obligatoire</span>
                  <span class="form-group__message alert" v-if="!$v.user.phone.minLength">Il doit y avoir un minimum de {{$v.user.phone.$params.minLength.min}} lettres.</span>
                  <span class="form-group__message alert" v-if="!$v.user.phone.maxLength">Il doit y avoir un maximum de {{$v.user.phone.$params.maxLength.min}} lettres.</span>
              </div>
              <div class="input-field col s6">
                  <input id="birthdate" type="date" class="datepicker" v-model="user.birthdate" v-model.trim="user.birthdate" @input="$v.user.birthdate.$touch()">
                  <span class="form-group__message alert" v-if="!$v.user.birthdate.required && $v.user.birthdate.$dirty">Le champ "Date de naissance" est obligatoire</span>
              </div>
          </div>
          <div class="row">
              <div class="input-field col s6">
                  <input id="city" type="text" class="validate" v-model="user.city" v-model.trim="user.city" @input="$v.user.city.$touch()">
                  <span class="form-group__message alert" v-if="!$v.user.city.required && $v.user.city.$dirty">Le champ "Ville" est obligatoire</span>
                  <label for="city">Ville</label>
              </div>
              <div class="input-field col s6">
                  <input id="country" type="text" class="validate" v-model="user.country" v-model.trim="user.country" @input="$v.user.country.$touch()">
                  <label for="country">Pays</label>
                  <span class="form-group__message alert" v-if="!$v.user.country.required && $v.user.country.$dirty">Le champ "Pays" est obligatoire</span>
              </div>
          </div>
          <div class="row">
              <div class="input-field col s12">
                  <input id="photo" type="text" class="validate" v-model="user.photo">
                  <label for="photo">Photo</label>
              </div>
          </div>
          <input type="submit" value="Envoyer !">
      </form>
</template>

<script>
import { required, email, minLength, maxLength, url } from 'vuelidate/lib/validators'

export default {
   name : "user-form",
   data () {
     return {
       user : {
         firstname : '',
         lastname : '',
         gender : '',
         email : '',
         phone : '',
         birthdate : '',
         city : '',
         country : '',
         photo : '',
       }
     }
   },
   methods:{
     send: function(){
       this.$emit('send', this.user);
     },
  },
  validations: {
            user: {
                firstname: {
                    required,
                    minLength : minLength(2),
                },
                lastname: {
                    required,
                    minLength : minLength(2),
                },
                gender: {
                    required,
                },
                email: {
                    required,
                    email
                },
                phone: {
                    required,
                    minLength : minLength(9),
                    maxLength: maxLength(10),
                },
                birthdate: {
                    required,
                },
                city: {
                    required,
                },
                country: {
                    required,
                },
                photo: {
                    url
                }
            }
    }
}
</script>

<style>
.userform input, select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.userform input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.user-form input[type=submit]:hover {
    background-color: #45a049;
}

.user{
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}

.alert {
      color: #D8000C;
      float: right;
  }
</style>
