document.getElementById('img_uploader').addEventListener('change', uploadImg);

function uploadImg() {
    var curFile = this.files,
        preview = document.getElementById('image-preview'),
        fileTypes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ]
    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    if (curFile.length == 0) {
        var para = document.createElement('p');
        para.textContent = 'No Image Selected';

        preview.appendChild(para);
        booImage = false;
    } else {
        for (let i = 0; i < curFile.length; i++) {
            if (validateFileType(curFile[i])) {
                var elImg = document.createElement('img');
                elImg.src = window.URL.createObjectURL(curFile[i]);
                preview.appendChild(elImg);
                booImage = false;
            }
            else {
                var elPara = document.createElement('p');
                elPara.textContent = curFile[i].name + ' is not a valid file type';

                preview.appendChild(elPara);

                booImage = true;
            }
        }
    }

    function validateFileType(file) {
        for (let i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i])
                return true;
        }
        return false;
    }
}
