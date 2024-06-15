let cropper;

document.getElementById('cardForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const angkatan = document.getElementById('angkatan').value;
  const nim = document.getElementById('nim').value;
  const date = document.getElementById('date').value;
  const fileInput = document.getElementById('upload');
  const file = fileInput.files[0];

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

  const template = new Image();
  template.src = '/template.png';
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

      document.getElementById('birthdayCard').style.display = 'block';
      const downloadButton = document.getElementById('downloadButton');
      downloadButton.style.display = 'block';
      downloadButton.href = cardCanvas.toDataURL('image/png');
      downloadButton.download = 'birthday-card.png';
    };
  };

  document.getElementById('resetButton').style.display = 'block';
}

document.getElementById('resetButton').addEventListener('click', function () {
  document.getElementById('cardForm').reset();
  document.getElementById('cropContainer').style.display = 'none';
  document.getElementById('birthdayCard').style.display = 'none';
  document.getElementById('downloadButton').style.display = 'none';
  document.getElementById('resetButton').style.display = 'none';
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
  }
});

document.getElementById('dropArea').addEventListener('click', function () {
  document.getElementById('upload').click();
});

flatpickr("#date", {
  dateFormat: "d/m/Y"
});
