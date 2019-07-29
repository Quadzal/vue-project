<template>
    <div>
        <nav class="navbar navbar-dark bg-danger mb-3">
        <div class="container">
            
            <a href="/" class = "navbar-brand">Github Kullanıcı Bulma</a>
        </div>
    </nav>
    <div class="container searchContainer">
        <div class="search card card-body">
            <h3>Github Kullanıcılarını Arayın</h3>
            <p class="lead">
                Bir kullanıcı adı girin ve kullanıcının bilgilerine ulaşın!
            </p>
            <form v-on:submit.prevent="getProfile">
                <input type="text" name="githubname" class = "form-control" placeholder="Github Kullanıcı adı" v-model="username">
                <br>
                <button type = "submit" class ="btn btn-danger">Ara</button>
            </form>
            
        </div>
        <br>
        <Profile :profile="profile" :repos="repos"/>
    </div>
    </div>
</template>


<script>
import Profile from "./Profile"
export default {
    name:"UserList",
    data(){
        return{
            profile:{},
            username:"",
            repos:[]
        }
    },
    methods:{
        getProfile(){
            fetch("https://api.github.com/users/" + this.username)
            .then(response => {return response.json()})
            .then(users => this.profile = users);

            fetch("https://api.github.com/users/" + this.username + "/repos")
            .then(response => {return response.json()})
            .then(repos => this.repos = repos);
            
        }
    },
    components:{Profile}
};
</script>

