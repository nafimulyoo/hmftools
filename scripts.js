const csvData = `13320020,Muhammad Hamzah Rizaluzzaman B.,Jambi,05/01/2024
13320078,Rayhan Bilal Capriano,Jakarta,05/01/2024
13321071,Muhammad Hikhal Fadhilah,Bekasi,06/01/2024
13322024,Putri Sri Rahayu,Puyu,06/01/2024
13320050,Rayhan Farid Akbari,Jakarta,07/01/2024
13320056,Muhammad Imron Catur Anoraga,Sidoarjo,08/01/2024
13320049,Caleb Effendi,Bandung,10/01/2024
13320063,Angel Erwinda Putri Tambun,Tasikmalaya,10/01/2024
13322041,Feodora Clarissa Tampubolon,Feo,11/01/2024
13322052,Azizah Prabasari,Ayi,15/01/2024
13321026,Ariefah Shidqiya Rahmah,Bandung,16/01/2024
13321079,Deftendy Virgiatman,Bekasi,17/01/2024
13321034,Hafizhan Azhar Rasyadi,Jakarta,18/01/2024
13320005,Safin Rivaldi,Bandung,22/01/2024
13320001,Aliya Sekar Prima,Bandung,22/01/2024
13320066,Zul Aldi Rizki,Naram,23/01/2024
13322094,Tashdiqurridho,Tashdiq,24/01/2024
13322048,Dolly Irgi Fahlefi Sitorus,Doli,26/01/2024
13320041,Azhar Ikhtiarudin,Purbalingga,04/02/2024
13320014,Ihsan M. Fauzan,Pekanbaru,05/02/2024
13320070,Raden Muhammad Akmal Burhanuddin,Karawang,06/02/2024
13321038,Kemal Fathurrahman,Surabaya,06/02/2024
13320006,Muhammad Anwaril Firdaus,Madiun,10/02/2024
13320074,Gerry Artama,Jakarta,12/02/2024
13322017,Afif Subhi Dzaki,Afif,12/02/2024
13322089,Gerard Alexander Sitompul,Gerat,12/02/2024
13322044,Hakim Adha Fayyadi Walneg,Hakim,13/02/2024
13322076,Valentino,Valen,14/02/2024
13322030,feby sarasaty,bey,17/02/2024
13322031,Ghiffary Adzkira Hasyim,gifari,20/02/2024
13320013,Lutfi Rais Ismail,Bandung,21/02/2024
13320077,Hansen Cahyadi,Bandung,21/02/2024
13320036,Halima Hanan Atikah,,24/02/2024
13321013,Luthfi Adi Nugraha,Bekasi,25/02/2024
13320085,Rafi Armandana Aqila,Jakarta,26/02/2024
13322054,Fathy Abdurrahman,Fathy,26/02/2024
13322065,Ferdy Kurniawan Limandjaja,Ferdy,27/02/2024
13320065,Feby Ilyas Arrahman,Sukarami,28/02/2024
13320067,Dzaki Ahmad Syaifullah,Banjarnegara,28/02/2024
13322066,Adrian Muhammad Rayhan Farhani,Adrian / Adra,03/03/2024
13321005,Clara Caroline Mariani,Bandung,04/03/2024
13320060,Nathanael Ezekiel,Jakarta,05/03/2024
13321001,Christoporus Nicholas,Serang,05/03/2024
13321014,Putri Bunga Daeng,Tulamalae,06/03/2024
13321015,Muhammad Salman Satria Agung,Bandung,08/03/2024
13320048,Zahra Dzul Rasul,Karawang,09/03/2024
13322072,Gabriela Heidy,Gaby,10/03/2024
13321011,Philip Inarta Kho,Batam,14/03/2024
13322083,Izzan Roidz Tramanti,Izzan,15/03/2024
13322084,Yuba Felda Tustika,Yuba,16/03/2024
13320083,Raynee Joyvita Iriani Anthonia,Jakarta,17/03/2024
13321019,Sulthan Naufal,Jakarta,18/03/2024
13322019,Brema Alfansi Ginting,Brema,19/03/2024
13321045,Mohammad Ilham Hazetra,Jakarta,20/03/2024
13320009,Reynanda Gemilang Surya Yudira,Klaten,23/03/2024
13322092,Abdi Salim Mubarak,Abdi,23/03/2024
13321076,Muhammad Zamroni,Kediri,25/03/2024
13320058,Athaya Tuzzahra Haswinanda,Surabaya,25/03/2024
13321064,Audrey Shyabilla Dha'arienne Sodry,Bandung,26/03/2024
13321006,Daniel Pringgo Setianto,Bekasi,27/03/2024
13320028,Muhammad Sulthan Mazaya,Bandung,30/03/2024
13321008,Ilham Abdulhakim,Jakarta,30/03/2024
13322045,Samudro Cikal Pangkapi,Dio,31/03/2024
13321009,Gabriel Francesco Hostka,Tangerang,01/04/2024
13320032,Dewi Ashiila Hikmawan,Jakarta,02/04/2024
13322008,Hizb Rafilza Rafa' Sakhaes,Ijeb,03/04/2024
13320069,Aulia Cahyadi,Jakarta,04/04/2024
13322059,Naufaldhia Afiary,Naufal,07/04/2024
13322046,Faaiq Mastyaga,Faaiq,09/04/2024
13322033,Kayla Avrilica,Kayla,10/04/2024
13321037,Muhammad Farhan Rasyidnianto,Jakarta,11/04/2024
13321048,Javier Dustin Tambunan,Jakarta,11/04/2024
13321078,Jazuli Rahmat,Indramayu,11/04/2024
13320088,Nuraini Khadijah Sekar Savitri,Jakarta,12/04/2024
13322096,Muhammad Abdulrahim Reza,Reza,12/04/2024
13322081,Putri Mutia Laksmi,Putri,12/04/2024
13320026,Yosep Putra Setiyanto,Bandung,14/04/2024
13320082,Priananda Farizka Anugrah,Jakarta,15/04/2024
13321051,Nayaka Zahran Raeswara,Tangerang,15/04/2024
13322018,Andrea Bintang Bellatrix Kusumah,Bintang,15/04/2024
13322027,Andrea Adeline Dewanto,Andrea,17/04/2024
13322005,Atha Kawiswara Yogantara,atha,17/04/2024
13321043,Naufan Aurezan Mulyawan,Bandung,18/04/2024
13321070,Syarifa Khairunnisa,Bekasi,18/04/2024
13322021,Miranda Asmi Nur F.,Miranda,20/04/2024
13322093,Favian Widyardhana,Favian,21/04/2024
13322004,Alya Abshara Mahira Adhiputri,Aca,25/04/2024
13320086,Shalahudin Pasha Hanugh,Surakarta,26/04/2024
13320019,Gilbert Faintbright Yohanes,Jakarta,29/04/2024
13321067,Rosa Virginia Larasati,Bandung,29/04/2024
13321052,Hilmi Abyan Muzhaffar,Bandung,30/04/2024
13322090,Muhammad Izza Abiyyu Sigit,Abiyyu,30/04/2024
13322006,Alif Muhammad Rizky,Almuzky,01/05/2024
13321049,Annisha Fathimatuzzahra Putri Kusuma,Yogyakarta,02/05/2024
13320044,Edward Martin,Jakarta,03/05/2024
13320075,Shabri Ash Shiddieqy,Bogor,03/05/2024
13320057,Mesa Anugerah Kenan Sergio,Bekasi,07/05/2024
13321032,I Putu Agus Ananda Giri Putra,Gianyar,07/05/2024
13322039,Dika Muhammad Azis,Dika,09/05/2024
13320018,Devi Inggarwati,Banyumas,10/05/2024
13321003,Muhammad Luthfi Nasa Azzikri,Padang,14/05/2024
13320017,Dhita Margia Pramesty,Jakarta,16/05/2024
13320038,Ariansyah Ekaputra,Jakarta,17/05/2024
13321062,Yudi Pranata,Lhokseumawe,18/05/2024
13321073,Carla Benita,Bandung,18/05/2024
13322088,Ghefira Sabrina,Ghe,19/05/2024
13322064,Nabil Karim Abdurrahman,Nabil,19/05/2024
13320031,James Christian,Bandung,20/05/2024
13321033,Han Senq,Tembilahan,21/05/2024
13322050,Fathih Dhiya Az Zhafran,Fathih,22/05/2024
13322037,Russell Christopher Yudhistira,Russell,23/05/2024
13321063,Irena Theresia Maspaitella,Bandung,24/05/2024
13321031,Rahma Adhyanava,Bandar Lampung,25/05/2024
13321029,Nafi Mulyo Kusumo,Bekasi,25/05/2024
13321060,Abdan Hakim,Bandung,25/05/2024
13320035,Muhammad Alvaro Haston,Makassar,29/05/2024
13320068,Tarisya Karlintang Mukti,Sukoharjo,29/05/2024
13322012,Clara Gracia Roulina Parapat,Cibe,31/05/2024
13321066,Muhammad Zidan Taufiqurrahman,Palembang,08/06/2024
13321046,Handri Jaya Putra,Jakarta,09/06/2024
13322020,Rayhan Rusyd,rayhan/mochi,10/06/2024
13320039,Timothy Taro Tarigan,Tanjung Enim,11/06/2024
13320016,Ariel Brandon Stevano Siallagan,Jakarta,12/06/2024
13322047,Elfan Dhiyaurrahman Setiawan,Elfan,12/06/2024
13320024,Prabu Asshidiq,Bogor,13/06/2024
13320004,Vania Zahra Amalia Putri,Jakarta,14/06/2024
13322067,Muhammad Rizky Asqalani,Asqal,14/06/2024
13322070,Nasywa Lathifah Mumtaz,wawa,14/06/2024
13320008,Mochamad Hielmy Ismet Haekal,Indramayu,15/06/2024
13322002,Akmal Pramudya,Akmal,15/06/2024
13322105,Rennita Maharani Audrey,Audrey,17/06/2024
13321041,Kimberly Tanus,Jakarta,22/06/2024
13321021,Adelia Putri,Tanjungpandan,23/06/2024
13321040,Syarafina Ghassani Az Zahro,Surabaya,23/06/2024
13320003,Ananda Aikoo Mutiara Khairunisya,Tangerang,24/06/2024
13322038,Rimba Harits Hartanto,Rimba,24/06/2024
13322016,Nathanael Enrico Tanuwijaya,Nathan,25/06/2024
13321028,Ardi Shohih Ardiansyah,Kuningan,28/06/2024
13322098,Zulfikar Firmanto,Fikar,28/06/2024
13322086,Muhammad Mirza Adhiyarahman,Mirza,29/06/2024
13322010,Muhammad Agung,Ajung,03/07/2024
13321058,Muhammad Zidni Rizqan Fauzan,Tasikmalaya,04/07/2024
13322074,Anarga Paritrana Widhi,Arga,06/07/2024
13321039,Nathaniel Georgius,Bandar Lampung,09/07/2024
13320027,Muhammad Fuad Hassan Siregar,Medan,09/07/2024
13322032,joel hidajat,joel,09/07/2024
13322035,Zaky Azhar Alfaruq,Zaky,12/07/2024
13322104,Muhammad Emir Putranugraha,Emir,13/07/2024
13320053,Shania Argiliana,Bandung,14/07/2024
13322063,Aliyah Shafina,Fina,16/07/2024
13322101,Aliyah shafira,Fira,16/07/2024
13320021,Luqman Ardiseno,Bandung,17/07/2024
13322015,Rahmatullah Abimanyu Putramustika,Abi,18/07/2024
13321027,Izma Alhazmi Herdian,Lebak,19/07/2024
13322068,kemal akbar mahesa,kemal,20/07/2024
13321044,Salwa Dewi Hasanah Caniko,Padang Tongga,25/07/2024
13320007,Ramiza Bilhaq Mas Avicena,Jakarta,26/07/2024
13322087,Zahran Al Ghifari,Zahran,26/07/2024
13322079,Diandra Mevia Putriadiny,Diandra,26/07/2024
13321012,Taufik Syahputra,Medan,28/07/2024
13320054,Amalia Wahyu Utami,Tegal,28/07/2024
13322049,Annisa Aspiratu Rahma,Aspiratu/Rahma,31/07/2024
13320047,Daffa Aris Alhakim,Banjarnegara,01/08/2024
13322103,Muhammad umar abdulaziz,Marco,02/08/2024
13320037,Alvy Herawati,Trenggalek,04/08/2024
13322080,Prudensia Fairuz Zhafirah,Densi,04/08/2024
13321053,Wibisana Wisnu Putra Nugroho,Bekasi,06/08/2024
13320051,M. Farhanulhakim,Subang,07/08/2024
13321055,Hero Hafizuddin Rahman,Blitar,07/08/2024
13320040,Raden Ajeng Shalsyabilla Nur Permata Devina,Jakarta,08/08/2024
13322055,Alton Joe Orleando,Alton,08/08/2024
13320010,Muhammad Arkan Nuruzzahran,Bogor,10/08/2024
13321036,Aris Syifa Augustina,Semarang,13/08/2024
13321069,Wilbert Ivander Nioman,Medan,13/08/2024
13320023,Edward Christopher Chow,Yogyakarta,15/08/2024
13322022,Teuku Beuraja Laksamana,Beuraja,18/08/2024
13320076,Farhan Zaki Rahmani,Tegal,19/08/2024
13322040,Muhammad Naufal Akbar,Akbar,19/08/2024
13322007,Sulthan Nabil Rajendra,Sulthan,20/08/2024
13322075,Muhammad Guinnot Raid Nabihfalah,Guinnot,23/08/2024
13321024,Muhamad Arya Saputra,Palembang,24/08/2024
13321059,Rizka Al Husna,Jakarta,26/08/2024
13320073,Thoriq Waldri,Duri,27/08/2024
13321061,Zalma Zahara Hanum,Jakarta,27/08/2024
13321018,Zaki Azhari,Delft,01/09/2024
13321057,Saltika Rahma,Bandung,03/09/2024
13321077,Nanda Antika,Blitar,04/09/2024
13322100,Muhammad Nabhan,Nuha,04/09/2024
13320071,Ariyani Saputro,Tegal,10/09/2024
13322043,Indra Fatiha Jamil Dalimunthe,Indra,12/09/2024
13322003,Falah Dies Annisa,Falah,13/09/2024
13322062,Maudya Isti Rahmayani,"Maudy, Mody",15/09/2024
13320080,Hadyan Fawwaz Anshori,Madiun,16/09/2024
13322102,Leandro Steviandaru Triantoro,Ale,16/09/2024
13321025,Kevin M. Shandy,Simabur,16/09/2024
13320084,Hanif Manik Kottama,Klaten,17/09/2024
13320072,Deedat Fatahillah,Batam,19/09/2024
13321016,Rafi Fadhlan Nazhif,Jakarta,19/09/2024
13320055,Reva Budiantono,Purwokerto,25/09/2024
13321072,Anggia Putri Sinulingga,Jakarta,26/09/2024
13320033,Daffa Azami Sazaly,Bekasi,29/09/2024
13321065,Fransiskus Michael Christian,Jakarta,03/10/2024
13322060,Nabil Rashid Musadi,Nabil,03/10/2024
13322073,Muhammad Farras,Farras,11/10/2024
13320059,Muhammad Gema Pertiby Kaban,Bogor,14/10/2024
13322009,Afina Rizkiya Rahmani,Afina,20/10/2024
13320043,Muhammad Rosyad Robbani,Jakarta,22/10/2024
13322061,Ocdi Amanata Radiansyah,Ocdi,23/10/2024
13320045,Zayna Mosa Kalila,Jakarta,24/10/2024
13321010,Muhammad Raul Raditya Zaki,Bandung,24/10/2024
13320011,Muhammad Akbar Nugrahadi,Temanggung,25/10/2024
13321075,Carlios Eryan,Tanjungpinang,28/10/2024
13320025,Muhammad Irsyad Al Bana,Jakarta,31/10/2024
13322069,Umar Abdurrahman,Umar or umaw,01/11/2024
13320079,Nugraha Nurcandra N.,Bandung,02/11/2024
13320062,Muhammad Rozaq Irfa'i,Jakarta,07/11/2024
13322034,Aninditya Regina Mudrig,Regina,09/11/2024
13321047,Ilham Bintang,Purwakarta,16/11/2024
13320030,Christoph Lawrence,Jakarta,17/11/2024
13321068,Muhammad Amri,Bandung,19/11/2024
13322023,Anastasya Kiev Namira Salsabilla,Alsa,20/11/2024
13322042,Alpha Novrigian,al,20/11/2024
13320022,Janice Novi Prasetyo,Medan,23/11/2024
13322036,Rahma Laili Azizah,Rahma,26/11/2024
13321023,Achriza Nurfarid,Bandung,26/11/2024
13322085,Rusydi Aziz,Aziz,28/11/2024
13321022,Zaiman Aufar Purnama,Jakarta,01/12/2024
13322091,Fransiska Xaveria Dwi Anjani Putri,Putri,03/12/2024
13320034,Qinetta Aidia Fitrinna,,06/12/2024
13320052,Daffa Auliya Ulhaq Sulistiyan,Bogor,10/12/2024
13322029,Andini Rahadiani,Andin,10/12/2024
13320061,Muhammad Sayyidurrahman Ash Shidqi,,13/12/2024
13321054,Emerya Putri Annisa Zahra,Jakarta,14/12/2024
13320012,I Made Wiratathya Putramas,Denpasar,15/12/2024
13320042,Ariel Christofer Pelamonia,Jakarta,17/12/2024
13322099,Daffa Keitaro Putra,Daffa,18/12/2024
13321020,Danu Fasalillah Rifkana Hakim,Banyuwangi,19/12/2024
13320064,Jihad Zakki Darajad,Tuban,20/12/2024
13321030,Azalea Jedidah Lambe,Jakarta,20/12/2024
13321042,Een,Subang,23/12/2024
13322077,Ahnaf Irbah Hidayat,Ahnaf,24/12/2024
13321002,Bintang Adra Sapardiman,Bandung,26/12/2024
13320046,Imam Rakhmadi,Kebumen,28/12/2024
13321017,Dandy Arif Rahmadi,Jakarta,28/12/2024
13321074,Pramoda Prabaswara,Kendal,28/12/2024
13320002,Sherlyna Fatasya,Boyolali,28/12/2024
13322071,Patricia Natalie Sihombing,Patty,29/12/2024`;

