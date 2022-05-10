 // PROGRESSBAR EXAMPLE
    function changeValue(e) {
      let elm = document.getElementById("bar1");
      elm.setAttribute("value", e);
      elm.style.width = e + "%";
      return false;
    }
    // TABS
    document.querySelectorAll("button").forEach((btn) => {
      if (typeof btn.getAttribute("data-ctab") != "undefined")
        btn.addEventListener("click", function(e) {
          let elm = document.getElementById(e.target.getAttribute("data-ctab"));
          elm.style.display = elm.style.display == "none" ? "block" : "none";
          /*
           @INFORMATION
           I'm working on a way to temporarily change the inner HTML of our button. 
           When the button to hide the tab content is pressed again, we restore it 
           to its original innerHTML.
       
           const newspan = document.createElement("span");
           const spanid = document.getElementById("preinfo");
           newspan.setAttribute("id", "preinfo");
           newspan.setAttribute("style", "color:transparent;");
           if (elm.contains(spanid)) elm.removeChild(spanid);
           elm.appendChild(newspan);
           newspan.innerHTML = e.target.innerHTML;     
           */
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
