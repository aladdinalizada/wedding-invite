const venueName = "Gold Palace";
document.getElementById("venue-name").textContent = venueName;
document.getElementById("venue-display").textContent = venueName;

document.getElementById("rsvp-btn").href =
  "mailto:rsvp@example.com?subject=RSVP - Sevinc & Fərid Toyu";

document.getElementById("add-calendar").addEventListener("click", function (e) {
  e.preventDefault();
  const start = new Date(2025, 11, 28, 18, 0);
  function f(d) {
    return (
      d
        .toISOString()
        .replace(/[-:\.]/g, "")
        .slice(0, 15) + "Z"
    );
  }
  const ics =
    "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:" +
    f(start) +
    "\nSUMMARY:Sevinc & Fərid Toyu\nLOCATION:" +
    venueName +
    "\nEND:VEVENT\nEND:VCALENDAR";
  const blob = new Blob([ics], { type: "text/calendar" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "toy.ics";
  a.click();
});
