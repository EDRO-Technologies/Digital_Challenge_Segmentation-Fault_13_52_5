<script>
    
</script>

<button class="nav-btn {$$props.class}">
    <slot></slot>
</button>

<style>
    .nav-btn {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: transparent;
        border: none;
        color: white;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        padding: 12px;
        border: 2px solid #20CFA6;
        border-radius: 20px;
        height: 65px;
    }
    .nav-btn:hover {
        color: #20CFA6;
        font-weight: 900;
    }
    .nav-btn:active {
        transform: scale(0.9);
    }
</style>