fetch("data/rockAndRoll.json")
    .then((response ) => {
        console.log(response);
        return response.json();
    })
    .then ((dataSong) => {
        const songList = dataSong.song;
        const songListContainer = document.querySelector(".song-list");

        console.log(songList);
        console.log(songListContainer);

        //Sort
        songList.sort((a, b) => a.songName.localeCompare(b.songName));
      

        songList.forEach((song) => {
            const li = document.createElement("li");
            const div = document.createElement("div");
            const songNameSpan = document.createElement("span");
            const songTimeSpan = document.createElement("span");

            songNameSpan.classList.add("song-name");
            songTimeSpan.classList.add("song-time");

            songNameSpan.textContent = song.songName;
            songTimeSpan.textContent = song.songTime;

            div.appendChild(songNameSpan);
            div.appendChild(songTimeSpan);
            li.appendChild(div);
            songListContainer.appendChild(li);
        })
    })


    const logo = document.getElementById('elvisLogo');

    logo.addEventListener('click',function(){
        window.location.href = "index.html";
    });