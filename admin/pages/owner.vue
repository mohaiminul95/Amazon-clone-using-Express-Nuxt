<template>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3"></div>
                <div class="col-sm-6">
                    <div class="a-section">
                        <div class="a-spacing-top-medium"></div>
                        <h2 style="text-align: center;">Add New Owner</h2>
                        <form>
                            <!--Name-->
                            <div class="a-spacing-top-medium">
                                <label>Name</label>
                                <input type="text" class="a-input-text" style="width: 100%" v-model="name">
                            </div>

                            <!--About-->
                            <div class="a-spacing-top-medium">
                                <label>About</label>
                                <input type="text" class="a-input-text" style="width: 100%" v-model="about">
                            </div>

                            <!--Select photo-->
                            <div class="a-spacing-top-medium">
                                <label>Add Photo</label>
                                <div class="a-row a-spacing-top-medium">
                                    <label class="choosefile-button">
                                        <i class="fal fa-plus"></i>
                                        <input type="file" @change="onFileSelected">
                                        <p style="margin-top: -70px;">{{ fileName }}</p>
                                    </label>
                                </div>
                            </div>

                            <hr>
                            <!-- Button -->
                            <div class="a-spacing-top-large">
                                <span class="a-button-register">
                                    <span class="a-button-inner">
                                        <span class="a-button-text" @click="onAddOwner">Add Owner</span>
                                    </span>
                                </span>
                            </div>
                        </form>

                        <div class="a-spacing-top-medium">
                            <ul class="list-group-item">
                                <li v-for="owner in owners" :key="owner._id">{{ owner.name }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3"></div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        async asyncData({ $axios }) {
            try{
                let response = await $axios.$get('owners');
                return {
                    owners: response.owners
                }
            } catch (e) {
            }
        },
        data( ) {
            return {
                name: "",
                about: "",
                selectedFile: null,
                fileName: ""
            }
        },
        methods: {
            onFileSelected(event) {
                this.selectedFile = event.target.files[0];
                this.fileName = event.target.files[0].name;
            },
            async onAddOwner() {
                let data = new FormData();
                data.append('name', this.name);
                data.append('about', this.about);
                data.append('photo', this.selectedFile, this.selectedFile.name);
                await this.$axios.$post('owners', data);
                this.owners.push(data);
            }
        }
    }
</script>

<style scoped>
</style>