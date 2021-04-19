<template>
    <div class="h-auto w-1/2 ml-auto mr-auto">
        <div class="grid grid-cols-4 gap-2 mt-6">
            <span> {{ enterSong }}  </span> 
            <span> {{ enterArtist }}  </span> 
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