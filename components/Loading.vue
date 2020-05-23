<template>
   <b-loading :is-full-page="isFullPage" :active.sync="isLoading" :can-cancel="true">
        <b-icon
            pack="fas"
            icon="sync-alt"
            size="is-large"
            custom-class="fa-spin">
        </b-icon>
    </b-loading>
</template>

