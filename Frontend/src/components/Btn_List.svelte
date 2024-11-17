<script> 
    import Button from "./Button.svelte";
</script>

<div class="btn-list">
    <Button>Личный кабинет</Button>
    <Button class="ml-5" >Актуальные мероприятия</Button>
    <Button class="ml-9">На взлёт!</Button>
    <Button class="ml-[85px]">Меры поддержки</Button>
    
</div>

<style>
    .btn-list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        position: fixed; 
        top: 105px;
        left: 143px;
        }
</style>