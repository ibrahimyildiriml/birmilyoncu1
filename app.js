
// Canlı Ziyaretçi Sayacı
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/visitor")
        .then(response => response.json())
        .then(data => {
            document.getElementById("counter").textContent = data.currentVisitor;
        })
        .catch(error => {
            console.error("Sayaç yüklenemedi:", error);
        });
});
    