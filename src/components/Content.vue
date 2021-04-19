<template>
  <div class="h-screen w-2/3 ml-auto mr-auto">
    <form @submit.prevent="checkForm">
      <div class="ml-auto mr-auto w-2/3 grid grid-cols-2 mt-6 gap-2">
        <p v-if="errors" class="text-red-600 text-left ml-2">*This fill can't be blank!</p>
        <p v-if="errors" class="text-red-600 text-left ml-2">*This fill can't be blank!</p>
        <input type="text" class="input" id="enterSong" placeholder="Enter your favourite song" v-model="enterSong"/>
        <input type="text" class="input" id="enterArtist" placeholder="Enter artist's name" v-model="enterArtist"/>
        <button type="submit" class="h-8 justify-self-end w-24 bg-bluelogo text-white border-4 border-bluelogo hover:bg-classicblue hover:border-bluelogo">Submit</button>
        <button @click="closeContent" class="h-8 justify-slef-start w-24 bg-classicblue text-white border-4 border-classicblue hover:bg-bluelogo hover:border hover:border-classicblue">Cancel</button>
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
    emits: ["submit-song", "close"],
    data() {
		return {
			enterSong: this.song,
			enterArtist: this.artist,
			errors: null,
		};
	},
  methods: {
    closeContent() {
      this.$emit("close", true);
    },
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
				alert("This song has added to your playlist!");
			}
		},
    submitForm() {
			let songLists = {
				song: this.enterSong,
				artist: this.enterArtist,
			};
			this.$emit("submit-song", songLists);
		},
	},
};
</script>