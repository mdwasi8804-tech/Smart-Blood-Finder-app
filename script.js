// Splash screen
window.onload = function(){
    setTimeout(()=>{
        document.getElementById("splash").style.display="none";
        document.getElementById("app").style.display="block";
    },2500);
}

// Store donors
let donors = [];

// Add donor
function addDonor(){
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;
    let location=document.getElementById("location").value;
    let group=document.getElementById("group").value;
    let units=document.getElementById("units").value;

    if(name=="" || phone=="" || location=="" || units==""){
        alert("Please fill all fields");
        return;
    }

    donors.push({name,phone,location,group,units});

    alert("Donor Added Successfully");

    document.getElementById("name").value="";
    document.getElementById("phone").value="";
    document.getElementById("location").value="";
    document.getElementById("units").value="";
}

// Search blood
function searchBlood(){
    let g=document.getElementById("searchGroup").value;
    let res=document.getElementById("results");
    let total=0;
    res.innerHTML="";

    donors.forEach(d=>{
        if(d.group==g){
            total+=parseInt(d.units);

            res.innerHTML+=`
            <div class="card">
                <b>${d.name}</b><br>
                📍 ${d.location}<br>
                🩸 ${d.group} | Units: ${d.units}<br>
                📞 <a href="https://wa.me/${d.phone}" target="_blank">WhatsApp</a>
            </div>`;
        }
    });

    document.getElementById("total").innerHTML="Total Units: "+total;
}

// Emergency
function sendEmergency(){
    let g=document.getElementById("emGroup").value;
    let h=document.getElementById("emHospital").value;
    let l=document.getElementById("emLocation").value;

    document.getElementById("alertBox").innerHTML=
    `🚨 URGENT: ${g} needed at ${h}, ${l}`;
}

// Location
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pos=>{
            let lat=pos.coords.latitude;
            let lon=pos.coords.longitude;

            document.getElementById("myLocation").innerHTML=
            `Lat: ${lat} | Lon: ${lon}`;
        });
    }else{
        alert("Location not supported");
    }
}

// Hospitals
function findHospitals(){
    document.getElementById("hospitals").innerHTML=
    "Search on Google Maps: <br><a href='https://www.google.com/maps/search/hospital' target='_blank'>Open Map</a>";
}
