import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", {
  state: () => {
    return { tasks: [] };
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
  actions: {
    delTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    addTask(task) {
      this.tasks.push({ title: task.title, id: task.id });
    },
  },
});
