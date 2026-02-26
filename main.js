/* ════════════════════════════════
   WEDDING — main.js
════════════════════════════════ */

// 1. Countdown
(function () {
    var target = new Date("2026-03-29T09:00:00+07:00").getTime();
    var els = {
        d: document.getElementById("days"),
        h: document.getElementById("hours"),
        m: document.getElementById("minutes"),
        s: document.getElementById("seconds")
    };

    function pad(n) { return String(n).padStart(2, "0"); }

    function tick() {
        var now = Date.now();
        var diff = target - now;
        if (diff <= 0) {
            Object.values(els).forEach(function (e) { e.textContent = "00"; });
            return;
        }
        els.d.textContent = pad(Math.floor(diff / 86400000));
        els.h.textContent = pad(Math.floor(diff % 86400000 / 3600000));
        els.m.textContent = pad(Math.floor(diff % 3600000 / 60000));
        els.s.textContent = pad(Math.floor(diff % 60000 / 1000));
    }
    tick();
    setInterval(tick, 1000);
})();

// 2. RSVP handler
function handleRSVP(e) {
    e.preventDefault();
    var name = document.getElementById("rsvp-name").value.trim();
    var attend = document.querySelector('input[name="attend"]:checked').value;
    var msg = attend === "yes"
        ? "Cảm ơn " + name + "! Chúng mình rất vui khi bạn sẽ đến! 🎉"
        : "Cảm ơn " + name + "! Rất tiếc khi bạn không thể đến, chúng mình sẽ nhớ bạn! 💕";
    alert(msg);
}
