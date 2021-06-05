## A. Pengenalan Projek
<p align="center">
  <a href="">
    <img src="https://i.ibb.co/n1SB8bM/scrap-Logo.png" alt="LogoScraptify" width=240 height=80>
  </a>
  <h3 align="center">Scraptify - Situs Jual Beli Barang Bekas Antar Mahasiswa IPB</h3>
</p>

**Paralel: 1**

**Kelompok: 3**

**Anggota:**
  * Falih Alwana Yasril (G64190067) - **Software Tester**
  * Muhammad Alfarizhi (G64190087) - **UI/UX Designer**
  * Febri Bawahir (G64190096) - **Backend Developer**
  * Kreshna Bayu Ananta Phasya (G64190098) - **Frontend Developer**

**Asisten Praktikum:** 
 *  Indah Puspita
 *  Qoriatul Khairunnisa
 
 **Deskripsi Aplikasi:**
  * Scraptify merupakan aplikasi *e-commerce* sederhana yang ditujukan untuk mahasiswa IPB. (ntar ditambah)


## B. User Analysis
  * User story
    1. Sebagai pengguna yang telah log out, agar dapat menggunakan aplikasi secara personal, saya dapat mengetikkan alamat email dan kata sandi saya untuk masuk ke aplikasi. 

    2. Sebagai mahasiswa yang membutuhkan barang tertentu, saya dapat login ke situs dan melihat-lihat barang yang dijual lalu membelinya.

    3. Sebagai pembeli, agar dapat melakukan pembayaran, saya dapat menentukan metode pembayaran.

    4. Sebagai pembeli, agar barang yang didapat terjamin kualitasnya, saya dapat memilih untuk mengonfirmasi barang atau mereturn.

    5. Sebagai penjual, agar dapat menjelaskan produk yang akan dijual, saya dapat menuliskan harga serta deskripsi barang yang akan saya jual.

    6. Sebagai pengguna, agar dapat melakukan negosiasi barang yang akan saya dibeli, saya dapat melihat kontak penjual.

    7. Sebagai pengguna, agar memudahkan saya mencari barang yg saya cari, saya dapat memilih kategori barang yg saya cari.

    8. Sebagai pengguna, agar dapat mencari barang spesifik, saya dapat menggunakan fitur search.

    9. Sebagai pengguna, agar dapat memastikan bahwa akun saya up-to-date, saya dapat mengganti data akun saya.

## C. Spesifikasi teknis lingkungan pengembangan

**Software:**
  * Operating System: Windows 10
  * Text Editor: Visual Studio Code
  * Framework: React.js
  * Library: Bootstrap 
  * Database: MongoDB Atlas

**Hardware:**
  * Processor: Intel Core i5-8300H 
  * Memory: 16GB
  * Graphics Card: Nvidia GTX 1050 Mobile
  * Storage: 1TB

**Tech Stack:**
 * Frontend: ReactJS
 * Backend: NodeJS & ExpressJS
 * Database: MongoDB 

## D. Hasil dan pembahasan 
  * Use case diagram
    1. Pengguna Action
      <p align="center">
        <img src="https://i.ibb.co/SvX6xC8/scraptify-usecase-diagram-PENGGUNA-ACTION.jpg" alt="scraptify-usecase-diagram-PENGGUNA-ACTION" border="0">
      </p>
    2. Admin Action
      <p align="center">
        <img src="https://i.ibb.co/hWVMTbw/scraptify-usecase-diagram-ADMIN-ACTION.jpg" alt="scraptify-usecase-diagram-ADMIN-ACTION" border="0">
      </p>
    3. Product Action - Proses Menjual Barang
      <p align="center">
        <img src="https://i.ibb.co/HqQvkgJ/scraptify-usecase-diagram-PRODUCT-ACTION.jpg" alt="scraptify-usecase-diagram-PRODUCT-ACTION" border="0">
      </p>
    4. Cart Action - Proses Membeli Barang
      <p align="center">
        <img src="https://i.ibb.co/kyGBHyH/scraptify-usecase-diagram-CART-ACTION.jpg" alt="scraptify-usecase-diagram-CART-ACTION" border="0">
      </p>
    5. Order Action - Proses Menyelesaiankan Pembelian Barang
      <p align="center">
        <img src="https://i.ibb.co/DQsRP5k/scraptify-usecase-diagram-ORDER-ACTION.jpg" alt="scraptify-usecase-diagram-ORDER-ACTION" border="0">
      </p>

  * Activity diagram 
  * Class diagram 
  * Entity Relationship Diagram 
  * Arsitektur sistem
                                                                                                                               
  * Fungsi utama yang dikembangkan
    * Pembeli dapat membuat order barang tertentu yang dapat diterima oleh penjual. Penjual dapat mengirim barang yang dipesan dan penjual mengkonfirmasi pembelian.
  * Fungsi CRUD
    * Create:
      1. Penjual dapat memposting barang baru
      2. Pembeli dapat membuat order barang
    * Read:
      1. Semua pengguna dapat melihat barang yang tersedia
      2. Semua pengguna dapat melihat detail barang
    * Update:
      1. Semua pengguna dapat mengubah data diri
      2. Penjual dapat mengubah deskripsi barang
    * Delete: 
      1. Penjual dapat menghapus barang
      2. Admin dapat menghapus order dan barang
    

## E. Hasil implementasi 
  * Screenshot sistem 
    * Homepage
    <p align="center">
      <img src="https://i.ibb.co/KrVPBYC/home.jpg" alt="HomePage" width=500 height=1000 align="center">
    </p>
    
    * Profile page
     <p align="center">
      <img src="https://i.ibb.co/TgW4w15/profile.jpg" alt="ProfilePage" width=500 height=400 align="center">
    </p>
    
    * Item Page
     <p align="center">
      <img src="https://i.ibb.co/jTL0xyG/item.jpg" alt="CartPage" width=500 height=400 align="center">
    </p>
    
    * Page Keranjang
     <p align="center">
      <img src="https://i.ibb.co/HKg1nbx/cart.jpg" alt="CartPage" width=500 height=400 align="center">
    </p>
    
  * Link aplikasi: (Server harus dinyalakan agar backend website berfungsi)
    * Website: https://scraptify.herokuapp.com/ 
    * Server: https://scraptify-server.herokuapp.com/

## F. Testing (Test cases)

## G. Saran untuk pengembangan selanjutnya

