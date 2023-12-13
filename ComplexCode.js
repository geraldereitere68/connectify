/*
Filename: ComplexCode.js

Description: This complex JavaScript code demonstrates an elaborate implementation of a task scheduler. It allows users to schedule tasks with various priorities and due dates, and provides functionality to sort and manage the tasks efficiently.

Author: John Doe

Date: September 15, 2021
*/

// Define a Task class to represent each individual task
class Task {
  constructor(id, description, priority, dueDate) {
    this.id = id;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }
}

// Define the TaskScheduler class to manage tasks and provide functionality
class TaskScheduler {
  constructor() {
    this.tasks = []; // Array to store all tasks
  }

  // Method to add a new task
  addTask(task) {
    this.tasks.push(task);
  }

  // Method to sort tasks by priority and due date
  sortTasks() {
    this.tasks.sort((a, b) => {
      if (a.priority !== b.priority) {
        return b.priority - a.priority; // Sort by priority descending
      } else {
        return new Date(a.dueDate) - new Date(b.dueDate); // Sort by due date ascending
      }
    });
  }

  // Method to remove a task with the given ID
  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  // Method to get the next highest priority task
  getNextTask() {
    if (this.tasks.length === 0) {
      return null; // No tasks remaining
    }
    return this.tasks[0];
  }

  // Method to print all tasks
  printTasks() {
    this.tasks.forEach((task) => {
      console.log(`
        Task ID: ${task.id}
        Description: ${task.description}
        Priority: ${task.priority}
        Due Date: ${task.dueDate}
      `);
    });
  }
}

// Usage:
const scheduler = new TaskScheduler();

const task1 = new Task(1, "Complete project report", 2, "2021-09-20");
const task2 = new Task(2, "Prepare presentation slides", 1, "2021-09-18");
const task3 = new Task(3, "Send important emails", 3, "2021-09-22");

scheduler.addTask(task1);
scheduler.addTask(task2);
scheduler.addTask(task3);

scheduler.sortTasks();
scheduler.printTasks();

console.log("Next task to be done:");
console.log(scheduler.getNextTask());

scheduler.removeTask(2);

console.log("\nTasks after removing Task ID 2:");
scheduler.printTasks();
