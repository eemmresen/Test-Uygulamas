<template>
  <div id="app">
   <h1>{{$route.params.id}} .Kullanıcı Bilgileri</h1>
    <table border="1">
   
        <tr>
            
            <td>id</td>
            <td>name</td>
            <td>username</td>
            <td>email</td>
            <td>address</td>
            <td>geo</td>
            <td>phone</td>
            <td>website</td>
            <td>company</td>
             

           
        </tr>

        <tr  >
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.username}}</td>
            <td>{{user.email}}</td>
            <td><strong>Street :</strong>  {{user.address.street}} <br/> <strong>Suite :</strong>  {{user.address.suite}} <br/> <strong>City :</strong> {{user.address.city}} <br/> <strong>Zipcode : </strong> {{user.address.zipcode}}</td>
             <td><strong>Enlem :</strong> {{user.address.geo.lat}} <br/><strong>Boylam :</strong> {{user.address.geo.lng}}</td>
            <td>{{user.phone}}</td>
            <td>{{user.website}}</td>
            <td><strong>Şirket Adı :</strong>{{user.company.name}}<br/> <strong>Slogan :</strong>{{user.company.catchPhrase}}<br/> <strong>Bs :</strong>{{user.company.bs}}</td>
            
            
          
        </tr>

      
   
</table>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
           
            user:"",
    }
  },
  components: {
    
  },
  mounted(){
        this.getdatas()
    },  
    methods:{
        
       async getdatas(){
      
const result =await fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)

const data =await result.json()
            
 this.user=data;
        
            
            
            }
    }
}
</script>
