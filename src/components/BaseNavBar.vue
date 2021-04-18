<template>
    <div> 
    <div class="bg-bluelogo">
        <ul class="bg-bluelogo overflow-hidden m-0 p-0 list-none">
        <router-link to='/song'><li class="float-right bg-bluelogo inline-block mt-0 nav">Songs List</li></router-link>
        <router-link to='/'><li class="float-right bg-bluelogo inline-block mt-0 nav">Home</li></router-link>
        </ul>
    </div>
</div>
</template>
<script>
export default {
name:"BaseNavBar"
}
</script>