const currentDate = new Date();
const currentMonth = currentDate.getMonth() + 1;

const birthdayData = csvData.split('\n').map(row => {
  const [nim, name, city, date] = row.split(',');
  const [day, month, year] = date.split('/').map(Number);
  return { nim, name, city, date: new Date(year, month - 1, day) };
});

const filteredData = birthdayData.filter(data => data.date.getMonth() + 1 >= currentMonth);

const selectName = document.getElementById('selectName');
filteredData.forEach(data => {
  const option = document.createElement('option');
  option.value = data.nim;
  option.textContent = `${data.name} - ${data.date.toLocaleDateString('en-GB')}`;
  selectName.appendChild(option);
});

selectName.addEventListener('change', function () {
  const selectedNim = this.value;
  const selectedData = birthdayData.find(data => data.nim === selectedNim);
  if (selectedData) {
    document.getElementById('name').value = selectedData.name;
    document.getElementById('nim').value = selectedData.nim;
    document.getElementById('date').value = selectedData.date.toLocaleDateString('en-GB');

    const angkatan = selectedData.nim.startsWith('13320')
      ? 'Morpha'
      : selectedData.nim.startsWith('13321')
      ? 'Nasatya'
      : 'Nawasena';
    document.getElementById('angkatan').value = angkatan;

    // Update the flatpickr instance with the new date
    const datePicker = document.getElementById('date')._flatpickr;
    if (datePicker) {
      datePicker.setDate(selectedData.date, true);
    }
  }
});

