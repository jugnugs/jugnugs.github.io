<script setup lang="ts">
const { darkMode } = defineProps(['darkMode']);
</script>

<template>
    <div class="locale-changer" :class="{ darkMode }">
        <label>
            <input type="radio" v-model="$i18n.locale" value="en" />
            <span>EN</span>
        </label>
        <label>
            <input type="radio" v-model="$i18n.locale" value="ja" />
            <span>JA</span>
        </label>
    </div>
</template>

<style scoped>
.locale-changer {
    height: inherit;
    width: fit-content;
    border: 1px solid var(--th-white);
    border-radius: 50px;
    font-size: 1rem;
    display: flex;
    align-items: center;
}

.darkMode {
    border: 1px solid var(--th-black);
    color: var(--th-text-dark);
}

label {
    height: 100%;
    width: 50%;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    border-radius: 50px 0 0 50px;
    transition: 0.5s linear;
}

label:has(> input[value="ja"]) {
    border-radius: 0 50px 50px 0;
}

label:has(> input:checked) {
    color: var(--th-blue);
    background: var(--th-white);
}

.darkMode label:has(> input:checked) {
    color: var(--th-white);
    background: var(--th-black);
}

label input {
    height: 0;
    width: 0;
    visibility: hidden;
}
</style>