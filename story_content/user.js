function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LhrZvj2nT7":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="SAL.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

