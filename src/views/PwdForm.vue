<template>
    <v-app>
        <NavBar />
        <v-card  class="centerbai elevation-10"   >

            <div class="text-center mt-3">

                <p class="font-weight-bold">APPLICATION FORM</p>
                <p class="mt-n5 font-weight-bold">PERSON WITH DISABILITY (PWD) IDENTIFICATION CARD</p>
            </div>


            <v-stepper class="mt-n3" v-model="e1" @input="scrollup">
                <v-stepper-header style="font-size: 14px">
                    <v-stepper-step :complete="e1 > 1" step="1" style="height=">
                        1
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 2" step="2">
                        2
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 3" step="3">
                        3
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step :complete="e1 > 4" step="4">
                        4
                    </v-stepper-step>

                    <v-divider></v-divider>


                </v-stepper-header>



                <v-stepper-items>


                    <!-- YOUTH IDENTIFICATION Stepper -->

                    <v-form ref="formes" v-model="valid" lazy-validation>


                    <v-stepper-content step="1">
                      
                          
                                <v-container>
                                   
    
                                    <v-row class="mt-n10">

                                    
                                      <v-col cols="12"   sm="12" md="3">
                                        
                                        <v-text-field class="mt-4" label="PWD Number"  outlined dense>
                                        </v-text-field>
                                        <v-text-field class="mt-n4" label="Date Applied"  type="date" outlined dense>
                                        </v-text-field>
                                      </v-col>
                                    </v-row>

                                    <v-row>
                                        
                                        <v-col class="mt-n5" cols="12"   sm="12" md="3">
                                            <H4>PERSONAL INFORMATION</H4>
                        <v-text-field class="mt-4" label="Last Name"  outlined dense>

                           </v-text-field>

                           </v-col>      

                           <v-col class="mt-n9 mt-md-5" cols="12"   sm="12" md="3">
                                         
                        <v-text-field  label="First Name"  outlined dense>

                           </v-text-field>

                           </v-col>     
                           
                                       <v-col class="mt-n9   mt-md-5" cols="12"   sm="12" md="3">
                                         
                                         <v-text-field  label="Middle Name"  outlined dense>
                 
                                            </v-text-field>
                 
                                            </v-col>     

                                            <v-col class="mt-n9 mt-md-5" cols="12"   sm="12" md="3">
                                         
                                              <v-text-field  label="Suffix"  outlined dense>
                 
                                            </v-text-field>
                 
                                            </v-col>    

                                    </v-row>
                                    
                                <v-row>

                                    <v-col cols="12" sm="12" md="3" class="mt-n9 mt-md-n5">
                                            <v-file-input :rules="rules" outlined dense height="10" label="Attached ID here"  accept="image/x-png,image/gif,image/jpeg"></v-file-input>
                                        </v-col>


                                    <v-col cols="12"   sm="12" md="3">
                                         

                                         <v-text-field class="mt-n6" type="date" label="Date of Birth"  outlined dense>
                 
                                            </v-text-field>
                 
                                            </v-col> 

                                       
                                            <v-col cols="12"   sm="12" md="3" class="mt-n9 mt-md-n9">
                                               
                                            <v-radio-group row>
                                                <h3>Sex</h3>
                                           <v-radio class="ml-4" value="Renewal"  label="Male"></v-radio>

                                       <v-radio value="lost" label="Female"></v-radio>
                                   </v-radio-group>
                                </v-col> 


                                <v-col cols="12"   sm="12" md="3" class="mt-n7">
                                               
                                    <v-select 
                                           
                                            outlined dense 
                                            :rules="rules"
                                                :items="['Single', 'Married', 'Widow/er', 'Separated', 'Cohabitation(live-in)']"
                                                label="Civil Status" prepend-inner-icon="mdi-ring"
                                                v-model="civil_status" required></v-select>

                                   </v-col> 


                                   

                                </v-row>         

                              
                                 <v-row>

                                    <v-col cols="12" class="mt-n7" sm="12" md="3">
                                        <H4>TYPE OF DISABILITY</H4>

                                        <v-checkbox-group >

                    <v-checkbox  label="Deaf or Hard of Hearing"></v-checkbox>
                <v-checkbox  label="Intellectual Disability"
                   class="mt-n5"></v-checkbox>
                <v-checkbox label="Learning Disability" 
                    class="mt-n5" ></v-checkbox>
                <v-checkbox label="Mental Disability" 
                class="mt-n5"  ></v-checkbox>
                <v-checkbox label="Physical Disability (Orthopedic)"
                    class="mt-n5"   ></v-checkbox>

                    </v-checkbox-group>


                                    </v-col>

                                    <v-col cols="12" class="mt-n12  mt-md-n1" sm="12" md="3">
                                      
                                        <v-checkbox-group >

                    <v-checkbox  label="Psychosocial Disability"></v-checkbox>
                <v-checkbox  label="Speech and Language Impairment"
                   class="mt-n5"></v-checkbox>
                <v-checkbox label="Visual Disability" 
                    class="mt-n5" ></v-checkbox>
                <v-checkbox label="Cancer(RA11215)" 
                class="mt-n5"  ></v-checkbox>
                <v-checkbox label="Rare Disease (RA10747)"
                    class="mt-n5"   ></v-checkbox>

                    </v-checkbox-group>


                                    </v-col>


                                    <v-col cols="12" class="mt-n7" sm="12" md="2">
                                        <H4>CAUSE OF DISABILITY</H4>

                                        <v-checkbox-group >

                    <v-checkbox class="font-weight-bold  ml-md-n7" label="Congential/Inborn"></v-checkbox>
                <v-checkbox  label="ADHD"
                   class="mt-n5"></v-checkbox>
                <v-checkbox label="Cerebral Palsy" 
                    class="mt-n5" ></v-checkbox>
                <v-checkbox label="Down Syndrome" 
                class="mt-n5"  ></v-checkbox>
                <v-text-field label="Others, Specify"
                    class="mt-n5"   ></v-text-field>

                    </v-checkbox-group>


                                    </v-col>

                                    <v-col cols="12" class="mt-n1" sm="12" md="2">
                                      
                                        <v-checkbox-group >

                    <v-checkbox class="font-weight-bold mt-n7 mt-md-4 ml-md-n7" label="Acquired"></v-checkbox>
                <v-checkbox  label="Chronic Illness"
                   class="mt-n5"></v-checkbox>
                   <v-checkbox label="Cerebral Palsy" 
                    class="mt-n5" ></v-checkbox>
                <v-checkbox label="Injury" 
                class="mt-n5"  ></v-checkbox>
                <v-text-field label="Others, Specify"
                    class="mt-n5"   ></v-text-field>

                    </v-checkbox-group>


                                    </v-col>


                                 </v-row>

                                 <v-row class="mt-n5">
                                    <v-col cols="12"   sm="12" md="2">
                                        <H4>RESIDENCE ADDRESS</H4>
                                        <v-text-field class="mt-2" label="Purok"  outlined dense>
                                        </v-text-field>
                                    </v-col>

                                    <v-col class="mt-n9 mt-md-8" cols="12"   sm="12" md="2">
                                       
                                        <v-select
                                            :rules="rules"
                                            outlined dense 
                                                :items="['Apokon', 'Bincungan', 'Busaon', 'Canocotan', 'Cuambogan', 'La Filipina', 'Liboganon', 'Madaum', 'Magdum', 'Mankilam', 'New Balamban', 'Nueva Fuerza', 'Pagsabangan', 'Pandapan', 'Magugpo Poblacion', 'San Agustin', 'San Isidro', 'San Miguel (Camp 4)', 'Visayan Village', 'Magugpo East', 'Magugpo North', 'Magugpo South', 'Magugpo West']"
                                                label="Select Barangay" prepend-inner-icon="mdi-map-marker"
                                                required></v-select>
                                    </v-col>

                                    <v-col cols="12" class="mt-n9 mt-md-8"  sm="12" md="2">
                                       
                                        <v-text-field  label="Municipality"  outlined dense>
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" class="mt-n9 mt-md-8"   sm="12" md="3">
                                       
                                       <v-text-field  label="Province"  outlined dense>
                                       </v-text-field>
                                   </v-col>

                                   <v-col cols="12" class="mt-n9 mt-md-8"   sm="12" md="3">
                                       
                                       <v-text-field  label="Region"  outlined dense>
                                       </v-text-field>
                                   </v-col>


                                 </v-row>


                                </v-container>

                                
                                        
                                         <v-btn class="ml-4 mt-n1" id="v-btn-c" color="green" @click="e1 = 2">
                                        Continue
                                    </v-btn>
                                    <v-btn @click="e1 = 1" class="ml-2 mt-n2"> Back </v-btn> 

                     


                    </v-stepper-content>


                


