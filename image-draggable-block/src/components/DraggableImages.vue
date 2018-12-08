<template>
    <div id="draggable-block">
        <vddl-list class="img-block"
            :list="imgList"
            :inserted="handleInserted"
            :dragover="handleDragover"
            :drop="handleDrop"
        >
            <vddl-draggable class="img-box" v-for="(item, index) in imgList" 
                :key="item.id"
                :draggable="item"
                :index="index"
                :wrapper="imgList"
                effect-allowed="move"
                :selected="selectedEvent"
                :dragstart="handleDragstart"
                :dragend="handleDragend"
                :canceled="handleCanceled"
                :moved="handleMoved"
            >
                <img :src="item.src">
            </vddl-draggable>
            <vddl-placeholder class="placeholder"></vddl-placeholder>
        </vddl-list>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selected: null,
            imgList: [
                {
                    id: 1,
                    src: '../../static/img-1.jpg'
                },
                {
                    id: 2,
                    src: '../../static/img-2.jpg'
                },
                {
                    id: 3,
                    src: '../../static/img-3.jpg'
                },
                {
                    id: 4,
                    src: '../../static/img-4.jpg'
                }
            ]
        }
    },
    methods: {
        selectedEvent(item) {
            this.selected = item
        },
        handleDragstart() {
        },
        handleDragend() {
        },
        handleCanceled() {
        },
        handleInserted() {
        },
        handleDrop(data) {
            console.log(data)
            const { index, list, item } = data
            item.id = new Date().getTime()
            list.splice(index, 0, item)      
        },
        handleMoved(item) {
            const { index, list } = item
            list.splice(index, 1)
        },
        handleDragover() {
        }
    }
}
</script>

<style lang="css">
    .img-block {
        display: flex;
        width: 800px;
    }
    .img-block .img-box {
        width: 200px;
        height: 200px;
        margin: 20px;
    }
    .img-block .placeholder {
        width: 1px;
        height: 200px;
        display: block;
        border-radius: 50%;
        border: 1px solid grey;
    }
</style>