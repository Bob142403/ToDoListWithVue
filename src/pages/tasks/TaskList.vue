<template>
  <div class="title">To Do</div>
  <CreateTask @add-task="(title) => store.addTask(title)"></CreateTask>
  <template v-for="task in store.tasks">
    <TaskItem :task="task" @del-task="(id) => store.delTask(id)"></TaskItem>
  </template>
</template>

<script>
import CreateTask from "./components/create-task/CreateTask.vue";
import TaskItem from "./components/task-item/TaskItem.vue";
import { useTaskStore } from "../../store/store";

export default {
  components: {
    CreateTask,
    TaskItem,
  },
  setup() {
    const store = useTaskStore();
    return {
      store,
    };
  },
};
</script>
<style scoped>
.title {
  user-select: none;
  width: 100%;
  height: 50px;
  font-weight: 700;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: cursive;
}
</style>