<v-stepper-content step="2">
    <!-- <v-card class="mb-12" color="grey lighten-4" > -->
        <v-card-text>
            <v-container>
                <H4>CONTACT DETAILS</H4>
                
                <v-row>

                        <v-container fluid>

                            <v-row class="mt-n2">

                                    <v-col cols="12"   sm="12" md="3">
                                     
                                        <v-text-field class="mt-2" label="Landline Number"  outlined dense>
                                        </v-text-field>
                                    </v-col>

                                    <v-col class="mt-n9 mt-md-2" cols="12"   sm="12" md="3">
                                       
                                        <v-text-field  label="Mobile Number"  outlined dense>
                                        </v-text-field>
                                    </v-col>

                                    <v-col cols="12" class="mt-n9 mt-md-2"  sm="12" md="3">
                                       
                                        <v-text-field  label="E-mail Address"  outlined dense>
                                        </v-text-field>
                                    </v-col>

                                 </v-row>


                                 <v-row class="mt-n8">
                                    
                                    <v-col class="mt-3" cols="12"   sm="12" md="12">
                                        <H4 >EDUCATIONAL ATTAINMENT</H4>

                                        
                                        <v-radio-group row>

                                         

                                              <v-col cols="12"  class="mt-n4" sm="12" md="2">
                                    <v-radio value="None"  label="None"></v-radio>
                                    <v-radio class="mt-2" value="Kindergarden"  label="Kindergarden"></v-radio>
                                    <v-radio class="mt-2" value="Elementary" label="Elementary"></v-radio>
                                    <v-radio class="mt-2" value="juniorhigh" label="Junior High Schol"></v-radio>
     
                                                
                                              </v-col>

                                              <v-col cols="12"  class="mt-n4" sm="12" md="2">
                                             
                                             <v-radio value="seniorhigh"  label="Senior High School"></v-radio>
                                             <v-radio class="mt-2" value="college"  label="College"></v-radio>
                                             <v-radio  class="mt-2" value="vocational" label="Vocational"></v-radio>
                                             <v-radio class="mt-2" value="postgraduate" label="Post Graduate"></v-radio>
              
                                               </v-col>

                                               <v-col cols="12" class="mt-md-n12"  sm="12" md="3">
                                        <H4 class="mt-n2">OCCUPATION</H4>
                                        <v-checkbox-group >
                                            
                                            <v-checkbox    label="Manager"></v-checkbox>
                                              <v-checkbox   class="mt-n5" label="Professionals"></v-checkbox>
                                              <v-checkbox  class="mt-n5" label="Technicians and Associate Professionals"></v-checkbox>
                                            <v-checkbox  class="mt-n5" label="Clerial Support Workers"></v-checkbox>
     
                                </v-checkbox-group>


                                      </v-col>

                                      <v-col cols="12"  class="mt-n12 mt-md-n10"  sm="12" md="3">
                                      
                                       <v-checkbox-group >
                                            
                                        <v-checkbox   label="Service and Sales Workers"></v-checkbox>
                                            <v-checkbox  class="mt-n5"  label="Skilled Agricultural, Forestry and Fishery Workers"></v-checkbox>
                                                <v-checkbox  class="mt-n5" label="Craft and Related Trade Workers"></v-checkbox>
                                                    <v-checkbox  class="mt-n5" label="Plant and Machine Operations and Assemblers"></v-checkbox>
     
                                </v-checkbox-group>


                                      </v-col>

                                      <v-col cols="12"  class="mt-n12" sm="12" md="2">
                                      
                                        <v-checkbox-group >
                                          
                                 <v-checkbox   label="Elementary Occupations"></v-checkbox>
                                                <v-checkbox class="mt-n5"  label="Armed Forces Occupations"></v-checkbox>
                                  <v-text-field dense label="Others, Specify" > </v-text-field>
                              
                                </v-checkbox-group>

                                    </v-col>

                                              
                                </v-radio-group>


                                      </v-col>

                                 
                              
                                    
                                  

                                    <v-col  cols="12"  class="mt-n12  mt-md-n9" sm="12" md="2">
                                        <H4>STATUS OF EMPLOYEMENT</H4>
                                      <v-radio-group   >
                                          
                                  <v-radio value="Employed"  label="Employed"></v-radio>
                                  <v-radio value="Unemplyed"  label="Unemplyed"></v-radio>
                                  <v-radio value="Selfemployed"  label="Self-employed"></v-radio>
                                  </v-radio-group>
                                    </v-col>

                                    <v-col  cols="12"  class="mt-n2 mt-md-n9" sm="12" md="2">
                                        <p class="font-weight-bold">A. CATEGORY OF EMPLOYMENT</p>
                                      <v-radio-group   >
                                          
                                  <v-radio value="Goverment"  label="Goverment"></v-radio>
                                  <v-radio value="Private"  label="Private"></v-radio>
                                 
                                  </v-radio-group>
                                    </v-col>
                                    
                                    <v-col  cols="12"  class="mt-n3  mt-md-n9" sm="12" md="5">
                                        <p class="font-weight-bold">B. Types of Employement</p>
                                      <v-radio-group   >
                                      
                                        <v-row>
                                        <v-col  cols="12"   sm="12" md="4">
                                        
                                  <v-radio value="Permanent"  label="Permanent/Regular"></v-radio>
                                  <v-radio value="Seasonal"  label="Seasonal"></v-radio>

                                </v-col>


                                <v-col  cols="12"  class="mt-n4 mt-md-0" sm="12" md="2">

                                  <v-radio value="Casual"  label="Casual"></v-radio>
                                  <v-radio value="Emergency"  label="Emergency"></v-radio>    
                                </v-col>
                            </v-row>

                                  </v-radio-group>

                                    </v-col>

                                  

                                 </v-row>


                                 <v-row class="mt-n2">

            <v-col cols="12"   sm="12" md="3">
    <H4>ORGANIZATION INFORMATION</H4>
                    <v-select
                    outlined dense
                    class="mt-3" 
                     :items="['Tagum Association of Person With Disability (TAP)', 
                     'Tagum Deaf Association (TDA)',
                     'Tagum PWD Womens Association (TAPWA)',
                     'Tagum Youth Organization For PWD (TAYO)', 
                     'Tagum City Blind Association (TBA)',   
                     'Parent Mobilization Action Group (PMAG)',                   
                     ]"
                    label="Select Organization"></v-select>
   