document.getElementById('cardForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const angkatan = document.getElementById('angkatan').value;
  const nim = document.getElementById('nim').value;
  const date = document.getElementById('date').value;
  const fileInput = document.getElementById('upload');
  const file = fileInput.files[0];

  if (!file) {
    alert("Please upload an image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const imageToCrop = document.getElementById('imageToCrop');
    imageToCrop.src = e.target.result;
    document.getElementById('cropContainer').style.display = 'block';

    cropper = new Cropper(imageToCrop, {
      aspectRatio: 1,
      viewMode: 1,
      autoCropArea: 1,
      movable: false,
      zoomable: false,
      rotatable: false,
      scalable: false,
      ready: function () {
        const cropBoxData = cropper.getCropBoxData();
        const imageData = cropper.getImageData();
        cropper.setCropBoxData({
          left: (imageData.width - cropBoxData.width) / 2,
          top: (imageData.height - cropBoxData.height) / 2,
          width: Math.min(cropBoxData.width, cropBoxData.height),
          height: Math.min(cropBoxData.width, cropBoxData.height),
        });
      },
    });
  };
  reader.readAsDataURL(file);
});

document.getElementById('cropButton').addEventListener('click', function () {
  const canvas = cropper.getCroppedCanvas({
    width: 458,
    height: 458,
  });
  const ctx = canvas.getContext('2d');

  const croppedCanvas = document.createElement('canvas');
  croppedCanvas.width = 458;
  croppedCanvas.height = 458;
  const croppedCtx = croppedCanvas.getContext('2d');

  croppedCtx.beginPath();
  croppedCtx.arc(229, 229, 229, 0, Math.PI * 2);
  croppedCtx.closePath();
  croppedCtx.clip();
  croppedCtx.drawImage(canvas, 0, 0, 458, 458);

  const croppedImage = croppedCanvas.toDataURL('image/png');
  cropper.destroy();
  document.getElementById('cropContainer').style.display = 'none';
  generateCard(croppedImage);
});

