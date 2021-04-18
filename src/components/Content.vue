<template>
  <div class="h-screen w-2/3 ml-auto mr-auto">
    <form @submit.prevent="checkForm">
      <div class="grid grid-cols-3 gap-2 mt-6 ml-20 -mx-10">
        <input
          type="text"
          class="input"
          id="enterSong"
          placeholder="Enter your favourite song"
          v-model="enterSong"
        />
        <input
          type="text"
          class="input"
          id="enterArtist"
          placeholder="Enter artist's name"
          v-model="enterArtist"
        />
        <button
          type="submit"
          class="w-24 bg-bluelogo text-white hover:bg-classicblue"
        >
          Submit
        </button>
        <p v-if="errors" class="text-red-600 text-left ml-2">*This fill can't be blank!</p>
        <p v-if="errors" class="text-red-600 text-left ml-2">*This fill can't be blank!</p>
      </div>
    </form>
    
	
  </div>
</template>

<script>
const constraints = {
	enterSong: {
		presence: true,
	},
	enterArtist: {
		presence: true,
	},
};
export default {
    name: "Content",
    props: ["song", "artist"],
    emits: ["enter-song"],
    data() {
		return {
			enterSong: this.song,
			enterArtist: this.artist,
			errors: null,
		};
	},
    methods: {
		checkForm() {
			var validate = require("validate.js");
			this.errors = validate(
				{
					enterSong: this.enterSong,
					enterArtist: this.enterArtist,
				},
				constraints
			);
            if (this.errors) {
				console.log(this.errors);
			} else {
				this.submitForm();
				alert("This song is already in your playlist. \nPlease enter another song.");
			}
		},
        submitForm() {
			let songList = {
				song: this.enterSong,
				artist: this.enterArtist,
			};
			this.$emit("submit-song", songList);
		},
	},
}
</script>