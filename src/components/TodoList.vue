<template>
    <div>
      <h1>Todo List (ovo se za sad vidi posvuda diokan)</h1>
      <form @submit.prevent="addTask">
        <input v-model="newTask" type="text" placeholder="Enter task" required />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <span :class="{ completed: task.completed }">
            {{ task.text }}
          </span>
          <button @click="toggleComplete(task.id, task.completed)">
            {{ task.completed ? "Undo" : "Complete" }}
          </button>
          <button @click="deleteTask(task.id)">Delete</button>
          <button @click="editTask(task.id, task.text)">Edit</button>
        </li>
      </ul>
      <div v-if="editingTaskId">
        <h2>Edit Task</h2>
        <form @submit.prevent="saveTask">
          <input v-model="editingTaskText" type="text" required />
          <button type="submit">Save</button>
          <button @click="cancelEdit">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
  } from "firebase/firestore";
  import { ref, onMounted } from "vue";
  import { db } from "../firebase/index";
  
  export default {
    setup() {
      const newTask = ref("");
      const tasks = ref([]);
      const editingTaskId = ref(null);
      const editingTaskText = ref("");
  
      // Fetch tasks from Firestore
      const fetchTasks = async () => {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        tasks.value = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      };
  
      // Add a new task
      const addTask = async () => {
        await addDoc(collection(db, "tasks"), {
          text: newTask.value,
          completed: false,
        });
        newTask.value = "";
        fetchTasks();
      };
  
      // Delete a task
      const deleteTask = async (id) => {
        await deleteDoc(doc(db, "tasks", id));
        fetchTasks();
      };
  
      // Toggle task completion
      const toggleComplete = async (id, completed) => {
        await updateDoc(doc(db, "tasks", id), { completed: !completed });
        fetchTasks();
      };
  
      // Edit a task
      const editTask = (id, text) => {
        editingTaskId.value = id;
        editingTaskText.value = text;
      };
  
      const saveTask = async () => {
        if (editingTaskId.value) {
          await updateDoc(doc(db, "tasks", editingTaskId.value), {
            text: editingTaskText.value,
          });
          editingTaskId.value = null;
          editingTaskText.value = "";
          fetchTasks();
        }
      };
  
      const cancelEdit = () => {
        editingTaskId.value = null;
        editingTaskText.value = "";
      };
  
      // Fetch tasks on component mount
      onMounted(fetchTasks);
  
      return {
        newTask,
        tasks,
        addTask,
        deleteTask,
        toggleComplete,
        editTask,
        saveTask,
        cancelEdit,
        editingTaskId,
        editingTaskText,
      };
    },
  };
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>
  