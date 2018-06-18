const inputs = document.querySelectorAll('input');

function updateProperty() {
    const prefix = this.dataset.prefix || '';
    const suffix = this.dataset.suffix || '';
    //console.log(suffix);
    //console.log(this.value);
    //console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, prefix + this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', updateProperty)); // to samo co: (function(input) {input.addEventListener('change', updateProperty)})
inputs.forEach(input => input.addEventListener('mousemove', updateProperty));