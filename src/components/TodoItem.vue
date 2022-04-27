<script setup lang="ts">
import type { TodoType } from '~/stores'
import { todosStore } from '~/stores'

const props = defineProps<{
  todo: TodoType
  done?: boolean
}>()
const store = todosStore()
const doneHandle = () => store.todoDone(props.todo.id, !props.done)

</script>

<template>
  <div
    mb-3
    p="x-4 y-2"
    w-300px
    border="~ gray-700 dark:gray-200"
    bg-transparent
    flex
    items-center
    hover:shadow-sm
    :class="props.done ? 'opacity-50' : ''"
  >
    <div
      cursor-pointer
      mr-3
      :class="props.done ? 'i-carbon-checkbox-checked' : 'i-carbon-checkbox' "
      @click.stop="doneHandle"
    />
    <div>
      {{ props.todo.content }}
    </div>
  </div>
</template>

<style scope></style>
