// PROGRESSBAR EXAMPLE
function changeValue(e) {
  const elm = document.getElementById("bar1");
  elm.setAttribute("value", e);
  elm.style.width = `${e}%`;
  return false;
}

// TABS
document.querySelectorAll("button[data-ctab]").forEach((elm) => {
  elm.addEventListener("click", (e) => {
    const dest = document.getElementById(e.target.getAttribute("data-ctab"));
    const c = document.createElement("button");
    c.setAttribute("id", "exit1");
    c.setAttribute("class", "btn dark");
    c.innerHTML = "Return";
    dest.appendChild(c);
    dest.style.display = "block";
    elm.style.display = "none";
    document.getElementById("exit1").addEventListener("click", (e) => {
      dest.removeChild(c);
      dest.style.display = "none";
      elm.style.display = "block";
    });
  });
});

/*
SOME OTHER FUN STUFF HAHA
function xorstr(e, n) {
  const o = [];
  let f = "";
  for (let r = 1; r <= 255; r++) o[String.fromCharCode(r)] = r;
  for (let r, t = 0; t < e.length; t++) {
    f += String.fromCharCode(o[e.substr(t, 1)] ^ o[n.substr(r, 1)]);
    r = r < n.length ? r + 1 : 0;
  }
  return f;
}
// ONCE THE WINDOW LOADS WE INJECT THE PROTECTED CSS
window.onload = function () {

  // Variable which holds our Key, used to Encrypt Strings
  const pass = "SecretPassword";
  // The CSS code u wish to the index file
  const style = xorstr(
    `
    body {
    background:grey;
    color:cyan;
    }
    `,
    pass
  );
  // Decrypt css code, and append it to our body
  document.body.innerHTML += `<style> ${xorstr(style, pass)}</style>`;
};
*/
