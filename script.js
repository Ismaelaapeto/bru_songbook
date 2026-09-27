let songsData = [];

fetch('songs.json')
  .then(res => res.json())
  .then(data => {
    songsData = data;
    displaySongs(data);
  });

function displaySongs(data) {
  let list = document.getElementById("songList");
  list.innerHTML = "";

  data.forEach(song => {
    let li = document.createElement("li");
    li.textContent = song.title;

    li.onclick = () => {
      localStorage.setItem("lyrics", song.lyrics);
      localStorage.setItem("title", song.title);
      window.location.href = "song.html";
    };

    list.appendChild(li);
  });
}

// SEARCH FUNCTION
document.getElementById("search").addEventListener("input", function() {
  let value = this.value.toLowerCase();

  let filtered = songsData.filter(song =>
    song.title.toLowerCase().includes(value)
  );

  displaySongs(filtered);
});