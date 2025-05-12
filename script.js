<script>
    function openTab(evt, tabId) {
        const tabContents = document.querySelectorAll('.tab-content');
        const tabButtons = document.querySelectorAll('.tab-button');

        // Remove 'active' class from all contents and buttons
        tabContents.forEach((content) => content.classList.remove('active'));
        tabButtons.forEach((button) => button.classList.remove('active'));

        // Add 'active' class to the clicked tab and the respective content
        document.getElementById(tabId).classList.add('active');
        evt.currentTarget.classList.add('active');
    }
</script>
