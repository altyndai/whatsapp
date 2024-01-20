<template>
  <div class="chats__body">
    <div class="chat-list chat__page">
      <div class="chat flex justify-content-between">
        <div class="flex align-items-center">
          <div class="chat-avatar">
            <img :src="chat.avatarUrl" alt="Chat Avatar">
          </div>
          <div class="chat-details">
            <h2>{{ chat.name }}</h2>
          </div>
        </div>
        <div class="icons">
          <Dropdown v-model="selectedCallType" placeholder="Select Call" option-label="name" :options="cities" class="callDropdown w-full md:w-14rem">
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex align-items-center justify-content-center w-full">
                <i :class="slotProps.value.name" class="mr-3 text-2xl" />
              </div>
            </template>
            <template #option="{option}">
              <div class="flex align-items center justify-content-center w-full">
                <i :class="option.name" class="mr-3 text-2xl" />
              </div>
            </template>
          </Dropdown>
          <i class="pi pi-search icon" style="font-size: 1.5rem" />
          <i class="icon">
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              class=""
              version="1.1"
              x="0px"
              y="0px"
              enable-background="new 0 0 24 24"
              xml:space="preserve"
            ><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z" /></svg>
          </i>
        </div>
      </div>
    </div>
    <div class="flex justify-content-center align-items-center">
      <div>{{ chat.messagesMy }}</div>
    </div>
    <div class="chat__page">
      <div class="icon chat__page-details">
        <i class="pi pi-plus mr-2 cursor-pointer" style="font-size: 2rem" />
        <img class="w-2rem cursor-pointer" src="/happiness.png" alt="">
        <span class="p-input-icon-left">
          <InputText v-model="value1" class="input chat-input" placeholder="Введите сообщение" />
        </span>
        <i class="pi pi-microphone" style="font-size: 2rem" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useDataBaseStore } from '~/stores/database'

const { params } = useRoute()
definePageMeta({
  layout: 'functional'
})

const chat = ref({
  userId: 0,
  id: 0,
  name: '',
  lastMessage: '',
  avatarUrl: '',
  messagesMy: [],
  messagesAnother: []
})
const selectedCallType = ref({ name: 'pi pi-video', icon: 'pi pi-video', code: 'pi pi-video' })
const cities = ref([
  { name: 'pi pi-video', icon: 'pi pi-video', code: 'pi pi-video' },
  { name: 'pi pi-user', icon: 'pi pi-user', code: 'pi pi-user' }
])
const dataBaseStore = useDataBaseStore()
const value1 = ref(null)

const chatList = ref([...dataBaseStore.chatList])
const index = ref(0)
index.value = chatList.value.findIndex(el => +params?.id === el.id)
Object.assign(chat.value, chatList.value.splice(index.value, 1))
Object.assign(chat.value, chat.value[0])
</script>
