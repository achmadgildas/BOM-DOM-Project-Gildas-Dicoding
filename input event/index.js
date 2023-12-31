document.addEventListener('DOMContentLoaded', function () {
    const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;
   //event OnInput dan menampilkan jumalah karekater maksimal
    document.getElementById('inputNama').addEventListener('input', function () {
        const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
        const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;
        
        console.log('jumlahKarakterDiketik: ', jumlahKarakterDiketik);
        console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);
        const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();
        
        if (sisaKarakterUpdate === 0) {
          document.getElementById('sisaKarakter').innerText = 'Batas maksimal tercapai!';
        } else if (sisaKarakterUpdate <= 5) {
          document.getElementById('notifikasiSisaKarakter').style.color = 'red';
        } else {
          document.getElementById('notifikasiSisaKarakter').style.color = 'black';
        }
      });

    //event OnFocus, menampilkan sisa karakter
      document.getElementById('inputNama').addEventListener('focus', function () {
        console.log('inputNama: focus');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
      });

    //event OnBlur, kebalikan dari OnFocus, meng-hidden sisa karakter ketika berpindah input 
    document.getElementById('inputNama').addEventListener('blur', function () {
      console.log('inputNama: blur');
      document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
    });

    //event OnChange, salah satu fungsinya untuk input captcha
    document.getElementById('inputCaptcha').addEventListener('change', function () {
      console.log('inputCaptcha: change');
      const inputCaptcha = document.getElementById('inputCaptcha').value;
      const submitButtonStatus = document.getElementById('submitButton');
      if (inputCaptcha === 'PRNU') {
        submitButtonStatus.removeAttribute('disabled');
      } else {
        submitButtonStatus.setAttribute('disabled', '');
      }
    });

    document.getElementById('formDataDiri').addEventListener('submit', function (event) {
      const inputCaptcha = document.getElementById('inputCaptcha').value;
      if (inputCaptcha === 'PRNU') {
        alert('Selamat! Captcha Anda lolos :D');
      } else {
        alert('Captcha Anda belum tepat :(');
        document.getElementById('submitButton').setAttribute('disabled', '');
      }
      event.preventDefault();
    });

    //event OnCopy, fungsi yang mendeteksi ketika kita melakukan copy
    document.getElementById('inputCopy').addEventListener('copy', function () {
      alert('Anda telah men-copy sesuatu...');
    });

    //event OnPaste, termasuk dalam clipboard event
    document.getElementById('inputPaste').addEventListener('paste', function () {
      alert('Anda telah mem-paste sebuah teks...');
    });

});