import { defineStore } from 'pinia'

export interface TodoType {
  id: number
  content: string
}

export const todosStore = defineStore('todos', {
  state: () => {
    return {
      todos: [] as TodoType[],
      doneTodos: [] as TodoType[],
    }
  },
  actions: {
    addTodo(content: string) {
      this.todos.push({
        id: this.todos.length + 1,
        content,
      })
    },

    todoDone(id: number, doneOrUndone: boolean) {
      const todos = doneOrUndone ? this.todos : this.doneTodos
      const otherTodos = doneOrUndone ? this.doneTodos : this.todos
      const idx = todos.findIndex(todo => todo.id === id)
      if (idx !== -1) {
        otherTodos.unshift(todos[idx])
        otherTodos.sort((a, b) => a.id - b.id)
        todos.splice(idx, 1)
      }
    },
  },
})
