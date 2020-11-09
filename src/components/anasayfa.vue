<template>
  <div id="app">
   
   <h1>Tablo</h1>

       <div   v-if="show" >
    <p> Title : <input  type="text" v-model="mesaj.title" ></p>    
    <p>  Body : <input  type="text" v-model="mesaj.body" ></p>

   
   <input type="button" @click="kullaniciDuzenle(mesaj.id)" value="Güncelle">
   <input type="button" @click="kapa()" value="kapa">
    </div>


<!---------------------------------------------------------------------->

  <div   v-if="show1" >
    <strong><p>Simek istediğinize emin misin ?</p></strong>
   
    <p> Title :  <label  >{{mesaj.title}}</label></p> 
    <p>  Body :  <label  >{{mesaj.body}}</label></p>

   
   <input type="button" @click="kullanicisil(mesaj.id)" value="Evet">
   <input type="button" @click="kapa1()" value="Hayır">
    </div>

<!---------------------------------------------------------------------->
    <table border="1">
   
        <tr>
            
            <td>id</td>
            <td>User id</td>
            <td>Title</td>
            <td>Body</td>
            
        </tr>

        <tr v-for="y in posts" :key="y.id" >
            <td>{{y.id}}</td>
            <td>{{y.userId}}</td>
            <td>{{y.title}}</td>
            <td>{{y.body}}</td>
            <td><a :href="'/post/'+y.userId">detay</a></td>

            <td><a href="javascript:" @click="eminmisin(y)">sil</a></td>

            <td><a href="javascript:" @click="göster(y)">düzenle </a></td>
        </tr>

      
   
</table>
  </div>
</template>

<script>





export default {
  name: 'App',
  data(){
    return{
            show:false,
            show1:false,
            posts:[],
            mesaj:"",
            
            kullaniciModal:true,
            
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

                    },
            göster (y){
            //const kullanici = this.posts.find(x=>x.id == index);
            this.show=true
            this.mesaj=y
            
            //console.log(y.body)
            },
            
            kapa(){
                this.show=false      
            },
        kullaniciDuzenle(index) {
          const degisken = this.posts.find(x=>x.id == index);
            degisken.title=this.mesaj.title
            degisken.body=this.mesaj.body
           this.show=false 
           
           
        },
        ///------------------------------------Silme KIsmı-----------------------------------------
        eminmisin(index){
          this.mesaj=index
          this.show1=true
        },
            kapa1(){
                this.show1=false      
            },

            kullanicisil(index){
            
             this.posts.splice(index, 1)
             this.show1=false  
              
            }

    }
}

</script>

<style >



 .modal {
          background-color: rgba(0, 0, 0, 0.7);
      }
.lll{
  width: 150px;

}

</style>

