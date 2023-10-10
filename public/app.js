const app = Vue.createApp({
    data() {
        return {
            newProduct: {
                name: '',
                price: '',
                ket: ''
            },
            products: []
        };
    },
    methods: {
        addProduct() {
            if (this.newProduct.name && this.newProduct.price && this.newProduct.ket) {
                this.products.push({ name: this.newProduct.name, price: this.newProduct.price, ket: this.newProduct.ket });
                this.newProduct.name = '';
                this.newProduct.price = '';
                this.newProduct.ket = '';

            }
        },
        editProduct(index) {
            const updatedName = prompt('Nama Produk Baru:', this.products[index].name);
            const updatedPrice = prompt('Harga Produk Baru (IDR):', this.products[index].price);
            const updateket = prompt('keterangan:', this.products[index].ket);


            if (updatedName !== null && updatedPrice !== null && updateket!== null ) {
                this.products[index].name = updatedName;
                this.products[index].price = updatedPrice;
                this.products[index].ket = updateket;

            }
        },
        removeProduct(index) {
            const confirmDelete = confirm('Apakah Anda yakin ingin menghapus produk ini?');

            if (confirmDelete) {
                this.products.splice(index, 1);
            }
        }
    }
});

app.mount('#app');
