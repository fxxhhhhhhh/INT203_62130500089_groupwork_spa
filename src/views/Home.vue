<template>
  <div class="justify-items-center">
  <base-nav-bar></base-nav-bar>
  <p class="text-4xl font-bold mt-10">Please enter your fav song!</p>
  <Content @submit-song="addNewSong"></Content>
</div>
</template>

<script>
import Content from '../components/Content.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    Content
  },
  data(){
    return{
      url:"http://localhost:3000/songLists",
      songLists:[]
    };
  },
  methods: {
    async fetchSong() {
			const res = await fetch(this.url);
			const data = await res.json();
			return data;
      },
    async addNewSong(addNewSong) {
			const res = await fetch(this.url, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					song: addNewSong.song,
					artist: addNewSong.artist,
				}),
			});
      const data = await res.json();
			this.song = [...this.song, data];
  }
},
  async created() {
    this.songLists = await this.fetchSong();
  }
};

</script>