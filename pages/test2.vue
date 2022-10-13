<template>
  <div>
    <button id="show-modal" @click="showModal = true">Show Modal</button>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from "../components/Modal";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>