</v-col>

<v-col class="mt-n9  mt-md-8" cols="12"   sm="12" md="3">
   
    <v-text-field  label="Contact Person"  outlined dense>
    </v-text-field>
</v-col>

<v-col cols="12" class="mt-n8  mt-md-8"  sm="12" md="3">
   
    <v-text-field  label="Office Address"  outlined dense>
    </v-text-field>
</v-col>

<v-col cols="12" class="mt-n8 mt-md-8"  sm="12" md="3">
   
   <v-text-field  label="Tel. No."  outlined dense>
   </v-text-field>
</v-col>

</v-row>



                        </v-container>
                  



                </v-row>

            </v-container>

        </v-card-text>
        <v-btn class="ml-6  mt-n2 ml-md-4 mt-md-n1" id="v-btn-c" color="green" @click="e1 = 3">
                                        Continue
                                    </v-btn>
                                    <v-btn @click="e1 = 1" class="ml-2 mt-n2"> Back </v-btn> 


   <!--  </v-card> -->


</v-stepper-content>



<v-stepper-content step="3">
    <!-- <v-card class="mb-12" color="grey lighten-4" > -->
        <v-card-text>
            <v-container>
             
                
                <v-row>

                        <v-container fluid>
                            <H4>ID REFERENCE NO.</H4>
                            <v-row class="mt-n7">
                                
                                <v-col class="mt-8" cols="12"   sm="12" md="2">
   
                                         <v-text-field  label="SSS No."  outlined dense>
                                            </v-text-field>
                                            </v-col>
                                 
                                            <v-col class="mt-n8  mt-md-8" cols="12"   sm="12" md="2">
   
                                                       <v-text-field  label="GSIS No."  outlined dense>
                                                  </v-text-field>
                                            </v-col>         

                                
                             <v-col class="mt-n8 mt-md-8" cols="12"   sm="12" md="2">
                                         <v-text-field  label="Pag-Ibig No."  outlined dense>
                                 </v-text-field>
                                        </v-col>    
                                        
                                        <v-col class="mt-n8  mt-md-8" cols="12"   sm="12" md="2">
                                        <v-text-field  label="PSN No."  outlined dense>
                                            </v-text-field>
                                             </v-col>    

                                             <v-col  cols="12" class="mt-n8 mt-md-8"   sm="12" md="2">
                                        <v-text-field  label="Philhealth No."  outlined dense>
                                            </v-text-field>
                                             </v-col>  


                                 </v-row>


                                 <v-row>
                                 
                                    <v-col class="mt-n5" cols="12"   sm="12" md="3">
                                        <H4 >FAMILY BACKGROUND</H4>

                                         <v-text-field class="mt-3" label="Father's Last Name"  outlined dense>
                                     </v-text-field>

                                        </v-col>    

                                    <v-col cols="12"   sm="12" md="3">    
                                        <v-text-field class="mt-n9 mt-md-3" label="Father's First Name"  outlined dense>
                                     </v-text-field>
                                    </v-col>    

                                <v-col cols="12"   sm="12" md="4">    
                                     <v-text-field class="mt-n9  mt-md-3" label="Father's Middle Name"  outlined dense>
                                     </v-text-field>
                                    </v-col>    
                                 </v-row>

                                 <v-row class="mt-n5">
                                    <v-col class="mt-n7 mt-md-n5" cols="12"   sm="12" md="3">
                                       

                                       <v-text-field class="mt-3 mt-md-3" label="Mother's Last Name"  outlined dense>
                                   </v-text-field>

                                      </v-col>    

                                  <v-col cols="12"   sm="12" md="3">    
                                      <v-text-field class="mt-n9 mt-md-n2" label="Mother's First Name"  outlined dense>
                                   </v-text-field>
                                  </v-col>    

                              <v-col cols="12"   sm="12" md="4">    
                                   <v-text-field class="mt-n9 mt-md-n2" label="Mother's Middle Name"  outlined dense>
                                   </v-text-field>
                                  </v-col>    
                                 </v-row>


                                 <v-row>
                                 
                                 <v-col class="mt-n5" cols="12"   sm="12" md="3">
                                     <H4 >ACCOMPLISHED BY:</H4>

                                      <v-text-field class="mt-3" label="Applicant Last Name"  outlined dense>
                                  </v-text-field>

                                     </v-col>    

                                 <v-col cols="12"   sm="12" md="3">    
                                     <v-text-field class="mt-n9 mt-md-3" label="Applicant First Name"  outlined dense>
                                  </v-text-field>
                                 </v-col>    

                             <v-col cols="12"   sm="12" md="4">    
                                  <v-text-field class="mt-n9 mt-md-3" label="Applicant Middle Name"  outlined dense>
                                  </v-text-field>
                                 </v-col>    
                              </v-row>



                              <v-row class="mt-5 mt-md-n5">
                                 <v-col class="mt-n5" cols="12"   sm="12" md="3">
                                    

                                    <v-text-field class="mt-1 mt-md-3" label="Relative Last Name"  outlined dense>
                                </v-text-field>

                                   </v-col>    

                               <v-col cols="12"   sm="12" md="3">    
                                   <v-text-field class="mt-n9 mt-md-n2" label="Relative First Name"  outlined dense>
                                </v-text-field>
                               </v-col>    

                           <v-col cols="12"   sm="12" md="4">    
                                <v-text-field class="mt-n9 mt-md-n2" label="Relative Middle Name"  outlined dense>
                                </v-text-field>
                               </v-col>    


                              </v-row>

                              <v-row class="mt-4 mt-md-n5">
                                 <v-col class="mt-n5" cols="12"   sm="12" md="3">
                                    

                                    <v-text-field class="mt-3" label="Representative Last Name"  outlined dense>
                                </v-text-field>

                                   </v-col>    

                               <v-col cols="12"   sm="12" md="3">    
                                   <v-text-field class="mt-n9 mt-md-n2" label="Representative First Name"  outlined dense>
                                </v-text-field>
                               </v-col>    

                           <v-col cols="12"   sm="12" md="4">    
                                <v-text-field class="mt-n9 mt-md-n2" label="Representative Middle Name"  outlined dense>
                                </v-text-field>
                               </v-col>    

                               
                              </v-row>


                              
                              <v-row>
                                 
                                 <v-col class="mt-n5" cols="12"   sm="12" md="3">
                                     <H4 >NAME OF CERTIFYING PHYSICIAN</H4>

                                     <v-text-field class="mt-n9 mt-md-3" label="Physician Last Name"  outlined dense>
                                  </v-text-field>

                                     </v-col>    

                                 

                             <v-col cols="12"   sm="12" md="3">    
                                  <v-text-field class="mt-n9 mt-md-3" label="Physician First Name"  outlined dense>
                                  </v-text-field>
                                 </v-col>   
                                 
                                 <v-col cols="12"   sm="12" md="2">    
                                  <v-text-field class="mt-n9 mt-md-3" label="Physician Middle Name"  outlined dense>
                                  </v-text-field>
                                 </v-col>   

                                 <v-col cols="12"   sm="12" md="2">    

                                 <v-text-field class="mt-3" label="Physician License No."  outlined dense>
                                  </v-text-field>

                                </v-col>   
                              </v-row>


                        </v-container>
                  
                </v-row>

            </v-container>
            <v-btn class="ml-md-4 mt-md-n1" id="v-btn-c" color="green" @click="e1 = 4">
                                        Continue
                                    </v-btn>
                                    <v-btn @click="e1 = 2" class="ml-2 mt-n2"> Back </v-btn> 
        </v-card-text>
      
   <!--  </v-card> -->
