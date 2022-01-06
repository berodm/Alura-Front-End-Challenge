const colorPicker = document.querySelector('[data-color-picker-button]');
const editorColorFrame = document.querySelector('[data-color-frame]');

colorPicker.addEventListener('input', () => {
    editorColorFrame.style.backgroundColor = colorPicker.value;  
})