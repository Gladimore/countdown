function getWeekendsUntilDate(dateString) {
  const date = new Date(dateString);
  const currentDate = new Date();

  const daysUntilDate = Math.ceil((date - currentDate) / (1000 * 60 * 60 * 24));

  let weekends = 0;
  
  for (let i = 0; i < daysUntilDate; i++) {
    const day = new Date(currentDate.getTime() + (i * 24 * 60 * 60 * 1000)).getDay();
    if (day === 0 || day === 6) {
      weekends++;
    }
  }

  return weekends;
}


const date_new = new Date()
const year = date_new.getFullYear()

const weekendsUntilDate = getWeekendsUntilDate(`6/01/${year.toString().substring(2,4)}`);
const countDownDate = new Date(`June 1, ${year} 00:00:00`).getTime();

var days = null;

const x = setInterval(function() {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `${days-weekendsUntilDate}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(x);
    countdownElement.innerHTML = "School has ended 🎉.";
  }
}, 1000);

var myAudio = document.getElementById('audio');

function toggleMute() {
  myAudio.muted = !myAudio.muted;
}

document.addEventListener("keydown", function(event) {
  if (event.keyCode == 77) {
    console.log('Pressed mute.');
    toggleMute()
  }
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    myAudio.volume = (String.fromCharCode(event.keyCode)) / 10;
    console.log(myAudio.volume);
  }

});

var click = false

const backgrounds = [
  'https://i.postimg.cc/9wfQjcGZ/pxfuel.jpg',
  'https://i.postimg.cc/26PMdJM7/pxfuel.jpg',
  'https://i.postimg.cc/xJndtv8s/pxfuel-1.jpg',
  'https://i.postimg.cc/9wfQjcGZ/pxfuel.jpg',
  'https://i.postimg.cc/26PMdJM7/pxfuel.jpg',
  'https://i.postimg.cc/xJndtv8s/pxfuel-1.jpg',
  'https://i.postimg.cc/9wfQjcGZ/pxfuel.jpg',
  'https://i.postimg.cc/26PMdJM7/pxfuel.jpg',
  'https://i.postimg.cc/xJndtv8s/pxfuel-1.jpg',
  'https://i.postimg.cc/9wfQjcGZ/pxfuel.jpg',
  'https://i.postimg.cc/26PMdJM7/pxfuel.jpg',
  'https://i.postimg.cc/xJndtv8s/pxfuel-1.jpg',
  'https://i.postimg.cc/9wfQjcGZ/pxfuel.jpg'
]

var music = [
  "https://audio.jukehost.co.uk/Yzu7LTzGoWOU6HxefCvq3ahEexjHAqeg",
  "https://audio.jukehost.co.uk/AWUiWhDHuApaAVeOpiPhpm9gsG6wjMBu",
  "https://audio.jukehost.co.uk/StGHDJ8rRHJmkORvYIRK8PypWVFsyk0t"
];

var randomItem = music[Math.floor(Math.random() * music.length)];

myAudio.addEventListener('ended', function() {
  randomItem = music[Math.floor(Math.random() * music.length)];
  myAudio.src = randomItem;
  this.currentTime = 0;
  this.play();
}, false);

myAudio.src = randomItem;

document.addEventListener('click', function() {
  if (click === false) {
    click = true
    myAudio.play();
  }
}, false);
