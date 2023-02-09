<template>
  <div class="create">
    <input placeholder="Title..." class="input" v-model="title" />
    <div class="create-task" @click="addTask">Add Item</div>
  </div>
</template>

<script>
export default {
  data() {
    return { title: "" };
  },
  methods: {
    addTask() {
      this.$emit("add-task", {
        title: this.title,
        id: new Date().toISOString(),
      });
      this.title = "";
    },
  },
  emits: ["add-task"],
};
</script>

<style scoped>
.input {
  border-radius: 8px;
  border: 1.4px solid #001aff;
  height: 30px;
  flex-grow: 1;
  margin: 10px;
  padding-left: 8px;
  font-size: 17px;
  outline: none;
}
.create {
  padding: 10px;
  display: flex;
}
.create-task {
  border-radius: 8px;
  color: #001aff;
  flex-basis: 80px;
  margin: 10px 10px 10px 0;
  border: 1.2px solid #001aff;
  align-items: center;
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
}
</style>
