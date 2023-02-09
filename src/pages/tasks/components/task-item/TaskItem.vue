<template>
  <div class="item">
    <input
      v-if="isEditing"
      class="edit-text-item"
      v-model="task.title"
      maxlength="100"
      placeholder="Write..."
    />
    <div v-else="isEditing" class="text-item">{{ task.title }}</div>
    <img
      v-if="isEditing"
      src="../../../../assets/images/save.svg"
      class="img"
      @click="isEditing = !isEditing"
    />
    <img
      v-else="isEditing"
      src="../../../../assets/images/edit.svg"
      class="img"
      @click="isEditing = !isEditing"
    />
    <img
      src="../../../../assets/images/del.svg"
      class="img"
      @click="$emit('del-task', task.id)"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
    };
  },
  props: ["task"],
  emits: ["del-task"],
};
</script>

<style>
.edit-text-item {
  height: 30px;
  width: 90%;
  padding-left: 8px;
  font-size: 17px;
  border: 1.4px solid #fff;
  border-radius: 8px;
  font-family: cursive;
  text-align: left;
  outline: none;
  margin-right: auto;
}
.text-item {
  height: 30px;
  padding-left: 8px;
  font-size: 17px;
  border: 1.4px solid #fff;
  border-radius: 8px;
  font-family: cursive;
  text-align: left;
  margin-right: auto;
}
.item {
  display: flex;
  margin: 15px;
  gap: 10px;
  align-items: center;
}
.img {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
</style>
