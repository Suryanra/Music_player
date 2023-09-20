const controli=document.getElementById("progress");
const song=document.getElementById("song");
const conti=document.getElementById("controlicon");
const pre=document.getElementById("preid");
const playpause=document.getElementById("playpauseid");
const next=document.getElementById("nextid");
const imageid=document.getElementById("img1");
const titleid=document.getElementById("titleid");
const singerid=document.getElementById("singerid");
const currenttime=document.getElementById("currenttime");
const totaltime=document.getElementById("totaltime");
const songlist=document.getElementById("songlist");
const songlistid=document.getElementById("songlistid");

i=0;
playpause.addEventListener("click",playpausefunction);
function playpausefunction()
{

if(conti.classList.contains('fa-circle-play'))
{   play(songdata[i]);
    conti.classList.remove("fa-circle-play");
    conti.classList.add("fa-circle-pause");
}
else {
    pause();
    conti.classList.remove('fa-circle-pause');
    conti.classList.add('fa-circle-play');
    }
}

function play(songdata)
{
document.getElementById("img1").classList.add("img2");
song.src=songdata.path;
imageid.src=songdata.image;
titleid.innerText=songdata.title;
singerid.innerText=songdata.singer;
song.play();
if(conti.classList.contains('fa-circle-play'))
{
    id=setInterval(()=>{
        progress.value=song.currentTime;
    currenttime.innerText=`${Math.floor(progress.value/60)} .  ${Math.floor(progress.value%60)}`;
    },500)
}
}
function pause()
{
    document.getElementById("img1").classList.remove("img2");
    song.pause();
    clearInterval(id);
}
next.addEventListener("click",()=>{
    if(i==5){ i=-1;}
    play(songdata[++i]);
    if(conti.classList.contains('fa-circle-play'))
    {
        conti.classList.remove("fa-circle-play");
        conti.classList.add("fa-circle-pause");
    }
});
pre.addEventListener("click",()=>{
    if(i==0){ i=6;}
    play(songdata[--i]);
    if(conti.classList.contains('fa-circle-play'))
    {
        conti.classList.remove("fa-circle-play");
        conti.classList.add("fa-circle-pause");
    }
});


song.onloadedmetadata = function(){
    controli.max=song.duration;
    controli.value=song.currentTime;
}


controli.onchange=function(){
    play(songdata[i]);
    document.getElementById("img1").classList.add("img2");
    song.currentTime=controli.value;
    conti.classList.remove("fa-circle-play");
    conti.classList.add("fa-circle-pause");

}
function drawer(){
    var elei=document.getElementById("toprighticon");
    if(elei.classList.contains("fa-sun"))
    {
        // fa-solid fa-moon
        elei.classList.remove("fa-sun");
        elei.classList.add("fa-moon");
        document.getElementById("containerid").style.backgroundColor='rgba(0,0,0,0)'
        currenttime.style.color='rgb(0,0,0)';
        
        // alert("new features comming soon ");
    }
   
    else {
        elei.classList.remove("fa-moon");
        elei.classList.add("fa-sun");
        currenttime.style.color='rgb(255,255,255)';
        document.getElementById("containerid").style.backgroundColor='rgba(12, 12, 12, 0.932)'
    }

}

countof=0;
songlist.addEventListener("click",()=>{
    if(countof%2==0)
    {
       songlistid.style.visibility = "visible";
       document.getElementById('songarrow').classList.remove('fa-bars');
       document.getElementById('songarrow').classList.add('fa-chevron-left');
    //    <i class="fa-solid fa-chevron-left"></i>
       countof++;
    }
    else{
        songlistid.style.visibility = "hidden";
        document.getElementById('songarrow').classList.remove('fa-chevron-left');
        document.getElementById('songarrow').classList.add('fa-bars');
        countof++;
    }
})

songdata=[
    {path:'audio/song1.mp3',
      image:'image/image1.jpg',
    title:'Pehli Baarish Mein',
singer:"Jubin Nautiyal"},
    {path:'audio/song2.mp3',
      image:'image/image2.jpg',
      title:"Tu Yaad aya ",
  singer:"Adnan Sami"},

    {path:'audio/song3.mp3',
      image:'image/image3.jpg',
      title:"Jeene Laga Hun",
  singer:"Atif Aslam"},
  
    {path:'audio/song4.mp3',
      image:'image/image4.jpg',
      title:"Tujh Mein Rab Dikhta",
  singer:"Roop Kumar Rathod"},

    {path:'audio/song5.mp3',
      image:'image/image5.jpg',
      title:"Falak Tak Chal Sath",
  singer:"Udit Narayan"},

    {path:'audio/song6.mp3',
      image:'image/image6.jpg',
      title:"Love me Like You Do",
  singer:"Ellie Goulding"},
]
document.getElementById('song0').addEventListener("click",()=>
{play(songdata[0]);
    songlistid.style.visibility = "hidden";
    if(conti.classList.contains('fa-circle-play'))
    {conti.classList.remove("fa-circle-play");
    conti.classList.add("fa-circle-pause");}
    countof++;}
);
document.getElementById('song1').addEventListener("click",()=>
{play(songdata[1]);
    songlistid.style.visibility = "hidden";
    if(conti.classList.contains('fa-circle-play'))
    {conti.classList.remove("fa-circle-play");
    conti.classList.add("fa-circle-pause");}
    countof++;});
document.getElementById('song2').addEventListener("click",()=>
{play(songdata[2]);
    songlistid.style.visibility = "hidden";
    if(conti.classList.contains('fa-circle-play'))
    {conti.classList.remove("fa-circle-play");
    conti.classList.add("fa-circle-pause");}
    countof++;});
document.getElementById('song3').addEventListener("click",()=>
{play(songdata[3]);
    songlistid.style.visibility = "hidden";
    if(conti.classList.contains('fa-circle-play'))
    {conti.classList.remove("fa-circle-play");
    conti.classList.add("fa-circle-pause");}
    countof++;});
document.getElementById('song4').addEventListener("click",()=>
{play(songdata[4]);
    songlistid.style.visibility = "hidden";
    if(conti.classList.contains('fa-circle-play'))
    {conti.classList.remove("fa-circle-play");
    conti.classList.add("fa-circle-pause");}
    countof++;});
document.getElementById('song5').addEventListener("click",()=>
{play(songdata[5]);
    songlistid.style.visibility = "hidden";
    if(conti.classList.contains('fa-circle-play'))
    {conti.classList.remove("fa-circle-play");
    conti.classList.add("fa-circle-pause");}
    countof++;});