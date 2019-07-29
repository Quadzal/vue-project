<template>
    <div v-if="repos.length">
        <h3 class="page-heading mb-3">En son repolar</h3>
        <div id="repos" style ="margin-bottom: 100px;" v-for="repo in repos">
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <span>{{repo.name}}</span> 
                        <a :href="repo.html_url" target = "_blank" class = "btn btn-danger"> Repoya Git</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Yıldızlar: {{repo.stargazers_count}} </span>
                        <span class="badge badge-primary">İzleyiciler: {{repo.watchers}}</span>
                        <span class="badge badge-success">Forklar:{{repo.forks}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        repos:Array
    }
}
</script>

