<template>
  <div>
      <base-nav-bar></base-nav-bar>
      <p class="text-4xl font-bold mt-10">Your Playlist</p>
      <div class="h-auto w-1/2 ml-auto mr-auto grid grid-cols-4 mt-6">
        <span class="font-bold">Song</span>
        <span class="font-bold">Artist</span>
    </div>
      <div v-for="s in songLists" :key="s.id" >
          <SongList :enterSong="s.song"  :enterArtist="s.artist" @click="selectedSong(s)" @edit-button="openContent" @delete-button="deleteSong(s.id)">   </SongList> 
      </div>
      <div>
         <Content v-if="addClick" @close="changeAddSong"  @submit-song="addNewSong"></Content>
         <Content v-if="editClick" @close="changeEditSong"  :name="currentSong.song" :artist="currentSong.artist" @submit-song="editSong"></Content>
      </div>
      
 </div>

</template>
<script>
import BaseNavBar from "@/components/BaseNavBar.vue"
import SongList from '@/components/SongList.vue';
import Content from '@/components/Content.vue';

export default {
  emits: ["close-content"],
  props: ["addClick"],
  components:{
    BaseNavBar,
    SongList,
    Content
  },
  data() {
    return {
      url: "http://localhost:3000/songLists",
      songLists: [],
      currentSong: [],
      editClick: false
    };
  },
  methods: {
    changeAddSong(obj) {
      this.$emit("close-content", obj);
    },
    changeEditSong(obj) {
      this.editClick = !obj;
    },
    async fetchSong() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
    selectedSong(songLists) {
      this.currentSong = songLists;
    },
    async deleteSong(id) {
      const res = await fetch(`${this.url}/${id}`, {
        method: "DELETE",
      });
      res.status === 200 ? (this.songLists = this.songLists.filter((s) => s.id !== id)) : alert("Something went wrong. You can't delete song.");
      this.currentSong = this.songLists[this.songLists.length - 1];
    },
    openContent(obj) {
      this.editClick = obj;
    },
    async editSong(editSong) {
      const res = await fetch(`${this.url}/${this.currentSong.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          song: editSong.song,
          artist: editSong.artist
        }),
      });
      const data = await res.json();
      this.songLists = this.songLists.map((i) => (i.id === data.id ? {...i, song: data.song, artist: data.artist} : i));
      this.currentSong.song = editSong.song;
      this.currentSong.artist = editSong.artist;
    },
   
  } ,
  async created() {
      this.songLists = await this.fetchSong();
      this.currentSong = await this.songLists[0];
    }
}
</script>
