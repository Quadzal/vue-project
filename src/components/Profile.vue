<template>
    <div id="profile" v-if="profile.avatar_url">
            <div class="card card-body mb-3">   
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" :src="profile.avatar_url">
                        <a :href="profile.html_url" target="_blank" class="btn btn-danger btn-block mb-4 text-white">Profili Görüntüle</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Repo Sayısı: {{profile.public_repos}} </span>
                        <span class="badge badge-secondary">Gist Sayısı: {{profile.public_gists}} </span>
                        <span class="badge badge-success">Takipçi: {{profile.followers}} </span>
                        <span class="badge badge-info">Takip Edilen: {{profile.following}}</span>
                        <br><br>
                        <ul class="list-group">
                          <li class="list-group-item">Şirket: {{profile.company}}</li>
                          <li class="list-group-item">Website/Blog:{{profile.blog}}</li>
                          <li class="list-group-item">Yer:{{profile.location}}</li>
                          <li class="list-group-item">Ne zamandan beri üye:{{profile.created_at}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Repos :repos="repos"/>
    </div>
</template>

<script>
import Repos from "./Repos"
export default {
    name:"Profile",
    props:{
        profile:Object,
        repos:Array
    },
    components:{Repos}
}
</script>

