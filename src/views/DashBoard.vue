<template>
<v-app>
<NavBar/>

<!-- 
<h1>My DashBoard</h1> -->
<v-row>

<v-col cols="12"  lg="2" md="6">
  <v-card
              :color="active ? '#49D9A0' : 'white'"
              class="d-flex align-center rounded-xl elevation-10"
              dark
              height="200"
             
              
            >
              <v-row>

                
                <v-col cols="12" sm="12">

                  <div class="mt-12 text-center" >
<v-row>

  <v-col cols="12">
      <h2  :class=" active ? 'white--text' : 'black--text'">GENDER</h2>

  </v-col>
</v-row>
</div>

                  <v-list-item three-line  class="mt-10">
                    <v-list-item-content>
                 <!--      <div class="mb-4">
                       
                        <div class="text-center" >
                        <v-avatar   size="100" >
                                <img class="class_sa_avatar" src="/male.png" alt="">
                        </v-avatar>
                      </div>

                      </div>
 -->
                <v-row class="mt-n10">

                  <v-col>
                <div class=" text-center" >
                       <v-list-item-subtitle  :class=" active ? 'white--text' : 'black--text'">MALE</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>2,000</strong>
                        
                      </v-list-item-title>
                    </div>
                  </v-col>

                  <v-col>
                      <div class="text-center" >
                      <v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">FEMALE</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>1,500</strong>
                        
                      </v-list-item-title>
                    </div>
                  </v-col>
                  </v-row>

                    </v-list-item-content>
                  </v-list-item>

                  
                </v-col>
              </v-row>
              
            </v-card>


</v-col>

<v-col cols="12" lg="4" md="6">
  <v-card
              :color="active ? '#49D9A0' : 'white'"
              class="d-flex align-center rounded-xl elevation-10"
              dark
              height="200"
             
              
            >
              <v-row>
                
                <v-col cols="12" sm="12">

                  <div class="mt-12 text-center" >
<v-row>

  <v-col cols="12">
      <h2  :class=" active ? 'white--text' : 'black--text'">CIVIL STATUS</h2>

  </v-col>
</v-row>
</div>

                  <v-list-item three-line  class="mt-10">
                    <v-list-item-content>
                 <!--      <div class="mb-4">
                       
                        <div class="text-center" >
                        <v-avatar   size="100" >
                                <img class="class_sa_avatar" src="/male.png" alt="">
                        </v-avatar>
                      </div>

                      </div>

 -->


                <v-row class="mt-n10">
                  

                  <v-col>
                <div class=" text-center" >
                       <v-list-item-subtitle  :class=" active ? 'white--text' : 'black--text'">SINGLE</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>2,000</strong>
                        
                      </v-list-item-title>
                    </div>
                  </v-col>

                  <v-col>
                      <div class="text-center" >
                      <v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">MARRIED</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>1,500</strong>
                        
                      </v-list-item-title>
                    </div>
                  </v-col>


                  <v-col>
                      <div class="text-center" >
                      <v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">WIDOWER</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>1,500</strong>
                        
                      </v-list-item-title>
                    </div>
                  </v-col>

                  <v-col>
                      <div class="text-center" >
                      <v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">SEPARATED</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>1,500</strong>
                        
                      </v-list-item-title>
                    </div>
                  </v-col>



                  </v-row>

                    </v-list-item-content>
                  </v-list-item>

                  
                </v-col>
              </v-row>
              
            </v-card>
</v-col>



<v-col cols="12" lg="4" md="6" >
  <v-card
              :color="active ? '#49D9A0' : 'white'"
              class="d-flex align-center rounded-xl elevation-10"
              dark
              height="200"
             
              
            >
              <v-row>
                
                <v-col cols="12" sm="12">

                  <div class="mt-12 text-center" >
<v-row>

  <v-col cols="12">
      <h2  :class=" active ? 'white--text' : 'black--text'">EMPLOYEMENT STATUS</h2>

  </v-col>
</v-row>
</div>

                  <v-list-item three-line  class="mt-10">
                    <v-list-item-content>
                 <!--      <div class="mb-4">
                       
                        <div class="text-center" >
                        <v-avatar   size="100" >
                                <img class="class_sa_avatar" src="/male.png" alt="">
                        </v-avatar>
                      </div>

                      </div>

 -->


                <v-row class="mt-n10">
                  

                  <v-col>
                <div class=" text-center" >
                       <v-list-item-subtitle  :class=" active ? 'white--text' : 'black--text'">EMPLOYED</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>2,000</strong>
                        
                      </v-list-item-title>
                    </div>
                  </v-col>

                  <v-col>
                      <div class="text-center" >
                      <v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">UNEMPLOYED</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>1,500</strong>
                        
                      </v-list-item-title>
                    </div>
                  </v-col>


                  <v-col>
                      <div class="text-center" >
                      <v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">SELF-EMPLOYED</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>1,500</strong>
                        
                      </v-list-item-title>
                    </div>
                  </v-col>

                



                  </v-row>

                    </v-list-item-content>
                  </v-list-item>

                  
                </v-col>
              </v-row>
              
            </v-card>
</v-col>

<v-col cols="12" lg="2" md="6">
  <v-card
              :color="active ? '#49D9A0' : 'white'"
              class="d-flex align-center rounded-xl elevation-10"
              dark
              height="200"
             
              
            >
              <v-row>

                
                <v-col cols="12" sm="12">

                  <div class="mt-12 text-center" >
<v-row>

  <v-col cols="12">
      <h2  :class=" active ? 'white--text' : 'black--text'">SHELTER STATUS</h2>

  </v-col>
</v-row>
</div>

                  <v-list-item three-line  class="mt-10">
                    <v-list-item-content>
                 <!--      <div class="mb-4">
                       
                        <div class="text-center" >
                        <v-avatar   size="100" >
                                <img class="class_sa_avatar" src="/male.png" alt="">
                        </v-avatar>
                      </div>

                      </div>
 -->
                <v-row class="mt-n10">

                  <v-col>
                <div class=" text-center" >
                       <v-list-item-subtitle  :class=" active ? 'white--text' : 'black--text'">OWNED</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>2,000</strong>
                        
                      </v-list-item-title>
                    </div>
                  </v-col>

                  <v-col>
                      <div class="text-center" >
                      <v-list-item-subtitle :class="active ? 'white--text' : 'black--text'">RENTER</v-list-item-subtitle>
                      <v-list-item-title class="headline mb-1" :class="active ? 'white--text' : 'black--text'">
                        <strong>1,500</strong>
                        
                      </v-list-item-title>
                    </div>
                  </v-col>
                  </v-row>

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