const cfg = window.CONFIG;

const root = document.documentElement;
root.style.setProperty("--primary", cfg.theme.primary);

if(cfg.theme.mode==="dark"){
  root.style.setProperty("--bg", cfg.theme.bgDark);
  root.style.setProperty("--text", "#fff");
}else{
  root.style.setProperty("--bg", cfg.theme.bgLight);
  root.style.setProperty("--text", "#000");
}

document.querySelector("#logo").src = cfg.brand.logo;
document.querySelector("#brand").innerText = cfg.brand.name;

const grid = document.querySelector("#grid");

cfg.invites.forEach(inv=>{
  const card = document.createElement("div");
  card.className="card";

  card.innerHTML = `
  <div class="phone">
    <img src="assets/mockup-phone.png">
    <video src="${inv.video}" autoplay muted loop></video>
  </div>

  <h3>${inv.title}</h3>
  <p>${inv.desc}</p>
  <strong>${inv.price}</strong>
  <br><br>

  <button onclick="encomendar('${inv.title}')">Encomendar</button>
  `;

  grid.appendChild(card);
});

function encomendar(nome){
  const url = `https://wa.me/${cfg.brand.whatsapp}?text=Quero%20o%20convite:${encodeURIComponent(nome)}`;
  window.open(url,"_blank");
}