function generateCard(croppedImage) {
  const name = document.getElementById('name').value;
  const angkatan = document.getElementById('angkatan').value;
  const nim = document.getElementById('nim').value;
  const date = document.getElementById('date').value;

  const cardCanvas = document.getElementById('birthdayCard');
  const ctx = cardCanvas.getContext('2d');

  const selectTemplate = document.getElementById('selectTemplate').value;
  const templateMap = {
    template1: '/templates/1 Candle.png',
    template2: '/templates/2 Candle.png',
    template3: '/templates/5 Candle.png',
    template4: '/templates/Balloon.png',
    template5: '/templates/Confetti.png',
    template6: '/templates/Special.png',
  };

  const template = new Image();
  template.src = templateMap[selectTemplate];
  template.onload = function () {
    ctx.drawImage(template, 0, 0, cardCanvas.width, cardCanvas.height);

    const img = new Image();
    img.src = croppedImage;
    img.onload = function () {
      ctx.drawImage(img, 70.79, 910.6, 412.79, 412.79);

      ctx.font = 'bold 70px Public Sans';
      ctx.fillStyle = '#000000';
      ctx.fillText(name, 561, 1220);

      ctx.font = '50px Public Sans';
      ctx.fillStyle = '#919191';
      ctx.fillText(angkatan, 561, 1280);

      ctx.fillStyle = '#000000';
      ctx.fillText(nim, 144, 1515);

      ctx.fillText(date, 628, 1515);

      // automatically download the card without button
      document.getElementById('birthdayCard').style.display = 'block';
      const download = document.getElementById('download');
      download.style.display = 'block';
      const downloadButton = document.getElementById('downloadButton');
      downloadButton.href = cardCanvas.toDataURL('image/png');
      downloadButton.download = `${name}-captday.png`;

      const link = document.createElement('a');
      link.href = cardCanvas.toDataURL('image/png');
      link.download = `${name}-captday.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  };

  document.getElementById('resetButton').style.display = 'block';
}

document.getElementById('resetButton').addEventListener('click', function () {
  document.getElementById('cardForm').reset();
  document.getElementById('cropContainer').style.display = 'none';
  document.getElementById('birthdayCard').style.display = 'none';
  document.getElementById('downloadButton').style.display = 'none';
  document.getElementById('download').style.display = 'none';
  document.getElementById('resetButton').style.display = 'none';
  document.getElementById('dropAreaText').textContent = 'Drag & Drop image here, Or click here to search';
});

document.getElementById('dropArea').addEventListener('dragover', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.dropEffect = 'copy';
});

document.getElementById('dropArea').addEventListener('drop', function (e) {
  e.preventDefault();
  e.stopPropagation();

  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    const fileInput = document.getElementById('upload');
    fileInput.files = e.dataTransfer.files;
    document.getElementById('dropAreaText').textContent = `File Uploaded: ${file.name}`;
  }
});

document.getElementById('dropArea').addEventListener('click', function () {
  document.getElementById('upload').click();
});

document.getElementById('upload').addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    document.getElementById('dropAreaText').textContent = `File Uploaded: ${file.name}`;
  }
});

flatpickr("#date", {
  dateFormat: "d/m/Y"
});