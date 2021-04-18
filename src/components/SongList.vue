<template>
    <div class="h-screen w-1/2 ml-auto mr-auto">
        <p class="text-4xl font-bold mt-10">Your Playlist</p>
        <div class="grid grid-cols-6 gap-2 mt-6 border-gray-700">
        <span class="font-bold"> Song: </span> {{ enterSong }}
        <span class="font-bold"> Artist: </span> {{ enterArtist }} 
        <button class="w-24 bg-bluelogo text-white hover:bg-black" @click="editButton">Edit</button>
        <button class="w-24 bg-classicblue text-white hover:bg-black" @click="deleteButton">Delete</button>
    </div>
</div>
</template>

<script>
export default {
    name: "SongList",
    props: ["enterSong", "enterArtist"],
    emits: ["edit-button", "delete-button"],
    methods: {
        editButton() {
            this.$emit("edit-button", true);
        },
        deleteButton() {
            this.$emit("delete-button", true);
        }
    }
};
</script>