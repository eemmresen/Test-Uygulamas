<template>
  <div id="app">
  
  <router-link to="/"></router-link>
  <router-link to="/post/:id"></router-link>
  <router-link to="/profile/:id"></router-link>

   

    
    <router-view ></router-view>

    
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
    }
  },
  components: {
    
  },
  mounted(){
        this.getdatas()
    },  
    methods:{
        
       async getdatas(){
                                           
         
const result =await fetch(`https://jsonplaceholder.typicode.com/posts`)

            const data =await result.json()
            
            data.forEach(element => {
              this.posts.push(element)

            });
            


        
                    }
    }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
