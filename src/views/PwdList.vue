<template>
    <v-app>
        <NavBar/>
      <v-data-table  :headers="headers" :items="desserts" sort-by="calories"  class="rounded-x  elevation-10" 
        :search="search">
  
        <template v-slot:[`item.name`]="{ item }">
  
        <!--   <v-avatar size="40" >
            <img v-bind:src="`/${item.image}`" alt="" class="ml-n2">
          </v-avatar>
   -->
          {{ item.name }}
  
        </template>
        
  
        <template v-slot:[`item.barangay`]="{ item }">
  
          {{item.barangay}}
  
        </template>
  
        <template v-slot:top>
          <v-toolbar flat  class=" btn-hover elevation-1">
  
  
            <v-toolbar-title>{{ msg }}</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
  
  
            <v-text-field v-model="search" outlined dense  rounded append-icon="mdi-magnify" label="Search" single-line hide-details
              ></v-text-field>
  
              
          </v-toolbar>
  
        </template>
  
      
  
  
      </v-data-table>
    </v-app>
  </template>
    
  <script>
  
  
  /* import DataTable_EventsAttended from '../components/DataTable_EventsAttended' */
  import NavBar from "../components/NavBar.vue";
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      dialog_events_attended: false,
      dialog_viewProfile: false,
  
  
  
      search: '',
      search_events: '',
  
      headers_event: [
        {
          text: 'Event Name',
          align: 'start',
          sortable: false,
          value: 'eventname',
        },
        { text: 'Date', value: 'eventdate' },
        { text: 'Event Details', value: 'eventdetails' },
        { text: 'Hours Earned', value: 'hoursearned' },
  
  
      ],
  
  
      headers: [
        /*  {
           text: 'FULL NAME',
           align: 'start',
           sortable: false,
           value: 'name',
         },
         { text: 'Email', value: 'email' },
         { text: 'Mobile Number', value: 'mobilenum' },
         { text: 'Age', value: 'age' },
         { text: 'Barangay & Purok', value: 'barangay' },
         { text: 'Actions', value: 'actions', sortable: false }, */
      ],
  
  
      desserts: [],
      editedItem_profile:[
  
      ],
      editedIndex: -1,
      editedItem: {
        name: '',
        email: '',
        age: '',
        userlevel: '',
        barangay: '',
  
      },
  
   /*    editedItem_profile: {
        name: '',
        email: '',
        age: '',
        userlevel: '',
      
  
      }, */
  
  
      defaultItem: {
        name: '',
        email: '',
        age: '',
        userlevel: '',
        barangay: '',
  
      },
    }),
  
    props: ['name'], 
  
  
    computed: {
  
      filteredItems() {
        
     return this.desserts.filter((desserts) =>
        desserts.eventdate.toLowerCase().includes(this.search_events.toLowerCase()) ||
        desserts.eventname.toLowerCase().includes(this.search_events.toLowerCase()) ||
        desserts.eventdetails.toLowerCase().includes(this.search_events.toLowerCase())
        );
  
  
  
  
      /*   let res=this.desserts.filter((item) =>
          item.eventdate.toLowerCase().includes(this.search_events.toLowerCase()),
         
        ); */
        /* eslint-disable */
       /*  console.log("res=>",res)
  
        if(res.length == 0){
          return this.desserts.filter((item) =>
          item.eventname.toLowerCase().includes(this.search_events.toLowerCase()),
         
        );
  
        
        }
  
  
        else{
          return this.desserts.filter((item) =>
          item.eventdate.toLowerCase().includes(this.search_events.toLowerCase()),
         
        );
        } */
  
      
      },
  
  
  
  
  
  
  
      total() {
        return this.filteredItems.reduce(
          (accumulator, desserts) => accumulator + desserts.hoursearned,
          0
        );
      },
  
  
      tableLength: function() {
        return this.desserts.length;
      },
    
  
  
      msg() {
        return `LIST OF PWD`
      },
  
      formTitle() {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
  
  
    },
    watch: {
      dialog(val) {
        val || this.close()
      },
      dialogDelete(val) {
        val || this.closeDelete()
      },
    },
    created() {
      this.initialize()
     
  
    },
  
    components: {
        NavBar,
      /*    DataTable_EventsAttended, */
    },
  
  
  
    methods: {
  
  /*  
      sumField(key) {
          // sum data in give key (property)
          return this.desserts.reduce((a, b) => a + (b[key] || 0), 0)
      }, */
  
  
      initialize() {
        this.desserts = [
  
        ]
  
      },
      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
  
      Events_History(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog_events_attended = true
      },
  
  
      View_Profile_Bai(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog_viewProfile = true
      },
  
      deleteItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },
      deleteItemConfirm() {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },
      close() {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete() {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      saveNavbargend() {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
  
  
  
    },
  
    mounted() {
  
  
      if (this.msg == "LIST OF PWD") {
        this.headers.push({ text: "Full Name", value: "name", align: 'start', sortable: false, }  , { text: "Mobile Number", value: "mobilenum" } , { text: "Barangay", value: "barangay" }, { text: "Disability", value: "disability" });
      }
  
     
  
    },
  
  
  }
  </script>
  
  
  <style scoped>
  
  @media screen and (max-width: 450px) {
  /*   h1 {
      font-size: 7px;
    }
    div #search {
      size: 5px;
    }
   */
  
   .imagemobile{
  
  margin-left: 30px;
  }
  
  
  
      .sinagkabai{     
        margin-left: 50px;
  }
  
  .birthdayname{
  
    margin-left: 60px;
    margin-top: -140px;
  
  }
   
  .birthdayvalue{
  
    margin-left: 60px;
  }
  
  
  .agevalue{
  
    margin-left: 60px;
  
  }
  
  
  .email_padong_education{
    margin-left: 60px;
  
  }
  
  
  }
  
  
  @media screen and (max-width:  1263px) {
  
    .hidescrollbar {
  
    overflow-y: hidden; /* Hide vertical scrollbar */
    overflow-x: hidden; /* Hide horizontal scrollbar */
  
  
  }
  
  
  /*   h1 {
      font-size: 7px;
    }
    div #search {
      size: 5px;
    }
  
   */
  
   .imagedagway{
  
    margin-left: 210px;
   }
  
      .sinagkabai_dakoscreen{
       
        margin-left: -5px;
  }
  
  
  .birthdayname{
  
    margin-left: 60px;
    margin-top: -140px;
  
  }
   
  .birthdayvalue{
  
    margin-left: 60px;
  }
  
  
  .agevalue{
  
    margin-left: 60px;
  
  }
  
  
  .email_padong_education{
    margin-left: 60px;
  
  }
  
  
  .buttonnako{
  
    margin-top: -150px;
  
  }
  
  
  }
  
  .some-style>>>.v-input__slot::before {
    border-style: none !important;
  }
  
  .centered-input>>>input {
    text-align: center
  }
  
  .btn-hover {
  
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
   
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 30px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
  }
  
  .btn-hover:focus {
    outline: none;
  }
  
  
  /* .btn-hover.color-1 {
    background-image: linear-gradient(to right, #186f94, #0e7e48, #0c8a4d, #078045);
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644);
  } */
  
  
/*   .btn-hover.color-1 {
    background-image: linear-gradient(to right, #0b5879, #076437, #0e6d3f, #078045);
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644);
  } */
  
  
  </style>
  
  
  
  