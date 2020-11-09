<template>
  <div id="app">
 <h1>{{$route.params.id}} . Postları yazan kişi Adı :<a :href="'/profile/'+isim.id">{{isim.name}}</a></h1>

 
    <strong> <h3> Title ve Body </h3> </strong>
    <div v-for="y in detail" :key="y.id">
        title--> {{y.title}}<br>
      body  -->  {{y.body}} 
      <hr>
     <br>
    </div>

    

  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
            l:0,
            films:[],
            Posters:[],
            Genre:[],
            posts:[],
            Genre_Drama:[],
            Genre_Short:[],
            Genre_Comedy:[],
            film:"aaa",
            vardır:"",
            detail:[],
            isim:"",
    }
  },
  components: {
    
  },
  mounted(){
        this.getdatas()
    },  
    methods:{
        
       async getdatas(){
                                           
           
const result =await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${this.$route.params.id}`)

            const data =await result.json()
            data.forEach(element => {
              this.detail.push(element)

            });
            /*
           this.detail.forEach(element => {
               console.log(element.title)
           });
           */
            

const result1 =await fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)

const data1 =await result1.json()
        this.isim=data1;   
        
                    }
    
    
    
    
    
    
    }
}
</script>

