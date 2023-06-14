<template>
<v-app>
<NavBar/>

<!-- 
<h1>My DashBoard</h1> -->
<v-row>
<v-col cols="12" md="2">
  <v-card
              :color="active ? '#49D9A0' : 'white'"
              class="d-flex align-center rounded-xl elevation-10"
              dark
              height="200"
             
              
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line  class="mt-10">
                    <v-list-item-content>
                      <div class="mb-4">
                       
                        <div class="text-center" >
                        <v-avatar   size="100" >
                                <img class="class_sa_avatar" src="/male.png" alt="">
                        </v-avatar>
                      </div>

                      </div>

                      <div class="text-center" >
                      <v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">MALE</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>2,000</strong>
                        
                      </v-list-item-title>
                    </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              
            </v-card>


</v-col>


<v-col cols="12" md="2">
  <v-card
              :color="active ? '#49D9A0' : 'white'"
              class="d-flex align-center rounded-xl elevation-10"
              dark
              height="200"
             
              
            >
              <v-row>
                <v-col cols="12" sm="12">
                  <v-list-item three-line  class="mt-10">
                    <v-list-item-content>
                      <div class="mb-4">
                       
                        <div class="text-center" >
                        <v-avatar   size="100" >
                                <img class="class_sa_avatar" src="/female.jpg" alt="">
                        </v-avatar>
                      </div>

                      </div>

                      <div class="text-center" >
                      <v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">FEMALE</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>1,500</strong>
                        
                      </v-list-item-title>
                    </div>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              
            </v-card>


</v-col>




</v-row>




</v-app>
</template>


<script>

import NavBar from "../components/NavBar.vue";
export default {
  name: 'App',

  components: {
    NavBar,
  },

  data () {
    return {

    
    }

  }
  

    };


</script>