</v-stepper-content>




<v-stepper-content step="4">
   <!--  <v-card class="mb-12" color="grey lighten-4" > -->
        <v-card-text>
            <v-container>
              
                
                <v-row>

                        <v-container fluid>

                            <v-row>
                                 
                               

                                 <v-col cols="12"   sm="12" md="3">   
                                    <H4 >PROCESSING OFFICER</H4> 
                                     <v-text-field class="mt-3" label="Last Name"  outlined dense>
                                  </v-text-field>
                                 </v-col>    

                                    <v-col cols="12" class="mt-n12 mt-md-5"   sm="12" md="3">    
                                  <v-text-field class="mt-3" label="First Name"  outlined dense>
                                  </v-text-field>
                                 </v-col>   
                                 
                                 <v-col cols="12" class="mt-n12 mt-md-5"  sm="12" md="3">    
                                  <v-text-field class="mt-3" label="Middle Name"  outlined dense>
                                  </v-text-field>
                                 </v-col>   

                              </v-row>
                              
                              <v-row class="mt-n7">
                                
                                 <v-col cols="12"   sm="12" md="3">   
                                    <H4 >APPROVING OFFICER</H4> 
                                     <v-text-field class="mt-3" label="Last Name"  outlined dense>
                                  </v-text-field>
                                 </v-col>    

                                    <v-col cols="12" class="mt-n12 mt-md-5"   sm="12" md="3">    
                                  <v-text-field class="mt-3" label="First Name"  outlined dense>
                                  </v-text-field>
                                 </v-col>   
                                 
                                 <v-col cols="12" class="mt-n12 mt-md-5"  sm="12" md="3">    
                                  <v-text-field class="mt-3" label="Middle Name"  outlined dense>
                                  </v-text-field>
                                 </v-col>   

                              </v-row>

                              <v-row class="mt-n7">
                                
                                <v-col cols="12"   sm="12" md="3">   
                                   <H4 >ENCODER</H4> 
                                    <v-text-field class="mt-3" label="Last Name"  outlined dense>
                                 </v-text-field>
                                </v-col>    

                                   <v-col cols="12" class="mt-n12  mt-md-5"   sm="12" md="3">    
                                 <v-text-field class="mt-3" label="First Name"  outlined dense>
                                 </v-text-field>
                                </v-col>   
                                
                                <v-col cols="12" class="mt-n12 mt-md-5"  sm="12" md="3">    
                                 <v-text-field class="mt-3" label="Middle Name"  outlined dense>
                                 </v-text-field>
                                </v-col>   

                             </v-row>

                             <v-row class="mt-n5">
                                <v-col cols="12"   sm="12" md="4">   
                                   <H4 >NAME OF REPORTING UNIT(OFFICE/SECTION): <span style="color:black;" > CSWDO-PDAO </span> </H4> 
                                </v-col>   
                             </v-row>

                             <v-row class="mt-n5">
                                <v-col cols="12"   sm="12" md="3">   
                                   
                                    <v-text-field class="mt-3" label="Control Number"  outlined dense>
                                 </v-text-field>
                                </v-col>    
                             </v-row>



                             <v-row class="mt-n7"> 

                                <v-col cols="12"   sm="12" md="3">   
                                    <h3 class="ml-12">SHELTER</h3>
                                    <v-radio-group row>
                                              
                                           <v-radio class="ml-4" value="Renewal"  label="Owned"></v-radio>

                                       <v-radio value="lost" label="Renter"></v-radio>
                                   </v-radio-group>

                                </v-col>   
                                
                                <v-col cols="12" class="mt-n5 mt-md-5"  sm="12" md="3">   
                                    <v-select 
                                           
                                           outlined dense 
                                           :rules="rules"
                                               :items="['Communication', 
                                               'Conflict Resolution', 
                                               'Negotiation Skills', 'Patience', 
                                               'Trustworthiness',
                                               'Empathy',
                                               'Active listening ',
                                               'Responsive Body Language',
                                               'Self-Confidence',
                                               'Collaboration',
                                               'Creative Thinking',
                                               'Customer Service Skills',
                                               'Flexibility',
                                               'Persuasion Skills',
                                               'Charisma',
                                               'Mediation',
                                               'Networking Skills',
                                               'Conversation Skills',
                                               'Social Skills',
                                               'Teamwork Skills',
                                               'Open-Mindedness',
                                               'Humor',
                                               'Team-Building Skills',
                                               'Honesty',
                                               'Problem Solving',
        
                                               'Politeness',
                                               'Motivational Skills',    
                                               ]"
                                               label="Skills" prepend-inner-icon="mdi-account-check"
                                                required></v-select>
                                </v-col>      
                                
                                
                                <v-col cols="12"  class="mt-n9 mt-md-5"  sm="12" md="3">

                                    <v-text-field dense outlined label="Needed Skill/s"
                                           ></v-text-field>

                                </v-col>

                             </v-row>

                             <v-row class="mt-n6">
                                <v-col cols="12"  class="mt-3"  sm="12" md="3">
                                    <p class="font-weight-bold">INTERVENTION/ASSISTANCE NEEDED</p>
                                    <v-text-field class="mt-2" label="Assistive Device-PLS. Specify"  outlined dense>
                                        </v-text-field>
                                </v-col>

                                <v-col class="mt-n9 mt-md-12" cols="12"   sm="12" md="3">
   
                             <v-text-field  label="Service Received"  outlined dense>
                             </v-text-field>
                                </v-col>

                             </v-row>


                        </v-container>
                  
                </v-row>

            </v-container>

        </v-card-text>
        <v-btn                   class="mt-n2 ml-6 ml-md-4 mt-md-n2" id="v-btn-c" color="green" @click="e1 = 3">
                                        Save
                                    </v-btn>
                                    <v-btn @click="e1 = 3" class="ml-2 mt-n3"> Back </v-btn> 
 <!--    </v-card> -->
</v-stepper-content>






</v-form>

                </v-stepper-items>




            </v-stepper>
        </v-card>

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
        e1: 1,
    
    }

  }
  

    };


</script>
  
  
<style>


.centerbai{
/*     position: absolute;
  left: 50%;
  top:48%;
    
  width: 1500px;
  transform: translate(-50%,-50%);

 */
}

h4 {
    color: green;
}



</style>