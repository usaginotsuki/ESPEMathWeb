<template>
  <div>
    <div class="text-center">You're now logged as</div>
    <div id="username_display" class="display-6">{{ this.email }}</div>
    <button id="sign_out" class="mt-4 btn btn-danger" @click="signOut">
      Logout
    </button>
  </div>
  
</template>

<script>
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const auth = getAuth()

export default {
  data() {
    let unidades=[];
    return {
      unidades,
      email: auth.currentUser.email,
    }
  },
  methods: {
    signOut() {
      auth
        .signOut()
        .then(() => {
          console.log('Sign Out completed')
          this.$router.push('/')
        })
        .catch((error) => console.log(error))
    },
  },
  async created() {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        this.$router.push('/')
      }
    })
    const db = getFirestore()
    const querySnapshot = await getDocs(collection(db, 'contenido'))
    querySnapshot.forEach(async (doc) => {
      
      const queryPreguntas = collection(db, 'contenido', doc.id, 'preguntas')
      const queryTemas = collection(db, 'contenido', doc.id, 'temas')
      let preguntas = await getDocs(queryPreguntas)

      let temas = await getDocs(queryTemas)

      console.log(doc.id, ' => ', doc.data())
      console.log(
        'preguntas => ',
        preguntas.docs.map((doc) => doc.data()),
      )
      console.log(
        'temas => ',
        temas.docs.map((doc) => doc.data()),
      )
    })
    console.log(auth.currentUser)
  },
}
</script>
